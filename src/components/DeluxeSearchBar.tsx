"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeluxeSearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    if (!destination) return;
    router.push(`/search?city=${encodeURIComponent(destination)}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
      <input
        type="text"
        placeholder="Bestemming..."
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 col-span-2"
      />
      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <input
        type="number"
        min={1}
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        onClick={handleSearch}
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
      >
        Zoek hotels
      </button>
    </div>
  );
}
