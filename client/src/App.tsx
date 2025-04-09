import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { SectionProvider } from "@/hooks/use-section";
import PageTransitionLayout from "@/components/PageTransitionLayout";
import { useState, useEffect } from "react";

function App() {
  const [location] = useLocation();
  const [transitionEffect, setTransitionEffect] = useState<string>("default");
  
  // Simulate different transition effects on navigation
  // In a real app, you could store this preference in context or localStorage
  useEffect(() => {
    // Randomize transition effects for demonstration purposes
    const effects = ["default", "3d", "split", "slide", "blur"];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setTransitionEffect(randomEffect);
  }, [location]);

  return (
    <>
      <SectionProvider>
        <div className="app-container relative w-full min-h-screen">
          <AnimatePresence mode="wait">
            <PageTransitionLayout key={location} transitionEffect={transitionEffect}>
              <Switch>
                <Route path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </PageTransitionLayout>
          </AnimatePresence>
        </div>
      </SectionProvider>
      <Toaster />
    </>
  );
}

export default App;
