
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ArtisanCardProps = {
  id: string;
  name: string;
  craft: string;
  location: string;
  image: string;
};

const ArtisanCard = ({ id, name, craft, location, image }: ArtisanCardProps) => {
  const { t } = useTranslation();

  return (
    <Link to={`/artisans/${id}`} className="block">
      <div className="artisan-card h-72 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="artisan-card-content">
          <h3 className="text-white text-xl font-serif font-medium">{t("artisan.name", { name })}</h3>
          <p className="text-heritix-300 text-sm">{t("artisan.craft", { craft })}</p>
          <p className="text-gray-300 text-xs">{t("artisan.location", { location })}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtisanCard;
