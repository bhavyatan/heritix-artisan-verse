
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/features/home/hero-section";
import FeaturedArtisans from "@/features/home/featured-artisans";
import ImpactSection from "@/features/home/impact-section";

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "Heritix - Connecting Artisans & Art Lovers";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedArtisans />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
