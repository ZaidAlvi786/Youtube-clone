import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-60 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li className="cursor-pointer py-2 hover:bg-gray-700" onClick={() => router.push("/")}>
          Home
        </li>
        <li className="cursor-pointer py-2 hover:bg-gray-700" onClick={() => router.push("/subscriptions")}>
          Subscriptions
        </li>
        <li className="cursor-pointer py-2 hover:bg-gray-700" onClick={() => router.push("/library")}>
          Library
        </li>
        <li className="cursor-pointer py-2 hover:bg-gray-700" onClick={() => router.push("/upload")}>
          Upload Video
        </li>
      </ul>
    </aside>
  );
}
