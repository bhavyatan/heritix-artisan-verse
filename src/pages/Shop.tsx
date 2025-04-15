import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Search } from "lucide-react";

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
    badges: ["Handmade", "Traditional"],
    artForm: "Textiles",
    region: "South Asia",
    materials: ["Silk", "Natural Dyes"],
    attributes: ["Sustainable", "Culturally Significant"]
  },
  // More products would be added here
];

const artForms = ["Textiles", "Pottery", "Woodwork", "Jewelry", "Metal Work"];
const regions = ["South Asia", "East Asia", "Africa", "Latin America", "Middle East"];
const attributes = ["Sustainable", "Culturally Significant", "Fair Trade", "Eco-Friendly"];

const Shop = () => {
  const { t } = useTranslation();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedArtForms, setSelectedArtForms] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold mb-2">Handcrafted Treasures</h1>
            <p className="text-muted-foreground">Discover unique pieces crafted by artisans worldwide</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-64 space-y-6">
              <div className="p-4 bg-muted rounded-lg space-y-4">
                {/* Search */}
                <div>
                  <h3 className="font-medium mb-2">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <Slider
                    defaultValue={[0, 500]}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Art Forms */}
                <div>
                  <h3 className="font-medium mb-2">Art Forms</h3>
                  <div className="space-y-2">
                    {artForms.map((form) => (
                      <div key={form} className="flex items-center">
                        <Checkbox
                          id={`art-${form}`}
                          checked={selectedArtForms.includes(form)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedArtForms([...selectedArtForms, form]);
                            } else {
                              setSelectedArtForms(selectedArtForms.filter(f => f !== form));
                            }
                          }}
                        />
                        <label htmlFor={`art-${form}`} className="ml-2 text-sm">{form}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regions */}
                <div>
                  <h3 className="font-medium mb-2">Regions</h3>
                  <div className="space-y-2">
                    {regions.map((region) => (
                      <div key={region} className="flex items-center">
                        <Checkbox
                          id={`region-${region}`}
                          checked={selectedRegions.includes(region)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedRegions([...selectedRegions, region]);
                            } else {
                              setSelectedRegions(selectedRegions.filter(r => r !== region));
                            }
                          }}
                        />
                        <label htmlFor={`region-${region}`} className="ml-2 text-sm">{region}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attributes */}
                <div>
                  <h3 className="font-medium mb-2">Special Attributes</h3>
                  <div className="space-y-2">
                    {attributes.map((attr) => (
                      <div key={attr} className="flex items-center">
                        <Checkbox
                          id={`attr-${attr}`}
                          checked={selectedAttributes.includes(attr)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedAttributes([...selectedAttributes, attr]);
                            } else {
                              setSelectedAttributes(selectedAttributes.filter(a => a !== attr));
                            }
                          }}
                        />
                        <label htmlFor={`attr-${attr}`} className="ml-2 text-sm">{attr}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setPriceRange([0, 500]);
                    setSelectedArtForms([]);
                    setSelectedRegions([]);
                    setSelectedAttributes([]);
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;