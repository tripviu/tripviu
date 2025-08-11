export type SortKey = "relevance" | "price-asc" | "price-desc" | "stars-desc" | "halal-desc";
export function sortHotels<T extends { priceFrom?: number; stars?: number; halalScore?: number; name?: string; }>(list: T[], key: SortKey): T[] {
  const arr = [...list];
  switch (key) {
    case "price-asc": return arr.sort((a,b)=>(a.priceFrom??1e9)-(b.priceFrom??1e9));
    case "price-desc": return arr.sort((a,b)=>(b.priceFrom??0)-(a.priceFrom??0));
    case "stars-desc": return arr.sort((a,b)=>(b.stars??0)-(a.stars??0));
    case "halal-desc": return arr.sort((a,b)=>(b.halalScore??0)-(a.halalScore??0));
    default: return arr;
  }
}
