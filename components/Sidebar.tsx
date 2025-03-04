import { useRouter } from "next/router";
import { FaHome, FaFire, FaUser, FaUpload } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-60 bg-gray-800 text-white h-screen p-4 fixed top-0 left-0">
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 cursor-pointer py-2 hover:bg-gray-700 p-2" onClick={() => router.push("/")}>
          <FaHome /> <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer py-2 hover:bg-gray-700 p-2" onClick={() => router.push("/trending")}>
          <FaFire /> <span>Trending</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer py-2 hover:bg-gray-700 p-2" onClick={() => router.push("/subscriptions")}>
          <FaUser /> <span>Subscriptions</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer py-2 hover:bg-gray-700 p-2" onClick={() => router.push("/upload")}>
          <FaUpload /> <span>Upload</span>
        </li>
      </ul>
    </aside>
  );
}
