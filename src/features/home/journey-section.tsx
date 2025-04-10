
import { ArrowRight } from "lucide-react";

const JourneySection = () => {
  return (
    <section className="py-20 bg-artisan-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">From Artisan to You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the direct connection between makers and buyers, eliminating middlemen and creating meaningful exchanges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
              <ArrowRight className="h-6 w-6 text-heritix-600" />
            </div>
            <div className="w-12 h-12 bg-heritix-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-heritix-700">1</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Creation</h3>
            <p className="text-muted-foreground">
              Artisans craft unique pieces using traditional techniques and sustainable materials in their local workshops.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
              <ArrowRight className="h-6 w-6 text-heritix-600" />
            </div>
            <div className="w-12 h-12 bg-heritix-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-heritix-700">2</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Listing</h3>
            <p className="text-muted-foreground">
              Artisans photograph and list their work directly on our platform, sharing the story behind each piece.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
              <ArrowRight className="h-6 w-6 text-heritix-600" />
            </div>
            <div className="w-12 h-12 bg-heritix-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-heritix-700">3</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Discovery</h3>
            <p className="text-muted-foreground">
              Shoppers like you discover authentic handmade items and connect with the artisans who created them.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-heritix-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-heritix-700">4</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Direct Support</h3>
            <p className="text-muted-foreground">
              Your purchase directly supports the artisan, their family, and helps preserve cultural traditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
