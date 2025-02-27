import Link from "next/link";
import { FiSearch, FiUser } from "react-icons/fi";
import { useState, useEffect, useCallback } from "react";
import SearchSuggestions from "./SearchSuggestions";
import { Video } from "../utils/videoData";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Type the timeout ID
  let timeoutId: NodeJS.Timeout | undefined;

  const debounce = useCallback((func: (value: string) => void, wait: number) => {
    return (value: string) => {
      clearTimeout(timeoutId); // Clear previous timeout
      timeoutId = setTimeout(() => func(value), wait); // Store new timeout ID
    };
  }, []);

  useEffect(() => {
    const debouncedSearch = debounce((q: string) => {
      setDebouncedQuery(q);
      if (onSearch) onSearch(q);
    }, 300);

    debouncedSearch(query);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId); // Clear the stored timeout ID
  }, [query, onSearch, debounce]);

  const handleSelect = (video: Video) => {
    setQuery(video.title);
    setShowSuggestions(false);
    if (onSearch) onSearch(video.title);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 text-white border-b border-gray-700">
      <Link href="/" className="text-2xl font-bold flex items-center gap-2">
        <img src="/youtube-logo.png" alt="YouTube" className="h-6 w-auto" />
        YouTube Clone
      </Link>
      <div className="relative flex items-center gap-4 w-1/2">
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            placeholder="Search..."
            className="w-full p-2 pl-10 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {typeof window !== "undefined" && showSuggestions && (
            <SearchSuggestions
              query={query}
              onSelect={handleSelect}
              onClose={() => setShowSuggestions(false)}
            />
          )}
        </div>
        <button className="p-2 hover:bg-gray-800 rounded">
          <FiUser className="text-xl" />
        </button>
      </div>
    </div>
  );
}