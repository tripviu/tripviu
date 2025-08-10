import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">Tripviu</Link>
          <ul className="flex gap-6">
            <li><Link className="text-gray-700 hover:text-black" href="/search?city=Dubai">Explore</Link></li>
            <li><Link className="text-gray-700 hover:text-black" href="/wishlist">Wishlist</Link></li>
            <li><Link className="text-gray-700 hover:text-black" href="/about">About</Link></li>
            <li><Link className="text-gray-700 hover:text-black" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
