import { useState, useEffect } from "react";
import { Video, dummyVideos } from "../utils/videoData";
import Link from "next/link";

interface SearchSuggestionsProps {
  query: string;
  onSelect: (video: Video) => void;
  onClose: () => void;
}

export default function SearchSuggestions({ query, onSelect, onClose }: SearchSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<Video[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return; // Skip on server
    if (query.trim()) {
      const filtered = dummyVideos.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.channel.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Show up to 5 suggestions
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  if (!query.trim() || typeof window === "undefined") return null;

  return (
    <div
      className="absolute z-10 w-1/2 bg-gray-800 border border-gray-700 rounded-b-lg shadow-lg max-h-60 overflow-y-auto"
      onBlur={onClose}
    >
      {suggestions.length > 0 ? (
        suggestions.map((video) => (
          <Link
            key={video.id}
            href={`/video/${video.id}`}
            className="block p-2 hover:bg-gray-700 text-white flex items-center gap-2"
            onClick={() => {
              onSelect(video);
              onClose();
            }}
          >
            <img src={video.thumbnail} alt={video.title} className="w-12 h-8 rounded object-cover" />
            <div>
              <p className="text-sm font-semibold">{video.title}</p>
              <p className="text-xs text-gray-400">{video.channel}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="p-2 text-gray-400 text-sm">No results found</p>
      )}
    </div>
  );
}