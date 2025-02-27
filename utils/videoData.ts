export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
    views: number;
    timestamp: string;
  }
  
  const generateDummyVideo = (id: number): Video => ({
    id: id.toString(),
    title: `Video Tutorial ${id} - ${["React", "Next.js", "Tailwind CSS", "JavaScript", "Frontend"][Math.floor(Math.random() * 5)]} Tips`,
    thumbnail: "/placeholder.jpg",
    channel: ["Tech Guru", "Web Dev", "Design Pro", "Code Master", "Frontend Ninja"][Math.floor(Math.random() * 5)],
    views: Math.floor(Math.random() * 1000000) + 100000, // Random views between 100,000 and 1,100,000
    timestamp: `${Math.floor(Math.random() * 7) + 1} ${["hour", "day", "week", "month"][Math.floor(Math.random() * 4)]}s ago`,
  });
  
  export const dummyVideos: Video[] = Array.from({ length: 100 }, (_, i) => generateDummyVideo(i + 1));
  
  export const dummyRecommendations: Video[] = [
    {
      id: "101",
      title: "Advanced React Patterns",
      thumbnail: "/placeholder.jpg",
      channel: "Tech Guru",
      views: 345678,
      timestamp: "4 days ago",
    },
    {
      id: "102",
      title: "Next.js API Routes Explained",
      thumbnail: "/placeholder.jpg",
      channel: "Web Dev",
      views: 567890,
      timestamp: "2 weeks ago",
    },
  ];