import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import VideoPlayer from "../../components/VideoPlayer";
import { Video, dummyVideos } from "../../utils/videoData";

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div className="text-white">Loading...</div>;

  const video = dummyVideos.find((v) => v.id === id);

  if (!video) return <div className="text-white">Video not found</div>;

  return (
    <Layout>
      <div className="p-4">
        <VideoPlayer url={`https://www.youtube.com/watch?v=${video.id}`} />
        <h1 className="mt-4 text-xl text-white font-semibold">{video.title}</h1>
        <p className="text-gray-400 text-sm">{video.channel} • {video.views} views • {video.timestamp}</p>
      </div>
    </Layout>
  );
}