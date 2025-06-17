import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
  variant?: 'default' | 'tinted' | 'gradient'
}

export function GlassCard({ 
  children, 
  className, 
  intensity = 'medium',
  variant = 'default'
}: GlassCardProps) {
  const intensityClasses = {
    light: 'bg-white/5 backdrop-blur-sm border-white/10',
    medium: 'bg-white/10 backdrop-blur-md border-white/20',
    heavy: 'bg-white/20 backdrop-blur-lg border-white/30',
  }

  const variantClasses = {
    default: 'dark:bg-gray-900/10 dark:border-gray-700/20',
    tinted: 'bg-primary-500/5 border-primary-500/20 dark:bg-primary-400/5 dark:border-primary-400/20',
    gradient: 'bg-gradient-to-br from-white/20 to-white/5 border-white/20 dark:from-gray-800/20 dark:to-gray-900/5',
  }

  return (
    <div
      className={cn(
        'relative rounded-2xl border shadow-lg transition-all duration-300',
        'hover:shadow-xl hover:shadow-black/10',
        'dark:shadow-black/20 dark:hover:shadow-black/30',
        intensityClasses[intensity],
        variantClasses[variant],
        className
      )}
    >
      {/* Subtle gradient overlay for extra depth */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 