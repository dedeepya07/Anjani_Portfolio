import { ReactNode, useRef } from "react";
import { motion, useInView, Variant } from "framer-motion";

type AnimationDirection = "up" | "down" | "left" | "right" | "fadeIn" | "scale" | "rotate";

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: AnimationDirection;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  distance?: number;
  staggerIndex?: number;
  custom?: Record<string, any>;
}

/**
 * Component that animates its children when they come into view on scroll
 */
export function ScrollAnimation({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  className = "",
  once = true,
  distance = 50,
  staggerIndex = 0,
  custom
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  
  const variants = {
    hidden: getHiddenVariant(direction, distance),
    visible: getVisibleVariant(duration, delay, staggerIndex)
  };
  
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Helper functions to generate variants based on animation direction
function getHiddenVariant(direction: AnimationDirection, distance: number): Variant {
  switch (direction) {
    case "up":
      return { y: distance, opacity: 0 };
    case "down":
      return { y: -distance, opacity: 0 };
    case "left":
      return { x: distance, opacity: 0 };
    case "right":
      return { x: -distance, opacity: 0 };
    case "scale":
      return { scale: 0.8, opacity: 0 };
    case "rotate":
      return { rotate: -5, opacity: 0, scale: 0.95 };
    case "fadeIn":
    default:
      return { opacity: 0 };
  }
}

function getVisibleVariant(duration: number, delay: number, staggerIndex: number): Variant {
  return {
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration,
      delay: delay + (staggerIndex * 0.1),
      ease: [0.22, 1, 0.36, 1]
    }
  };
}

/**
 * Component that staggers animations of its children when scrolling into view
 */
export function StaggeredScrollAnimation({
  children,
  direction = "up",
  delayChildren = 0,
  staggerChildren = 0.1,
  threshold = 0.1,
  className = "",
  once = true,
}: {
  children: ReactNode;
  direction?: AnimationDirection;
  delayChildren?: number;
  staggerChildren?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item component to be used inside StaggeredScrollAnimation
 */
export function StaggerItem({
  children,
  direction = "up",
  className = "",
  distance = 30,
}: {
  children: ReactNode;
  direction?: AnimationDirection;
  className?: string;
  distance?: number;
}) {
  const itemVariants = {
    hidden: getHiddenVariant(direction, distance),
    visible: {
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}