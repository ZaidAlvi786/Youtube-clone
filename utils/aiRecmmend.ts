export interface Video {
    id: string;
    title: string;
    thumbnail: string;
  }
  
  export const getRecommendations = (userHistory: string[]): Video[] => {
    const keywords = userHistory.flatMap((query) => query.split(" "));
    const mockVideos: Video[] = [
      { id: "1", title: "React Tutorial", thumbnail: "/placeholder.jpg" },
      { id: "2", title: "Next.js Guide", thumbnail: "/placeholder.jpg" },
      { id: "3", title: "Tailwind CSS Tips", thumbnail: "/placeholder.jpg" },
    ];
    return mockVideos.filter((video) =>
      keywords.some((kw) => video.title.toLowerCase().includes(kw.toLowerCase()))
    );
  };