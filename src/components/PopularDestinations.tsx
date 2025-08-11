type Card = { city:string; country:string; img:string };

const CARDS: Card[] = [
  { city:"Dubai", country:"UAE", img:"https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop" },
  { city:"Istanbul", country:"Türkiye", img:"https://images.unsplash.com/photo-1533944890708-7b3d2d2c2a48?q=80&w=1600&auto=format&fit=crop" },
  { city:"Makkah", country:"Saudi Arabia", img:"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1600&auto=format&fit=crop" },
  { city:"Kuala Lumpur", country:"Malaysia", img:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop" },
  { city:"Marrakesh", country:"Morocco", img:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop" },
  { city:"Doha", country:"Qatar", img:"https://images.unsplash.com/photo-1603297632259-51d848c3ccf2?q=80&w=1600&auto=format&fit=crop" },
];

function Tile({ c }: { c: Card }) {
  return (
    <a href={`/search?city=${encodeURIComponent(c.city)}`}
       className="group rounded-xl overflow-hidden border bg-white hover:shadow-md transition-shadow">
      <div className="h-44 md:h-56 bg-gray-100">
        <img src={c.img} alt={`${c.city}, ${c.country}`}
             className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
      </div>
      <div className="p-4">
        <div className="font-medium">{c.city}</div>
        <div className="text-sm text-gray-600">{c.country}</div>
      </div>
    </a>
  );
}

export default function PopularDestinations() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl md:text-2xl font-semibold">Popular right now</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CARDS.map((c) => <Tile key={c.city} c={c} />)}
        </div>
      </div>
    </section>
  );
}
