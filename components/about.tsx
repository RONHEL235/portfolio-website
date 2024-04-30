"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.99,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
    setActiveSection("About")
  }
}, [inView, setActiveSection, timeOfLastClick]) 

  return (
    <motion.section 
    ref={ref}
    className="mt-[17rem] mb-[7rem] max-w-[45rem] text-center leading-8 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175 }}
    id="about"
    >
        <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
        <p className="mb-3">
        After my incomplete 4 year tenure at {" "}
        <span className="font-medium">UCT - BSc Geomatics (Land Surveying) due to financial exclusion</span>, I decided to pursue my
        passion for programming and enrolled in a coding bootcamp called CodeSpace and learned{" "}
        <span className="font-medium">Front-End Software development</span>.{" "}
        </p>
        <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">Tailwind CSS, JavaScript, React.js and Node.js. </span>
        I am also familiar with 
        <span className="font-medium"> TypeScript and GraphQL. </span>
        Presently I am in my first year pursuing a 
        <span className="font-medium"> BSc in IT specializing in Software Engineering at Eduvos. </span> 
        I am currently looking for a{" "}
        <span className="font-medium">internship position as a Front-End software developer.</span>
        </p>
        <p className="mt-5">
        <span className="italic">When I'm not coding</span>, I like to delve into a good fictional read or personal writing. I love learning, and presently I am learning about philosophy and history. 
        </p>    
    </motion.section>
  )
}
