
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArtisanProfile from "./pages/ArtisanProfile";
import Impact from "./pages/Impact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import Stories from "./pages/Stories";
import Community from "./pages/Community";
import PageTransition from "./components/page-transition";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/login" element={<PageTransition><SignIn /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />

          {/* Feature Routes */}
          <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
          <Route path="/artisans" element={<PageTransition><ArtisanProfile /></PageTransition>} />
          <Route path="/artisans/:id" element={<PageTransition><ArtisanProfile /></PageTransition>} />
          <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
          <Route path="/stories" element={<PageTransition><Stories /></PageTransition>} />
          <Route path="/community" element={<PageTransition><Community /></PageTransition>} />
          <Route
            path="/products/:id"
            element={<PageTransition><Shop /></PageTransition>}
          />
          {/* Catch-all route */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
