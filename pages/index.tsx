import { useEffect, useState } from "react";
import { Container, Text } from "@mantine/core";
import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Video } from "../types/video";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos") // ✅ Correct backend URL
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <Container>
          <Text size="lg" mt="xl" className="font-bold text-gray-800">
            Trending Videos
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
