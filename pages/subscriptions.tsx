import { useEffect, useState } from "react";
import VideoList from "../components/VideoList";
import { Video } from "../types/video";

export default function SubscriptionsPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/subscriptions")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Your Subscriptions</h1>
      <VideoList videos={videos} />
    </div>
  );
}
