import * as React from 'react'

// Define the button variants
export type ButtonVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

// Define the button size
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

// Define the button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

// Create the Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'md',
  className,
  asChild = false,
  ...props
}, ref) => {
  // Determine the variant classes
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  }[variant]

  // Determine the size classes
  const sizeClasses = {
    sm: 'h-9 rounded-md px-3 text-sm',
    md: 'h-10 rounded-md px-4 text-sm font-medium',
    lg: 'h-11 rounded-md px-8 text-base font-medium',
    icon: 'h-10 w-10 rounded-md',
  }[size]

  // Determine if the button is disabled
  const disabled = props.disabled || false
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

  // Combine all classes
  const combinedClasses = `${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`

  // Create the button element
  return (
    <button
      ref={ref}
      className={combinedClasses}
      disabled={disabled}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }