import { Video } from "../types/video";
import { useRouter } from "next/router";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden"
      onClick={() => router.push(`/video/${video.id}`)}
    >
      <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-bold text-sm">{video.title}</h3>
        <p className="text-gray-500 text-xs">{video.channelName}</p>
      </div>
    </div>
  );
}
