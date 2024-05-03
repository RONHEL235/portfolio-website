"use client"

import React from 'react'
import { experiencesData } from '@/lib/data'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export default function Experience() {
  return (
    <section 
        id="experience" >
        <div className="text-3xl font-medium capitalize mb-8 text-center">Experience</div>
        <VerticalTimeline>
            {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    
                    <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background: "#f3f4f6",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem"
                    }}
                    contentArrowStyle={{
                        borderRight: "0.4rem solid #9ca3af",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background: "white",
                        fontSize: "1.5rem",
                    }}
                    >
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="font-normal !mt-0">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
    </section>
  ) 
}
