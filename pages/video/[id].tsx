import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Text } from "@mantine/core";
import ReactPlayer from "react-player";
import CommentSection from "../../components/CommentSection";
import ChatBox from "../../components/ChatBox";
import { Video } from "../../types/video";

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/videos/${id}`)
        .then((res) => res.json())
        .then((data) => setVideo(data));
    }
  }, [id]);

  if (!video) return <Text>Loading...</Text>;

  return (
    <Container>
      <ReactPlayer url={video.url} controls width="100%" />
      <Text size="xl" weight={700}>{video.title}</Text>
      <CommentSection videoId={id as string} />
      <ChatBox videoId={id as string} />
    </Container>
  );
}
