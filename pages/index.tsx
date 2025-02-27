import { useState, useEffect, useCallback, useRef } from "react";
import Layout from "../components/Layout";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import { Video, dummyVideos, dummyRecommendations } from "../utils/videoData";
import RecommendationList from "@/components/RecommendationLIst";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>(dummyVideos.slice(0, 12)); // Show 12 videos initially
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [searchQuery, setSearchQuery] = useState("");
  const [allFilteredVideos, setAllFilteredVideos] = useState<Video[]>(dummyVideos);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastVideoRef = useRef<HTMLDivElement>(null);

  const loadMoreVideos = useCallback(() => {
    if (isLoading || typeof window === "undefined" || videos.length >= allFilteredVideos.length) return;

    setIsLoading(true);
    setTimeout(() => {
      const currentLength = videos.length;
      const newVideos = allFilteredVideos.slice(currentLength, currentLength + 12); // Load 12 more filtered videos
      setVideos((prev) => [...prev, ...newVideos]); // Add 12 more videos to VideoCard
      setIsLoading(false); // Hide loader after adding videos
    }, 500); // 0.5-second delay to simulate loading
  }, [videos.length, isLoading, allFilteredVideos.length]);

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
      setVideos(filteredVideos.slice(0, 12)); // Reset to first 12 filtered videos
    } else {
      setAllFilteredVideos(dummyVideos);
      setVideos(dummyVideos.slice(0, 12)); // Reset to first 12 dummy videos
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
          {isLoading && videos.length < allFilteredVideos.length && <Loader />}
        </div>
        <RecommendationList videos={dummyRecommendations} />
      </div>
    </Layout>
  );
}