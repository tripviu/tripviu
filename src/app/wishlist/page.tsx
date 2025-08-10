import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ClientWishlist from "@/components/ClientWishlist";

export const dynamic = "force-dynamic";

export default function WishlistPage(){
  return (
    <>
      <Navbar />
      <main className="py-8">
        <Container>
          <h1 className="text-2xl font-semibold mb-2">Je favorieten</h1>
          <p className="text-sm text-gray-600 mb-6">Bewaar hotels die je interessant vindt en vergelijk ze later.</p>
          <ClientWishlist />
        </Container>
      </main>
      <Footer />
    </>
  );
}
