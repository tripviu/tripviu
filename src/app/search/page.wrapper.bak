import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import Container from "@/components/Container";
import GuestsPicker from "@/components/GuestsPicker";
import { HOTELS, filterHotels } from "@/lib/data";

export const dynamic = "force-dynamic";

type SP = {
  city?: string; checkIn?: string; checkOut?: string;
  adults?: string; children?: string; rooms?: string;
  minStars?: string; maxPrice?: string; minHalal?: string;
  halalFood?: string; noAlcohol?: string; prayerRoom?: string; mosqueNearby?: string;
  sort?: string; page?: string;
};

function nights(ci?: string, co?: string) {
  if (!ci || !co) return undefined;
  try { const a=new Date(ci), b=new Date(co); const d=Math.max(0,(b.getTime()-a.getTime())/(1000*60*60*24)); return Number.isFinite(d)?Math.round(d):undefined; }
  catch { return undefined; }
}
function buildHref(sp: SP, patch: Partial<SP> = {}) {
  const p = new URLSearchParams(); const all: SP = { ...sp, ...patch };
  for (const [k, v] of Object.entries(all)) if (v && v !== "") p.set(k, String(v));
  return `/search?${p.toString()}`;
}

export default async function Search({ searchParams }: { searchParams: SP }) {
  let list = filterHotels(HOTELS, {
    city: searchParams.city,
    minStars: parseInt(searchParams.minStars || "0", 10),
    maxPrice: parseInt(searchParams.maxPrice || "0", 10),
    minHalal: parseInt(searchParams.minHalal || "0", 10),
    halalFood: searchParams.halalFood === "on",
    noAlcohol: searchParams.noAlcohol === "on",
    prayerRoom: searchParams.prayerRoom === "on",
    mosqueNearby: searchParams.mosqueNearby === "on",
  });

  const sort = searchParams.sort || "";
  if (sort === "price_asc") list = [...list].sort((a,b)=>(a.priceFrom??1e12)-(b.priceFrom??1e12));
  else if (sort === "price_desc") list = [...list].sort((a,b)=>(b.priceFrom??-1)-(a.priceFrom??-1));
  else if (sort === "stars_desc") list = [...list].sort((a,b)=>(b.stars??0)-(a.stars??0));
  else if (sort === "halal_desc") list = [...list].sort((a,b)=>(b.halalScore??0)-(a.halalScore??0));

  const total = list.length, pageSize = 9;
  const currentPage = Math.max(1, parseInt(searchParams.page || "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(currentPage, totalPages);
  const start = (page - 1) * pageSize;
  const items = list.slice(start, start + pageSize);

  const stayNights = nights(searchParams.checkIn, searchParams.checkOut);
  const defaultAdults = parseInt(searchParams.adults || "2", 10) || 2;
  const defaultChildren = parseInt(searchParams.children || "0", 10) || 0;
  const defaultRooms = parseInt(searchParams.rooms || "1", 10) || 1;

  return (
    <>
      <Navbar />

      {/* STICKY BAR */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b">
        <Container>
          {/* Kop + sorteren */}
          <div className="py-3 flex items-end justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold">Results {searchParams.city ? `for “${searchParams.city}”` : ""}</h1>
              <p className="text-xs text-gray-600">
                {searchParams.checkIn && searchParams.checkOut
                  ? `Dates: ${searchParams.checkIn} → ${searchParams.checkOut} (${stayNights ?? "–"} nights)`
                  : "Add dates and guests to refine results."}{" "}
                {`· Guests: ${defaultAdults} adult(s), ${defaultChildren} child(ren) · ${defaultRooms} room(s) · ${total} result${total === 1 ? "" : "s"}`}
              </p>
            </div>

            <form action="/search" className="hidden md:flex items-center gap-2">
              {Object.entries(searchParams).map(([k, v]) => k === "sort" ? null : <input key={k} type="hidden" name={k} defaultValue={v} />)}
              <label className="text-sm text-gray-600">Sort by</label>
              <select name="sort" defaultValue={sort} className="border rounded px-3 py-2 bg-white">
                <option value="">Recommended</option>
                <option value="price_asc">Price ↑</option>
                <option value="price_desc">Price ↓</option>
                <option value="stars_desc">Stars ↓</option>
                <option value="halal_desc">Halal score ↓</option>
              </select>
              <button className="bg-black text-white rounded px-3 py-2">Apply</button>
            </form>
          </div>

          {/* Filters */}
          <form action="/search" className="mb-3 grid gap-3 md:grid-cols-8 bg-white p-4 rounded-xl border shadow-sm">
            <div className="md:col-span-2">
              <label className="block text-[11px] text-gray-500 mb-1">Where do you want to wake up?</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden>📍</span>
                <input name="city" defaultValue={searchParams.city || ""} className="w-full border rounded pl-9 pr-3 py-2 bg-white" placeholder="City or destination" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-gray-500 mb-1">Check-in</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden>📅</span>
                <input name="checkIn" type="date" defaultValue={searchParams.checkIn || ""} className="w-full border rounded pl-9 pr-3 py-2 bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-gray-500 mb-1">Check-out</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden>📅</span>
                <input name="checkOut" type="date" defaultValue={searchParams.checkOut || ""} className="w-full border rounded pl-9 pr-3 py-2 bg-white" />
              </div>
            </div>

            <div className="md:col-span-2">
              <GuestsPicker
                label="Guests & rooms"
                defaultAdults={defaultAdults}
                defaultChildren={defaultChildren}
                defaultRooms={defaultRooms}
                inputNames={{ adults: "adults", children: "children", rooms: "rooms" }}
              />
            </div>

            <select name="minStars" defaultValue={searchParams.minStars || ""} className="border rounded px-3 py-2 bg-white">
              <option value="">Min stars</option><option value="3">3★</option><option value="4">4★</option><option value="5">5★</option>
            </select>

            <input name="maxPrice" type="number" placeholder="Max €" defaultValue={searchParams.maxPrice || ""} className="border rounded px-3 py-2 bg-white" />

            <select name="minHalal" defaultValue={searchParams.minHalal || ""} className="border rounded px-3 py-2 bg-white">
              <option value="">Min halal</option><option value="3">3/5</option><option value="4">4/5</option><option value="5">5/5</option>
            </select>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm items-center">
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="halalFood" defaultChecked={searchParams.halalFood==="on"} />Halal food</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="noAlcohol" defaultChecked={searchParams.noAlcohol==="on"} />No alcohol</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="prayerRoom" defaultChecked={searchParams.prayerRoom==="on"} />Prayer room</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" name="mosqueNearby" defaultChecked={searchParams.mosqueNearby==="on"} />Mosque nearby</label>
            </div>

            <input type="hidden" name="sort" defaultValue={sort} />
            <input type="hidden" name="page" value="1" />
            <button className="md:col-span-8 bg-black text-white rounded px-4 py-2">Apply</button>
          </form>
        </Container>
      </div>

      {/* RESULTATEN */}
      <main className="py-6">
        <Container>
          {items.length === 0 && <p className="text-gray-600">No results. Try other filters.</p>}
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((h) => <HotelCard key={h.id} hotel={h} />)}
          </div>

          {/* Paginatie */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href={buildHref(searchParams, { page: String(Math.max(1, page - 1)) })} className={`px-3 py-2 rounded border ${page === 1 ? "pointer-events-none opacity-40" : "hover:bg-gray-50"}`}>← Prev</a>
              <span className="text-sm text-gray-600">Page {page} of {totalPages}</span>
              <a href={buildHref(searchParams, { page: String(Math.min(totalPages, page + 1)) })} className={`px-3 py-2 rounded border ${page === totalPages ? "pointer-events-none opacity-40" : "hover:bg-gray-50"}`}>Next →</a>
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}
