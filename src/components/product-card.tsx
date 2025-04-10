
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  id: string;
  name: string;
  artisan: {
    id: string;
    name: string;
    image: string;
  };
  price: number;
  image: string;
  badges: string[];
};

const ProductCard = ({ id, name, artisan, price, image, badges }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="bg-white/80 text-artisan-900 font-medium">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 line-clamp-1">
          <Link to={`/products/${id}`} className="hover:text-heritix-700">
            {name}
          </Link>
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <img 
            src={artisan.image} 
            alt={artisan.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <Link to={`/artisans/${artisan.id}`} className="text-sm text-muted-foreground hover:text-heritix-700">
            {artisan.name}
          </Link>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">${price}</p>
          <button className="text-sm text-heritix-700 hover:text-heritix-800 font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
