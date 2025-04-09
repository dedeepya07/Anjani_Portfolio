// Animation variants for different section transitions

export const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const slideUpAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  exit: { y: -100, opacity: 0, transition: { duration: 0.5 } }
};

export const slideDownAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  exit: { y: 100, opacity: 0, transition: { duration: 0.5 } }
};

export const slideLeftAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  exit: { x: -100, opacity: 0, transition: { duration: 0.5 } }
};

export const slideRightAnimation = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  exit: { x: 100, opacity: 0, transition: { duration: 0.5 } }
};

export const zoomInAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.5 } }
};

export const zoomOutAnimation = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
  exit: { scale: 1.2, opacity: 0, transition: { duration: 0.5 } }
};

export const rotateAnimation = {
  initial: { rotate: -5, opacity: 0, scale: 0.9 },
  animate: { rotate: 0, opacity: 1, scale: 1, transition: { duration: 0.7 } },
  exit: { rotate: 5, opacity: 0, scale: 0.9, transition: { duration: 0.5 } }
};

export const springUpAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
  exit: { 
    y: -100, 
    opacity: 0, 
    transition: { 
      duration: 0.5 
    } 
  }
};

// Transition for staggered children
export const staggerContainer = (delayChildren: number = 0, staggerChildren: number = 0.1) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren,
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      staggerChildren: 0.05,
      staggerDirection: -1,
    } 
  }
});

// Child item variants for staggered animations
export const staggerItem = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.3 } }
};

// Page transition mappings
export const sectionTransitions: Record<string, any> = {
  home: fadeAnimation,
  about: slideUpAnimation,
  projects: slideLeftAnimation,
  skills: zoomInAnimation,
  experience: slideRightAnimation,
  achievements: rotateAnimation,
  certifications: springUpAnimation,
  contact: slideUpAnimation
};