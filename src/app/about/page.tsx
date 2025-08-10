import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata = {
  title: "About — Tripviu",
  description: "Halal-friendly stays. For everyone.",
};

export default function AboutPage(){
  return (
    <>
      <Navbar />
      <main className="py-12">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">About Tripviu</h1>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Tripviu helps travelers find hotels and resorts that respect Islamic values — in a way that’s welcoming for everyone.
            We focus on clarity (what’s halal-friendly and what isn’t), so you can book with confidence.
          </p>

          <section className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Our mission</h2>
              <p className="mt-2 text-gray-700">Make halal-friendly travel effortless, transparent, and inclusive.</p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h2 className="text-lg font-semibold">What we verify</h2>
              <ul className="mt-2 text-gray-700 list-disc list-inside space-y-1">
                <li>Halal food availability</li>
                <li>No alcohol in certain areas/rooms</li>
                <li>Prayer spaces & nearby mosques</li>
                <li>Privacy-friendly leisure options</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h2 className="text-lg font-semibold">For everyone</h2>
              <p className="mt-2 text-gray-700">
                You don’t need to be Muslim to enjoy respectful, value-conscious travel — everyone is welcome.
              </p>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
