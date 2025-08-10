import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import Container from "@/components/Container";
import { HOTELS } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Search({ searchParams }:{
  searchParams:{ city?:string; minStars?:string; maxPrice?:string; minHalal?:string };
}){
  const city = (searchParams.city || "").toLowerCase();
  const minStars = parseInt(searchParams.minStars || "0", 10);
  const maxPrice = parseInt(searchParams.maxPrice || "0", 10);
  const minHalal = parseInt(searchParams.minHalal || "0", 10);

  const hotels = HOTELS.filter(h=>{
    if (city && !h.city.toLowerCase().includes(city)) return false;
    if (minStars && (h.stars || 0) < minStars) return false;
    if (maxPrice && (h.priceFrom || 0) > maxPrice) return false;
    if (minHalal && h.halalScore < minHalal) return false;
    return true;
  });

  return (
    <>
      <Navbar />
      <main>
        <Container>
          <h1 className="text-2xl font-semibold mb-4 mt-8">Results {city ? `for “${searchParams.city}”` : ""}</h1>

          <form action="/search" className="mb-6 grid md:grid-cols-5 gap-3">
            <input name="city" placeholder="City" defaultValue={searchParams.city || ""} className="border rounded px-3 py-2 bg-white" />
            <select name="minStars" defaultValue={searchParams.minStars || ""} className="border rounded px-3 py-2 bg-white">
              <option value="">Min stars</option>
              <option value="3">3★</option>
              <option value="4">4★</option>
              <option value="5">5★</option>
            </select>
            <input name="maxPrice" type="number" placeholder="Max €" defaultValue={searchParams.maxPrice || ""} className="border rounded px-3 py-2 bg-white" />
            <select name="minHalal" defaultValue={searchParams.minHalal || ""} className="border rounded px-3 py-2 bg-white">
              <option value="">Min halal</option>
              <option value="3">3/5</option>
              <option value="4">4/5</option>
              <option value="5">5/5</option>
            </select>
            <button className="bg-black text-white rounded px-4 py-2">Apply</button>
          </form>

          {hotels.length === 0 && <p className="text-gray-600">No results. Try other filters.</p>}

          <div className="grid md:grid-cols-3 gap-6">
            {hotels.map(h => <HotelCard key={h.id} hotel={h} />)}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
