import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import midnightpodcast from "@/public/midnightpodcast.png";
import instascape from "@/public/instascape.png";

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
    title: "BSc Geomatics (Land Surveying) - Incomplete",
    location: "University of Cape Town",
    description:
      "Incomplete 4 year tenure.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Graduated CodeSpace Bootcamp",
    location: "Cape Town",
    description:
      "Graduated after 6 months/ 500 hours of a comprehensive Front-End Software Development program.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer Virtual Internship",
    location: "CODSOFT",
    description:
      "I worked as a front-end developer for 1 month. Created software projects for up skilling and experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "BSc IT - Software Engineering specialization",
    location: "EDUVOS",
    description:
      "Currently in my first year enrolled.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Instascape", 
    description:
      "Instascape is a photo-sharing app with editing tools, filters, and social features for sharing and discovering content.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Apprite"],
    imageUrl: instascape,
  },
  {
    title: "The MidNight Podcast",
    description:
      "With Midnight Podcast, you can listen to shows, browse content, and save your favorite episodes.",
    tags: ["React", "Javascript", "HTML", "CSS"],
    imageUrl: midnightpodcast,
  },
  {
    title: "Book Connect",
    description:
      "Book Connect is an app designed for discovering and exploring books with ease. Users can browse and search for books based on genre or author, making it simple to find their next read. The app also includes light and dark mode options, allowing for a personalized and comfortable browsing experience",
    tags: ["Javascript", "CSS", "HTML"],
    imageUrl: instascape,
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
] as const;