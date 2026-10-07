export interface SiteConfig {
  name: string;
  role: string;
  university: string;
  location: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  availability: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
  bannedWords: string[];
}

export const siteConfig: SiteConfig = {
  name: "Makrand Ghodke",
  role: "M.Sc. ICE · Machine Learning & AI",
  university: "TU Darmstadt",
  location: "Darmstadt, Germany",
  eyebrow: "M.Sc. ICE · TU Darmstadt · Machine Learning & AI",
  headline: "I build machine learning systems that work outside the notebook.",
  subheadline:
    "I'm a master's student at TU Darmstadt looking for a Werkstudent or HiWi role in ML, AI or Data Science. I've built a real-time computer vision app with a university team and a production full-stack app on my own.",
  availability: "Available now · 20 h/week during semester · Remote or on-site",
  contact: {
    email: "makrandghodke02@gmail.com",
    linkedin: "https://linkedin.com/in/makrand-ghodke",
    github: "https://github.com/MakrandGhodke",
    location: "Darmstadt, Germany",
  },
  navigation: [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Changelog", href: "/changelog" },
  ],
  bannedWords: [
    "passionate",
    "leverage",
    "synergy",
    "results-driven",
    "team player",
    "cutting-edge",
    "seamless",
  ],
};

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "ML / AI",
    skills: [
      "PyTorch",
      "CLIP",
      "FAISS",
      "Computer Vision",
      "Vector Embeddings",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Node.js", "Express", "REST", "Docker (familiar)"],
  },
  {
    category: "Frontend / Mobile",
    skills: ["Next.js", "React", "Flutter/Dart", "Tailwind"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MySQL", "Supabase", "SQLite"],
  },
  {
    category: "Tools",
    skills: ["Git", "Jupyter", "Vercel", "Agile/Scrum"],
  },
];

export interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  badge?: string;
}

export const timelineItems: TimelineItem[] = [
  {
    type: "education",
    title: "M.Sc. Information & Communication Engineering",
    organization: "TU Darmstadt",
    period: "Oct 2024 – present",
    location: "Darmstadt, Germany",
    description: "Courses: Introduction to AI, Data Science 1 & 2, Explainable and Ethical AI",
    badge: "Current",
  },
  {
    type: "education",
    title: "B.Tech Electronics & Telecommunication",
    organization: "Bharati Vidyapeeth Deemed University",
    period: "2020 – 2023",
    location: "Pune, India",
    description: "CGPA 9.06 / 10. Graduated with First Class with Distinction.",
  },
  {
    type: "experience",
    title: "Web Developer Intern",
    organization: "Exposys Data Labs",
    period: "Jul – Aug 2022",
    description: "Developed and maintained responsive web applications and frontend user workflows.",
  },
  {
    type: "experience",
    title: "Operations Support Technician",
    organization: "Flextronics Technologies",
    period: "Jul – Dec 2021",
    description: "Monitored operational support tickets, handled technical diagnostics, and assisted system maintenance.",
  },
];

export interface LanguageProficiency {
  language: string;
  level: string;
}

export const languageProficiencies: LanguageProficiency[] = [
  { language: "English", level: "C1" },
  { language: "German", level: "A2–B1" },
  { language: "Hindi", level: "Native" },
  { language: "Marathi", level: "Native" },
];
