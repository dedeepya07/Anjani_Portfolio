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
    title: "JavaScript Intern",
    organization: "Demy Software Solutions",
    period: "June 2024 - July 2024",
    description: "Developed interactive web applications using JavaScript, React.js, and Node.js, improving user engagement by 30%. Optimized website speed by reducing load times by 40% and integrated RESTful APIs for seamless data flow.",
    type: "experience",
  },
  {
    id: 2,
    title: "Space Research Intern",
    organization: "Agnirva by ISRO",
    period: "Oct 2024 - Dec 2024",
    description: "Worked on aerospace projects under ISRO Agnirva, gaining hands-on experience in the space sector. Enhanced problem-solving skills and technical expertise while contributing to innovative aerospace solutions.",
    type: "experience",
  },
  {
    id: 3,
    title: "B.Tech CSE (Data Science) Honours",
    organization: "Nadimpalli Satyanarayana Raju Institute of Technology",
    period: "2022 - Present",
    description: "Maintaining a 9.0/10.0 CGPA, positioned in the top 10% of the department. Coursework includes Machine Learning, Data Science, Computer Networks, Database Systems, and more.",
    type: "education",
  },
  {
    id: 4,
    title: "Hackathon Achievement",
    organization: "HackToImpact (GVPCE, Visakhapatnam)",
    period: "2023",
    description: "Secured 3rd position in the national-level hackathon 'HackToImpact'. Also achieved 3rd place in 'Hack with Vizag' and 2nd place in the ideathon competition on Engineer's Day.",
    type: "experience",
  },
  {
    id: 5,
    title: "Indian School Certificate (ISC) - XII",
    organization: "Alwardas Public School, Visakhapatnam",
    period: "2022",
    description: "Achieved 85% in the ISC Class XII examinations. Participated in various extracurricular activities and developed foundational knowledge in computer science.",
    type: "education",
  },
  {
    id: 6,
    title: "CBSE - X",
    organization: "Little Angels School, Visakhapatnam",
    period: "2020",
    description: "Scored 94% in the CBSE Class X examinations, demonstrating strong academic foundation and consistent performance in all subjects.",
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
