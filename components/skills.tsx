"use client";

import React from "react";
import { skillsData } from "@/lib/data"; // Assuming this is where the skills data is imported from
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Type definition for skillsData
interface SkillsData {
  [category: string]: string[]; // Each category is a string array of skills
}

// Animation variants for fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.99);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-[2.5rem] max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <div className="text-3xl font-medium capitalize mb-8 text-center">
        My Skills
      </div>
      <div className="flex flex-col gap-6">
        {Object.entries(skillsData).map(
          ([category, skills]: [string, string[]], catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-semibold capitalize mb-4">
                {category === "frontend"
                  ? "Frontend Development"
                  : category === "backend"
                  ? "Backend Development"
                  : "Tools"}
              </h3>
              <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skills.map((skill: string, skillIndex) => (
                  <motion.li
                    className="bg-white borderBlack/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                    key={skillIndex}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={skillIndex}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
}
