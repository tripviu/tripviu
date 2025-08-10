import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Stars from "@/components/Stars";
import Badge from "@/components/Badge";
import { HOTELS } from "@/lib/data";

export default function DestinationPage({ params }: { params: { city: string } }) {
  const hotels = HOTELS.filter(h => h.city.toLowerCase() === decodeURIComponent(params.city).toLowerCase());

  return (
    <>
      <Navbar />
      <main className="py-8">
        <Container>
          <h1 className="text-2xl font-bold mb-4">Hotels in {decodeURIComponent(params.city)}</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map(h => (
              <div key={h.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <h2 className="text-lg font-semibold">{h.name}</h2>
                <p className="text-gray-600">{h.city}, {h.country}</p>
                <Stars value={h.stars ?? 0} />
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>Halal score: {h.halalScore}/5</Badge>
                  <Badge>From: €{h.priceFrom ?? "-"}</Badge>
                </div>
                <a href={`/hotels/${h.id}`} className="mt-4 inline-block text-blue-600 hover:underline">
                  Bekijk hotel
                </a>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
