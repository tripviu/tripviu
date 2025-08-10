"use client";
import { useEffect, useState } from "react";
import { getWishlist, onWishlistChange } from "@/lib/wishlist";
import { HOTELS } from "@/lib/data";
import HotelCard from "@/components/HotelCard";

export default function ClientWishlist(){
  const [ids, setIds] = useState<string[]>([]);
  const refresh = () => setIds(getWishlist().map(x=>x.id));

  useEffect(() => {
    refresh();
    const off = onWishlistChange(refresh);
    return () => off();
  }, []);

  const items = ids
    .map(id => HOTELS.find(h => h.id === id))
    .filter(Boolean) as typeof HOTELS;

  if (items.length === 0) {
    return (
      <div className="border rounded-xl p-6">
        <p className="text-gray-700">Nog geen favorieten.</p>
        <a href="/search?city=Dubai" className="inline-block mt-3 bg-black text-white rounded px-4 py-2 hover:opacity-90">
          Ontdek hotels
        </a>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map(h => <HotelCard key={h.id} hotel={h} />)}
    </div>
  );
}
