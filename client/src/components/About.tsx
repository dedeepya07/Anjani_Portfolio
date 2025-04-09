import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import aiDataScienceImg from "@/assets/ai_data_science.svg";

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
              src={aiDataScienceImg} 
              alt="Data Science, AI and Machine Learning visualization" 
              className="rounded-lg shadow-xl z-10 relative"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">
              I'm Anjani, a <span className="text-primary">passionate</span> Computer Science student with data science expertise
            </h3>
            <p className="text-muted-foreground mb-6">
              As a junior undergraduate in Computer Science and Engineering with a specialization in Data Science,
              I'm dedicated to creating innovative solutions using cutting-edge technologies. I've consistently maintained
              a strong academic record with a CGPA of 9.0/10.0, earning a place in the top 10% of my department.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in Machine Learning, Natural Language Processing, and Web Development, with a keen interest in 
              creating intelligent systems that solve real-world problems. My diverse project portfolio spans healthcare, 
              legal tech, finance, and smart city solutions, reflecting my versatility and passion for technology.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">Visakhapatnam, India</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">siripurapuanjani@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">University</h4>
                <p className="text-muted-foreground">NSRIT, Visakhapatnam</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Degree</h4>
                <p className="text-muted-foreground">B.Tech CSE (Data Science)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
