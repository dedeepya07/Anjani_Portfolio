import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSection } from "@/hooks/use-section";
import { sectionTransitions } from "@/lib/transition-variants";

interface SectionTransitionProps {
  children: ReactNode;
  id: string;
  className?: string;
  customTransition?: any;
}

export function SectionTransition({ 
  children, 
  id, 
  className = "", 
  customTransition 
}: SectionTransitionProps) {
  const { activeSection } = useSection();
  const isActive = activeSection === id;
  
  // Use custom transition if provided, otherwise use the one from our mapping
  const transitionVariants = customTransition || sectionTransitions[id] || sectionTransitions.home;

  return (
    <section id={id} className={className}>
      <motion.div
        key={id}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitionVariants}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}