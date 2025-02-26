import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import RecommendationList from "@/components/RecommendationLIst";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [recommended, setRecommended] = useState<Video[]>([]);

  const fetchVideos = async (query: string = "") => {
    // Mock data (replace with YouTube API in production)
    const mockVideos: Video[] = [
      { id: "1", title: "React Tutorial", thumbnail: "/placeholder.jpg" },
      { id: "2", title: "Next.js Guide", thumbnail: "/placeholder.jpg" },
      { id: "3", title: "Tailwind CSS Tips", thumbnail: "/placeholder.jpg" },
    ];
    setVideos(query ? mockVideos.filter(v => v.title.toLowerCase().includes(query.toLowerCase())) : mockVideos);
  };

  const fetchRecommendations = async () => {
    const response = await axios.get("/api/recommend");
    setRecommended(response.data);
  };

  useEffect(() => {
    fetchVideos();
    fetchRecommendations();
  }, []);

  return (
    <Layout onSearch={fetchVideos}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <RecommendationList videos={recommended} />
    </Layout>
  );
}