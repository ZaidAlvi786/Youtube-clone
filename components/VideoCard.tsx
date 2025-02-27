import Link from "next/link";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  timestamp: string;
  description: string;
}

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="mb-6">
      <Link href={`/video/${video.id}`}>
        <img src={video.thumbnail} alt={video.title} className="w-full rounded-lg" />
      </Link>
      <div className="mt-2">
        <Link href={`/video/${video.id}`} className="text-white hover:text-red-500 text-lg font-semibold">
          {video.title}
        </Link>
        <p className="text-gray-400 text-sm">{video.channel}</p>
        <p className="text-gray-400 text-sm">{video.views} views • {video.timestamp}</p>
      </div>
    </div>
  );
}