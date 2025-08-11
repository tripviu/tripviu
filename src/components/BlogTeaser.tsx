type Post = { title:string; excerpt:string; img:string; href:string };

const POSTS:Post[] = [
  { title:"Halal-friendly Dubai in 48 hours", excerpt:"Van strand tot souk: zo haal je alles uit je weekend.", img:"https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1400&auto=format&fit=crop", href:"/search?city=Dubai" },
  { title:"Istanbul for families", excerpt:"Privacy-vriendelijke hotels en top halal food in de buurt.", img:"https://images.unsplash.com/photo-1533944890708-7b3d2d2c2a48?q=80&w=1400&auto=format&fit=crop", href:"/search?city=Istanbul" },
  { title:"Makkah planning checklist", excerpt:"De essentials voor een zorgeloze pelgrimsreis.", img:"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1400&auto=format&fit=crop", href:"/search?city=Makkah" },
];

function Card({ p }:{ p:Post }){
  return (
    <a href={p.href} className="group rounded-xl overflow-hidden border bg-white hover:shadow-md transition-shadow">
      <div className="h-40 md:h-48 bg-gray-100">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
      </div>
      <div className="p-4">
        <div className="font-semibold">{p.title}</div>
        <div className="text-sm text-gray-600 mt-1">{p.excerpt}</div>
        <div className="mt-3 text-sm text-emerald-700">Read more →</div>
      </div>
    </a>
  );
}

export default function BlogTeaser(){
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-semibold">Guides & inspiration</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((p)=> <Card key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
