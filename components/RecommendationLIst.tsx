import VideoCard from "./VideoCard";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface RecommendationListProps {
  videos: Video[];
}

export default function RecommendationList({ videos }: RecommendationListProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl text-white mb-2">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}