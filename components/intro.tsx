"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"

export default function Intro() {
    return (
        <section className=" absolute top-28 text-center mb-28 max-w-[50rem] sm:mb-0">
            <div className=" flex items-center justify-center">
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
                        src="/Profile.jpg" 
                        alt="Ronee Helepi Potrait"
                        width="150"
                        height="150"
                        quality="92"
                        priority={true}
                        className="border-cover border-[0.2rem] border-white"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0}}
            >
                <span className="font-bold">Hello, I'm Ronee Helepi.</span> I'm a{" "}
                <span className="font-bold">Front-End developer</span> with{" "}
                <span className="font-bold">1 year</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.  
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#contact" 
                className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 outline-none
                focus:scale-110 hover:scale-110
                hover:bg-gray-800 active:scale-105
                transition">
                    Contact me here <BsArrowRight 
                    className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>
                <a className="group bg-white px-7 py-3 flex items-center gap-2 outline-none
                focus:scale-110 hover:scale-110
                active:scale-105
                transition
                cursor-pointer border border-black/50"
                href="/CV.pdf" download={true}>
                    Download CV <HiDownload
                    className="opacity-60"
                    />
                </a>
                <a className="bg-white p-4 text-gray-800 flex items-center gap-2 focus:scale-110 hover:scale-110
                active:scale-105
                transition
                cursor-pointer border border-black/50">
                    <BsLinkedin/>
                </a>
                <a className="bg-white p-4 text-gray-800 flex items-center gap-2 text-[1.3rem] focus:scale-110 hover:scale-110
                active:scale-105
                transition
                cursor-pointer border border-black/50">
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}