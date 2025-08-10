import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Cancel(){
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-semibold">Booking cancelled</h1>
            <p className="mt-2 text-gray-600">No worries. You can try again or continue browsing.</p>
            <a href="/" className="inline-block mt-6 bg-black text-white rounded-md px-4 py-2">Back to home</a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
