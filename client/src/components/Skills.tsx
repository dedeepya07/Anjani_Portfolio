import { useRef } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 92, color: "bg-blue-500" },
      { name: "JavaScript", level: 85, color: "bg-yellow-500" },
      { name: "Java", level: 80, color: "bg-orange-600" },
      { name: "C Programming", level: 88, color: "bg-blue-700" },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Machine Learning", level: 90, color: "bg-green-600" },
      { name: "Data Analysis", level: 87, color: "bg-purple-600" },
      { name: "Natural Language Processing", level: 85, color: "bg-pink-500" },
      { name: "Deep Learning", level: 82, color: "bg-indigo-600" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 88, color: "bg-orange-500" },
      { name: "React.js", level: 85, color: "bg-blue-400" },
      { name: "Node.js", level: 80, color: "bg-green-500" },
      { name: "Flask/Django", level: 85, color: "bg-red-600" },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-24 px-6 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Skills & Expertise
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My technical skills and competencies across various technologies, languages, and tools.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="bg-card rounded-lg shadow-sm p-6 border"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-3 h-3 rounded-full ${skill.color}`}></span>
                      <span>{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-card rounded-lg shadow-sm p-8 border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Additional Competencies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "TensorFlow", "PyTorch", "Scikit-learn", "NLTK", "PostgreSQL", "SQL", 
              "R Programming", "Power BI", "Git/GitHub", "AWS", "IoT", "RPA"
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-muted rounded-full py-2 px-4 text-center text-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
