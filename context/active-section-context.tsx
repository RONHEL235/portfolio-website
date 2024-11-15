"use client"

import type { SectionName } from '@/lib/types'
// Imports the `SectionName` type, likely a TypeScript union type or string type for specific section names (e.g., "Home", "About").

import React, {useState, createContext, useContext} from 'react'
// Imports React and specific hooks: `useState` for managing component state, `createContext` to create a context for the active section, and `useContext` for consuming that context.

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}
// Defines TypeScript type for props of the `ActiveSectionContextProvider` component, where `children` represents any nested components.


// Defines a TypeScript type for the shape of the context's value.
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
    // Returns the context value, allowing components to use and update `activeSection` and `timeOfLastClick`.
}
