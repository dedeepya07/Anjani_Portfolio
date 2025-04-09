import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionIndicator from "@/components/SectionIndicator";
import { SectionTransition } from "@/components/ui/section-transition";
import { useScroll } from "@/hooks/use-scroll";

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background overflow-x-hidden"
    >
      <ScrollProgress />
      <SectionIndicator />
      <Navbar />
      <main>
        <SectionTransition id="home">
          <Hero />
        </SectionTransition>
        
        <SectionTransition id="about">
          <About />
        </SectionTransition>
        
        <SectionTransition id="projects">
          <Projects />
        </SectionTransition>
        
        <SectionTransition id="skills">
          <Skills />
        </SectionTransition>
        
        <SectionTransition id="experience">
          <Timeline />
        </SectionTransition>
        
        <SectionTransition id="achievements">
          <Achievements />
        </SectionTransition>
        
        <SectionTransition id="certifications">
          <Certifications />
        </SectionTransition>
        
        <SectionTransition id="contact">
          <Contact />
        </SectionTransition>
      </main>
      <Footer />
    </motion.div>
  );
}
