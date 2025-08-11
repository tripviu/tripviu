"use client";
import { useState } from "react";
import SignInModal from "@/components/SignInModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo-tripviu.svg" alt="Tripviu" className="h-7 w-auto" />
          <span className="sr-only">Tripviu</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-gray-700">
          <li><a href="/" className="hover:text-black">Home</a></li>
          <li><a href="/search?city=Dubai" className="hover:text-black">Explore</a></li>
          <li><a href="/wishlist" className="hover:text-black">Wishlist</a></li>
          <li><a href="/about" className="hover:text-black">About</a></li>
          <li><a href="/contact" className="hover:text-black">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={()=>setOpen(true)} className="hidden md:inline-block text-gray-700 hover:text-black">
            Sign in
          </button>
          <a href="/search" className="inline-block bg-black text-white rounded-md px-4 py-2 hover:opacity-90">
            Find stays
          </a>
        </div>
      </nav>

      <SignInModal open={open} onClose={()=>setOpen(false)} />
    </header>
  );
}
