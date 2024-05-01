"use client"

import React from "react"
import { projectsData } from "@/lib/data"
import Project from "./project"
import { useSectionInView } from "@/lib/hooks"

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.65) 

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-[8rem]">
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
