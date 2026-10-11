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
      "Model Evaluation",
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
    skills: ["FastAPI", "REST APIs", "Node.js", "Docker (familiar)", "pytest", "Render"],
  },
  {
    category: "Frontend / Mobile",
    skills: ["Next.js", "React", "Flutter/Dart", "Tailwind CSS"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL (Supabase)", "SQL", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    skills: ["GitHub Actions (CI)", "Git", "GitHub", "Jupyter", "Vercel", "Agile/Scrum"],
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
    period: "Oct 2024 – expected autumn 2027",
    location: "Darmstadt, Germany",
    description: "Focus: AI and machine learning. Courses: Introduction to AI, Data Science 1 & 2, Explainable and Ethical AI.",
    badge: "Current",
  },
  {
    type: "education",
    title: "B.Tech Electronics & Telecommunication",
    organization: "Bharati Vidyapeeth Deemed University",
    period: "Nov 2020 – Jul 2023",
    location: "Pune, India",
    description: "CGPA 9.06 / 10. Graduated with First Class with Distinction.",
  },
  {
    type: "experience",
    title: "Web Developer Intern",
    organization: "Exposys Data Labs",
    period: "Jul – Aug 2022",
    description: "Built and tested responsive web pages (HTML, CSS, JavaScript) across Chrome, Firefox, Safari, and Edge in an Agile team of five.",
  },
  {
    type: "experience",
    title: "Operations Support Technician",
    organization: "Flextronics Technologies",
    period: "Jul – Dec 2021",
    description: "Redesigned production Excel data reporting tools, decreasing manual entry errors and establishing unified team metrics.",
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
