import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

// Types for the transition components
type TransitionType = 
  | "fade" 
  | "slide" 
  | "zoom" 
  | "flip" 
  | "rotate"
  | "perspective"
  | "slide-up"
  | "slide-down"
  | "wipe";

interface AnimatedPageTransitionProps {
  children: ReactNode;
  className?: string;
  type?: TransitionType;
  duration?: number;
  delay?: number;
  location?: string;
}

/**
 * Page transition wrapper with various animation types
 */
export function AnimatedPageTransition({
  children,
  className = "",
  type = "fade",
  duration = 0.5,
  delay = 0,
  location
}: AnimatedPageTransitionProps) {
  const [renderKey, setRenderKey] = useState<string>(location || "default");

  // Update key when location changes to trigger animation
  useEffect(() => {
    if (location) {
      setRenderKey(location);
    }
  }, [location]);

  // Select the appropriate variants based on the type prop
  const getVariants = () => {
    switch (type) {
      case "slide":
        return slideVariants;
      case "zoom":
        return zoomVariants;
      case "flip":
        return flipVariants;
      case "rotate":
        return rotateVariants;
      case "perspective":
        return perspectiveVariants;
      case "slide-up":
        return slideUpVariants;
      case "slide-down":
        return slideDownVariants;
      case "wipe":
        return wipeVariants;
      case "fade":
      default:
        return fadeVariants;
    }
  };

  const transitionSettings = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1] // Custom easing curve for smoother animations
  };

  const variants = getVariants();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={renderKey}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={transitionSettings}
        className={`${className} overflow-hidden`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Transition variants for different animation types
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 }
};

const zoomVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 }
};

const flipVariants = {
  initial: { opacity: 0, rotateY: -10 },
  animate: { opacity: 1, rotateY: 0 },
  exit: { opacity: 0, rotateY: 10 }
};

const rotateVariants = {
  initial: { opacity: 0, rotate: -2 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 2 }
};

const perspectiveVariants = {
  initial: { 
    opacity: 0, 
    rotateX: 10, 
    perspective: "1000px",
    y: 20 
  },
  animate: { 
    opacity: 1, 
    rotateX: 0, 
    perspective: "1000px",
    y: 0 
  },
  exit: { 
    opacity: 0, 
    rotateX: -10, 
    perspective: "1000px",
    y: -20 
  }
};

const slideUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const slideDownVariants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
};

const wipeVariants = {
  initial: { opacity: 0, scaleX: 0, transformOrigin: "left" },
  animate: { opacity: 1, scaleX: 1, transformOrigin: "left" },
  exit: { opacity: 0, scaleX: 0, transformOrigin: "right" }
};

/**
 * Slide-in page transition with overlay effect
 */
export function SlideOverlayTransition({
  children,
  className = "",
  duration = 0.5,
  location
}: AnimatedPageTransitionProps) {
  return (
    <div className={`relative ${className} overflow-hidden`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`overlay-${location}`}
          className="absolute inset-0 z-50 bg-primary"
          initial={{ scaleX: 1, transformOrigin: "left" }}
          animate={{ scaleX: 0, transformOrigin: "right" }}
          exit={{ scaleX: 1, transformOrigin: "right" }}
          transition={{ duration: duration * 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}

/**
 * Fade transition with blur effect
 */
export function FadeBlurTransition({
  children,
  className = "",
  duration = 0.5,
  location
}: AnimatedPageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(8px)" }}
        transition={{ duration }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * 3D transition with perspective
 */
export function Perspective3DTransition({
  children,
  className = "",
  duration = 0.8,
  location
}: AnimatedPageTransitionProps) {
  return (
    <div className={`perspective-container ${className}`} style={{ perspective: "1200px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, rotateY: 5, z: -100 }}
          animate={{ opacity: 1, rotateY: 0, z: 0 }}
          exit={{ opacity: 0, rotateY: -5, z: -100 }}
          transition={{ 
            duration,
            rotateY: { type: "spring", stiffness: 100, damping: 15 }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * Split panel transition effect
 */
export function SplitPanelTransition({
  children,
  className = "",
  duration = 0.6,
  location
}: AnimatedPageTransitionProps) {
  return (
    <div className={`relative ${className} overflow-hidden`}>
      <AnimatePresence mode="wait">
        <motion.div key={location} className="relative z-10">
          {children}
        </motion.div>
      </AnimatePresence>
      
      {/* Top panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`top-${location}`}
          className="absolute top-0 left-0 right-0 bottom-1/2 bg-primary z-20"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: 0 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      
      {/* Bottom panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bottom-${location}`}
          className="absolute top-1/2 left-0 right-0 bottom-0 bg-primary z-20"
          initial={{ y: 0 }}
          animate={{ y: "100%" }}
          exit={{ y: 0 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}