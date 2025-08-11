export default function HeroSection() {
  return (
    <section className="relative isolate">
      {/* Achtergrond */}
      <div
        className="h-[56vh] md:h-[68vh] w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop)' }}
        aria-label="Halal-friendly destinations"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Tripviu</h1>
          <p className="mt-3 text-lg md:text-xl opacity-90">Halal-friendly stays. For everyone.</p>

          {/* Zelfde filters als /search: city, minStars, maxPrice, halalScore */}
          <form action="/search" className="mt-6 grid grid-cols-1 md:grid-cols-6 gap-3 text-left">
            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-white/80 mb-1">📍 Destination</label>
              <input
                name="city"
                placeholder="Where do you want to wake up? (e.g. Dubai)"
                className="w-full rounded-md border px-4 py-3 text-black"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-white/80 mb-1">⭐ Min stars</label>
              <input
                name="minStars"
                type="number" min="0" max="5"
                placeholder="0"
                className="w-full rounded-md border px-3 py-3 text-black"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-white/80 mb-1">💶 Max price</label>
              <input
                name="maxPrice"
                type="number" min="0" step="10"
                placeholder="0"
                className="w-full rounded-md border px-3 py-3 text-black"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-medium text-white/80 mb-1">🌙 Halal score</label>
              <select
                name="halalScore"
                className="w-full rounded-md border px-3 py-3 text-black"
                defaultValue="0"
              >
                <option value="0">Any</option>
                <option value="1">≥ 1/5</option>
                <option value="2">≥ 2/5</option>
                <option value="3">≥ 3/5</option>
                <option value="4">≥ 4/5</option>
                <option value="5">= 5/5</option>
              </select>
            </div>

            <button className="md:col-span-6 bg-white text-black rounded-md px-4 py-3 font-medium hover:opacity-90">
              Search
            </button>
          </form>

          {/* Kleine USP's onder de balk (mobiel zichtbaar) */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm opacity-90 md:hidden">
            <span>✅ 100% halal-friendly</span>
            <span>🌍 Global reach</span>
            <span>⚡ No hidden fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}
