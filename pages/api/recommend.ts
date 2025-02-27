import { getRecommendations } from "@/utils/aiRecmmend";
import { NextApiRequest, NextApiResponse } from "next";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  timestamp: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Video[]>) {
  const userHistory = ["React tutorial", "Next.js project"]; // Mock user history
  const recommendedVideos = getRecommendations(userHistory);
  res.status(200).json(recommendedVideos);
}