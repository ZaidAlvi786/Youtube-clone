import { useState, useEffect, useCallback, useRef } from "react";
import Layout from "../components/Layout";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import { Video, dummyVideos, dummyRecommendations } from "../utils/videoData";
import RecommendationList from "@/components/RecommendationLIst";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>(dummyVideos.slice(0, 10)); // Show 10 videos initially
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recommended, setRecommended] = useState<Video[]>(dummyRecommendations);
  const [allFilteredVideos, setAllFilteredVideos] = useState<Video[]>(dummyVideos);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastVideoRef = useRef<HTMLDivElement>(null);

  const loadMoreVideos = useCallback(() => {
    if (isLoading || typeof window === "undefined") return;

    setIsLoading(true);
    setTimeout(() => {
      const currentLength = videos.length;
      const newVideos = allFilteredVideos.slice(currentLength, currentLength + 10); // Load 10 more filtered videos
      setVideos((prev) => [...prev, ...newVideos]);
      setIsLoading(false);
    }, 1000); // 1-second delay to simulate loading
  }, [videos.length, isLoading, allFilteredVideos]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && videos.length < allFilteredVideos.length) {
          loadMoreVideos();
        }
      },
      { threshold: 0.1 }
    );

    if (lastVideoRef.current) {
      observer.current.observe(lastVideoRef.current);
    }

    return () => observer.current?.disconnect();
  }, [loadMoreVideos, videos.length, allFilteredVideos.length]);

  const fetchVideos = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filteredVideos = dummyVideos.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.channel.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase())
      );
      setAllFilteredVideos(filteredVideos);
      setVideos(filteredVideos.slice(0, 10)); // Reset to first 10 filtered videos
    } else {
      setAllFilteredVideos(dummyVideos);
      setVideos(dummyVideos.slice(0, 10)); // Reset to first 10 dummy videos
    }
  };

  return (
    <Layout onSearch={fetchVideos}>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              ref={index === videos.length - 1 ? lastVideoRef : null}
            >
              <VideoCard video={video} />
            </div>
          ))}
          {isLoading && typeof window !== "undefined" && <Loader />}
        </div>
        <RecommendationList videos={recommended} />
      </div>
    </Layout>
  );
}