import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import HotelCard from "@/components/HotelCard";
import { HOTELS, filterHotels, type SortKey } from "@/lib/data";

type SP = { [key: string]: string | string[] | undefined };

function toInt(val: string | string[] | undefined, def = 0) {
  if (!val) return def;
  const s = Array.isArray(val) ? val[0] : val;
  const n = parseInt(s, 10);
  return Number.isFinite(n) ? n : def;
}

export default async function SearchOriginal({ searchParams }: { searchParams: SP }) {
  const city = (Array.isArray(searchParams.city) ? searchParams.city[0] : searchParams.city) || "";
  const minStars = toInt(searchParams.minStars, 0);
  const maxPrice = toInt(searchParams.maxPrice, 0);
  const halalScore = toInt(searchParams.halalScore, 0);
  const sort = ((Array.isArray(searchParams.sort) ? searchParams.sort[0] : searchParams.sort) || "relevance") as SortKey;

  const items = filterHotels(HOTELS, { city, minStars, maxPrice, halalScore }, sort);

  return (
    <>
      <Navbar />
      <main className="py-6">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold">Zoekresultaten {city ? `voor “${city}”` : ""}</h1>

            <form className="mt-4 grid md:grid-cols-5 gap-3" action="/search">
              <input name="city" defaultValue={city} placeholder="City" className="border rounded px-3 py-2" />
              <input name="minStars" type="number" min="0" max="5" defaultValue={minStars} placeholder="Min stars" className="border rounded px-3 py-2" />
              <input name="maxPrice" type="number" min="0" defaultValue={maxPrice} placeholder="Max price" className="border rounded px-3 py-2" />
              <input name="halalScore" type="number" min="0" max="5" defaultValue={halalScore} placeholder="Min halal score" className="border rounded px-3 py-2" />
              <select name="sort" defaultValue={sort} className="border rounded px-3 py-2">
                <option value="relevance">Sort: Relevance</option>
                <option value="price-asc">Sort: Price ↑</option>
                <option value="price-desc">Sort: Price ↓</option>
                <option value="stars-desc">Sort: Stars ↓</option>
                <option value="halal-desc">Sort: Halal ↓</option>
              </select>
              <button className="bg-black text-white rounded px-4 py-2 md:col-span-5">Apply</button>
            </form>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {items.map(h => <HotelCard key={h.id} hotel={h} />)}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
