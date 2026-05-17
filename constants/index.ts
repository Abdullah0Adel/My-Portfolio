import { NavItem, Project, Skill, Service } from "@/types";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaLaptopCode, 
  FaChartLine,
  FaShoppingCart,
  FaLink, 
  FaCog, 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";


import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiStrapi,
  SiAxios,
} from "react-icons/si";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", icon: FaHtml5, category: "frontend", level: 95 },
  { name: "CSS3", icon: FaCss3Alt, category: "frontend", level: 92 },
  { name: "JavaScript", icon: FaJs, category: "frontend", level: 90 },
  { name: "TypeScript", icon: SiTypescript, category: "frontend", level: 85 },
  { name: "React.js", icon: FaReact, category: "frontend", level: 92 },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend", level: 88 },
  { name: "Redux Toolkit", icon: SiRedux, category: "frontend", level: 82 },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", level: 90 },
  { name: "Bootstrap", icon: FaBootstrap, category: "frontend", level: 85 },
  { name: "Strapi", icon: SiStrapi, category: "backend", level: 75 },
  { name: "REST APIs", icon: SiAxios, category: "backend", level: 88 },
  { name: "Git & GitHub", icon: FaGithub, category: "tools", level: 88 },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Responsive Websites",
    description:
      "Pixel-perfect, mobile-first websites that look stunning across all devices and screen sizes.",
    icon: FaLaptopCode,
    features: [
      "Mobile-first design",
      "Cross-browser compatibility",
      "Performance optimized",
      "SEO friendly",
    ],
  },
  {
    id: 2,
    title: "Dashboards",
    description:
      "Complex data visualization dashboards with real-time updates, charts, and interactive UI.",
    icon: FaChartLine,
    features: [
      "Real-time data",
      "Interactive charts",
      "Custom analytics",
      "Role-based access",
    ],
  },
  {
    id: 3,
    title: "E-commerce Applications",
    description:
      "Full-featured online stores with cart, checkout, payments, and inventory management.",
    icon: FaShoppingCart,
    features: [
      "Payment integration",
      "Product management",
      "Order tracking",
      "Secure checkout",
    ],
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Seamless integration with third-party APIs, REST services, and backend systems.",
    icon: FaLink,
    features: [
      "RESTful APIs",
      "Authentication",
      "Error handling",
      "Data caching",
    ],
  },
  {
    id: 5,
    title: "Admin Panels",
    description:
      "Powerful admin interfaces with CRUD operations, user management, and analytics.",
    icon: FaCog,
    features: [
      "User management",
      "CRUD operations",
      "Permission system",
      "Activity logs",
    ],
  },
];
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Zone7 Store",
    description:
      "Developed a responsive sportswear e-commerce platform featuring product browsing, category-based shopping, and a smooth user experience for customers.",
    image:
      "/images/Zone7.png",
    technologies: ["React.js", "JavaScript", "Context Api", "Bootstrap",],
    liveUrl: "https://zone7.netlify.app/",
    githubUrl: "https://github.com/Abdullah0Adel/Ecommerce-zone7-",
    featured: true,
  },
  {
    id: 2,
    title: "Bookrain Store",
    description:"Developed a responsive online bookstore platform with seamless product browsing, shopping cart functionality, and an intuitive user experience for customers.",
    image:
      "/images/bookstore.png",
    technologies: ["React.js", "JavaScript", "Context API", "REST APIs", "Bootstrap" ],
    liveUrl: "https://book-store-25.netlify.app/",
    githubUrl: "https://github.com/Abdullah0Adel/Bookstore",
    featured: true,
  },
  {
    id: 3,
    title: "Cure",
    description:
      "Developed a healthcare appointment platform that allows patients to book doctor appointments, manage schedules, and communicate with doctors through a seamless and user-friendly experience.",
    image:
      "/images/Cure.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST APIs",],
    liveUrl: "https://r7-react-cure-2-8lbg.vercel.app",
    githubUrl: "https://github.com/Huma-volve/R7-React-Cure-2",
  },
/*   {
    id: 4,
    title: "TaskFlow Pro",
    description:
      "A Jira-inspired project management app with drag-and-drop boards, sprint planning, time tracking, and team collaboration features built entirely with React.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: ["React.js", "Redux Toolkit", "TypeScript", "Bootstrap"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  }, */
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Abdullah0Adel", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdullah-adel-67aa61220", icon: FaLinkedin },
  { label: "Email", href: "mailto:hello@developer.com", icon: FaEnvelope },
];
