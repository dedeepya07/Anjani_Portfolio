import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSection } from "@/hooks/use-section";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection } = useSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-primary/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        height: isScrolled ? "auto" : "5rem",
        padding: isScrolled ? "0.5rem 1.5rem" : "1rem 1.5rem" 
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("#home");
          }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <motion.li key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  className={`relative text-foreground hover:text-primary transition-colors px-1 py-2 ${
                    activeSection === link.href.substring(1) 
                      ? "text-primary font-medium" 
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(link.href);
                  }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md mt-4 rounded-md overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className={`relative block py-2 transition-colors ${
                      activeSection === link.href.substring(1)
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(link.href);
                    }}
                  >
                    <div className="flex items-center">
                      {activeSection === link.href.substring(1) && (
                        <motion.div 
                          layoutId="activeMobileSection"
                          className="w-1 h-6 bg-primary rounded-full mr-2"
                        />
                      )}
                      {link.name}
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
