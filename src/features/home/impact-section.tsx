
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImpactStat from "@/components/impact-stat";
import { CraftDistributionPieChart } from "../impact/impact-chart";
import { Users, TreePine, Globe, Coins } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Our Global Impact
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Through direct connections between artisans and customers, we're creating sustainable livelihoods 
            and preserving traditional arts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ImpactStat 
            value="1,200+"
            label="Artisans Supported"
            icon={<Users className="h-6 w-6 text-heritix-700 dark:text-heritix-500" />}
          />
          <ImpactStat 
            value="$2.8M"
            label="Direct Artisan Income" 
            icon={<Coins className="h-6 w-6 text-heritix-700 dark:text-heritix-500" />}
          />
          <ImpactStat 
            value="42"
            label="Countries Reached"
            icon={<Globe className="h-6 w-6 text-heritix-700 dark:text-heritix-500" />}
          />
          <ImpactStat 
            value="15,000+"
            label="Trees Planted"
            icon={<TreePine className="h-6 w-6 text-heritix-700 dark:text-heritix-500" />}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
              Craft Preservation Distribution
            </h3>
            <p className="text-muted-foreground mb-6">
              Our platform is helping to preserve diverse traditional crafts across multiple regions,
              ensuring these cultural treasures continue to thrive for generations to come.
            </p>
            <Button asChild>
              <Link to="/impact">
                Explore Our Full Impact
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <CraftDistributionPieChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
