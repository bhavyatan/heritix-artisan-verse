import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = "text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors font-medium rounded-md px-3 py-2";

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 -ml-2">
            <span className="text-2xl font-serif font-bold text-heritix-700 dark:text-heritix-300">
              Heritix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 gap-8">
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <Link to="/impact" className={navLinkClasses}>Impact</Link>
              <Link to="/stories" className={navLinkClasses}>Stories</Link>
              <SignedIn>
                <Link to="/artisans" className={navLinkClasses}>Artisans</Link>
                <Link to="/shop" className={navLinkClasses}>Shop</Link>
                <Link to="/community" className={navLinkClasses}>Community</Link>
              </SignedIn>
            </div>
            <div className="flex-1 flex items-center justify-end gap-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-heritix-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
              <ThemeToggle />
              <LanguageSwitcher />
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-heritix-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <ThemeToggle />
            <LanguageSwitcher />
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link to="/login">
                <Button variant="ghost">
                  Explore!
                </Button>
              </Link>
            </SignedOut>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="hover:bg-accent">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden p-4 bg-background/95 backdrop-blur-sm border-t animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2">
              <Link to="/impact" className={`${navLinkClasses} w-full text-left`} onClick={toggleMenu}>Impact</Link>
              <Link to="/stories" className={`${navLinkClasses} w-full text-left`} onClick={toggleMenu}>Stories</Link>
              <SignedIn>
                <Link to="/artisans" className={`${navLinkClasses} w-full text-left`} onClick={toggleMenu}>Artisans</Link>
                <Link to="/shop" className={`${navLinkClasses} w-full text-left`} onClick={toggleMenu}>Shop</Link>
                <Link to="/community" className={`${navLinkClasses} w-full text-left`} onClick={toggleMenu}>Community</Link>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;