import { FaHome, FaFire, FaPlayCircle, FaBook } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <ul className="space-y-4">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <FaHome className="text-xl" />
          <span>Home</span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <FaFire className="text-xl" />
          <span>Trending</span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <FaPlayCircle className="text-xl" />
          <span>Subscriptions</span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <FaBook className="text-xl" />
          <span>Library</span>
        </li>
      </ul>
    </div>
  );
}