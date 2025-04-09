import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ArrowDown, FileDown } from "lucide-react";
import profileImage from "@/assets/profile.svg";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      const offset = 80; // Account for navbar height
      const y = nextSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Function to view CV in a new tab from Google Drive
  const viewCurriculumVitae = () => {
    window.open("https://drive.google.com/file/d/1CGfqlpzzdNBEXehO8XYSgvUhS4r5jgM9/view?usp=share_link", '_blank');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20"
      ref={scrollRef}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <motion.div
        className="text-center max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6 inline-block" variants={itemVariants}>
          <img 
            src={profileImage} 
            alt="Professional headshot" 
            className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mx-auto border-4 border-primary/20"
          />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="text-primary">Hello, I'm </span>
          <span className="block md:inline">Anjani Dedeepya</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          variants={itemVariants}
        >
          Computer Science & Data Science Student
        </motion.p>
        
        <motion.div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center" variants={itemVariants}>
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={scrollToNext}
          >
            View My Work
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const offset = 80;
                const y = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Contact Me
          </Button>

          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full px-8"
            onClick={viewCurriculumVitae}
          >
            <FileDown className="mr-2 h-4 w-4" />
            View Curriculum Vitae
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full animate-bounce"
          onClick={scrollToNext}
        >
          <ArrowDown />
        </Button>
      </motion.div>
    </section>
  );
}
