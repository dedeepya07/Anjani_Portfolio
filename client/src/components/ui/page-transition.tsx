import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Main page transition with fade effect
export function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Slide transition from the side
export function SlideTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Fade transition
export function FadeTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Scale transition
export function ScaleTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}