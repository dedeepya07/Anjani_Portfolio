export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience";
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
