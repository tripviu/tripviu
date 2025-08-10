import { NextResponse } from "next/server";

type HalalFeatures = {
  halalFood: boolean;
  noAlcohol: boolean;
  prayerRoom: boolean;
  mosqueNearby: boolean;
  genderedPool: boolean;
};

type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  stars?: number;
  priceFrom?: number;
  features: HalalFeatures;
  halalScore: number;
  partnerUrl: string;
};

function score(f: HalalFeatures) {
  const pts =
    (f.halalFood ? 2 : 0) +
    (f.noAlcohol ? 2 : 0) +
    (f.genderedPool ? 2 : 0) +
    (f.prayerRoom ? 1 : 0) +
    (f.mosqueNearby ? 1 : 0);
  return Math.max(1, Math.min(5, Math.round(pts / 2)));
}

const MOCK: Omit<Hotel, "halalScore">[] = [
  {
    id: "dxb-001",
    name: "Aurora Beach Resort",
    city: "Dubai",
    country: "UAE",
    stars: 5,
    priceFrom: 189,
    features: { halalFood: true, noAlcohol: true, prayerRoom: true, mosqueNearby: true, genderedPool: false },
    partnerUrl: "https://example.com/deeplink?marker=TRIPVIU&hotel=dxb-001",
  },
  {
    id: "ist-002",
    name: "Golden Minaret Hotel",
    city: "Istanbul",
    country: "Türkiye",
    stars: 4,
    priceFrom: 120,
    features: { halalFood: true, noAlcohol: false, prayerRoom: true, mosqueNearby: true, genderedPool: false },
    partnerUrl: "https://example.com/deeplink?marker=TRIPVIU&hotel=ist-002",
  },
  {
    id: "dxb-003",
    name: "Marina Crescent Suites",
    city: "Dubai",
    country: "UAE",
    stars: 5,
    priceFrom: 230,
    features: { halalFood: true, noAlcohol: false, prayerRoom: true, mosqueNearby: true, genderedPool: true },
    partnerUrl: "https://example.com/deeplink?marker=TRIPVIU&hotel=dxb-003",
  },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const city = (url.searchParams.get("city") || "").toLowerCase();
  const minStars = parseInt(url.searchParams.get("minStars") || "0", 10);
  const maxPrice = parseInt(url.searchParams.get("maxPrice") || "0", 10);
  const minHalal = parseInt(url.searchParams.get("minHalal") || "0", 10);

  const withScore = MOCK.map(h => ({ ...h, halalScore: score(h.features) }));

  const filtered = withScore.filter(h => {
    if (city && !h.city.toLowerCase().includes(city)) return false;
    if (minStars && (h.stars || 0) < minStars) return false;
    if (maxPrice && (h.priceFrom || 0) > maxPrice) return false;
    if (minHalal && h.halalScore < minHalal) return false;
    return true;
  });

  return NextResponse.json({ city, hotels: filtered });
}
