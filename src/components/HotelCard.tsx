"use client";

import Stars from "./Stars";
import Badge from "./Badge";
import { startLocalBooking } from "@/lib/checkout";

type Props = {
  hotel: { id:string; name:string; city:string; country:string; stars?:number; priceFrom?:number; halalScore:number; partnerUrl:string; };
};

export default function HotelCard({ hotel: h }: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <a href={`/hotels/${h.id}`} className="block">
        <div className="h-44 bg-gradient-to-br from-emerald-100 to-yellow-50" />
      </a>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <a href={`/hotels/${h.id}`} className="text-lg font-semibold hover:underline">{h.name}</a>
          <Stars value={h.stars ?? 0} />
        </div>
        <div className="text-sm text-gray-600">{h.city}, {h.country}</div>
        <div className="mt-2 text-sm">From <span className="font-semibold">€{h.priceFrom ?? "-"}</span></div>
        <div className="mt-3 flex flex-wrap gap-2"><Badge>Halal score: <strong>{h.halalScore}/5</strong></Badge></div>
        <div className="mt-4 flex gap-3">
          <a href={`/hotels/${h.id}`} className="inline-block border rounded-md px-4 py-2 text-gray-800 hover:bg-gray-50">Details</a>
          <button onClick={() => startLocalBooking(h.id)} className="inline-block bg-black text-white rounded-md px-4 py-2 hover:opacity-90">Boek nu</button>
        </div>
      </div>
    </div>
  );
}
