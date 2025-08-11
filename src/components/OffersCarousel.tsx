"use client";
import { useRef } from "react";

type Offer = {
  id: string;
  city: string;
  hotel: string;
  img: string;
  was: number;
  now: number;
  nights: number;
};

const OFFERS: Offer[] = [
  { id:"dxb-aur", city:"Dubai", hotel:"Aurora Beach Resort", img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop", was:279, now:189, nights:3 },
  { id:"ist-baz", city:"Istanbul", hotel:"Bazaar Boutique", img:"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1600&auto=format&fit=crop", was:199, now:129, nights:2 },
  { id:"mle-sun", city:"Malé", hotel:"Sunset Water Villas", img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop", was:699, now:499, nights:3 },
  { id:"ruh-dune", city:"Riyadh", hotel:"Dune Oasis", img:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop", was:259, now:179, nights:2 },
  { id:"kul-park", city:"Kuala Lumpur", hotel:"Park Sky Hotel", img:"https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1600&auto=format&fit=crop", was:179, now:119, nights:2 },
];

function Card({ o }: { o: Offer }) {
  const discount = Math.round((1 - o.now / o.was) * 100);
  return (
    <a
      href={`/search?city=${encodeURIComponent(o.city)}`}
      className="snap-start min-w-[260px] md:min-w-[300px] rounded-xl overflow-hidden border bg-white hover:shadow-md transition-shadow"
    >
      <div className="h-40 bg-gray-100 relative">
        <img src={o.img} alt={o.hotel} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
          Save {discount}%
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-600">{o.city}</div>
        <div className="font-medium">{o.hotel}</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-gray-400 line-through">€{o.was}</span>
          <span className="text-lg font-semibold">€{o.now}</span>
          <span className="text-sm text-gray-600">/ {o.nights} nights</span>
        </div>
      </div>
    </a>
  );
}

export default function OffersCarousel() {
  const scroller = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dx: number) => scroller.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Limited-time offers</h2>
          <div className="hidden md:flex gap-2">
            <button onClick={()=>scrollBy(-320)} className="border rounded-md px-3 py-1">‹</button>
            <button onClick={()=>scrollBy(320)} className="border rounded-md px-3 py-1">›</button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pb-4 pb-2"
        >
          {OFFERS.map((o) => <Card key={o.id} o={o} />)}
        </div>
      </div>
    </section>
  );
}
