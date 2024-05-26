"use client"

import React from "react"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
  const {ref } = useSectionInView("About", 0.99) 

  return (
    <motion.section 
    ref={ref}
    className="mt-[20rem] mb-[7rem] max-w-[45rem] text-center leading-8 scroll-mt-28 font-medium"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175 }}
    id="about"
    >
        <h2 className="text-3xl font-semibold capitalize mb-8">About me</h2>
        <p className="mb-3">
        After my incomplete 4 year tenure at {" "}
        <span className="font-semibold">UCT - BSc Geomatics (Land Surveying) </span>due to financial exclusion, I decided to pursue my
        passion for programming and enrolled in a coding bootcamp called CodeSpace and learned{" "}
        <span className="font-semibold">Front-End Software development</span>.{" "}
        </p>
        <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-semibold">Tailwind CSS, JavaScript, React.js and Node.js. </span>
        I am also familiar with 
        <span className="font-semibold"> TypeScript. </span>
        Presently I am in my first year pursuing a 
        <span className="font-semibold"> BSc in IT specializing in Software Engineering at EDUVOS. </span> 
        I am currently looking for a{" "}
        <span className="font-semibold">internship position as a Front-End software developer.</span>
        </p>
        <p className="mt-5">
        <span className="italic">When I'm not coding</span>, I like to delve into a good fictional read or personal writing. <span className="font-semibold">I love learning and constantly seeking out challenges and opportunities that aid my personal and intellectual growth.</span> 
        </p>    
    </motion.section>
  )
}
