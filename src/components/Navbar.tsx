export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold text-gray-800">Tripviu</div>
          <div className="text-sm text-gray-500">Halal-friendly stays. For everyone.</div>
        </div>
        <ul className="flex items-center text-lg" style={{ gap: "40px" }}>
          <li><a href="/" className="inline-block px-2 py-2 text-gray-700 hover:text-black no-underline">Home</a></li>
          <li><a href="/about" className="inline-block px-2 py-2 text-gray-700 hover:text-black no-underline">About</a></li>
          <li><a href="/contact" className="inline-block px-2 py-2 text-gray-700 hover:text-black no-underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
