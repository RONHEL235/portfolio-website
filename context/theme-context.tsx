"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

// Defining the shape of the context data that will be shared: a `theme` string and a `toggleTheme` function.

type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void,
}

// Creating the context with an initial value of null. This context will hold the theme and toggle function.

const ThemeContext = createContext<ThemeContextType | null>(null)

// Main provider component for the theme context, wrapping its children with the shared context value.

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light") 

    // Toggles the theme to "dark", stores it in localStorage, and applies a CSS class to the <html>.

    const toggleTheme = () => {
      if (theme === "light") {
          setTheme("dark")
          window.localStorage.setItem("theme", "dark")
          document.documentElement.classList.add("dark")
           
      // Toggles the theme to "light", updates localStorage, and removes the CSS class from the <html>.

      } else {
          setTheme("light")
          window.localStorage.setItem("theme", "light")
          document.documentElement.classList.remove("dark")
      }
    }
  
    useEffect(() => {
      const localTheme = window.localStorage.getItem("theme") as Theme | null
  
      if (localTheme) {
          setTheme(localTheme)
  
          if (localTheme === "dark") {
              document.documentElement.classList.add("dark")
          }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark")
          document.documentElement.classList.add("dark")
      }
    }, [])
  return (
    <ThemeContext.Provider 
        value={{
            theme,
            toggleTheme
        }}>
            {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }

    return context
}
