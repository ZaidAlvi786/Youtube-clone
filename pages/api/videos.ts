import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import connectDB from "../../config/db";
import User from "../../models/User";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  
  try {
    const { userId } = req.query;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    let videoResults: any[] = [];

    // ✅ 1. Fetch Videos from Subscribed Channels
    if (user.subscriptions.length > 0) {
      const videoPromises = user.subscriptions.map(async (channelId: string) => {
        const response = await axios.get(`${BASE_URL}/search`, {
          params: {
            key: API_KEY,
            channelId: channelId,
            part: "snippet",
            maxResults: 5,
            order: "date",
          },
        });
        return response.data.items;
      });

      const videos = await Promise.all(videoPromises);
      videoResults = videos.flat();
    }

    // ✅ 2. Fetch Videos Based on Watch History
    if (videoResults.length === 0 && user.watchHistory.length > 0) {
      const randomWatchedVideo = user.watchHistory[Math.floor(Math.random() * user.watchHistory.length)];
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          key: API_KEY,
          q: randomWatchedVideo.title, // Search similar videos
          part: "snippet",
          maxResults: 5,
        },
      });
      videoResults = response.data.items;
    }

    // ✅ 3. Show Random Videos If Nothing Else is Available
    if (videoResults.length === 0) {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          key: API_KEY,
          q: "popular videos",
          part: "snippet",
          maxResults: 5,
        },
      });
      videoResults = response.data.items;
    }

    res.status(200).json(videoResults);
  } catch (error) {
    console.error("YouTube API Error:", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}
