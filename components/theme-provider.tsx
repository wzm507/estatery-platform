import { createContext, useContext, useEffect, useState } from 'react'

// Define the theme type
type Theme = 'dark' | 'light' | 'system'

// Define the theme provider props
interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
}

// Define the theme context type
interface ThemeProviderContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Create the theme context
const ThemeProviderContext = createContext<ThemeProviderContext | undefined>(undefined)

// Hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Theme provider component
export function ThemeProvider({ 
  children,
  defaultTheme = 'system',
  enableSystem = true,
}: ThemeProviderProps) {
  // State to store the current theme
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  // Apply the theme to the document
  useEffect(() => {
    // Determine the actual theme to apply
    const root = window.document.documentElement
    let appliedTheme: 'dark' | 'light'

    if (theme === 'system' && enableSystem) {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      appliedTheme = systemTheme
    } else {
      // Use the selected theme
      appliedTheme = theme === 'system' ? 'light' : theme
    }

    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    // Add the current theme class
    root.classList.add(appliedTheme)

    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme)
  }, [theme, enableSystem])

  // Load the theme from localStorage on initial render
  useEffect(() => {
    // Try to get the theme from localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null

    // Use the stored theme if available, otherwise use the default
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [defaultTheme])

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Helper function to toggle between light and dark themes
export function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') as Theme | null
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', newTheme)
  
  // Apply the new theme to the document
  const root = window.document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(newTheme)
}