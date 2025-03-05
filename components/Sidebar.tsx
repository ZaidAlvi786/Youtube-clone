import { useState } from "react";
import { useRouter } from "next/router";
import { FaBars, FaHome, FaFire, FaUser, FaUpload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  return (
    <motion.aside
      initial={{ width: 80 }}
      animate={{ width: isOpen ? 220 : 80 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="fixed top-0 left-0 h-screen bg-gray-900 text-white shadow-lg flex flex-col"
    >
      {/* Toggle Button (Inside Sidebar) */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className="mt-4 space-y-2">
        <li
          className="flex items-center space-x-4 p-3 hover:bg-gray-700 cursor-pointer transition"
          onClick={() => router.push("/")}
        >
          <FaHome className="text-xl" />
          {isOpen && <span className="text-sm font-medium">Home</span>}
        </li>
        <li
          className="flex items-center space-x-4 p-3 hover:bg-gray-700 cursor-pointer transition"
          onClick={() => router.push("/trending")}
        >
          <FaFire className="text-xl text-red-500" />
          {isOpen && <span className="text-sm font-medium">Trending</span>}
        </li>
        <li
          className="flex items-center space-x-4 p-3 hover:bg-gray-700 cursor-pointer transition"
          onClick={() => router.push("/subscriptions")}
        >
          <FaUser className="text-xl" />
          {isOpen && <span className="text-sm font-medium">Subscriptions</span>}
        </li>
        <li
          className="flex items-center space-x-4 p-3 hover:bg-gray-700 cursor-pointer transition"
          onClick={() => router.push("/upload")}
        >
          <FaUpload className="text-xl" />
          {isOpen && <span className="text-sm font-medium">Upload</span>}
        </li>
      </ul>
    </motion.aside>
  );
}
