
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Voices of the Makers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the stories, traditions, and inspirations behind each masterpiece directly from the artisans who create them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516992654410-9309d4587e94?q=80&w=1470" 
                alt="Traditional Weaving"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="text-sm text-heritix-700 font-medium">Cultural Heritage</span>
              <h3 className="text-xl font-serif font-medium mt-2 mb-3">The Art of Traditional Silk Weaving in Varanasi</h3>
              <p className="text-muted-foreground line-clamp-3 mb-4">
                Explore the centuries-old technique of silk weaving that has been passed down through generations in the ancient city of Varanasi.
              </p>
              <Link to="/stories/silk-weaving" className="text-heritix-700 font-medium hover:text-heritix-800 flex items-center gap-1">
                Read Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599589167589-3b48e744428f?q=80&w=1974" 
                alt="Pottery Making"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="text-sm text-heritix-700 font-medium">Artisan Profile</span>
              <h3 className="text-xl font-serif font-medium mt-2 mb-3">Meet Maria: Third Generation Potter from Oaxaca</h3>
              <p className="text-muted-foreground line-clamp-3 mb-4">
                Maria Rodriguez shares how she preserves her family's unique pottery techniques while introducing contemporary designs to appeal to modern consumers.
              </p>
              <Link to="/stories/maria-rodriguez" className="text-heritix-700 font-medium hover:text-heritix-800 flex items-center gap-1">
                Read Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md group">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534685785945-60a1f979cab8?q=80&w=1935" 
                alt="Sustainable Materials"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="text-sm text-heritix-700 font-medium">Sustainable Crafts</span>
              <h3 className="text-xl font-serif font-medium mt-2 mb-3">Sustainable Materials: The Return to Natural Dyes</h3>
              <p className="text-muted-foreground line-clamp-3 mb-4">
                Learn how modern artisans are reviving the ancient practice of natural dyeing, creating vibrant colors from plants, minerals, and other organic sources.
              </p>
              <Link to="/stories/natural-dyes" className="text-heritix-700 font-medium hover:text-heritix-800 flex items-center gap-1">
                Read Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-heritix-600 hover:bg-heritix-700">
            <Link to="/stories">Explore All Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
