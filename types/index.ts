import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: IconType;
  category: "frontend" | "tools" | "backend";
  level: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}
