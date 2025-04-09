import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, Users, Code, Monitor, Brain } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  organization: string;
  description: string;
  type: "certification" | "workshop" | "publication" | "membership" | "community";
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Programming in Python",
    organization: "Self-paced learning",
    description: "Certification course on Python programming including Django framework.",
    type: "certification"
  },
  {
    id: 2,
    title: "Robotic Process Automation",
    organization: "Workshop",
    description: "Attended workshop on Robotic Process Automation (RPA) technologies and implementations.",
    type: "workshop"
  },
  {
    id: 3,
    title: "Power BI",
    organization: "Workshop",
    description: "Workshop on data visualization and business intelligence using Microsoft Power BI.",
    type: "workshop"
  },
  {
    id: 4,
    title: "Generative AI",
    organization: "Workshop",
    description: "Workshop on Generative AI and its applications in various domains.",
    type: "workshop"
  },
  {
    id: 5,
    title: "Interpersonal and Intrapersonal Communication",
    organization: "Workshop",
    description: "Workshop focusing on developing effective communication skills for professional environments.",
    type: "workshop"
  },
  {
    id: 6,
    title: "Expanding Cybersecurity with Advanced Machine Learning",
    organization: "IJIRCCE",
    description: "Published a review paper on machine learning applications in cybersecurity.",
    type: "publication"
  },
  {
    id: 7,
    title: "Google Developers Group (Vizag)",
    organization: "GDG",
    description: "Active member of Google Developers Group Visakhapatnam.",
    type: "membership"
  },
  {
    id: 8,
    title: "IEEE Membership",
    organization: "IEEE",
    description: "Member of IEEE, one of the most prestigious professional organizations for engineers and technologists.",
    type: "membership"
  },
  {
    id: 9,
    title: "ISTE Membership",
    organization: "ISTE",
    description: "Member of Indian Society for Technical Education.",
    type: "membership"
  },
  {
    id: 10,
    title: "Generative AI Mastery",
    organization: "IIT Hyderabad",
    description: "Participated in workshop on Generative AI Mastery conducted by IIT Hyderabad.",
    type: "workshop"
  },
  {
    id: 11,
    title: "Community Service",
    organization: "Health Awareness Program",
    description: "Completed 8 weeks of community service, raising awareness about health issues in pre-teens, conducted surveys and organized health camps.",
    type: "community"
  }
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  const getIcon = (type: string) => {
    switch (type) {
      case "certification":
        return <FileText className="w-5 h-5" />;
      case "workshop":
        return <BookOpen className="w-5 h-5" />;
      case "publication":
        return <FileText className="w-5 h-5" />;
      case "membership":
        return <Users className="w-5 h-5" />;
      case "community":
        return <Users className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "certification":
        return "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100";
      case "workshop":
        return "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
      case "publication":
        return "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100";
      case "membership":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
      case "community":
        return "bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Certifications & Activities
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Exploring continuous learning through workshops, certifications, publications, and community involvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{certification.title}</h3>
                    <Badge variant="outline" className="capitalize">
                      <span className="mr-1.5">{getIcon(certification.type)}</span>
                      {certification.type}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">{certification.organization}</p>
                  <p className="text-muted-foreground text-sm">{certification.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}