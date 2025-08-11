function StarRow({ n=5 }:{ n?:number }) {
  return (
    <div className="flex gap-1 text-amber-500" aria-label={`${n} out of 5 stars`}>
      {Array.from({length:n}).map((_,i)=><span key={i}>★</span>)}
      {Array.from({length:5-n}).map((_,i)=><span key={`e${i}`} className="text-gray-300">★</span>)}
    </div>
  );
}

type T = { name:string; text:string; city:string; rating:number; avatar?:string };

const ITEMS:T[] = [
  { name:"Amina K.", city:"Istanbul", rating:5, text:"Eindelijk een site waar halal-voorzieningen duidelijk zijn. Boeken was snel en transparant." },
  { name:"Youssef R.", city:"Dubai", rating:4, text:"Top selectie en fijne filters. Prijzen helder en geen verrassingen." },
  { name:"Zahra M.", city:"Makkah", rating:5, text:"Halal score hielp enorm bij onze keuze. Heel prettig en veilig gevoel." },
];

export default function Testimonials(){
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-semibold">What travelers say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((t,i)=>(
            <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src={t.avatar || `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(t.name)}`} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-600">{t.city}</div>
                </div>
              </div>
              <div className="mt-3"><StarRow n={t.rating} /></div>
              <p className="mt-3 text-sm text-gray-700">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
