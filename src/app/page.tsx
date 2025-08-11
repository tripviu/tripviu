import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPBar from "@/components/USPBar";
import PopularDestinations from "@/components/PopularDestinations";
import OffersCarousel from "@/components/OffersCarousel";
import WhyTripviu from "@/components/WhyTripviu";
import Testimonials from "@/components/Testimonials";
import BlogTeaser from "@/components/BlogTeaser";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <USPBar />
        <PopularDestinations />
        <OffersCarousel />
        <WhyTripviu />
        <Testimonials />
        <BlogTeaser />
        <SiteFooter />
      </main>
    </>
  );
}
