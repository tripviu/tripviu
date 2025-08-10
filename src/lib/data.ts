import hotels from "@/data/hotels.json";

export const HOTELS = hotels as {
  id: string;
  name: string;
  city: string;
  country: string;
  stars?: number;
  priceFrom?: number;
  halalScore?: number;
  images?: string[];
  amenities?: {
    halalFood?: boolean;
    noAlcohol?: boolean;
    prayerRoom?: boolean;
    mosqueNearby?: boolean;
  };
}[];

export function filterHotels(
  list: typeof HOTELS,
  opts: {
    city?: string | null;
    minStars?: number;
    maxPrice?: number;
    halalMin?: number;
  }
) {
  const city = (opts.city || "").trim().toLowerCase();
  const minStars = Number.isFinite(opts.minStars) ? (opts.minStars as number) : 0;
  const maxPrice = Number.isFinite(opts.maxPrice) ? (opts.maxPrice as number) : 0;
  const halalMin = Number.isFinite(opts.halalMin) ? (opts.halalMin as number) : 0;

  return list.filter((h) => {
    if (city && !(h.city || "").toLowerCase().includes(city)) return false;
    if (minStars && (h.stars || 0) < minStars) return false;
    if (maxPrice && (h.priceFrom || 0) > maxPrice) return false;
    if (halalMin && (h.halalScore || 0) < halalMin) return false;
    return true;
  });
}
