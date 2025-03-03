import { useEffect, useState } from "react";
import { Button, Container, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import VideoCard from "../components/VideoCard";
import { Video } from "../types/video";

export default function Home() {
  const { data: session } = useSession();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <Container>
      <Text align="center" size="xl" weight={700} mt="xl">
        Welcome to YouTube Clone
      </Text>
      {session ? (
        <Button color="red" onClick={() => signOut()} mt="xl">
          Sign Out
        </Button>
      ) : (
        <Button color="blue" onClick={() => signIn("google")} mt="xl">
          Sign In with Google
        </Button>
      )}

      <Text size="lg" mt="xl">Trending Videos:</Text>
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </Container>
  );
}
