"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Intro() {
    const {ref } = useSectionInView("Home", 0.99)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    return (
        <section
        ref={ref}
        id="home" 
        className="scroll-mt-[100rem] absolute top-[9.3rem] text-center mb-30 max-w-[50rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image 
                        src="/Profile_Head.jpg" 
                        alt="Ronee Helepi Potrait"
                        width="150"
                        height="150"
                        quality="92"
                        priority={true}
                        className="border-cover border-[0.2rem] border-white dark:border-white/40"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0}}
            >
                <p>
                    <span className="font-bold">Hi, I'm Ronee Helepi. A Front-End developer creating functional sites and apps with React (Next.js).</span> {" "}
                </p>
                <p>
                    <span className="font-bold">
                    Let’s build something amazing! 
                    </span> {" "}
                </p>
            </motion.h1>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium sm:mb-10"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#contact" 
                className="group bg-white px-7 py-3 flex items-center gap-2 outline-none
                focus:scale-110 hover:scale-110
                hover:bg-white active:scale-105
                transition
                dark:bg-white/10"
                onClick={() => {
                    setActiveSection("Contact")
                    setTimeOfLastClick(Date.now())
                }}>
                    Contact me here <BsArrowRight 
                    className="opacity-60 group-hover:translate-x-1 transition"/>
                </Link>
                <a className="group bg-white px-7 py-3 flex items-center gap-2 outline-none
                focus:scale-110 hover:scale-110
                active:scale-105
                transition
                cursor-pointer borderBlack
                dark:bg-white/10"
                href="/CV.pdf" download={true}>
                    Download CV <HiDownload
                    className="opacity-60"
                    />
                </a>
                <a className="bg-white p-4 text-gray-800 flex items-center gap-2 focus:scale-110 hover:scale-110
                active:scale-105
                transition
                cursor-pointer borderBlack
                dark:bg-white/10 dark:text-white/95"
                href="https://linkedin.com" target="_blank">
                    <BsLinkedin/>
                </a>
                <a className="bg-white p-4 text-gray-800 flex items-center gap-2 text-[1.3rem] focus:scale-110 hover:scale-110
                active:scale-105
                transition
                cursor-pointer borderBlack
                dark:bg-white/10 dark:text-white/95"
                href="https://github.com/RONHEL235" target="_blank">
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}