
import { Link } from "react-router-dom";

type ArtisanCardProps = {
  id: string;
  name: string;
  craft: string;
  location: string;
  image: string;
};

const ArtisanCard = ({ id, name, craft, location, image }: ArtisanCardProps) => {
  return (
    <Link to={`/artisans/${id}`} className="block">
      <div className="artisan-card h-72 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="artisan-card-content">
          <h3 className="text-white text-xl font-serif font-medium">{name}</h3>
          <p className="text-heritix-300 text-sm">{craft}</p>
          <p className="text-gray-300 text-xs">{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtisanCard;
