import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useSection } from "@/hooks/use-section";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { activeSection } = useSection();
  const [color, setColor] = useState("rgba(74, 222, 212, 0.8)"); // Default color (teal)

  // Change color based on active section
  useEffect(() => {
    const sectionColors: Record<string, string> = {
      home: "rgba(74, 222, 212, 0.8)", // teal
      about: "rgba(16, 185, 129, 0.8)", // green
      projects: "rgba(59, 130, 246, 0.8)", // blue
      skills: "rgba(139, 92, 246, 0.8)", // purple
      experience: "rgba(236, 72, 153, 0.8)", // pink
      achievements: "rgba(245, 158, 11, 0.8)", // amber
      certifications: "rgba(239, 68, 68, 0.8)", // red
      contact: "rgba(74, 222, 212, 0.8)" // teal
    };

    setColor(sectionColors[activeSection] || sectionColors.home);
  }, [activeSection]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ 
        scaleX,
        backgroundColor: color,
        transformOrigin: "0%"
      }}
    />
  );
}