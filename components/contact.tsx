import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section 
    id="contact" 
    className="mb-20 sm:mb-28 w-[min(100%, 38rem)]">
    <div className="text-3xl font-medium capitalize mb-8 text-center">Contact me</div>
    <p className="text-gray-700">Please contact me directly{" "}<a className="underline" href="mailto:roneehelepi70@gmail.com">roneehelepi70@gmail.com</a>{" "}or through this form.</p>
    <form className="mt-10 flex flex-col">
      <input className="h-14 rounded-lg borderBlack" 
      type="email" />
      <textarea className="h-52 my-3 rounded-lg borderBlack p-4" />
      <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
      focus:scale-110 hover:scale-110 hover:bg-gray active:scale-105"
      type="submit">Submit 
      <FaPaperPlane 
      className="text-xs opacity-70 transition-all
      group-hover:translate-x-1
      group-hover:-translate-y-1" />{" "}
      </button>
    </form>
    </section>
  )
}
