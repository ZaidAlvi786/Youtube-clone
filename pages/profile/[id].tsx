import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Video } from "../../types/video";
import { User } from "@/types/user";
import VideoList from "@/components/VideoList";
import ProfileHeader from "@/components/ProfileHeader";

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
      <VideoList  />
    </div>
  );
}
