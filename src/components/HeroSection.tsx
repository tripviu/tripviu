export default function HeroSection() {
  return (
    <section className="relative isolate">
      {/* Background image */}
      <div
        className="h-[56vh] md:h-[68vh] w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop)' }}
        aria-label="Halal-friendly destinations"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Tripviu
          </h1>
          <p className="mt-3 text-lg md:text-xl opacity-90">
            Halal-friendly stays. For everyone.
          </p>

          {/* Zoekbalk (redirect naar /search) */}
          <form action="/search" className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-3">
              <label className="sr-only" htmlFor="hero-city">Destination</label>
              <input
                id="hero-city"
                name="city"
                placeholder="Where do you want to wake up? (e.g. Dubai)"
                className="w-full rounded-md border px-4 py-3 text-black"
              />
            </div>
            <button className="md:col-span-2 bg-white text-black rounded-md px-4 py-3 font-medium hover:opacity-90">
              Search
            </button>
          </form>

          {/* Mini USP inline onder zoekbalk (mobiel zichtbaar) */}
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
