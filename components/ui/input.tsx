import * as React from 'react'

// Define the input props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props specific to your Input component
}

// Create the Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  className,
  ...props
}, ref) => {
  // Define base styles for the input
  const baseClasses = 
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  // Combine with any additional classes provided
  const combinedClasses = `${baseClasses} ${className}`

  // Render the input element
  return (
    <input
      ref={ref}
      type={type}
      className={combinedClasses}
      {...props}
    />
  )
})

// Set display name for better debugging
Input.displayName = 'Input'

export { Input }