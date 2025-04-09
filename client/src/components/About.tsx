import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 px-6 bg-background"
    >
      <motion.div 
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            About Me
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="relative">
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
              alt="Alex working on a project" 
              className="rounded-lg shadow-xl z-10 relative"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">
              I'm Alex, a <span className="text-primary">passionate developer</span> with a creative edge
            </h3>
            <p className="text-muted-foreground mb-6">
              As a full-stack developer with 5+ years of experience, I've crafted digital solutions 
              that combine elegant design with powerful functionality. My journey in tech has been 
              driven by curiosity and a desire to solve real-world problems through code.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in React, Node.js, and modern web technologies, with a keen interest in 
              creating accessible, responsive, and performant applications. When I'm not coding, 
              you'll find me hiking, reading sci-fi novels, or experimenting with new technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">alex@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Study</h4>
                <p className="text-muted-foreground">Stanford University</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Degree</h4>
                <p className="text-muted-foreground">Computer Science</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
