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
  const [color, setColor] = useState("rgba(0, 122, 255, 0.8)"); // Default color (blue)

  // Change color based on active section
  useEffect(() => {
    const sectionColors: Record<string, string> = {
      home: "rgba(0, 122, 255, 0.8)", // blue
      about: "rgba(52, 152, 219, 0.8)", // lighter blue
      projects: "rgba(0, 102, 204, 0.8)", // darker blue
      skills: "rgba(30, 144, 255, 0.8)", // dodger blue
      experience: "rgba(65, 105, 225, 0.8)", // royal blue
      achievements: "rgba(100, 149, 237, 0.8)", // cornflower blue
      certifications: "rgba(70, 130, 180, 0.8)", // steel blue
      contact: "rgba(0, 122, 255, 0.8)" // blue
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