import * as React from 'react'

// Define the toast type
interface Toast {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
  duration?: number
  onOpenChange?: (open: boolean) => void
}

// Define the toast action type
interface ToastAction {
  label: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// Define the toast state type
interface ToastState {
  toasts: Toast[]
}

// Define the toast action type
interface ToastActionType {
  type: 'ADD_TOAST' | 'DISMISS_TOAST' | 'UPDATE_TOAST'
  toast: Toast
}

// Define the toast context type
interface ToastContextType {
  toast: (toast: Omit<Toast, 'id'>) => { id: string; dismiss: () => void }
  dismiss: (id: string) => void
}

// Create the toast context
const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

// Create the toast provider component
interface ToastProviderProps {
  children: React.ReactNode
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  // Use state for the toasts
  const [state, dispatch] = React.useReducer(
    (state: ToastState, action: ToastActionType): ToastState => {
      switch (action.type) {
        case 'ADD_TOAST':
          return {
            ...state,
            toasts: [action.toast, ...state.toasts]
          }
        case 'DISMISS_TOAST':
          return {
            ...state,
            toasts: state.toasts.filter((toast) => toast.id !== action.toast.id)
          }
        case 'UPDATE_TOAST':
          return {
            ...state,
            toasts: state.toasts.map((toast) =>
              toast.id === action.toast.id ? { ...toast, ...action.toast } : toast
            )
          }
        default:
          return state
      }
    },
    { toasts: [] }
  )

  // Create the toast function
  const toast = (toast: Omit<Toast, 'id'>) => {
    const id = generateId()
    const duration = toast.duration ?? 3000

    dispatch({
      type: 'ADD_TOAST',
      toast: { ...toast, id }
    })

    const dismiss = () => {
      dispatch({
        type: 'DISMISS_TOAST',
        toast: { id }
      })
    }

    // Set timeout to auto dismiss
    React.useEffect(() => {
      const timer = setTimeout(dismiss, duration)
      return () => clearTimeout(timer)
    }, [dismiss, duration])

    return { id, dismiss }
  }

  // Create the dismiss function
  const dismiss = (id: string) => {
    dispatch({
      type: 'DISMISS_TOAST',
      toast: { id }
    })
  }

  // Create the context value
  const value = {
    toast,
    dismiss
  }

  // Render the provider
  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

// Create the useToast hook
const useToast = (): ToastContextType => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

// Helper function to generate ID
function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export { ToastProvider, useToast }