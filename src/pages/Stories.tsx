import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Share2, MessageSquare, Heart } from "lucide-react";

// Sample stories data
const stories = [
  {
    id: "s1",
    title: "The Ancient Art of Banarasi Weaving",
    excerpt: "Discover the centuries-old tradition of silk weaving in Varanasi, India, and the artisans keeping this heritage alive.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470",
    author: "Rajesh Kumar",
    authorImage: "https://images.unsplash.com/photo-1461938337379-4b537cd2db74?q=80&w=1824",
    category: "Artisan Interviews",
    date: "2024-01-15",
    likes: 124,
    comments: 18
  },
  {
    id: "s2",
    title: "Preserving Traditional Pottery Techniques",
    excerpt: "How Nigerian artisans are keeping ancient pottery methods alive while adapting to modern demands.",
    image: "https://images.unsplash.com/photo-1551798507-629020c81463?q=80&w=1568",
    author: "Amara Okafor",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    category: "Craft History",
    date: "2024-01-12",
    likes: 98,
    comments: 12
  },
  {
    id: "s3",
    title: "The Significance of Natural Dyes",
    excerpt: "Exploring the environmental and cultural importance of traditional dyeing techniques in textile crafts.",
    image: "https://images.unsplash.com/photo-1606333259737-6da7a169aaff?q=80&w=1470",
    author: "Maria Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    category: "Material Spotlight",
    date: "2024-01-10",
    likes: 156,
    comments: 23
  }
];

const categories = [
  "All Stories",
  "Artisan Interviews",
  "Craft History",
  "Material Spotlight",
  "Cultural Significance",
  "Video Documentaries"
];

const Stories = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All Stories");

  const StoryCard = ({ story }: { story: typeof stories[0] }) => (
    <article className="group relative overflow-hidden rounded-lg">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-heritix-600">{story.category}</span>
          <span>•</span>
          <span>{new Date(story.date).toLocaleDateString()}</span>
        </div>
        <h3 className="mt-2 text-xl font-serif font-medium group-hover:text-heritix-600">
          {story.title}
        </h3>
        <p className="mt-2 text-muted-foreground line-clamp-2">
          {story.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={story.authorImage}
              alt={story.author}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">{story.author}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button className="flex items-center gap-1 hover:text-heritix-600">
              <Heart className="h-4 w-4" />
              {story.likes}
            </button>
            <button className="flex items-center gap-1 hover:text-heritix-600">
              <MessageSquare className="h-4 w-4" />
              {story.comments}
            </button>
            <button className="hover:text-heritix-600">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">Voices of the Makers</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the stories, traditions, and cultural significance behind artisanal crafts through interviews, documentaries, and in-depth articles.
            </p>
          </div>

          {/* Categories */}
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "bg-background" : ""}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;