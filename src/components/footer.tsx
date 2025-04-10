import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-artisan-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-heritix-500">Heritix</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-heritix-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-heritix-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-heritix-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-heritix-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.discover')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/artisans" className="text-gray-300 hover:text-heritix-500">
                  {t('nav.artisans')}
                </Link>
              </li>
              <li>
                <Link to="/journeys" className="text-gray-300 hover:text-heritix-500">
                  {t('nav.journeys')}
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-heritix-500">
                  {t('nav.impact')}
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-300 hover:text-heritix-500">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.joinUs')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/for-artisans" className="text-gray-300 hover:text-heritix-500">
                  For Artisans
                </Link>
              </li>
              <li>
                <Link to="/become-partner" className="text-gray-300 hover:text-heritix-500">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link to="/ambassador" className="text-gray-300 hover:text-heritix-500">
                  Ambassador Program
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-heritix-500">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-heritix-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-heritix-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-heritix-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-heritix-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>{t('footer.copyright', { year: currentYear })}</p>
          <p className="mt-1">
            {t('footer.tagline2')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
