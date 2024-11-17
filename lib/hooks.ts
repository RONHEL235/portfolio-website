import { useActiveSectionContext } from "@/context/active-section-context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"

export function useSectionInView(sectionName: SectionName, threshold = 0.99) {

  // `useInView` provides a `ref` to attach to the element and tracks whether it's in view
    const { ref, inView } = useInView({
      // Specifies the portion of the element that must be visible to consider it "in view"
        threshold,
      })

      // Retrieves `setActiveSection` to update the active section and `timeOfLastClick` to avoid rapid updates
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
    
      // Effect to update the active section only if the element is in view and a set time has passed since the last click
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName)
      }
    }, [inView, setActiveSection, timeOfLastClick, sectionName])

    return {
        ref
    }
}