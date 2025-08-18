import * as React from 'react'

// Define the label props
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
}

// Create the Label component
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({
  className,
  ...props
}, ref) => {
  // Define base styles for the label
  const baseClasses = 
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
  
  // Combine with any additional classes provided
  const combinedClasses = `${baseClasses} ${className}`
  
  // Render the label element
  return (
    <label
      ref={ref}
      className={combinedClasses}
      {...props}
    />
  )
})

// Set display name for better debugging
Label.displayName = 'Label'

export { Label }