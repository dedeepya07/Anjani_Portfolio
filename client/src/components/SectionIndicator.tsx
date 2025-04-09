import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSection } from "@/hooks/use-section";

export default function SectionIndicator() {
  const { activeSection } = useSection();
  const [isVisible, setIsVisible] = useState(false);

  // Sections to track (must match section IDs in the HTML)
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  // Show after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Get index of active section for animations
  const activeSectionIndex = sections.findIndex(section => section.id === activeSection);

  return (
    <motion.div 
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 50 
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-3">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative flex items-center group"
            whileHover={{ x: -5 }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: activeSection === section.id ? 1 : 0.5 }}
          >
            {/* Dot indicator */}
            <motion.div 
              className={`w-3 h-3 rounded-full ${
                activeSection === section.id 
                  ? "bg-primary" 
                  : "bg-muted-foreground/50 group-hover:bg-primary/50"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: activeSection === section.id ? 1.2 : 0.8 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Section label */}
            <motion.span 
              className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              initial={{ x: 10, opacity: 0 }}
              animate={{ 
                x: activeSection === section.id ? 0 : 10,
                opacity: activeSection === section.id ? 1 : 0
              }}
              exit={{ x: 10, opacity: 0 }}
            >
              {section.label}
            </motion.span>
            
            {/* Connector line between dots */}
            {index < sections.length - 1 && (
              <motion.div 
                className="absolute top-full left-[5.5px] w-0.5 bg-muted-foreground/30 h-3"
                initial={{ height: 0 }}
                animate={{ height: 12 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}