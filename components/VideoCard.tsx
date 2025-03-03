import { Video } from "../types/video";
import { useRouter } from "next/router";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const router = useRouter();

  return (
    <div className="cursor-pointer p-2 border rounded-lg" onClick={() => router.push(`/video/${video.id}`)}>
      <img src={video.thumbnail} alt={video.title} className="w-full rounded" />
      <p className="font-semibold mt-2">{video.title}</p>
      <p className="text-gray-500 text-sm">{video.channelName}</p>
    </div>
  );
}
