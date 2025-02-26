import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import VideoPlayer from "../../components/VideoPlayer";

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Loading...</div>;

  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <Layout>
      <VideoPlayer url={videoUrl} />
      <h1 className="mt-4 text-2xl text-white">Video ID: {id}</h1>
    </Layout>
  );
}