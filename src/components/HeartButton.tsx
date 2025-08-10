"use client";
import { useEffect, useState } from "react";
import { isSaved, toggleWishlist, onWishlistChange } from "@/lib/wishlist";

export default function HeartButton({ hotelId, size=18 }:{ hotelId:string; size?:number }){
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setSaved(isSaved(hotelId));
    const off = onWishlistChange(()=> setSaved(isSaved(hotelId)));
    return () => off();
  }, [hotelId]);

  return (
    <button
      type="button"
      aria-label={saved ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}
      onClick={() => toggleWishlist(hotelId)}
      className={`rounded-full border px-2 py-1 bg-white/90 hover:bg-white transition ${saved ? "border-red-400" : "border-gray-300"}`}
      title={saved ? "Opgeslagen" : "Opslaan"}
    >
      <span style={{fontSize:size, lineHeight:1}}>{saved ? "❤️" : "🤍"}</span>
    </button>
  );
}
