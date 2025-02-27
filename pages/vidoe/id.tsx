import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import VideoPlayer from "../../components/VideoPlayer";

interface Video {
  id: string;
  title: string;
  channel: string;
  views: number;
  timestamp: string;
}

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div className="text-white">Loading...</div>;

  const video: Video = {
    id: id as string,
    title: `Video: ${id}`,
    channel: "YouTube Clone Channel",
    views: 123456,
    timestamp: "2 hours ago",
  };

  return (
    <Layout>
      <div className="p-4">
        <VideoPlayer url={`https://www.youtube.com/watch?v=${id}`} />
        <h1 className="mt-4 text-xl text-white font-semibold">{video.title}</h1>
        <p className="text-gray-400 text-sm">{video.channel} • {video.views} views • {video.timestamp}</p>
      </div>
    </Layout>
  );
}