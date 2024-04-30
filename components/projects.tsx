"use client"

import React, { useEffect } from "react"
import { projectsData } from "@/lib/data"
import Project from "./project"
import { useActiveSectionContext } from "@/context/active-section-context"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.65,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
    setActiveSection("Projects")
  }
}, [inView, setActiveSection, timeOfLastClick]) 


  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <div className="text-3xl font-medium capitalize mb-8 text-center">My projects</div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
          ))}
      </div>
    </section>
  )
}
