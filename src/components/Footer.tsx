export default function Footer(){
  return (
    <footer className="mt-20 border-t bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <div className="text-xl font-semibold">Tripviu</div>
          <p className="mt-2">Halal-friendly stays. For everyone.</p>
        </div>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="/search?city=Dubai" className="hover:underline">Dubai</a></li>
        </ul>
        <div className="text-gray-500">
          © {new Date().getFullYear()} Tripviu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
