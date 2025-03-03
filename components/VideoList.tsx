import { Video } from "../types/video";
import VideoCard from "./VideoCard";

interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
