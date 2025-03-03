import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import VideoList from "../../components/VideoList";
import { User } from "../../types/user";
import { Video } from "../../types/video";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));

      fetch(`/api/videos?userId=${id}`)
        .then((res) => res.json())
        .then((data) => setVideos(data));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <ProfileHeader user={user} />
      <h2 className="text-xl font-semibold mt-4">Uploaded Videos</h2>
      <VideoList videos={videos} />
    </div>
  );
}
