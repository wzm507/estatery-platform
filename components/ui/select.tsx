import * as React from 'react'

// Define the select props
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
}

// Create the Select component
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  className,
  ...props
}, ref) => {
  // Define base styles for the select
  const baseClasses = 
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none'
  
  // Combine with any additional classes provided
  const combinedClasses = `${baseClasses} ${className}`
  
  // Render the select element
  return (
    <select
      ref={ref}
      className={combinedClasses}
      {...props}
    />
  )
})

// Set display name for better debugging
Select.displayName = 'Select'

export { Select }