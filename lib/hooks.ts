import { useActiveSectionContext } from "@/context/active-section-context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"

export function useSectionInView(sectionName: SectionName, threshold = 0.99) {
    const { ref, inView } = useInView({
        threshold,
      })

      // Retrieves `setActiveSection` to update the active section and `timeOfLastClick` to avoid rapid updates
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName)
      }
    }, [inView, setActiveSection, timeOfLastClick, sectionName])

    return {
        ref
    }
}