"use client"

import React from 'react'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from "./submit-btn"
import toast from 'react-hot-toast'

export default function Contact() {
  const {ref} = useSectionInView("Contact", 0.99)

  return (
    <motion.section 
    ref={ref}
    id="contact" 
    className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}
    >
    <div className="text-3xl font-medium capitalize mb-8 text-center">Contact me</div>
    <p 
      className="text-gray-700 -mt-2 dark:text-white/80" >Please contact me directly{" "}<a className="underline" href="mailto:roneehelepi70@gmail.com">roneehelepi70@gmail.com</a>{" "}or through this form.
    </p>
    <form 
      className="mt-10 flex flex-col dark:text-black/80"
      action={async (formData) => {
      const { data, error } = await sendEmail(formData)

      if (error) {
        toast.error(error)
        return
      }
      
      toast.success("Email sent successfully!")
    }}>
    <input 
      className="h-14 my-3 rounded-lg borderBlack p-4
      dark:bg-white dark:bg-opacity-80
      dark:focus:bg-opacity-100 transition-all
      dark:outline-none"
      name="senderEmail" 
      type="email"
      required={true}
      maxLength={500}
      placeholder="Your email" 
    />
    <textarea 
      className="h-52 rounded-lg borderBlack p-4
      dark:bg-white dark:bg-opacity-80
      dark:focus:bg-opacity-100 transition-all
      dark:outline-none"
      name="message"
      placeholder="Your message"
      required={true}
      maxLength={5000} 
    />
    <SubmitBtn />
    </form>
    </motion.section>
  )
}
