import * as React from 'react'

// Define the tabs props
export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

// Define the tabs list props
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

// Define the tabs trigger props
export interface TabsTriggerProps {
  value: string
  className?: string
  children: React.ReactNode
}

// Define the tabs content props
export interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
}

// Create the tabs context
const TabsContext = React.createContext<{
  value: string
  onValueChange?: (value: string) => void
} | undefined>(undefined)

// Create the Tabs component
const Tabs: React.FC<TabsProps> = ({ 
  defaultValue = '', 
  value: valueProp, 
  onValueChange, 
  className,
  children
}) => {
  // Use state if no value is provided
  const [state, setState] = React.useState(defaultValue)
  const value = valueProp ?? state
  
  // Handle value change
  const handleValueChange = (newValue: string) => {
    if (valueProp === undefined) {
      setState(newValue)
    }
    onValueChange?.(newValue)
  }

  // Create the context value
  const contextValue = {
    value,
    onValueChange: handleValueChange
  }

  // Render the tabs component
  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

// Create the TabsList component
const TabsList: React.FC<TabsListProps> = ({ className, children }) => {
  // Base classes for the tabs list
  const baseClasses = 'flex w-full grid grid-cols-3 bg-slate-100 dark:bg-slate-800 p-1 rounded-md'
  const combinedClasses = `${baseClasses} ${className}`
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}

// Create the TabsTrigger component
const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, className, children }) => {
  // Get the context
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs')
  }
  
  // Destructure the context
  const { value: activeValue, onValueChange } = context
  
  // Determine if the trigger is active
  const isActive = activeValue === value
  
  // Base classes for the tabs trigger
  const baseClasses = 
    'flex items-center justify-center rounded-md py-2 px-4 text-sm font-medium transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-700'
  
  // Add active state class
  const activeClass = isActive 
    ? 'data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-700'
    : 'hover:bg-white/50 dark:hover:bg-slate-700/50'
  
  // Combine all classes
  const combinedClasses = `${baseClasses} ${activeClass} ${className}`
  
  // Handle click event
  const handleClick = () => {
    onValueChange?.(value)
  }
  
  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={handleClick}
      data-state={isActive ? 'active' : 'inactive'}
    >
      {children}
    </button>
  )
}

// Create the TabsContent component
const TabsContent: React.FC<TabsContentProps> = ({ value, className, children }) => {
  // Get the context
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error('TabsContent must be used within Tabs')
  }
  
  // Destructure the context
  const { value: activeValue } = context
  
  // Determine if the content should be visible
  const isActive = activeValue === value
  
  // Base classes for the tabs content
  const baseClasses = 'mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
  const combinedClasses = `${baseClasses} ${className}`
  
  // If not active, return null or a hidden div
  if (!isActive) {
    return null
  }
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}

// Set display names
Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
}