import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience";
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    organization: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Lead the frontend development team in building scalable and performant web applications. Implemented modern React patterns and mentored junior developers.",
    type: "experience",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    organization: "InnovateSoft",
    period: "2018 - 2021",
    description: "Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with designers to implement responsive UI/UX designs and RESTful APIs.",
    type: "experience",
  },
  {
    id: 3,
    title: "Master's in Computer Science",
    organization: "Stanford University",
    period: "2016 - 2018",
    description: "Specialized in Human-Computer Interaction and Advanced Web Technologies. Completed thesis on 'Progressive Web Applications for Enhanced User Experience'.",
    type: "education",
  },
  {
    id: 4,
    title: "Junior Web Developer",
    organization: "Digital Solutions Ltd.",
    period: "2015 - 2018",
    description: "Developed and maintained client websites using JavaScript, HTML/CSS, and PHP. Worked directly with clients to implement feature requests and fix bugs.",
    type: "experience",
  },
  {
    id: 5,
    title: "Bachelor's in Computer Science",
    organization: "University of California, Berkeley",
    period: "2011 - 2015",
    description: "Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development.",
    type: "education",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Experience & Education
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted/70"></div>

          {timelineItems.map((item, index) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className={`relative z-10 mb-12 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`bg-card border rounded-lg p-6 shadow-sm ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === "education" ? (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    ) : (
                      <Briefcase className="h-5 w-5 text-primary" />
                    )}
                    <span className="text-sm uppercase text-muted-foreground">{item.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="text-primary font-medium mt-1">{item.organization}</div>
                  <div className="text-sm text-muted-foreground mt-1 mb-3">{item.period}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
