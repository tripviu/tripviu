import hotels from "@/data/hotels.json";

export type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  stars?: number;
  priceFrom?: number;
  halalScore?: number;
  features?: Record<string, boolean>;
  partnerUrl?: string;
  images?: string[];
};

export const HOTELS: Hotel[] = (hotels as any) as Hotel[];

export type Filters = {
  city?: string;
  minStars?: number;
  maxPrice?: number;
  halalScore?: number;
};

export type SortKey = "relevance" | "price-asc" | "price-desc" | "stars-desc" | "halal-desc";

export function filterHotels(list: Hotel[], f: Filters, sort?: SortKey): Hotel[] {
  let out = list.filter(h => {
    if (f.city && h.city.toLowerCase() !== f.city.toLowerCase()) return false;
    if (typeof f.minStars === "number" && (h.stars ?? 0) < f.minStars) return false;
    if (typeof f.maxPrice === "number" && f.maxPrice > 0 && (h.priceFrom ?? 1e9) > f.maxPrice) return false;
    if (typeof f.halalScore === "number" && f.halalScore > 0 && (h.halalScore ?? 0) < f.halalScore) return false;
    return true;
  });

  switch (sort) {
    case "price-asc":
      out = out.sort((a,b) => (a.priceFrom ?? 1e9) - (b.priceFrom ?? 1e9));
      break;
    case "price-desc":
      out = out.sort((a,b) => (b.priceFrom ?? 0) - (a.priceFrom ?? 0));
      break;
    case "stars-desc":
      out = out.sort((a,b) => (b.stars ?? 0) - (a.stars ?? 0));
      break;
    case "halal-desc":
      out = out.sort((a,b) => (b.halalScore ?? 0) - (a.halalScore ?? 0));
      break;
    default:
      break;
  }

  return out;
}
