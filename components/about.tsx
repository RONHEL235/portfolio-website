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
        <span className="font-semibold">I am a problem-solving enthusiast who swapped surveying the land for surveying code.{" "}After an incomplete BSc Geomatics (Geographical Information Systems) turnure at UCT, life redirected me to what I love most — programming. I dove into a coding bootcamp at CodeSpace Academy, mastering the art of Front-End Software Development with tools like JavaScript, React.js, Tailwind CSS, and Node.js (plus a splash of TypeScript). </span>{" "}
        </p>
        <p>
        <span className="font-semibold">Now, I am pursuing a BSc in IT specializing in Software Engineering at EDUVOS and am on the hunt for a Software Developer internship where I can put my skills (and wit) to good use. </span>
        </p>
        <p className="mt-5">
        <span className="font-semibold">When I am not debugging, you will find me lost in a fictional universe or scribbling down thoughts—always curious, always learning, and always up for a challenge.</span> 
        </p>    
    </motion.section>
  )
}
