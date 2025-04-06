
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtisanCard from "@/components/artisan-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Sample data for featured artisans
const artisansData = [
  {
    id: "1",
    name: "Rajesh Kumar",
    craft: "Handloom Weaving",
    location: "Varanasi, India",
    image: "https://images.unsplash.com/photo-1461938337379-4b537cd2db74?q=80&w=1824",
  },
  {
    id: "2",
    name: "Amara Okafor",
    craft: "Traditional Pottery",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1551798507-629020c81463?q=80&w=1568",
  },
  {
    id: "3",
    name: "Mei Lin",
    craft: "Silk Embroidery",
    location: "Suzhou, China",
    image: "https://images.unsplash.com/photo-1525974160448-038dacadcc71?q=80&w=1626",
  },
  {
    id: "4",
    name: "Carlos Mendez",
    craft: "Wood Carving",
    location: "Oaxaca, Mexico",
    image: "https://images.unsplash.com/photo-1534237710119-e57a5e0a0901?q=80&w=1364",
  },
];

const FeaturedArtisans = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <h2 className="text-3xl font-serif font-bold">
            Meet Our Artisans
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Discover skilled craftspeople preserving centuries-old traditions while creating sustainable livelihoods.
          </p>
        </div>
        <Button asChild variant="ghost" className="mt-4 md:mt-0">
          <Link to="/artisans" className="flex items-center gap-2">
            View All Artisans <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {artisansData.map((artisan) => (
          <ArtisanCard key={artisan.id} {...artisan} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtisans;
