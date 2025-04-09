import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

function App() {
  const [location] = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;
