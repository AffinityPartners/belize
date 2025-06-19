'use client'

import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AvailabilityCalendar } from '@/components/sections/AvailabilityCalendar'
import { useState } from 'react'
import Image from 'next/image'

export default function LovejoyPage() {
  // Lightbox state
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Complete image collection for lightbox - this will be used for both showcase and gallery
  const allPropertyImages = [
    { src: '/images/the-lovejoy/front.webp', alt: 'Villa Exterior - Front View' },
    { src: '/images/the-lovejoy/pool.webp', alt: 'Private Swimming Pool' },
    { src: '/images/the-lovejoy/pool-2.webp', alt: 'Pool Area with Lounge Chairs' },
    { src: '/images/the-lovejoy/pool-3.webp', alt: 'Pool Deck View' },
    { src: '/images/the-lovejoy/pool-4.webp', alt: 'Pool at Sunset' },
    { src: '/images/the-lovejoy/pool-5.webp', alt: 'Pool Side Relaxation Area' },
    { src: '/images/the-lovejoy/living-room.webp', alt: 'Main Living Room' },
    { src: '/images/the-lovejoy/livingroom-2.webp', alt: 'Living Area Secondary View' },
    { src: '/images/the-lovejoy/kitchen.webp', alt: 'Gourmet Kitchen' },
    { src: '/images/the-lovejoy/kitchen-2.webp', alt: 'Kitchen Island View' },
    { src: '/images/the-lovejoy/kitchen-3.webp', alt: 'Kitchen Dining Area' },
    { src: '/images/the-lovejoy/bedroom-main.webp', alt: 'Master Bedroom Suite' },
    { src: '/images/the-lovejoy/bedroom-1.webp', alt: 'Guest Bedroom 1' },
    { src: '/images/the-lovejoy/bedroom-2.webp', alt: 'Guest Bedroom 2' },
    { src: '/images/the-lovejoy/bedroom-3.webp', alt: 'Guest Bedroom 3' },
    { src: '/images/the-lovejoy/bathroom-1.webp', alt: 'Master Bathroom' },
    { src: '/images/the-lovejoy/bathroom-2.webp', alt: 'Guest Bathroom' },
    { src: '/images/the-lovejoy/patio.webp', alt: 'Outdoor Patio' },
    { src: '/images/the-lovejoy/patio-2.webp', alt: 'Patio Dining Area' },
    { src: '/images/the-lovejoy/patio-3.webp', alt: 'Patio Lounge Area' },
    { src: '/images/the-lovejoy/entryway.webp', alt: 'Villa Entrance' },
    { src: '/images/the-lovejoy/entryway-2.webp', alt: 'Grand Entryway' },
    { src: '/images/the-lovejoy/side.webp', alt: 'Villa Side View' },
    { src: '/images/the-lovejoy/side-3.webp', alt: 'Villa Architecture Detail' },
    { src: '/images/the-lovejoy/poolclub.webp', alt: 'Mahogany Bay Pool Club Access' }
  ]

  // Premium property showcase images - first 5 for the main display
  const propertyImages = [
    {
      src: allPropertyImages[0].src,
      alt: allPropertyImages[0].alt,
      label: 'Villa Exterior'
    },
    {
      src: allPropertyImages[1].src,
      alt: allPropertyImages[1].alt,
      label: 'Private Pool'
    },
    {
      src: allPropertyImages[6].src,
      alt: allPropertyImages[6].alt,
      label: 'Living Area'
    },
    {
      src: allPropertyImages[8].src,
      alt: allPropertyImages[8].alt,
      label: 'Gourmet Kitchen'
    },
    {
      src: allPropertyImages[11].src,
      alt: allPropertyImages[11].alt,
      label: 'Master Suite'
    }
  ]

  // Lightbox functions
  const openLightbox = (imageIndex: number) => {
    setCurrentIndex(imageIndex)
    setSelectedImage(allPropertyImages[imageIndex])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : allPropertyImages.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(allPropertyImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex < allPropertyImages.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(allPropertyImages[newIndex])
  }

  // Find the index of showcase images in the full gallery
  const getImageIndex = (showcaseIndex: number) => {
    const showcaseImage = propertyImages[showcaseIndex]
    return allPropertyImages.findIndex(img => img.src === showcaseImage.src)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-coral-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Enhanced Header with Island Luxury */}
        <section className="pt-24 pb-8 relative overflow-hidden">
          {/* Floating elements for island ambiance */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400/40 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-coral-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-20 w-2 h-2 bg-teal-400/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          <Container size="lg" className="relative z-10">
            <div className="mb-6">
              <Typography variant="overline" className="text-teal-600 dark:text-teal-400 tracking-[0.15em] animate-fade-in">
                LUXURY VILLA EXPERIENCE
              </Typography>
            </div>
            
            <div className="mb-8">
              <Typography variant="h1" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-primary-600 to-coral-600 bg-clip-text text-transparent animate-slide-up">
                The Lovejoy
              </Typography>
              <Typography variant="body-lg" className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
                Private Pool Villa in Mahogany Bay Village
              </Typography>
              <div className="flex items-center gap-6 text-sm flex-wrap animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-gold-500 text-lg">★</span>
                  <span className="font-semibold text-gray-900 dark:text-white">4.9</span>
                  <span className="text-gray-600 dark:text-gray-400">(87 reviews)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-teal-500">📍</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Sea Grape Drive, San Pedro, Belize</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Enhanced Premium Image Gallery with Island Luxury */}
        <section className="pb-12">
          <Container size="lg">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-3 h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                {/* Main Hero Image - Takes up more space */}
                <div className="col-span-2 relative group cursor-pointer" onClick={() => openLightbox(getImageIndex(0))}>
                  <Image 
                    src={propertyImages[0].src} 
                    alt={propertyImages[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-coral-500/10" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <Typography variant="h3" className="font-bold text-white mb-3 text-2xl drop-shadow-xl">
                      {propertyImages[0].label}
                    </Typography>
                    <Typography variant="body" className="text-white/95 mb-4 text-lg drop-shadow-lg">
                      Luxury villa in exclusive Mahogany Bay Village
                    </Typography>
                    <div className="flex items-center gap-3 text-sm text-white/90">
                      <span className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20 shadow-lg">📸 25+ Photos</span>
                      <span className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20 shadow-lg">🎥 Virtual Tour</span>
                    </div>
                  </div>
                </div>
                
                {/* Secondary Images - Column 1 */}
                <div className="flex flex-col gap-2">
                  <div className="relative group overflow-hidden cursor-pointer flex-1" onClick={() => openLightbox(getImageIndex(1))}>
                    <Image 
                      src={propertyImages[1].src} 
                      alt={propertyImages[1].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 to-primary-500/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Typography variant="caption" className="text-white font-semibold text-sm">
                        {propertyImages[1].label}
                      </Typography>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden cursor-pointer flex-1" onClick={() => openLightbox(getImageIndex(2))}>
                    <Image 
                      src={propertyImages[2].src} 
                      alt={propertyImages[2].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-coral-500/40 to-sunset-500/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Typography variant="caption" className="text-white font-semibold text-sm">
                        {propertyImages[2].label}
                      </Typography>
                    </div>
                  </div>
                </div>
                
                {/* Secondary Images - Column 2 */}
                <div className="flex flex-col gap-2">
                  <div className="relative group overflow-hidden cursor-pointer flex-1" onClick={() => openLightbox(getImageIndex(3))}>
                    <Image 
                      src={propertyImages[3].src} 
                      alt={propertyImages[3].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/40 to-coral-500/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Typography variant="caption" className="text-white font-semibold text-sm">
                        {propertyImages[3].label}
                      </Typography>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden cursor-pointer flex-1" onClick={() => openLightbox(0)}>
                    <Image 
                      src={propertyImages[4].src} 
                      alt={propertyImages[4].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 mb-3 inline-block">
                          <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <Typography variant="h4" className="text-white font-bold mb-1">
                          View All Photos
                        </Typography>
                        <Typography variant="caption" className="text-white/80">
                          {allPropertyImages.length}+ professional photos
                        </Typography>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Typography variant="caption" className="text-white font-semibold text-sm">
                        {propertyImages[4].label}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="space-y-3">
                {/* Main hero image */}
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => openLightbox(getImageIndex(0))}>
                  <Image 
                    src={propertyImages[0].src} 
                    alt={propertyImages[0].alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Typography variant="h4" className="font-bold text-white mb-1">
                      {propertyImages[0].label}
                    </Typography>
                    <Typography variant="caption" className="text-white/90">
                      Luxury villa in Mahogany Bay Village
                    </Typography>
                  </div>
                </div>
                
                {/* Mobile image grid */}
                <div className="grid grid-cols-2 gap-3">
                  {propertyImages.slice(1, 5).map((image, index) => (
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden cursor-pointer" onClick={() => openLightbox(getImageIndex(index + 1))}>
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                      {index === 3 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <div className="text-center">
                            <Typography variant="caption" className="text-white font-semibold">
                              +20 More
                            </Typography>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Gallery Features with Island Luxury */}
            <div className="mt-8 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400 flex-wrap">
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Professional Photography</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">360° Virtual Tour</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Recently Updated</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Drone Photography</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="teal" size="sm" className="font-semibold">
                  📤 Share Gallery
                </Button>
                <Button variant="coral" size="sm" className="font-semibold">
                  ❤️ Save
                </Button>
              </div>
            </div>


          </Container>
        </section>

        {/* Main Content with Island Luxury Background */}
        <section className="py-12 relative">
          <Container size="lg">
            <div className="flex flex-col lg:flex-row gap-16 relative">
              
              {/* Left Column - Property Details */}
              <div className="flex-1 lg:w-3/5 space-y-10">
                
                {/* Property Overview with Island Luxury */}
                <div className="pb-8 border-b border-teal-200/50 dark:border-teal-700/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <Typography variant="h2" className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-700 to-coral-600 bg-clip-text text-transparent">
                        Entire villa hosted by Mahogany Bay Rentals
                      </Typography>
                      <Typography variant="body-lg" className="text-gray-600 dark:text-gray-300 text-lg">
                        8 guests • 3 bedrooms • 3.5 bathrooms • Private pool
                      </Typography>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-coral-100 dark:from-teal-900 dark:to-coral-900 rounded-full flex items-center justify-center shadow-lg animate-breathe">
                      <span className="text-3xl">🏖️</span>
                    </div>
                  </div>
                </div>

                {/* Key Features with Island Luxury */}
                <div className="space-y-8 pb-8 border-b border-teal-200/50 dark:border-teal-700/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div>
                      <Typography variant="h4" className="font-semibold mb-2 text-teal-800 dark:text-teal-200 text-lg">Entire home</Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        You&apos;ll have the luxury villa to yourself.
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-coral-100 to-coral-200 dark:from-coral-900 dark:to-coral-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🧹</span>
                    </div>
                    <div>
                      <Typography variant="h4" className="font-semibold mb-2 text-coral-800 dark:text-coral-200 text-lg">Enhanced Clean</Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        This host committed to enhanced cleaning process.
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-900 dark:to-gold-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🏖️</span>
                    </div>
                    <div>
                      <Typography variant="h4" className="font-semibold mb-2 text-gold-800 dark:text-gold-200 text-lg">Beach access</Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        2-minute walk to pristine white sand beaches.
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Description with Island Luxury */}
                <div className="pb-8 border-b border-teal-200/50 dark:border-teal-700/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <Typography variant="h3" className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-coral-600 bg-clip-text text-transparent">
                    Villa Description
                  </Typography>
                  <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    <p>
                      Discover this luxurious villa in beautiful San Pedro, Belize. A newly constructed residence, 
                      elegantly designed and decorated villa located within gated Mahogany Bay Village. This spacious 
                      villa includes 3 bedrooms, 3.5 bathrooms, living room, fully equipped kitchen, patio, balcony 
                      and private pool. Your dream getaway awaits!
                    </p>
                    <p>
                      There are developments in Mahogany Bay, therefore rates are auto adjusted. Guests do not have 
                      access to the Hilton&apos;s Resort private beach club, gym nor the pool. However, we have our very 
                      own POOLCLUB with a restaurant and bar. You simply show our key chain, and you will get an 
                      exclusive 10% discount.
                    </p>
                    <div className="bg-gradient-to-r from-gold-50 to-coral-50 dark:from-gold-900/20 dark:to-coral-900/20 border border-gold-200 dark:border-gold-700 rounded-xl p-6">
                      <p className="text-gold-700 dark:text-gold-300 font-medium">
                        <strong>Please note:</strong> Ambergris Caye may have power outages during busy times. 
                        They&apos;re short but may happen during your stay. Thanks for understanding!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amenities with Island Luxury */}
                <div className="pb-8 border-b border-teal-200/50 dark:border-teal-700/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <Typography variant="h3" className="text-2xl font-bold mb-8 bg-gradient-to-r from-teal-700 to-coral-600 bg-clip-text text-transparent">What this place offers</Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: '🏊', text: 'Private pool' },
                      { icon: '🍳', text: 'Full kitchen' },
                      { icon: '📶', text: 'WiFi included' },
                      { icon: '🅿️', text: 'Free parking' },
                      { icon: '❄️', text: 'Air conditioning' },
                      { icon: '🔒', text: 'Gated community' },
                      { icon: '🍽️', text: 'Pool club access' },
                      { icon: '🏖️', text: 'Beach access' },
                    ].map((amenity, index) => (
                      <div key={index} className="flex items-center gap-4 py-3 px-4 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                        <span className="text-2xl">{amenity.icon}</span>
                        <Typography variant="body" className="text-gray-700 dark:text-gray-300 font-medium">{amenity.text}</Typography>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <Typography variant="h3" className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Where you&apos;ll be</Typography>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8!2d-87.9654!3d17.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f0bce0000000000%3A0x0!2sSea%20Grape%20Drive%2C%20San%20Pedro%2C%20Belize!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Lovejoy Location"
                    ></iframe>
                  </div>
                  <Typography variant="h4" className="font-medium mb-2 text-gray-900 dark:text-white">Sea Grape Drive, San Pedro, Belize</Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-400">
                    Located in the exclusive gated community of Mahogany Bay Village, just steps from pristine beaches 
                    and San Pedro&apos;s vibrant town center.
                  </Typography>
                </div>

                {/* Reviews Preview */}
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-yellow-400 text-xl">★</span>
                    <Typography variant="h3" className="text-xl font-semibold text-gray-900 dark:text-white">4.9 · 87 reviews</Typography>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    {[
                      { label: 'Cleanliness', score: '4.9', percentage: '98%' },
                      { label: 'Location', score: '4.8', percentage: '96%' },
                      { label: 'Check-in', score: '4.9', percentage: '98%' },
                      { label: 'Value', score: '4.7', percentage: '94%' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{item.score}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                          <div className="bg-gray-900 dark:bg-white h-1 rounded-full" style={{ width: item.percentage }}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">JM</span>
                        </div>
                        <div>
                          <Typography variant="h4" className="text-sm font-medium text-gray-900 dark:text-white">Jennifer</Typography>
                          <Typography variant="caption" className="text-gray-500">March 2024</Typography>
                        </div>
                      </div>
                      <Typography variant="body" className="text-sm text-gray-600 dark:text-gray-400">
                        &ldquo;The Lovejoy exceeded all expectations. Absolutely stunning villa with perfect location.&rdquo;
                      </Typography>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">RS</span>
                        </div>
                        <div>
                          <Typography variant="h4" className="text-sm font-medium text-gray-900 dark:text-white">Robert</Typography>
                          <Typography variant="caption" className="text-gray-500">February 2024</Typography>
                        </div>
                      </div>
                      <Typography variant="body" className="text-sm text-gray-600 dark:text-gray-400">
                        &ldquo;Third year returning. The luxury amenities and incredible hospitality make it perfect.&rdquo;
                      </Typography>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="mt-6 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                    Show all 87 reviews
                  </Button>
                </div>

                {/* House Rules */}
                <div>
                  <Typography variant="h3" className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">House rules</Typography>
                  <div className="space-y-4">
                    {[
                      { icon: '🕒', text: 'Check-in: 3:00 PM - 9:00 PM' },
                      { icon: '🕚', text: 'Checkout: 11:00 AM' },
                      { icon: '👥', text: '8 guests maximum' },
                      { icon: '🚭', text: 'No smoking' }
                    ].map((rule, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-lg">{rule.icon}</span>
                        <Typography variant="body" className="text-gray-700 dark:text-gray-300">{rule.text}</Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                              {/* Right Column - Sticky Booking Widget with Island Luxury */}
              <div className="flex-none lg:w-2/5">
                <div className="sticky top-24">
                  <div className="border border-teal-200/50 dark:border-teal-700/50 rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-white/90 via-white/80 to-teal-50/50 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-900/50 backdrop-blur-xl max-w-full overflow-hidden">
                    <div className="mb-8">
                      <div className="flex items-baseline gap-3 mb-3">
                        <Typography variant="h3" className="text-3xl font-bold bg-gradient-to-r from-teal-700 to-coral-600 bg-clip-text text-transparent">$650</Typography>
                        <Typography variant="body" className="text-gray-600 dark:text-gray-300 text-lg">night</Typography>
                      </div>
                      <div className="flex items-center gap-3 text-sm bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-gold-500 text-lg">★</span>
                        <span className="font-semibold text-gray-900 dark:text-white">4.9</span>
                        <span className="text-gray-600 dark:text-gray-300">• 87 reviews</span>
                      </div>
                    </div>

                    {/* Booking Calendar */}
                    <AvailabilityCalendar />
                    
                    <div className="mt-6 space-y-4 text-sm">
                      <div className="flex justify-between text-gray-700 dark:text-gray-300">
                        <span>$650 × 5 nights</span>
                        <span>$3,250</span>
                      </div>
                      <div className="flex justify-between text-gray-700 dark:text-gray-300">
                        <span className="underline">Cleaning fee</span>
                        <span>$125</span>
                      </div>
                      <div className="flex justify-between text-gray-700 dark:text-gray-300">
                        <span className="underline">Service fee</span>
                        <span>$195</span>
                      </div>
                      <hr className="border-gray-200 dark:border-gray-600" />
                      <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                        <span>Total before taxes</span>
                        <span>$3,570</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 border border-gold-200/50 dark:border-gold-700/50 rounded-2xl bg-gradient-to-br from-gold-50/80 to-coral-50/80 dark:from-gold-900/20 dark:to-coral-900/20 backdrop-blur-sm shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-gold-500 text-2xl animate-pulse">🏆</span>
                      <Typography variant="h4" className="text-base font-bold text-gold-800 dark:text-gold-200">This is a rare find</Typography>
                    </div>
                    <Typography variant="body" className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      This host&apos;s place is usually booked 89% of the time.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Island Luxury Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Close button */}
              <Button
                variant="glass"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>

              {/* Previous button */}
              <Button
                variant="glass"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>

              {/* Next button */}
              <Button
                variant="glass"
                size="icon"
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>

              {/* Image counter and info */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-6 py-3 rounded-2xl border border-white/20">
                <div className="text-center">
                  <Typography variant="caption" className="text-white/90 text-sm font-medium">
                    {currentIndex + 1} / {allPropertyImages.length}
                  </Typography>
                  <Typography variant="caption" className="text-white/70 text-xs block mt-1">
                    {selectedImage.alt}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
} 