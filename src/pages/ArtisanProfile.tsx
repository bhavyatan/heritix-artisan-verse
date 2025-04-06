
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Map, 
  Clock, 
  GraduationCap, 
  Contact, 
  ShoppingBag
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SupportButton from "@/components/support-button";
import JourneyCard from "@/components/journey-card";

// Sample data
const artisanData = {
  "1": {
    id: "1",
    name: "Rajesh Kumar",
    craft: "Handloom Weaving",
    location: "Varanasi, India",
    image: "https://images.unsplash.com/photo-1461938337379-4b537cd2db74?q=80&w=1824",
    coverImage: "https://images.unsplash.com/photo-1600050708672-e61f0870e590?q=80&w=1064",
    bio: "Rajesh Kumar comes from a long lineage of master weavers from Varanasi, preserving the ancient tradition of handloom weaving for over five generations. His intricate Banarasi silk sarees are known for their gold and silver brocade, opulent embroidery, and compact weaving. Each piece takes weeks to complete using traditional techniques passed down through his family.",
    yearsPracticing: 25,
    specialties: ["Banarasi Silk", "Jamdani Weaving", "Gold Brocade"],
    journeys: [
      {
        id: "j1",
        title: "The Art of Banarasi Silk Weaving",
        description: "Learn the intricate techniques behind traditional silk weaving from Varanasi.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470",
        progress: 0,
      },
      {
        id: "j2",
        title: "Colors & Patterns in Traditional Textiles",
        description: "Explore the meaning behind colors and motifs in traditional Indian textiles.",
        image: "https://images.unsplash.com/photo-1547106365-bb4b1e9c2f18?q=80&w=1374",
        progress: 0,
      }
    ],
    products: [
      {
        id: "p1",
        name: "Banarasi Silk Saree",
        price: 350,
        image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1587",
      },
      {
        id: "p2",
        name: "Hand-woven Scarf",
        price: 85,
        image: "https://images.unsplash.com/photo-1606757389667-45446d0fec90?q=80&w=1633",
      },
      {
        id: "p3",
        name: "Table Runner",
        price: 65,
        image: "https://images.unsplash.com/photo-1599207064651-2864bafcce73?q=80&w=1518",
      }
    ]
  },
  // Additional artisans would be added here
};

const ArtisanProfile = () => {
  const { id } = useParams<{ id: string }>();
  const artisan = artisanData[id as keyof typeof artisanData];
  const { t } = useTranslation();

  useEffect(() => {
    if (artisan) {
      document.title = `${artisan.name} - ${artisan.craft} | Heritix`;
    }
  }, [artisan]);

  if (!artisan) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Artisan not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSupportClick = () => {
    alert("Stripe checkout would open here");
    // In a real implementation, this would:
    // 1. Call your API to create a Stripe checkout session
    // 2. Redirect to the Stripe checkout page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Cover Image & Profile */}
        <div className="relative h-60 md:h-80">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${artisan.coverImage})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-20 relative z-10 mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background">
              <img 
                src={artisan.image} 
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white md:flex-grow">
              <h1 className="text-3xl font-serif font-bold">{artisan.name}</h1>
              <p className="text-lg">{artisan.craft}</p>
              <p className="flex items-center gap-1 text-sm">
                <Map className="h-4 w-4" /> {artisan.location}
              </p>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <SupportButton artisanName={artisan.name} onClick={handleSupportClick} />
            </div>
          </div>

          {/* Artisan Content */}
          <Tabs defaultValue="about" className="mb-16">
            <TabsList className="mb-8">
              <TabsTrigger value="about">{t('artisan.tabs.about')}</TabsTrigger>
              <TabsTrigger value="journeys">{t('artisan.tabs.journeys')}</TabsTrigger>
              <TabsTrigger value="shop">{t('artisan.tabs.shop')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-serif font-medium mb-4">{t('artisan.bio')}</h2>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {artisan.bio}
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-heritix-700" />
                    <div>
                      <p className="font-medium">{t('artisan.yearsPracticing')}</p>
                      <p className="text-muted-foreground">{artisan.yearsPracticing} {t('artisan.years')}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-heritix-700" /> {t('artisan.specialties')}
                    </p>
                    <ul className="text-muted-foreground space-y-1">
                      {artisan.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-heritix-500"></span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <button className="flex items-center gap-2 text-heritix-700 hover:text-heritix-800">
                      <Contact className="h-5 w-5" /> {t('artisan.contactArtisan')}
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="journeys">
              <h2 className="text-2xl font-serif font-medium mb-6">{t('artisan.journeysBy')} {artisan.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artisan.journeys.map((journey) => (
                  <JourneyCard 
                    key={journey.id}
                    id={journey.id}
                    title={journey.title}
                    description={journey.description}
                    image={journey.image}
                    progress={journey.progress}
                    artisanName={artisan.name}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="shop">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-medium">{t('artisan.shopCreations')} {artisan.name}</h2>
                <p className="flex items-center text-sm text-muted-foreground">
                  <ShoppingBag className="h-4 w-4 mr-1" /> 
                  {t('artisan.directPurchases')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {artisan.products.map((product) => (
                  <div key={product.id} className="group border rounded-lg overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-lg font-semibold">${product.price}</p>
                        <button className="text-sm text-heritix-700 hover:text-heritix-800">
                          {t('artisan.addToCart')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtisanProfile;
