import { signIn, signOut, useSession } from "next-auth/react";
import { Input } from "@mantine/core";
import { useRouter } from "next/router";
import { FaYoutube, FaSearch } from "react-icons/fa";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push("/")}>
        <FaYoutube className="text-red-500 text-3xl" />
        <h1 className="text-xl font-bold">YouTube Clone</h1>
      </div>

      {/* Search Bar */}
      <div className="flex bg-gray-700 p-2 rounded-lg w-1/3">
        <Input
          placeholder="Search..."
          className="w-full bg-transparent text-white outline-none"
        />
        <FaSearch className="text-gray-400 ml-2 cursor-pointer" />
      </div>

      {/* Profile */}
      <div>
        {session ? (
          <div className="flex items-center space-x-3">
            <img
              src={session.user?.image || "/default-avatar.png"}
              className="w-10 h-10 rounded-full"
              alt="User Avatar"
            />
            <button className="bg-red-500 px-3 py-1 rounded" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        ) : (
          <button className="bg-blue-500 px-3 py-1 rounded" onClick={() => signIn("google")}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
