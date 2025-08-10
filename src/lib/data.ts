export type Evidence = { label: string; url: string };
export type Amenities = {
  halalFood?: boolean;
  noAlcohol?: boolean;
  prayerRoom?: boolean;
  mosqueNearby?: boolean;
  genderedPool?: boolean;
  privateBeachZones?: boolean;
};

export type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  stars?: number;
  priceFrom?: number;
  halalScore: number;
  partnerUrl: string;
  images?: string[];
  amenities?: Amenities;
  evidence?: Evidence[];
};

// JSON statisch importeren (build-time) — perfect voor offline ontwikkeling.
import hotelsJson from "@/data/hotels.json";
export const HOTELS: Hotel[] = hotelsJson as Hotel[];

// Helpers voor filters
export function filterHotels(list: Hotel[], opts: {
  city?: string;
  minStars?: number;
  maxPrice?: number;
  minHalal?: number;
  halalFood?: boolean;
  noAlcohol?: boolean;
  prayerRoom?: boolean;
  mosqueNearby?: boolean;
}){
  const city = (opts.city || "").toLowerCase().trim();
  return list.filter(h=>{
    if (city && !h.city.toLowerCase().includes(city)) return false;
    if (opts.minStars && (h.stars || 0) < opts.minStars) return false;
    if (opts.maxPrice && (h.priceFrom || 0) > opts.maxPrice) return false;
    if (opts.minHalal && h.halalScore < opts.minHalal) return false;
    if (opts.halalFood && !h.amenities?.halalFood) return false;
    if (opts.noAlcohol && !h.amenities?.noAlcohol) return false;
    if (opts.prayerRoom && !h.amenities?.prayerRoom) return false;
    if (opts.mosqueNearby && !h.amenities?.mosqueNearby) return false;
    return true;
  });
}
