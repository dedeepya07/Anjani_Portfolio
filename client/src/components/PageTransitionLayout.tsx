import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { 
  AnimatedPageTransition, 
  SplitPanelTransition, 
  Perspective3DTransition,
  SlideOverlayTransition,
  FadeBlurTransition 
} from "@/components/ui/animated-page-transitions";

interface PageTransitionLayoutProps {
  children: ReactNode;
  transitionEffect?: "default" | "3d" | "split" | "slide" | "blur" | string;
}

/**
 * Layout component that wraps page content with animated transitions
 */
export default function PageTransitionLayout({ 
  children, 
  transitionEffect = "default" 
}: PageTransitionLayoutProps) {
  const [location] = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Only animate after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100); // Short delay to ensure component is mounted
    
    return () => clearTimeout(timer);
  }, []);
  
  // Select the appropriate transition component based on the transition effect
  const renderTransition = () => {
    if (!shouldAnimate) {
      return <>{children}</>;
    }
    
    switch (transitionEffect) {
      case "3d":
        return (
          <Perspective3DTransition location={location} className="w-full h-full">
            {children}
          </Perspective3DTransition>
        );
      case "split":
        return (
          <SplitPanelTransition location={location} className="w-full h-full">
            {children}
          </SplitPanelTransition>
        );
      case "slide":
        return (
          <SlideOverlayTransition location={location} className="w-full h-full">
            {children}
          </SlideOverlayTransition>
        );
      case "blur":
        return (
          <FadeBlurTransition location={location} className="w-full h-full">
            {children}
          </FadeBlurTransition>
        );
      case "default":
      default:
        return (
          <AnimatedPageTransition 
            type="perspective" 
            duration={0.7} 
            location={location} 
            className="w-full h-full"
          >
            {children}
          </AnimatedPageTransition>
        );
    }
  };
  
  return (
    <div className="page-transition-container w-full h-full overflow-hidden">
      {renderTransition()}
    </div>
  );
}