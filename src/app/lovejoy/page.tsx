import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AvailabilityCalendar } from '@/components/sections/AvailabilityCalendar'
import { ImageGallery } from '@/components/ui/ImageGallery'

export default function LovejoyPage() {
  // Premium property showcase images - expanded collection
  const propertyImages = [
    {
      src: '/images/the-lovejoy/front.webp',
      alt: 'The Lovejoy - Stunning villa exterior',
      label: 'Villa Exterior'
    },
    {
      src: '/images/the-lovejoy/pool.webp',
      alt: 'Private swimming pool with lounging area',
      label: 'Private Pool'
    },
    {
      src: '/images/the-lovejoy/living-room.webp',
      alt: 'Luxurious living room with tropical views',
      label: 'Living Area'
    },
    {
      src: '/images/the-lovejoy/kitchen.webp',
      alt: 'Gourmet kitchen with modern appliances',
      label: 'Gourmet Kitchen'
    },
    {
      src: '/images/the-lovejoy/bedroom-main.webp',
      alt: 'Master bedroom suite',
      label: 'Master Suite'
    }
  ]

  // Complete image collection for lightbox
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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Simplified Header */}
        <section className="pt-20 pb-6">
          <Container size="lg">
            <div className="mb-4">
              <Typography variant="body" className="text-sm text-gray-500 dark:text-gray-400">
                Belize &gt; San Pedro &gt; Mahogany Bay Village
              </Typography>
            </div>
            
            <div className="mb-6">
              <Typography variant="h1" className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                The Lovejoy - Luxury Villa with Private Pool
              </Typography>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-600 dark:text-gray-400">(87 reviews)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400 underline">Sea Grape Drive, San Pedro, Belize</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Enhanced Premium Image Gallery */}
        <section className="pb-8">
          <Container size="lg">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-2 h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Main Hero Image - Takes up more space */}
                <div className="col-span-2 relative group cursor-pointer">
                  <img 
                    src={propertyImages[0].src} 
                    alt={propertyImages[0].alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <Typography variant="h3" className="font-bold text-white mb-2 text-2xl">
                      {propertyImages[0].label}
                    </Typography>
                    <Typography variant="body" className="text-white/90 mb-3">
                      Luxury villa in exclusive Mahogany Bay Village
                    </Typography>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">📸 25+ Photos</span>
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">🎥 Virtual Tour</span>
                    </div>
                  </div>
                </div>
                
                {/* Secondary Images - Column 1 */}
                <div className="flex flex-col gap-2">
                  <div className="relative group overflow-hidden cursor-pointer flex-1">
                    <img 
                      src={propertyImages[1].src} 
                      alt={propertyImages[1].alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-teal-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Typography variant="caption" className="text-white font-semibold text-sm">
                        {propertyImages[1].label}
                      </Typography>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden cursor-pointer flex-1">
                    <img 
                      src={propertyImages[2].src} 
                      alt={propertyImages[2].alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
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
                  <div className="relative group overflow-hidden cursor-pointer flex-1">
                    <img 
                      src={propertyImages[3].src} 
                      alt={propertyImages[3].alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Typography variant="caption" className="text-white font-semibold text-sm">
                        {propertyImages[3].label}
                      </Typography>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden cursor-pointer flex-1">
                    <img 
                      src={propertyImages[4].src} 
                      alt={propertyImages[4].alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
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
                          25+ professional photos
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
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={propertyImages[0].src} 
                    alt={propertyImages[0].alt}
                    className="w-full h-full object-cover"
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
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
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
            
            {/* Enhanced Gallery Features */}
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Professional Photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>360° Virtual Tour</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Recently Updated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span>Drone Photography</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-primary-600 hover:text-primary-700 border-primary-200">
                  📤 Share Gallery
                </Button>
                <Button variant="outline" size="sm" className="text-primary-600 hover:text-primary-700 border-primary-200">
                  ❤️ Save
                </Button>
              </div>
            </div>

            {/* Hidden Image Gallery for Lightbox */}
            <div className="hidden">
              <ImageGallery images={allPropertyImages} columns={4} />
            </div>
          </Container>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <Container size="lg">
            <div className="flex flex-col lg:flex-row gap-12 relative">
              
              {/* Left Column - Property Details */}
              <div className="flex-1 lg:w-3/5 space-y-8">
                
                {/* Property Overview */}
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Typography variant="h2" className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                        Entire villa hosted by Mahogany Bay Rentals
                      </Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-400">
                        8 guests • 3 bedrooms • 3.5 bathrooms • Private pool
                      </Typography>
                    </div>
                    <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏖️</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <span className="text-lg">🏠</span>
                    </div>
                    <div>
                      <Typography variant="h4" className="font-medium mb-1 text-gray-900 dark:text-white">Entire home</Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-400">
                        You'll have the luxury villa to yourself.
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <span className="text-lg">🧹</span>
                    </div>
                    <div>
                      <Typography variant="h4" className="font-medium mb-1 text-gray-900 dark:text-white">Enhanced Clean</Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-400">
                        This host committed to enhanced cleaning process.
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <span className="text-lg">🏖️</span>
                    </div>
                    <div>
                      <Typography variant="h4" className="font-medium mb-1 text-gray-900 dark:text-white">Beach access</Typography>
                      <Typography variant="body" className="text-gray-600 dark:text-gray-400">
                        2-minute walk to pristine white sand beaches.
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      Discover this luxurious villa in beautiful San Pedro, Belize. A newly constructed residence, 
                      elegantly designed and decorated villa located within gated Mahogany Bay Village. This spacious 
                      villa includes 3 bedrooms, 3.5 bathrooms, living room, fully equipped kitchen, patio, balcony 
                      and private pool. Your dream getaway awaits!
                    </p>
                    <p>
                      There are developments in Mahogany Bay, therefore rates are auto adjusted. Guests do not have 
                      access to the Hilton's Resort private beach club, gym nor the pool. However, we have our very 
                      own POOLCLUB with a restaurant and bar. You simply show our key chain, and you will get an 
                      exclusive 10% discount.
                    </p>
                    <p className="text-amber-600 dark:text-amber-400">
                      <strong>Please note:</strong> Ambergris Caye may have power outages during busy times. 
                      They're short but may happen during your stay. Thanks for understanding!
                    </p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <Typography variant="h3" className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">What this place offers</Typography>
                  <div className="grid grid-cols-2 gap-4">
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
                      <div key={index} className="flex items-center gap-3 py-2">
                        <span className="text-lg">{amenity.icon}</span>
                        <Typography variant="body" className="text-gray-700 dark:text-gray-300">{amenity.text}</Typography>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <Typography variant="h3" className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Where you'll be</Typography>
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
                    and San Pedro's vibrant town center.
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
                        "The Lovejoy exceeded all expectations. Absolutely stunning villa with perfect location."
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
                        "Third year returning. The luxury amenities and incredible hospitality make it perfect."
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

              {/* Right Column - Sticky Booking Widget */}
              <div className="flex-none lg:w-2/5">
                <div className="sticky top-24">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg bg-white dark:bg-gray-800 max-w-full overflow-hidden">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <Typography variant="h3" className="text-2xl font-semibold text-gray-900 dark:text-white">$650</Typography>
                        <Typography variant="body" className="text-gray-600 dark:text-gray-400">night</Typography>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-400">★</span>
                        <span className="font-medium text-gray-900 dark:text-white">4.9</span>
                        <span className="text-gray-500">• 87 reviews</span>
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
                  
                  <div className="mt-6 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-red-500">🏆</span>
                      <Typography variant="h4" className="text-sm font-medium text-gray-900 dark:text-white">This is a rare find</Typography>
                    </div>
                    <Typography variant="body" className="text-sm text-gray-600 dark:text-gray-400">
                      This host's place is usually booked 89% of the time.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
} 