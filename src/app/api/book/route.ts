import { NextRequest, NextResponse } from "next/server";
import { HOTELS } from "@/lib/data";
import { createOrder } from "@/lib/orders";

export async function POST(req: NextRequest) {
  try {
    const { hotelId } = await req.json();
    if (!hotelId) {
      return NextResponse.json({ error: "hotelId is required" }, { status: 400 });
    }

    const hotel = HOTELS.find(h => h.id === hotelId);
    if (!hotel) {
      return NextResponse.json({ error: "Hotel not found" }, { status: 404 });
    }

    const order = createOrder(hotelId);

    return NextResponse.json({
      ok: true,
      bookingId: order.id,
      hotel: {
        id: hotel.id,
        name: hotel.name,
        city: hotel.city,
        country: hotel.country,
        priceFrom: hotel.priceFrom,
      },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Booking error" }, { status: 500 });
  }
}
