import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import midnightpodcast from "public/midnightpodcast.png";
import instascape from "public/instascape.png";
import bookconnect from "public/bookconnect.png";
import french from "public/French[2].jpg";
import { link } from "fs";
 

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

export const experiencesData = [
  {
    title: "BSc Geomatics (Geographical Information Systems) - Incomplete",
    location: "University of Cape Town",
    description:
      "I studied Geomatics (Geographical Information Systems) for 3 years before deciding to pursue a career in Software Engineering.", 
    icon: React.createElement(LuGraduationCap),
    date: " - ",
  },
  {
    title: "Graduated CodeSpace Academy Bootcamp",
    location: "Cape Town",
    description:
      "Graduated after 6 months/ 500 hours of a comprehensive Front-End Software Development program.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023 - December 2023",
  },
  {
    title: "Software Developer Intern",
    location: "CODSOFT - Remote",
    description:
      "Developed, and tested applications using React.js, JavaScript, TailwindCSS. Debugging and Troubleshooting: Identified and resolved bugs and performance issues to ensure optimal application performance.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - February 2024 ",
  },
  {
    title: "BSc IT - Software Engineering specialization",
    location: "EDUVOS",
    description: "1st year studying Software Engineering at EDUVOS. Top 10 Acheiver Bloemfontein Campus *. SRC: Clubs and Societies (2025 turnure)",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present ",
  },
  {
    title: "AI Engagement Analyst Intern",
    location: "EXELERATE - Remote",
    description:
      "Analyzed AI engagement data and provided insights to improve user engagement. Analyzed trends in student engagement and visualized key insights using Python libraries [TensorFlow, PyTorch, Pandas, Matplotlib]. Star Performer Badge*.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2024 - November 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Instascape", 
    description:
      "Instascape is a photo-sharing app with editing tools, filters, and social features for sharing and discovering content.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Apprite"],
    imageUrl: instascape,
    link: "https://superlative-otter-0b4d14.netlify.app/",  
    },
  {
    title: "The MidNight Podcast",
    description:
      "With Midnight Podcast, you can listen to shows, browse content, and save your favorite episodes.",
    tags: ["React", "Vite", "Javascript", "HTML", "CSS"],
    imageUrl: midnightpodcast,
    link: "https://the-midnight-podcast-app.vercel.app/",
  },
  {
    title: "Book Connect",
    description:
      "Book Connect helps users discover books through genre and author searches, making exploration simple and intuitive. It also features light and dark modes for a comfortable browsing experience.",
    tags: ["Javascript", "CSS", "HTML"],
    imageUrl: bookconnect,
    link: "https://book-connect-phi.vercel.app/",
  },
  {
    title: "Who the French do you think you are? [Literary Project]",
    description:
      "Take a tour inside the mind of a polymath, and discover the secrets of madness.",
    tags: ["Microsoft Word", "English"], 
    imageUrl: french,
    link: "https://www.dropbox.com/scl/fi/k8xr4iy3g34mb6ofixk5q/Who-the-ef-do-you-think-you-are.pdf?rlkey=i5wy7w4i6u6i4az5qhuwwid48&st=bof3pn67&dl=0",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Framer Motion",
  "Python",
] as const;