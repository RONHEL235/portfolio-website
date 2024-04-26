import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Project from "./project"

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
