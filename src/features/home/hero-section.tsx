
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShoppingBag, MessageSquare } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604846367655-fe24f1e0aa23?q=80&w=2070')] bg-cover bg-center brightness-50"></div>
      <div className="relative container mx-auto px-4 py-24 md:py-36 flex flex-col items-center text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold max-w-4xl leading-tight animate-fade-up">
          Empowering local artisans by eliminating intermediaries and amplifying their stories
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {t('home.hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="bg-heritix-600 hover:bg-heritix-700 text-white px-8 flex items-center gap-2">
            <Link to="/artisans"><Users className="h-5 w-5" /> Explore Artisans</Link>
          </Button>
          <Button asChild size="lg" className="bg-artisan-700 hover:bg-artisan-800 text-white px-8 flex items-center gap-2">
            <Link to="/shop"><ShoppingBag className="h-5 w-5" /> Shop Handmade</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
            <Link to="/community"><MessageSquare className="h-5 w-5" /> Join the Community</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
