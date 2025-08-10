"use client";

import { startLocalBooking } from "@/lib/checkout";

export default function ClientHotelDetail({ hotelId }: { hotelId: string }) {
  return (
    <button
      onClick={() => startLocalBooking(hotelId)}
      className="inline-block mt-6 bg-black text-white rounded-md px-4 py-2 hover:opacity-90"
    >
      Boek nu
    </button>
  );
}
