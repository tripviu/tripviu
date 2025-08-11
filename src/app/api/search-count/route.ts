import { NextResponse } from "next/server";
import { HOTELS, filterHotels } from "@/lib/data";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city") || "";
  const minStars = parseInt(searchParams.get("minStars") || "0", 10);
  const maxPrice = parseInt(searchParams.get("maxPrice") || "0", 10);
  const halalScore = parseInt(searchParams.get("halalScore") || "0", 10);
  const list = filterHotels(HOTELS, { city, minStars, maxPrice, halalScore });
  return NextResponse.json({ count: list.length });
}
