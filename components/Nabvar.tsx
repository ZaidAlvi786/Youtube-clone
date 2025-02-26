import Link from "next/link";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  return (
    <div className="flex items-center p-4 bg-gray-900 text-white">
      <Link href="/" className="text-2xl font-bold">YouTube Clone</Link>
      {onSearch && (
        <input
          type="text"
          placeholder="Search videos..."
          className="ml-4 p-2 rounded bg-gray-800 text-white w-1/3"
          onChange={(e) => onSearch(e.target.value)}
        />
      )}
    </div>
  );
}