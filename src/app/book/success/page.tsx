import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Success({ searchParams }: { searchParams: { bookingId?: string; hotel?: string }}) {
  const { bookingId, hotel } = searchParams;
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-semibold">Thank you!</h1>
            <p className="mt-2 text-gray-700">
              Your booking request {bookingId ? <>(<span className="font-mono">{bookingId}</span>)</> : null} has been received.
            </p>
            {hotel && <p className="mt-1 text-gray-600">Hotel: <strong>{hotel}</strong></p>}
            <a href="/" className="inline-block mt-6 bg-black text-white rounded-md px-4 py-2">Back to home</a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
