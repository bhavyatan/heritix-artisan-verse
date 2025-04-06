
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImpactStat from "@/components/impact-stat";
import { ImpactAreaChart } from "@/features/impact/impact-chart";
import { Users, TreePine, Globe, CoinsHand, Award, ShoppingCart } from "lucide-react";

const Impact = () => {
  useEffect(() => {
    document.title = "Our Impact | Heritix";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-artisan-950 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Global Impact</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Tracking our progress in artisan empowerment, cultural preservation, and environmental sustainability.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <ImpactStat 
              value="1,200+"
              label="Artisans Supported"
              color="bg-heritix-50"
              icon={<Users className="h-6 w-6 text-heritix-700" />}
            />
            <ImpactStat 
              value="$2.8M"
              label="Direct Artisan Income" 
              color="bg-heritix-50"
              icon={<CoinsHand className="h-6 w-6 text-heritix-700" />}
            />
            <ImpactStat 
              value="42"
              label="Countries Reached"
              color="bg-heritix-50"
              icon={<Globe className="h-6 w-6 text-heritix-700" />}
            />
            <ImpactStat 
              value="15,000+"
              label="Trees Planted"
              color="bg-heritix-50"
              icon={<TreePine className="h-6 w-6 text-heritix-700" />}
            />
            <ImpactStat 
              value="85"
              label="Craft Traditions"
              color="bg-heritix-50"
              icon={<Award className="h-6 w-6 text-heritix-700" />}
            />
            <ImpactStat 
              value="28,500+"
              label="Direct Purchases" 
              color="bg-heritix-50"
              icon={<ShoppingCart className="h-6 w-6 text-heritix-700" />}
            />
          </div>
        </section>

        {/* Income and Environmental Impact Chart */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8">Artisan Income & Environmental Impact</h2>
            <p className="max-w-3xl mb-6 text-muted-foreground">
              As direct artisan income increases, we're also growing our environmental impact through our sustainable 
              practices program, which includes tree planting initiatives and eco-friendly packaging.
            </p>
            <ImpactAreaChart />
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-heritix-600"></div>
                <span className="text-sm">Artisan Income ($)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-artisan-700"></div>
                <span className="text-sm">Trees Planted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516992654410-9309d4587e94?q=80&w=1470" 
                alt="Sustainable packaging"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6">Sustainability Initiatives</h2>
              <div className="space-y-6">
                <div className="bg-heritix-50 rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-lg mb-2">Eco-Friendly Packaging</h3>
                  <p className="text-muted-foreground">
                    100% of our packaging is made from recycled materials and is fully biodegradable.
                  </p>
                </div>
                <div className="bg-heritix-50 rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-lg mb-2">Tree Planting Program</h3>
                  <p className="text-muted-foreground">
                    For every purchase, we plant trees in regions where our artisans live and work, helping to restore local ecosystems.
                  </p>
                </div>
                <div className="bg-heritix-50 rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-lg mb-2">Carbon-Neutral Shipping</h3>
                  <p className="text-muted-foreground">
                    We offset 100% of the carbon footprint from shipping through verified carbon offset projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
