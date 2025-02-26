import Link from "next/link";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/video/${video.id}`}>
      <div className="p-2 cursor-pointer">
        <img src={video.thumbnail} alt={video.title} className="w-full rounded" />
        <h3 className="mt-2 text-white">{video.title}</h3>
      </div>
    </Link>
  );
}