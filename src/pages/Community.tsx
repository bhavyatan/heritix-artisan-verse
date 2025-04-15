import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@clerk/clerk-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Heart, Share2, User, BookMarked, History, Users2 } from "lucide-react";

// Sample user profile data
const userProfile = {
  name: "Sarah Chen",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
  joinDate: "2023-12-01",
  purchases: 12,
  following: 8,
  contributions: 15,
  wishlist: [
    {
      id: "p1",
      name: "Handwoven Silk Scarf",
      image: "https://images.unsplash.com/photo-1606757389667-45446d0fec90?q=80&w=1633",
      price: 85
    },
    // More wishlist items
  ],
  followedArtisans: [
    {
      id: "1",
      name: "Rajesh Kumar",
      craft: "Handloom Weaving",
      image: "https://images.unsplash.com/photo-1461938337379-4b537cd2db74?q=80&w=1824"
    },
    // More followed artisans
  ]
};

// Sample forum discussions
const discussions = [
  {
    id: "d1",
    title: "The importance of supporting traditional crafts",
    author: {
      name: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
    },
    category: "General Discussion",
    date: "2024-01-15",
    replies: 23,
    likes: 45,
    preview: "Traditional crafts are not just about creating beautiful objects, they're about preserving cultural heritage..."
  },
  {
    id: "d2",
    title: "Tips for starting an artisan collection",
    author: {
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974"
    },
    category: "Collecting",
    date: "2024-01-14",
    replies: 18,
    likes: 32,
    preview: "Building a meaningful collection of artisanal pieces requires understanding and appreciation..."
  }
];

const Community = () => {
  const { t } = useTranslation();
  const { isSignedIn } = useAuth();
  const [activeTab, setActiveTab] = useState("discussions");

  const ProfileSection = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <img
          src={userProfile.image}
          alt={userProfile.name}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-serif font-medium">{userProfile.name}</h2>
          <p className="text-sm text-muted-foreground">
            Member since {new Date(userProfile.joinDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-muted rounded-lg">
          <div className="text-2xl font-medium">{userProfile.purchases}</div>
          <div className="text-sm text-muted-foreground">Purchases</div>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <div className="text-2xl font-medium">{userProfile.following}</div>
          <div className="text-sm text-muted-foreground">Following</div>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <div className="text-2xl font-medium">{userProfile.contributions}</div>
          <div className="text-sm text-muted-foreground">Contributions</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Wishlist</h3>
        <div className="grid grid-cols-2 gap-4">
          {userProfile.wishlist.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <div className="text-white">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-sm">${item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Following</h3>
        <div className="grid grid-cols-2 gap-4">
          {userProfile.followedArtisans.map((artisan) => (
            <div key={artisan.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{artisan.name}</div>
                <div className="text-sm text-muted-foreground">{artisan.craft}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DiscussionCard = ({ discussion }: { discussion: typeof discussions[0] }) => (
    <div className="p-4 bg-muted/50 rounded-lg space-y-3">
      <div className="flex items-center gap-3">
        <img
          src={discussion.author.image}
          alt={discussion.author.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium">{discussion.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{discussion.author.name}</span>
            <span>•</span>
            <span>{discussion.category}</span>
            <span>•</span>
            <span>{new Date(discussion.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">{discussion.preview}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <button className="flex items-center gap-1 hover:text-heritix-600">
          <MessageSquare className="h-4 w-4" />
          {discussion.replies} replies
        </button>
        <button className="flex items-center gap-1 hover:text-heritix-600">
          <Heart className="h-4 w-4" />
          {discussion.likes}
        </button>
        <button className="hover:text-heritix-600">
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {isSignedIn ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="w-full lg:w-64 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="h-4 w-4" /> Profile
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setActiveTab("discussions")}
                >
                  <MessageSquare className="h-4 w-4" /> Discussions
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setActiveTab("wishlist")}
                >
                  <BookMarked className="h-4 w-4" /> Wishlist
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setActiveTab("purchases")}
                >
                  <History className="h-4 w-4" /> Purchase History
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setActiveTab("following")}
                >
                  <Users2 className="h-4 w-4" /> Following
                </Button>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {activeTab === "profile" && <ProfileSection />}
                {activeTab === "discussions" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-serif font-medium">Community Discussions</h2>
                      <Button>Start New Discussion</Button>
                    </div>
                    <div className="space-y-4">
                      {discussions.map((discussion) => (
                        <DiscussionCard key={discussion.id} discussion={discussion} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-serif font-medium mb-4">
                Join our community of artisan supporters
              </h2>
              <p className="text-muted-foreground mb-6">
                Sign in to participate in discussions, follow artisans, and build your collection.
              </p>
              <Button asChild size="lg">
                <a href="/login">Sign In</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;