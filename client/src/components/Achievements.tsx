import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Bookmark, Medal, Crown } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: "award" | "trophy" | "star" | "bookmark" | "medal" | "crown";
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Honours Degree",
    description: "Awarded Honours degree for securing position in the top 10% of the Computer Science and Engineering (Data Science) department at NSRIT.",
    icon: "award"
  },
  {
    id: 2,
    title: "Hackathon Achievement",
    description: "Secured 3rd position in the national-level hackathon 'HackToImpact' (GVPCE, Visakhapatnam). Also achieved 3rd place in 'Hack with Vizag' and 2nd place in the ideathon competition on Engineer's Day.",
    icon: "trophy"
  },
  {
    id: 3,
    title: "Paper Presentation",
    description: "Recognized for exceptional performance in a paper presentation on 'Software Engineering Association Day' (NSRIT, Visakhapatnam).",
    icon: "bookmark"
  },
  {
    id: 4,
    title: "Internal Smart India Hackathon",
    description: "Secured 1st place in the Internal Smart India Hackathon.",
    icon: "crown"
  },
  {
    id: 5,
    title: "Enterprising Bharat",
    description: "Selected among top 20 teams from 500 for mentoring under 'Enterprising Bharat' (sponsored by Grameena Incubation Center).",
    icon: "trophy"
  },
  {
    id: 6,
    title: "Project Expo Winner",
    description: "Won 1st place in Project Expo conducted for 'Technimble 2k25'.",
    icon: "medal"
  },
];

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-6 h-6 text-primary" />;
      case "trophy":
        return <Trophy className="w-6 h-6 text-primary" />;
      case "star":
        return <Star className="w-6 h-6 text-primary" />;
      case "bookmark":
        return <Bookmark className="w-6 h-6 text-primary" />;
      case "medal":
        return <Medal className="w-6 h-6 text-primary" />;
      case "crown":
        return <Crown className="w-6 h-6 text-primary" />;
      default:
        return <Award className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section
      id="achievements"
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
            Achievements & Awards
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Recognitions and accomplishments that highlight my dedication, skills, and contributions in various academic and technical competitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      {getIcon(achievement.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}