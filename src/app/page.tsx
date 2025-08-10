import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import GuestsPicker from "@/components/GuestsPicker";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-center">Tripviu</h1>
            <p className="mt-2 text-gray-700 text-center">Halal-friendly stays. For everyone.</p>

            <form action="/search" className="mt-8 grid gap-3 md:grid-cols-6 bg-white p-4 rounded-xl border shadow-sm">
              {/* Destination */}
              <div className="md:col-span-2">
                <label className="block text-[11px] text-gray-500 mb-1">Where do you want to wake up?</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden>📍</span>
                  <input
                    name="city"
                    placeholder="City or destination (e.g., Dubai)"
                    className="w-full border rounded pl-9 pr-3 py-2"
                    required
                  />
                </div>
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-[11px] text-gray-500 mb-1">Check-in</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden>📅</span>
                  <input name="checkIn" type="date" className="w-full border rounded pl-9 pr-3 py-2 bg-white" />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-[11px] text-gray-500 mb-1">Check-out</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden>📅</span>
                  <input name="checkOut" type="date" className="w-full border rounded pl-9 pr-3 py-2 bg-white" />
                </div>
              </div>

              {/* Guests & rooms */}
              <div className="md:col-span-2">
                <GuestsPicker label="Guests & rooms" defaultAdults={2} defaultChildren={0} defaultRooms={1} />
              </div>

              {/* Submit */}
              <div className="md:col-span-6">
                <button className="w-full bg-black text-white rounded px-4 py-3 hover:opacity-90">
                  Search
                </button>
              </div>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
