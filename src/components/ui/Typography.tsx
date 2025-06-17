import { cn } from '@/lib/utils'
import { ReactNode, CSSProperties } from 'react'

/**
 * Typography Component - Centralized text styling system
 * 
 * Font Strategy:
 * - **Lato**: Reserved for major headlines (h1, h2) to create elegance and hierarchy
 * - **Inter**: Used for all body text, UI elements, and smaller headings for optimal readability
 * 
 * Variant Guidelines:
 * - h1, h2: Large display headings - can use serif for emphasis
 * - h3-h6: Section headings - always sans-serif for clarity  
 * - body-lg/body/body-sm: Content text with size variations
 * - label: Form labels and UI text
 * - caption: Secondary text and metadata
 * - overline: Small uppercase labels for categories/badges
 * 
 * @example
 * // Main page hero with Lato
 * <Typography variant="h1" serif={true}>Don't Stop Belizen</Typography>
 * 
 * // Section heading (always sans-serif)
 * <Typography variant="h3">Features</Typography>
 * 
 * // Body text
 * <Typography variant="body">Your content here</Typography>
 * 
 * // UI labels
 * <Typography variant="overline">LUXURY EXPERIENCE</Typography>
 */

interface TypographyProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-lg' | 'body-sm' | 'caption' | 'label' | 'overline'
  className?: string
  as?: keyof JSX.IntrinsicElements
  style?: CSSProperties
  serif?: boolean // Optional override to use Lato font (recommended for h1/h2 only)
}

export function Typography({ 
  children, 
  variant = 'body', 
  className,
  as,
  style,
  serif = false
}: TypographyProps) {
  // Base variant styles without font family
  const baseVariants = {
    h1: 'text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.2]',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white leading-[1.3] font-sans',
    h4: 'text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-[1.4] font-sans',
    h5: 'text-lg md:text-xl font-medium text-gray-900 dark:text-white leading-[1.4] font-sans',
    h6: 'text-base md:text-lg font-medium text-gray-900 dark:text-white leading-[1.4] font-sans',
    'body-lg': 'text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-sans',
    'body': 'text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-sans',
    'body-sm': 'text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400 font-sans',
    'label': 'text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide font-sans',
    'caption': 'text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-sans',
    'overline': 'text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wider uppercase font-sans',
  }

  // Determine font family class based on variant and serif prop
  const getFontFamily = (variant: string, serif: boolean) => {
    // Only h1 and h2 can use Lato when explicitly requested
    if ((variant === 'h1' || variant === 'h2') && serif) {
      return 'font-serif'  // Maps to Lato via Tailwind config
    }
    return 'font-sans'     // Inter
  }

  // Determine the default HTML element
  const getDefaultElement = (variant: string): keyof JSX.IntrinsicElements => {
    if (variant.startsWith('h')) return variant as keyof JSX.IntrinsicElements
    if (variant === 'label') return 'label'
    if (variant === 'caption' || variant === 'overline') return 'span'
    return 'p'
  }

  const Component = as || getDefaultElement(variant)
  const fontFamily = getFontFamily(variant, serif)
  
  return (
    <Component 
      className={cn(baseVariants[variant], fontFamily, className)} 
      style={style}
    >
      {children}
    </Component>
  )
} 