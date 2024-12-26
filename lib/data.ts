import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

// Links Data
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Experiences Data
export interface Experience {
  id: string;
  title: string;
  location: string;
  description: string;
  icon: JSX.Element;
  date: string;
}

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    title: "BSc Geomatics (Geographical Information Systems) - Incomplete",
    location: "University of Cape Town",
    description:
      "I studied Geomatics (Geographical Information Systems) for 2 years before deciding to pursue a career in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: " - ",
  },
  {
    id: "exp-2",
    title: "Graduated CodeSpace Academy Bootcamp",
    location: "Cape Town",
    description:
      "Graduated after 6 months/500 hours of a comprehensive Front-End Software Development program. Achieved a 'Top Performer' distinction.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2023 - Dec 2023",
  },
  {
    id: "exp-3",
    title: "Software Developer Intern",
    location: "CODSOFT - Remote",
    description:
      "Developed and tested applications using React.js, JavaScript, and TailwindCSS. Debugged and resolved bugs to optimize performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Feb 2024",
  },
  {
    id: "exp-4",
    title: "BSc IT - Software Engineering specialization",
    location: "EDUVOS",
    description:
      "1st year studying Software Engineering at EDUVOS. Recognized as a Top 10 Achiever at Bloemfontein Campus. Serving as SRC: Clubs and Societies (2025 tenure).",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  {
    id: "exp-5",
    title: "AI Engagement Analyst Intern",
    location: "EXELERATE - Remote",
    description:
      "Analyzed AI engagement data and trends, providing insights to improve user engagement. Created data visualizations using TensorFlow, PyTorch, Pandas, and Matplotlib. Awarded a 'Star Performer Badge'.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Nov 2024",
  },
];

// Projects Data
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Instascape",
    description:
      "Instascape is a photo-sharing app with editing tools, filters, and social features, built with Next.js for scalability and Tailwind CSS for responsive design.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Appwrite"],
    imageUrl: "/instascape[4].png",
    link: "https://instascape.vercel.app/",
  },
  {
    id: "proj-2",
    title: "The MidNight Podcast",
    description:
      "Instascape is a photo-sharing app with editing tools, filters, and social features, built with Next.js and Tailwind CSS.",
    tags: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    imageUrl: "/midnightpodcast.png",
    link: "https://the-midnight-podcast-app.vercel.app/",
  },
  {
    id: "proj-3",
    title: "Book Connect",
    description:
      "Book Connect helps users discover books through genre and author searches, making exploration simple and intuitive. Features include light and dark modes for a comfortable browsing experience.",
    tags: ["JavaScript", "CSS", "HTML"],
    imageUrl: "/bookconnect.png",
    link: "https://book-connect-phi.vercel.app/",
  },
  {
    id: "proj-4",
    title: "Who the French do you think you are? [Literary Project]",
    description:
      "A creative literary project exploring the mind of a polymath and the secrets of madness.",
    tags: ["Microsoft Word", "English"],
    imageUrl: "/French[2].jpg",
    link: "https://www.dropbox.com/scl/fi/tl1lnx4ityfp5wi5nm800/Who-the-French-do-you-think-you-are.pdf?rlkey=2sghvv222anla9vbekko3eunr&st=x7twmmft&dl=0",
  },
];

// Skills Data
export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export const skillsData: Skills = {
  frontend: ["React", "Next.js", "JavaScript", "HTML", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Python"],
  tools: ["Git", "TypeScript"],
};
