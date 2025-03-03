import { signIn, signOut, useSession } from "next-auth/react";
import { Input } from "@mantine/core";
import { useRouter } from "next/router";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        YouTube Clone
      </h1>
      <Input placeholder="Search..." className="w-1/3" />
      <div>
        {session ? (
          <>
            <span className="mr-2">{session.user?.name}</span>
            <button className="bg-red-500 px-3 py-1 rounded" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="bg-blue-500 px-3 py-1 rounded" onClick={() => signIn("google")}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
