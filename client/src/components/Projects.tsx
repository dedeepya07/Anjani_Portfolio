import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type ProjectCategory = "all" | "web" | "mobile" | "design" | "ui/ux";

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory[];
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "A comprehensive learning management system with interactive courses, quizzes, and progress tracking.",
    category: ["web", "ui/ux"],
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile application for tracking workouts, nutrition, and personal health metrics.",
    category: ["mobile", "design"],
    image: "https://images.unsplash.com/photo-1589592345426-b9e0839ff5c3",
    tags: ["React Native", "Firebase", "Redux", "HealthKit"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Interactive dashboard for visualizing financial data and investment portfolio performance.",
    category: ["web", "design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Vue.js", "D3.js", "TypeScript", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Tool for businesses to track and analyze their social media performance across platforms.",
    category: ["web", "ui/ux"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Angular", "Chart.js", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "AR Shopping Experience",
    description: "Augmented reality application allowing users to visualize products in their space before purchasing.",
    category: ["mobile", "design"],
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    tags: ["Swift", "ARKit", "SceneKit", "CoreML"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Task Management System",
    description: "Collaborative platform for teams to organize projects, assign tasks, and track progress.",
    category: ["web", "ui/ux"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    tags: ["React", "GraphQL", "Apollo", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category.includes(filter)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            My Projects
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, mobile applications, and UI/UX design.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["all", "web", "mobile", "design", "ui/ux"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className="capitalize rounded-full"
              onClick={() => setFilter(category as ProjectCategory)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <CardContent className="flex-grow mt-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full px-3">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
