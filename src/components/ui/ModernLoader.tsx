interface ModernLoaderProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'progress'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  progress?: number
  message?: string
}

export function ModernLoader({ 
  type = 'spinner', 
  size = 'md', 
  className,
  progress,
  message 
}: ModernLoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const renderLoader = () => {
    switch (type) {
      case 'skeleton':
        return (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6"></div>
          </div>
        )
      
      case 'dots':
        return (
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`bg-primary-500 rounded-full animate-bounce ${
                  size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        )
      
      case 'progress':
        return (
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Loading...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {message && (
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{message}</p>
            )}
          </div>
        )
      
      default:
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full"></div>
            <div className="absolute inset-0 border-2 border-primary-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        )
    }
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className || ''}`}>
      {renderLoader()}
    </div>
  )
} 