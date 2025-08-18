import * as React from 'react'

// Define the useMobile hook interface
interface UseMobileProps {
  breakpoint?: number
}

// Create the useMobile hook
const useMobile = ({ breakpoint = 768 }: UseMobileProps = {}): boolean => {
  // State to store whether the device is mobile
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  // Function to check if the current viewport is mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < breakpoint)
  }

  // Initialize the state
  React.useEffect(() => {
    checkIsMobile()
  }, [breakpoint])

  // Add event listener for resize
  React.useEffect(() => {
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [checkIsMobile])

  // Return the mobile state
  return isMobile
}

export { useMobile }