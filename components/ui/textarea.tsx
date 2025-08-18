import * as React from 'react'

// Define the textarea props
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

// Create the Textarea component
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  className,
  ...props
}, ref) => {
  // Define base styles for the textarea
  const baseClasses = 
    'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y'
  
  // Combine with any additional classes provided
  const combinedClasses = `${baseClasses} ${className}`
  
  // Render the textarea element
  return (
    <textarea
      ref={ref}
      className={combinedClasses}
      {...props}
    />
  )
})

// Set display name for better debugging
Textarea.displayName = 'Textarea'

export { Textarea }