/**
 * A utility function to concatenate class names, handling undefined values gracefully
 */
export function clsx(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * A utility function to format a number as currency
 */
export function formatCurrency(amount: number, currency = 'AED'): string {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * A utility function to format a date
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-AE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(dateObj)
}

/**
 * A utility function to generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * A utility function to truncate text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength) + '...'
}