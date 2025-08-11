import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPBar from "@/components/USPBar";
import PopularDestinations from "@/components/PopularDestinations";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <USPBar />
        <PopularDestinations />
      </main>
    </>
  );
}
