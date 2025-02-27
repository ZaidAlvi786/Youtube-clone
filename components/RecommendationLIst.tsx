import Link from "next/link";
import VideoCard from "./VideoCard";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  timestamp: string;
}

interface RecommendationListProps {
  videos: Video[];
}

export default function RecommendationList({ videos }: RecommendationListProps) {
  return (
    <div className="mt-6">
      <h2 className="text-xl text-white mb-4 font-semibold">Recommended for You</h2>
      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="flex items-start gap-4">
            <Link href={`/video/${video.id}`}>
              <img src={video.thumbnail} alt={video.title} className="w-24 h-16 rounded-lg object-cover" />
            </Link>
            <div>
              <Link href={`/video/${video.id}`} className="text-white hover:text-red-500 text-sm font-semibold">
                {video.title}
              </Link>
              <p className="text-gray-400 text-xs">{video.channel}</p>
              <p className="text-gray-400 text-xs">{video.views} views • {video.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}