import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
console.log(session,'sessionsessionsessionsession');

  return session ? (
    <div className="flex items-center space-x-4">
      <img
        src={session.user?.image || "/default-avatar.png"} // ✅ Display User Image
        className="w-10 h-10 rounded-full"
        alt="User Avatar"
      />
      <p>{session.user?.name}</p>
      <button className="bg-red-500 px-3 py-1 text-white rounded" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  ) : (
    <button className="bg-blue-500 px-3 py-1 text-white rounded" onClick={() => signIn("google")}>
      Sign in with Google
    </button>
  );
}
