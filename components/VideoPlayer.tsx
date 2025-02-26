import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className="w-full">
      <ReactPlayer url={url} controls width="100%" />
    </div>
  );
}