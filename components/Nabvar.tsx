import Link from "next/link";
import { FiSearch, FiUser } from "react-icons/fi";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 text-white border-b border-gray-700">
      <Link href="/" className="text-2xl font-bold flex items-center gap-2">
        <img src="/youtube-logo.png" alt="YouTube" className="h-6 w-auto" /> {/* Add YouTube logo to public/ */}
        YouTube Clone
      </Link>
      <div className="flex items-center gap-4 w-1/2">
        {onSearch && (
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => onSearch(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        )}
        <button className="p-2 hover:bg-gray-800 rounded">
          <FiUser className="text-xl" />
        </button>
      </div>
    </div>
  );
}