import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus()

  return (
    <button 
        className="group flex items-center justify-center my-4 gap-2 h-[3rem] w-[8rem] bg-black/50 text-white rounded-lg outline-none transition-all
        focus:scale-110 hover:scale-110 hover:bg-gray active:scale-80 disabled:scale-100 disabled:bg-opacity-75 dark:bg-white/10"
        type="submit"
        disabled={pending}
        >
        {pending? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>) : (
            <>
                Submit 
                <FaPaperPlane
                className="text-xs opacity-70 transition-all
                group-hover:translate-x-1
                group-hover:-translate-y-1" />{" "}  
            </>
        )}
      </button>
  )
}
