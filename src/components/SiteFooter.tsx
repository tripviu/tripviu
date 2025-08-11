export default function SiteFooter(){
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-semibold">Tripviu</div>
          <p className="mt-2 text-sm text-gray-400">Halal-friendly stays. For everyone.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Explore</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/search?city=Dubai" className="hover:text-white">Dubai</a></li>
            <li><a href="/search?city=Istanbul" className="hover:text-white">Istanbul</a></li>
            <li><a href="/search?city=Makkah" className="hover:text-white">Makkah</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Company</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/terms" className="hover:text-white">Terms</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Payments</div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center justify-center h-8 px-3 rounded bg-white text-gray-800 text-xs">Visa</span>
            <span className="inline-flex items-center justify-center h-8 px-3 rounded bg-white text-gray-800 text-xs">Mastercard</span>
            <span className="inline-flex items-center justify-center h-8 px-3 rounded bg-white text-gray-800 text-xs">Stripe</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Tripviu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
