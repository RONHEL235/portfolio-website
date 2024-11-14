"use client"

import type { SectionName } from '@/lib/types'
import React, {useState, createContext, useContext} from 'react'

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider 
    value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
    // Defines a custom hook `useActiveSectionContext` for easily accessing the context in other components.
    const context = useContext(ActiveSectionContext)
    // Retrieves the context value via `useContext`. 

    if (context === null) {
        // Throws an error if `useActiveSectionContext` is used outside the provider, ensuring context is only accessed within its provider.
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }
    return context
}
