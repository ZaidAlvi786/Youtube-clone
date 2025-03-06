import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function PersonalizedVideos() {
  const { data: session } = useSession();
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    if (!session?.user) return;

    axios
      .get(`/api/videos?userId=${session.user.id}`)
      .then((res) => setVideos(res.data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, [session]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Personalized Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="p-4 border rounded-lg">
            <iframe
              className="w-full h-52"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            ></iframe>
            <p className="mt-2 font-semibold">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
