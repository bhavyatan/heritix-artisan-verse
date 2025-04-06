
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-heritix-700 dark:text-heritix-500">
              Heritix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/explore" className="px-3 py-2 rounded-md hover:bg-accent">
              Explore
            </Link>
            <Link to="/artisans" className="px-3 py-2 rounded-md hover:bg-accent">
              Artisans
            </Link>
            <Link to="/journeys" className="px-3 py-2 rounded-md hover:bg-accent">
              Art Journeys
            </Link>
            <Link to="/impact" className="px-3 py-2 rounded-md hover:bg-accent">
              Impact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button className="bg-heritix-600 hover:bg-heritix-700">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
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
            <Link to="/explore" className="px-3 py-2 rounded-md hover:bg-accent">
              Explore
            </Link>
            <Link to="/artisans" className="px-3 py-2 rounded-md hover:bg-accent">
              Artisans
            </Link>
            <Link to="/journeys" className="px-3 py-2 rounded-md hover:bg-accent">
              Art Journeys
            </Link>
            <Link to="/impact" className="px-3 py-2 rounded-md hover:bg-accent">
              Impact
            </Link>
            <Button className="bg-heritix-600 hover:bg-heritix-700 w-full">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
