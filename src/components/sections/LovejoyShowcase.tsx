'use client'

import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { useState } from 'react'

const lovejoyImageGallery = {
  exterior: [
    { src: '/images/the-lovejoy/front.webp', alt: 'The Lovejoy - Stunning front exterior view' },
    { src: '/images/the-lovejoy/side.webp', alt: 'The Lovejoy - Side view of the villa' },
    { src: '/images/the-lovejoy/side-3.webp', alt: 'The Lovejoy - Additional side perspective' },
    { src: '/images/the-lovejoy/entryway.webp', alt: 'The Lovejoy - Welcoming entryway' },
    { src: '/images/the-lovejoy/entryway-2.webp', alt: 'The Lovejoy - Entrance area detail' },
  ],
  pool: [
    { src: '/images/the-lovejoy/pool.webp', alt: 'The Lovejoy - pristine swimming pool' },
    { src: '/images/the-lovejoy/pool-2.webp', alt: 'The Lovejoy - Pool area with seating' },
    { src: '/images/the-lovejoy/pool-3.webp', alt: 'The Lovejoy - Pool deck and lounging area' },
    { src: '/images/the-lovejoy/pool-4.webp', alt: 'The Lovejoy - Pool with tropical landscaping' },
    { src: '/images/the-lovejoy/pool-5.webp', alt: 'The Lovejoy - Evening pool ambiance' },
    { src: '/images/the-lovejoy/pool-6.webp', alt: 'The Lovejoy - Pool area overview' },
    { src: '/images/the-lovejoy/poolclub.webp', alt: 'The Lovejoy - Pool club area access' },
  ],
  outdoor: [
    { src: '/images/the-lovejoy/patio.webp', alt: 'The Lovejoy - Relaxing outdoor patio space' },
    { src: '/images/the-lovejoy/patio-2.webp', alt: 'The Lovejoy - Patio dining area' },
    { src: '/images/the-lovejoy/patio-3.webp', alt: 'The Lovejoy - Covered patio seating' },
  ],
  bedrooms: [
    { src: '/images/the-lovejoy/bedroom-main.webp', alt: 'The Lovejoy - Spacious master bedroom' },
    { src: '/images/the-lovejoy/bedroom-1.webp', alt: 'The Lovejoy - Comfortable bedroom with ocean view' },
    { src: '/images/the-lovejoy/bedroom-2.webp', alt: 'The Lovejoy - Second bedroom suite' },
    { src: '/images/the-lovejoy/bedroom-3.webp', alt: 'The Lovejoy - Third bedroom retreat' },
    { src: '/images/the-lovejoy/bedroom-6.webp', alt: 'The Lovejoy - Guest bedroom' },
    { src: '/images/the-lovejoy/bedroom-7.webp', alt: 'The Lovejoy - Bedroom with tropical views' },
    { src: '/images/the-lovejoy/bedroom-8.webp', alt: 'The Lovejoy - Cozy bedroom space' },
    { src: '/images/the-lovejoy/bedroom-9.webp', alt: 'The Lovejoy - Elegant bedroom design' },
    { src: '/images/the-lovejoy/bedroom-10.webp', alt: 'The Lovejoy - Additional bedroom view' },
    { src: '/images/the-lovejoy/closet.webp', alt: 'The Lovejoy - Walk-in closet storage' },
  ],
  bathrooms: [
    { src: '/images/the-lovejoy/bathroom-1.webp', alt: 'The Lovejoy - Modern bathroom with premium fixtures' },
    { src: '/images/the-lovejoy/bathroom-2.webp', alt: 'The Lovejoy - Luxurious bathroom suite' },
    { src: '/images/the-lovejoy/bathroom-4.webp', alt: 'The Lovejoy - Elegant bathroom design' },
    { src: '/images/the-lovejoy/bathrrom-3.webp', alt: 'The Lovejoy - Spacious bathroom layout' },
    { src: '/images/the-lovejoy/bathrrom-5.webp', alt: 'The Lovejoy - Additional bathroom amenities' },
  ],
  living: [
    { src: '/images/the-lovejoy/living-room.webp', alt: 'The Lovejoy - Comfortable living room area' },
    { src: '/images/the-lovejoy/livingroom-2.webp', alt: 'The Lovejoy - Living area with tropical decor' },
    { src: '/images/the-lovejoy/kitchen.webp', alt: 'The Lovejoy - Modern fully equipped kitchen' },
    { src: '/images/the-lovejoy/kitchen-2.webp', alt: 'The Lovejoy - Gourmet kitchen amenities' },
    { src: '/images/the-lovejoy/kitchen-3.webp', alt: 'The Lovejoy - Kitchen island and dining' },
  ]
}

// Create a flattened array for the main gallery
const allLovejoyImages = [
  ...lovejoyImageGallery.exterior,
  ...lovejoyImageGallery.pool,
  ...lovejoyImageGallery.outdoor,
  ...lovejoyImageGallery.bedrooms,
  ...lovejoyImageGallery.bathrooms,
  ...lovejoyImageGallery.living,
]

const amenities = [
  { icon: '🏊', title: 'Private Pool', description: 'Enjoy your own pristine swimming pool' },
  { icon: '🏖️', title: 'Beachfront Location', description: 'Steps away from beautiful sandy beaches' },
  { icon: '🍳', title: 'Full Kitchen', description: 'Modern, fully equipped kitchen for all your needs' },
  { icon: '🛏️', title: 'Luxury Bedrooms', description: 'Comfortable bedrooms with premium linens' },
  { icon: '🌴', title: 'Tropical Gardens', description: 'Lush landscaping with native plants' },
  { icon: '🚗', title: 'Golf Cart Included', description: 'Explore the island in style' },
]

// Tabbed Gallery Component
function TabbedGallery({ galleries }: { galleries: typeof lovejoyImageGallery }) {
  const [activeTab, setActiveTab] = useState('exterior')

  const tabs = [
    { id: 'exterior', label: 'Exterior', icon: '🏠', images: galleries.exterior },
    { id: 'pool', label: 'Pool & Spa', icon: '🏊', images: galleries.pool },
    { id: 'living', label: 'Living Areas', icon: '🏡', images: galleries.living },
    { id: 'bedrooms', label: 'Bedrooms', icon: '🛏️', images: galleries.bedrooms },
    { id: 'bathrooms', label: 'Bathrooms', icon: '🚿', images: galleries.bathrooms },
    { id: 'outdoor', label: 'Outdoor', icon: '🌴', images: galleries.outdoor },
  ]

  return (
    <div id="gallery" className="mb-20">
      <div className="text-center mb-12">
        <Typography variant="h3" className="mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Villa Gallery
        </Typography>
        <Typography variant="body" className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore every corner of The Lovejoy through our organized photo collection
        </Typography>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2
              ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-primary-100 hover:text-primary-700 shadow-md'
              }
            `}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
              {tab.images.length}
            </span>
          </button>
        ))}
      </div>

      {/* Active Gallery */}
      <div className="transition-all duration-500">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            <ImageGallery 
              images={tab.images} 
              columns={3} 
            />
          </div>
        ))}
      </div>

      {/* Gallery Stats */}
      <div className="mt-8 text-center">
        <Typography variant="caption" className="text-gray-500">
          {tabs.find(tab => tab.id === activeTab)?.images.length} photos in {tabs.find(tab => tab.id === activeTab)?.label}
        </Typography>
      </div>
    </div>
  )
}

export function LovejoyShowcase() {
  return (
    <section id="lovejoy" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Container size="lg" className="relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <span className="text-lg">🏖️</span>
            <Typography variant="caption" className="text-primary-600 dark:text-primary-400 font-medium tracking-wide">
              LUXURY VILLA SHOWCASE
            </Typography>
          </div>
          <Typography variant="h2" className="mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            The Lovejoy Experience
          </Typography>
          <Typography variant="body" className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            Your exclusive beachfront sanctuary in San Pedro, Belize. Where Caribbean luxury meets 
            authentic island living, creating an unparalleled base for your Belizean adventure.
          </Typography>
        </div>

        {/* Premium Property Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🛏️</span>
            </div>
            <Typography variant="h3" className="text-primary-500 mb-2">4</Typography>
            <Typography variant="label" className="text-gray-600 dark:text-gray-300">Bedrooms</Typography>
          </div>
          <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🚿</span>
            </div>
            <Typography variant="h3" className="text-secondary-500 mb-2">3.5</Typography>
            <Typography variant="label" className="text-gray-600 dark:text-gray-300">Bathrooms</Typography>
          </div>
          <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-success-100 to-success-200 dark:from-success-900 dark:to-success-800 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👥</span>
            </div>
            <Typography variant="h3" className="text-success-500 mb-2">8</Typography>
            <Typography variant="label" className="text-gray-600 dark:text-gray-300">Guests</Typography>
          </div>
          <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-warning-100 to-warning-200 dark:from-warning-900 dark:to-warning-800 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">✨</span>
            </div>
            <Typography variant="h3" className="text-warning-500 mb-2">∞</Typography>
            <Typography variant="label" className="text-gray-600 dark:text-gray-300">Memories</Typography>
          </div>
        </div>

        {/* Tabbed Image Gallery */}
        <TabbedGallery galleries={lovejoyImageGallery} />

        {/* Premium Features and Amenities */}
        <div id="amenities" className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Premium Amenities */}
          <div className="space-y-8">
            <div>
              <Typography variant="h3" className="mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Luxury Amenities
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-400 mb-8">
                Every detail crafted for your ultimate comfort and enjoyment
              </Typography>
            </div>
            <div className="grid gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{amenity.icon}</span>
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" className="mb-2 text-gray-800 dark:text-white">
                        {amenity.title}
                      </Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {amenity.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Description and CTA */}
          <div className="lg:pl-8 space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200/50 dark:border-primary-800/50">
              <Typography variant="h3" className="mb-6 text-gray-800 dark:text-white">
                Your Exclusive Island Sanctuary
              </Typography>
              <div className="space-y-6 mb-8">
                <Typography variant="body" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Lovejoy represents the pinnacle of luxury vacation rentals in San Pedro. 
                  Wake each morning to breathtaking ocean views, enjoy your private pool oasis, 
                  and step directly onto pristine beaches from your exclusive retreat.
                </Typography>
                <Typography variant="body" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Located within the prestigious Mahogany Bay Village, you'll enjoy world-class 
                  security, impeccable maintenance, and access to the private beach club. 
                  Every detail has been curated to exceed the expectations of the most 
                  discerning travelers.
                </Typography>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gradient" size="lg" className="flex-1 sm:flex-none">
                    View Availability
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                    Virtual Tour
                  </Button>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>🔒</span>
                    <span>Secure Direct Booking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>💰</span>
                    <span>Best Rate Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 