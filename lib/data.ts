import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TheMidnightPodcast from "@/The Midnight Podcast.PNG";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "MidNight Podcast",
    description:
      "This was my final capstone project during my bootcamp at Codespace Academy, the experience was too exiting and I learned ,so much, .",
    tags: ["React", "Javascript", "HTML", "CSS"],
    image: TheMidnightPodcast,
  },
  {
    title: "instascape",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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