import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { SectionProvider } from "@/hooks/use-section";

function App() {
  const [location] = useLocation();

  return (
    <>
      <SectionProvider>
        <AnimatePresence mode="wait">
          <Switch key={location}>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </SectionProvider>
      <Toaster />
    </>
  );
}

export default App;
