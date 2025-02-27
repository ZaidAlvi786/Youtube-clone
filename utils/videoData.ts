export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  timestamp: string;
  description: string;
}

const generateDummyVideo = (id: number): Video => ({
  id: id.toString(),
  title: `Video Tutorial ${id} - ${["React", "Next.js", "Tailwind CSS", "JavaScript", "Frontend"][(id - 1) % 5]} Tips`,
  thumbnail: "/placeholder.png",
  channel: ["Tech Guru", "Web Dev", "Design Pro", "Code Master", "Frontend Ninja"][(id - 1) % 5],
  views: 100000 + (id * 1000), // Deterministic views
  timestamp: `${(id % 7) + 1} ${["hour", "day", "week", "month"][(id - 1) % 4]}s ago`,
  description: `Learn ${["React", "Next.js", "Tailwind CSS", "JavaScript", "Frontend"][(id - 1) % 5]} with this in-depth tutorial. Perfect for beginners and advanced developers alike.`,
});

export const dummyVideos: Video[] = Array.from({ length: 100 }, (_, i) => generateDummyVideo(i + 1));

export const dummyRecommendations: Video[] = [
  {
    id: "101",
    title: "Advanced React Patterns",
    thumbnail: "/placeholder.png",
    channel: "Tech Guru",
    views: 345678,
    timestamp: "4 days ago",
    description: "Explore advanced React patterns for scalable applications.",
  },
  {
    id: "102",
    title: "Next.js API Routes Explained",
    thumbnail: "/placeholder.png",
    channel: "Web Dev",
    views: 567890,
    timestamp: "2 weeks ago",
    description: "Understand Next.js API routes with practical examples.",
  },
];