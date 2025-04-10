
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/features/home/hero-section";
import FeaturedArtisans from "@/features/home/featured-artisans";
import FeaturedProducts from "@/features/home/featured-products";
import StorySection from "@/features/home/story-section";
import JourneySection from "@/features/home/journey-section";
import ImpactSection from "@/features/home/impact-section";

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "Artisan Marketplace - Connecting Artisans & Art Lovers";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <JourneySection />
        <FeaturedProducts />
        <FeaturedArtisans />
        <StorySection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
