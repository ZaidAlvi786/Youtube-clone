import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import RecommendationList from "@/components/RecommendationLIst";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  timestamp: string;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [recommended, setRecommended] = useState<Video[]>([]);

  const fetchVideos = async (query: string = "") => {
    const mockVideos: Video[] = [
      { id: "1", title: "React Tutorial", thumbnail: "/placeholder.jpg", channel: "Tech Guru", views: 123456, timestamp: "2 days ago" },
      { id: "2", title: "Next.js Guide", thumbnail: "/placeholder.jpg", channel: "Web Dev", views: 789012, timestamp: "1 week ago" },
      { id: "3", title: "Tailwind CSS Tips", thumbnail: "/placeholder.jpg", channel: "Design Pro", views: 456789, timestamp: "3 days ago" },
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
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <RecommendationList videos={recommended} />
      </div>
    </Layout>
  );
}