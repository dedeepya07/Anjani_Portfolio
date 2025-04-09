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
import { ScrollAnimation, StaggeredScrollAnimation, StaggerItem } from "@/components/ui/scroll-animation";

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
      
      {/* Animated floating navigation */}
      <ScrollAnimation 
        direction="fadeIn" 
        duration={0.7} 
        delay={0.2} 
        threshold={0}
        className="sticky top-0 z-50"
      >
        <Navbar />
      </ScrollAnimation>
      
      <main>
        {/* Hero Section - Special entrances effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SectionTransition id="home">
            <Hero />
          </SectionTransition>
        </motion.div>
        
        {/* About Section - Slide from bottom with slight delay */}
        <ScrollAnimation direction="up" duration={0.7} threshold={0.1}>
          <SectionTransition id="about">
            <About />
          </SectionTransition>
        </ScrollAnimation>
        
        {/* Projects Section - Scale in animation */}
        <ScrollAnimation direction="scale" duration={0.8} threshold={0.1}>
          <SectionTransition id="projects">
            <Projects />
          </SectionTransition>
        </ScrollAnimation>
        
        {/* Skills Section - Scale up animation */}
        <ScrollAnimation direction="up" duration={0.7} threshold={0.1}>
          <SectionTransition id="skills">
            <Skills />
          </SectionTransition>
        </ScrollAnimation>
        
        {/* Experience Section - Slide from side */}
        <ScrollAnimation direction="left" duration={0.7} threshold={0.1}>
          <SectionTransition id="experience">
            <Timeline />
          </SectionTransition>
        </ScrollAnimation>
        
        {/* Achievements Section - Slight rotate appearance */}
        <ScrollAnimation direction="rotate" duration={0.8} threshold={0.1}>
          <SectionTransition id="achievements">
            <Achievements />
          </SectionTransition>
        </ScrollAnimation>
        
        {/* Certifications Section - Slide from right */}
        <ScrollAnimation direction="right" duration={0.7} threshold={0.1}>
          <SectionTransition id="certifications">
            <Certifications />
          </SectionTransition>
        </ScrollAnimation>
        
        {/* Contact Section - Fade in animation */}
        <ScrollAnimation direction="fadeIn" duration={0.8} threshold={0.1}>
          <SectionTransition id="contact">
            <Contact />
          </SectionTransition>
        </ScrollAnimation>
      </main>
      
      {/* Footer with staggered children for a wave effect */}
      <StaggeredScrollAnimation 
        direction="up" 
        delayChildren={0.2} 
        staggerChildren={0.1}
        threshold={0.1}
      >
        <StaggerItem>
          <Footer />
        </StaggerItem>
      </StaggeredScrollAnimation>
    </motion.div>
  );
}
