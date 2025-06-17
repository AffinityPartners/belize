import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'glass' | 'gradient'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, loading = false, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'transform hover:scale-[1.02] active:scale-[0.98]',
      'relative overflow-hidden group',
      {
        'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 shadow-lg hover:shadow-xl': variant === 'default',
        'bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500 shadow-lg hover:shadow-xl': variant === 'destructive',
        'border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-sm hover:shadow-md': variant === 'outline',
        'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-sm hover:shadow-md': variant === 'secondary',
        'hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-100': variant === 'ghost',
        'text-primary-500 underline-offset-4 hover:underline focus-visible:ring-primary-500': variant === 'link',
        'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl': variant === 'glass',
        'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl': variant === 'gradient',
      },
      {
        'h-10 px-4 py-2': size === 'default',
        'h-9 rounded-md px-3 text-xs': size === 'sm',
        'h-12 rounded-lg px-8 text-base': size === 'lg',
        'h-10 w-10': size === 'icon',
      },
      className
    )

    const content = loading ? (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        {children && <span>{children}</span>}
      </div>
    ) : (
      children
    )

    if (asChild) {
      return (
        <Slot
          className={baseClasses}
          ref={ref}
          {...props}
        >
          {content}
        </Slot>
      )
    }

    return (
      <button
        className={baseClasses}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {content}
        {/* Shine effect on hover */}
        <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:top-full group-hover:opacity-100 transition-all duration-500" />
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button } 