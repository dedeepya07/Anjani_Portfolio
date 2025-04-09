import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type ProjectCategory = "all" | "ml" | "web" | "data" | "nlp" | "iot";

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
    title: "Brain Stroke Prediction",
    description: "A machine learning model that predicts brain stroke risks using parameters like age, sex, BMI, and blood sugar, with an interactive web interface for personalized health recommendations.",
    category: ["ml", "web", "data"],
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1974&auto=format&fit=crop",
    tags: ["Python", "Random Forest", "XGBoost", "Flask"],
    githubUrl: "https://github.com/dedeepya07/Brain-Stroke-Prediction-using-ML-Models",
    liveUrl: "",
  },
  {
    id: 2,
    title: "INSAAF Legal Framework",
    description: "An AI-driven legal platform automating various legal procedures with a chatbot for user assistance. Features e-filing, case status tracking, and blockchain technology for data security.",
    category: ["nlp", "web"],
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1974&auto=format&fit=crop",
    tags: ["AI", "Blockchain", "React", "NLP"],
    githubUrl: "https://github.com/dedeepya07/INSAAF",
    liveUrl: "https://youtu.be/8IjmfIf2Vc8?si=OKJpMUpCDKtDG1jt",
  },
  {
    id: 3,
    title: "YouTube Trend Analysis",
    description: "A data analysis project examining YouTube trending videos across different regions. Identifies patterns in content performance and provides insights on optimal posting strategies for content creators.",
    category: ["data", "web"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2674&auto=format&fit=crop",
    tags: ["Data Analysis", "Python", "Visualization", "Pandas"],
    githubUrl: "https://github.com/dedeepya07/Youtube-Analysis",
    liveUrl: "https://youtube-analysis-anjani.streamlit.app/",
  },
  {
    id: 4,
    title: "POSTFIX",
    description: "NLP-based application that addresses incomplete delivery and missing address details. Uses NLTK for parsing and resolving address-related issues in real-time to enhance logistics efficiency.",
    category: ["nlp", "data"],
    image: "https://images.unsplash.com/photo-1614177609973-cb2eab8d8ef2?q=80&w=1974&auto=format&fit=crop",
    tags: ["NLP", "NLTK", "Python", "Geocoding"],
    githubUrl: "https://github.com/dedeepya07/POSTFIX",
    liveUrl: "https://youtu.be/vOiTeDGuuhQ?si=SUPHItiyqmcF-rJt",
  },
  {
    id: 5,
    title: "NAV Analysis",
    description: "A financial analysis system that updates stock market data daily, displays trends using line graphs, and ranks funds based on Sharpe Ratio and NAV. Includes a SIP calculator for investment planning.",
    category: ["data", "web"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Data Analysis", "Financial Modeling", "Visualization", "React"],
    githubUrl: "https://github.com/dedeepya07/NAV-Analysis",
    liveUrl: "",
  },
  {
    id: 6,
    title: "Mental Health Prediction",
    description: "A mental health assessment tool utilizing the DASS-42 questionnaire to identify risk factors and predict potential issues. Features a user-friendly interface providing personalized suggestions.",
    category: ["ml", "data", "web"],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2187&auto=format&fit=crop",
    tags: ["Machine Learning", "Psychology", "Data Analysis", "Web App"],
    githubUrl: "https://github.com/dedeepya07/DASS-42-Mental-Health-Prediction",
    liveUrl: "",
  },
  {
    id: 7,
    title: "WISER: Women's Health Screening",
    description: "A women's health tool leveraging health indicators to assess early menopause risk. Uses unsupervised learning with Hierarchical Clustering and Gaussian Mixture Models for 95% accuracy in risk profiling.",
    category: ["ml", "data"],
    image: "https://images.unsplash.com/photo-1628921919890-edee424ce317?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unsupervised Learning", "Healthcare", "GMM", "Visualization"],
    githubUrl: "https://colab.research.google.com/drive/1LguGEomj04bML8s_DxYz0BmB8ylm7Ugc?usp=sharing",
    liveUrl: "",
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
            Explore my portfolio showcasing innovative projects in machine learning, data science, NLP, and IoT.
            Each project demonstrates my technical skills and passion for solving real-world problems.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["all", "ml", "web", "data", "nlp", "iot"].map((category) => (
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
                        GitHub
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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
