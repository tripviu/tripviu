type Props = {
  hotel: {
    id: string;
    name: string;
    city: string;
    country: string;
    stars?: number;
    priceFrom?: number;
    halalScore: number;
    partnerUrl: string;
  };
};

export default function HotelCard({ hotel: h }: Props) {
  return (
    <a href={`/hotels/${h.id}`} className="block bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-44 bg-gradient-to-br from-emerald-100 to-yellow-50" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">{h.name}</div>
          <div className="text-sm text-yellow-600">{h.stars ? "★".repeat(h.stars) : "—"}</div>
        </div>
        <div className="text-sm text-gray-600">{h.city}, {h.country}</div>
        <div className="mt-2 text-sm">From <span className="font-semibold">€{h.priceFrom ?? "-"}</span></div>
        <div className="mt-3 inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs px-2 py-1 rounded">
          Halal score: <strong>{h.halalScore}/5</strong>
        </div>
      </div>
    </a>
  );
}
