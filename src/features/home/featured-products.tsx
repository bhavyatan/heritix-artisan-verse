
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";

// Sample product data
const products = [
  {
    id: "p1",
    name: "Handwoven Silk Scarf",
    artisan: {
      id: "1",
      name: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1461938337379-4b537cd2db74?q=80&w=1824"
    },
    price: 85,
    image: "https://images.unsplash.com/photo-1606757389667-45446d0fec90?q=80&w=1633",
    badges: ["Handmade", "Traditional"]
  },
  {
    id: "p2",
    name: "Clay Coffee Mug",
    artisan: {
      id: "2",
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974"
    },
    price: 35,
    image: "https://images.unsplash.com/photo-1572666341285-c8cb8c24a151?q=80&w=2070",
    badges: ["Handmade", "Sustainable"]
  },
  {
    id: "p3",
    name: "Embroidered Wall Hanging",
    artisan: {
      id: "3",
      name: "Aisha Patel",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
    },
    price: 120,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070",
    badges: ["Cultural Heritage", "Handmade"]
  },
  {
    id: "p4",
    name: "Wooden Serving Bowl",
    artisan: {
      id: "4",
      name: "Thomas Woodcraft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
    },
    price: 65,
    image: "https://images.unsplash.com/photo-1604426633216-051d9e499c0c?q=80&w=1964",
    badges: ["Sustainable", "Handmade"]
  }
];

const FeaturedProducts = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif font-bold">Featured Products</h2>
          <Button asChild variant="ghost" className="text-heritix-700 hover:text-heritix-800">
            <Link to="/shop" className="flex items-center gap-2">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              artisan={product.artisan}
              price={product.price}
              image={product.image}
              badges={product.badges}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
