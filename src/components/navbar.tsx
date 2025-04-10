
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-heritix-700 dark:text-heritix-500">
              Artisan Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/artisans" className="px-3 py-2 rounded-md hover:bg-accent">
              {t('nav.artisans')}
            </Link>
            <Link to="/shop" className="px-3 py-2 rounded-md hover:bg-accent">
              Shop
            </Link>
            <Link to="/stories" className="px-3 py-2 rounded-md hover:bg-accent">
              Stories
            </Link>
            <Link to="/impact" className="px-3 py-2 rounded-md hover:bg-accent">
              {t('nav.impact')}
            </Link>
            <Link to="/community" className="px-3 py-2 rounded-md hover:bg-accent">
              Community
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-heritix-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <ThemeToggle />
            <LanguageSwitcher />
            <Button className="bg-heritix-600 hover:bg-heritix-700">
              {t('nav.signIn')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-heritix-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <ThemeToggle />
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden p-4 bg-background border-t animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/artisans" className="px-3 py-2 rounded-md hover:bg-accent">
              {t('nav.artisans')}
            </Link>
            <Link to="/shop" className="px-3 py-2 rounded-md hover:bg-accent">
              Shop
            </Link>
            <Link to="/stories" className="px-3 py-2 rounded-md hover:bg-accent">
              Stories
            </Link>
            <Link to="/impact" className="px-3 py-2 rounded-md hover:bg-accent">
              {t('nav.impact')}
            </Link>
            <Link to="/community" className="px-3 py-2 rounded-md hover:bg-accent">
              Community
            </Link>
            <Button className="bg-heritix-600 hover:bg-heritix-700 w-full">
              {t('nav.signIn')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
