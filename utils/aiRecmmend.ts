export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
    views: number;
    timestamp: string;
  }
  
  export const getRecommendations = (userHistory: string[]): Video[] => {
    const keywords = userHistory.flatMap((query) => query.split(" "));
    const mockVideos: Video[] = [
      { id: "1", title: "React Tutorial", thumbnail: "/placeholder.jpg", channel: "Tech Guru", views: 123456, timestamp: "2 days ago" },
      { id: "2", title: "Next.js Guide", thumbnail: "/placeholder.jpg", channel: "Web Dev", views: 789012, timestamp: "1 week ago" },
      { id: "3", title: "Tailwind CSS Tips", thumbnail: "/placeholder.jpg", channel: "Design Pro", views: 456789, timestamp: "3 days ago" },
    ];
    return mockVideos.filter((video) =>
      keywords.some((kw) => video.title.toLowerCase().includes(kw.toLowerCase()))
    );
  };