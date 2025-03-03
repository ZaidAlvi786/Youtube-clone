import { User } from "../types/user";

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <img src={user.image} alt={user.name} className="rounded-full w-24 h-24" />
      <h1 className="text-xl font-semibold">{user.name}</h1>
      <p className="text-gray-400">{user.email}</p>
    </div>
  );
}
