import React from "react"
import Image from "next/image"

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div>
                    <Image 
                    src="/Profile.jpg" 
                    alt="Ronee Helepi Potrait"
                    width="150"
                    height="150"
                    quality="92"
                    priority={true}
                    className="border-cover border-[0.2rem] border-white"
                    />
                </div>
            </div>
        </section>
    )
}