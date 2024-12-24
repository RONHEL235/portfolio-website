"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={`View more details about ${title}`}
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/10 overflow-hidden sm:pr-4 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-300 transition sm:group-even:pl-[2rem] dark:bg-white/10 dark:hover:bg-white/20">
          <div className="flex flex-col sm:flex-row sm:group-even:flex-row-reverse items-center sm:items-start">
            {/* Image Section */}
            <div className="relative sm:w-[20rem] sm:h-[15rem]">
              <Image
                src={imageUrl}
                alt={`${title} preview image`}
                fill
                className="rounded-lg shadow-2xl object-cover transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
              />
            </div>
            {/* Text Content */}
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed font-medium">{description}</p>
              <ul className="flex flex-wrap mt-4 gap-3 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </a>
    </motion.div>
  );
}
