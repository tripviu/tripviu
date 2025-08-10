"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Stars from "@/components/Stars";
import Badge from "@/components/Badge";
import { HOTELS } from "@/lib/data";
import { notFound } from "next/navigation";
import { startLocalBooking } from "@/lib/checkout";

export default function HotelDetail({ params }:{ params:{ id:string } }){
  const h = HOTELS.find(x=>x.id===params.id);
  if (!h) return notFound();

  return (
    <>
      <Navbar />
      <main className="py-8">
        <Container>
          <div className="rounded-xl overflow-hidden border bg-white shadow-sm">
            <div className="h-64 bg-gradient-to-br from-emerald-100 to-yellow-50" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">{h.name}</h1>
                <Stars value={h.stars ?? 0} />
              </div>
              <p className="text-gray-600 mt-1">{h.city}, {h.country}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Halal score: <strong>{h.halalScore}/5</strong></Badge>
                <Badge>From: <strong>€{h.priceFrom ?? "-"}</strong></Badge>
              </div>
              <button onClick={() => startLocalBooking(h.id)} className="inline-block mt-6 bg-black text-white rounded-md px-4 py-2 hover:opacity-90">
                Boek nu
              </button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
