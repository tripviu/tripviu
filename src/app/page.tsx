import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />
        <section className="w-full">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Find halal-friendly stays, anywhere.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Hotels and resorts that respect your values — for everyone.
            </p>

            <form action="/search" className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <input
                name="city"
                placeholder="City (e.g. Dubai)"
                className="border rounded-lg px-4 py-3 w-full sm:w-80 bg-white shadow-sm"
              />
              <button className="rounded-lg px-5 py-3 bg-black text-white hover:opacity-90 shadow-sm">
                Search
              </button>
            </form>

            <div className="mt-10 text-sm text-gray-600">
              Popular:&nbsp;
              <a className="underline hover:no-underline" href="/search?city=Dubai">Dubai</a> ·
              <a className="underline hover:no-underline" href="/search?city=Istanbul">Istanbul</a> ·
              <a className="underline hover:no-underline" href="/search?city=Kuala%20Lumpur">Kuala Lumpur</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
