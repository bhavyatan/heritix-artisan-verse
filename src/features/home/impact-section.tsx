
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ImpactStat from "@/components/impact-stat";
import { CraftDistributionPieChart } from "../impact/impact-chart";
import { Users, TreePine, Globe, Coins } from "lucide-react";

const ImpactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground">
            {t('home.impact.title')}
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            {t('home.impact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ImpactStat 
            value="1,200+"
            label={t('home.impact.stat1')}
            icon={<Users className="h-6 w-6 text-heritix-700 dark:text-heritix-400" />}
          />
          <ImpactStat 
            value="$2.8M"
            label={t('home.impact.stat2')} 
            icon={<Coins className="h-6 w-6 text-heritix-700 dark:text-heritix-400" />}
          />
          <ImpactStat 
            value="42"
            label={t('home.impact.stat3')}
            icon={<Globe className="h-6 w-6 text-heritix-700 dark:text-heritix-400" />}
          />
          <ImpactStat 
            value="15,000+"
            label={t('home.impact.stat4')}
            icon={<TreePine className="h-6 w-6 text-heritix-700 dark:text-heritix-400" />}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
              {t('home.impact.chartTitle')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('home.impact.chartDesc')}
            </p>
            <Button asChild>
              <Link to="/impact">
                {t('home.impact.exploreFull')}
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
