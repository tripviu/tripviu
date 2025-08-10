import Stars from "./Stars";
import Badge from "./Badge";
import HeartButton from "./HeartButton";

type Hotel = {
  id:string; name:string; city:string; country:string;
  stars?:number; priceFrom?:number; halalScore?:number;
  images?:string[];
  amenities?: { halalFood?:boolean; noAlcohol?:boolean; prayerRoom?:boolean; mosqueNearby?:boolean; };
};

const FALLBACK_IMG = "/hotels/dubai.svg";

export default function HotelCard({ hotel }:{ hotel: Hotel }){
  const h = hotel;
  const img = (h.images && h.images[0]) || FALLBACK_IMG;
  const halal = h.halalScore ?? 0;

  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <a href={`/hotels/${h.id}`} aria-label={h.name} className="block">
          <div
            className="w-full bg-gray-200"
            style={{
              aspectRatio: "4 / 3",
              backgroundImage: `url("${img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </a>
        <div className="absolute top-2 right-2">
          <HeartButton hotelId={h.id} />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <a href={`/hotels/${h.id}`} className="block text-lg font-semibold text-gray-900 hover:underline">
              {h.name}
            </a>
            <div className="text-sm text-gray-600">{h.city}, {h.country}</div>
          </div>
          <div className="flex items-center gap-3">
            <Stars value={h.stars ?? 0} />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Badge>Halal score: <strong className="ml-1">{halal}/5</strong></Badge>
          {h.amenities?.halalFood && <Badge>Halal food</Badge>}
          {h.amenities?.noAlcohol && <Badge>No alcohol</Badge>}
          {h.amenities?.prayerRoom && <Badge>Prayer room</Badge>}
          {h.amenities?.mosqueNearby && <Badge>Mosque nearby</Badge>}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            From <span className="text-lg font-semibold text-gray-900">€{h.priceFrom ?? "-"}</span> / night
          </div>
          <div className="flex items-center gap-2">
            <a href={`/hotels/${h.id}`} className="inline-flex items-center gap-2 border rounded-md px-3 py-2 hover:bg-gray-50">
              Details
            </a>
            <a href={`/hotels/${h.id}`} className="inline-flex items-center gap-2 bg-black text-white rounded-md px-4 py-2 hover:opacity-90">
              Check availability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
