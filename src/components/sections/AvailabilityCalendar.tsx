'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    hostawayCalendarWidget: (config: any) => void;
  }
}

export function AvailabilityCalendar() {
  useEffect(() => {
    // Add CSS to constrain the calendar widget
    const style = document.createElement('style')
    style.textContent = `
      #hostaway-calendar-widget {
        max-width: 100% !important;
        overflow: hidden !important;
        width: 100% !important;
      }
      
      #hostaway-calendar-widget * {
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
      
      #hostaway-calendar-widget iframe {
        max-width: 100% !important;
        width: 100% !important;
      }
      
      #hostaway-calendar-widget .calendar-container,
      #hostaway-calendar-widget .calendar-wrapper,
      #hostaway-calendar-widget .calendar-content {
        max-width: 100% !important;
        overflow: hidden !important;
        width: 100% !important;
      }
    `
    document.head.appendChild(style)

    // Load the Hostaway calendar script
    const script = document.createElement('script')
    script.src = 'https://d2q3n06xhbi0am.cloudfront.net/calendar.js'
    script.async = true
    
    script.onload = () => {
      // Initialize the Hostaway calendar widget
      if (window.hostawayCalendarWidget) {
        window.hostawayCalendarWidget({
          baseUrl: 'https://mbrentals.holidayfuture.com/',
          listingId: 282417,
          numberOfMonths: 1,
          openInNewTab: true,
          font: 'Open Sans',
          rounded: false,
          button: {
            action: 'checkout',
            text: 'Book now',
          },
          clearButtonText: 'Clear dates',
          color: {
            mainColor: '#03A9F4',
            frameColor: '#e3e3e3',
            textColor: '#1669B1',
          },
        })
      }
    }
    
    document.head.appendChild(script)
    
    // Cleanup function to remove script and styles when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div className="w-full">
      {/* Hostaway Calendar Widget Container with proper constraints */}
      <div 
        id="hostaway-calendar-widget" 
        className="w-full max-w-full overflow-hidden border border-gray-200 dark:border-gray-600 rounded-lg"
        style={{
          maxWidth: '100%',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        {/* Loading state */}
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500 mx-auto mb-2"></div>
          <span className="text-sm">Loading calendar...</span>
        </div>
      </div>
    </div>
  )
} 