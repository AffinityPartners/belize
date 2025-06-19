import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'glass' | 'gradient' | 'coral' | 'teal' | 'gold' | 'sunset'
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
        'bg-gradient-to-r from-primary-500 via-teal-500 to-coral-500 text-white hover:from-primary-600 hover:via-teal-600 hover:to-coral-600 shadow-lg hover:shadow-xl animate-gradient-x': variant === 'gradient',
        'bg-coral-500 text-white hover:bg-coral-600 focus-visible:ring-coral-500 shadow-lg hover:shadow-xl hover:shadow-coral-500/25': variant === 'coral',
        'bg-teal-500 text-white hover:bg-teal-600 focus-visible:ring-teal-500 shadow-lg hover:shadow-xl hover:shadow-teal-500/25': variant === 'teal',
        'bg-gold-500 text-gray-900 hover:bg-gold-600 focus-visible:ring-gold-500 shadow-lg hover:shadow-xl hover:shadow-gold-500/25': variant === 'gold',
        'bg-gradient-to-r from-sunset-400 via-coral-500 to-gold-500 text-white hover:from-sunset-500 hover:via-coral-600 hover:to-gold-600 shadow-lg hover:shadow-xl animate-gradient-x': variant === 'sunset',
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