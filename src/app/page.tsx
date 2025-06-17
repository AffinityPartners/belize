import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/belize-beach-dsb.jpg"
            alt="Beautiful San Pedro beach scene with palm trees, golf carts, and boats in Belize"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-[10s] ease-out hover:scale-100"
            quality={90}
          />
          {/* Modern gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <Container size="lg" className="relative z-10">
          <div className="text-center max-w-5xl mx-auto py-20">
            {/* Logo with glass effect */}
            <div className="mb-12 flex justify-center">
              <div className="relative w-32 h-32 md:w-48 md:h-48 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <Image
                  src="/images/DSBelizen-Logo-retina.png"
                  alt="Don't Stop Belizen Logo"
                  fill
                  className="object-contain drop-shadow-2xl p-4"
                  priority
                />
              </div>
            </div>

            <Typography 
              variant="h1" 
              serif={true}
              className="mb-6 text-white drop-shadow-lg"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Don&apos;t Stop Belizen
            </Typography>
            
            <Typography 
              variant="body" 
              className="mb-8 text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              Experience the vibrant lifestyle, culture, and adventure opportunities in San Pedro, Belize. 
              From snorkeling in the Blue Hole to beachside dining, discover paradise through local eyes.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="gradient"
                size="lg" 
                asChild
              >
                <a href="/explore">Explore San Pedro</a>
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                asChild
              >
                <a href="/lovejoy">View The Lovejoy</a>
              </Button>
            </div>


          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <Container size="lg">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              Your Gateway to Paradise
            </Typography>
            <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover authentic experiences and luxury accommodations that showcase 
              the best of San Pedro, Belize.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Discovery */}
            <div className="group p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏝️</span>
              </div>
              <Typography variant="h4" className="mb-4">
                Destination Discovery
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Insider recommendations, stunning visuals, and curated guides on what to do, 
                where to eat, and how to explore San Pedro.
              </Typography>
            </div>

            {/* The Lovejoy */}
            <div className="group p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏖️</span>
              </div>
              <Typography variant="h4" className="mb-4">
                The Lovejoy
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A premium beachfront property offering guests a luxurious, 
                relaxing home base to enjoy everything Belize has to offer.
              </Typography>
            </div>

            {/* Local Experience */}
            <div className="group p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-warning-100 to-warning-200 dark:from-warning-900 dark:to-warning-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🤿</span>
              </div>
              <Typography variant="h4" className="mb-4">
                Authentic Adventures
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From snorkeling in the Blue Hole to enjoying beachside tacos, 
                experience San Pedro through the eyes of someone who truly loves it.
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* Design System Demo */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <Container size="lg">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              Design System Preview
            </Typography>
            <Typography variant="body" className="text-gray-600 dark:text-gray-300">
              Showcasing our beautiful color palette and components
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Color Swatches */}
            <div className="space-y-3">
              <Typography variant="label">Brand Colors</Typography>
              <div className="space-y-2">
                <div className="h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white font-medium">
                  Primary
                </div>
                <div className="h-12 bg-secondary-500 rounded-lg flex items-center justify-center text-white font-medium">
                  Secondary
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Typography variant="label">Semantic Colors</Typography>
              <div className="space-y-2">
                <div className="h-12 bg-success-500 rounded-lg flex items-center justify-center text-white font-medium">
                  Success
                </div>
                <div className="h-12 bg-warning-500 rounded-lg flex items-center justify-center text-white font-medium">
                  Warning
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Typography variant="label">Button Variants</Typography>
              <div className="space-y-2">
                <Button className="w-full">Primary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
              </div>
            </div>

            <div className="space-y-3">
              <Typography variant="label">More Variants</Typography>
              <div className="space-y-2">
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="ghost" className="w-full">Ghost</Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Typography variant="caption" className="text-gray-500">
              Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion
            </Typography>
          </div>
        </Container>
      </section>

      {/* RSS Feed Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">
              What&apos;s Happening in San Pedro
            </Typography>
            <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay up to date with the latest news, events, and happenings in beautiful San Pedro, Belize.
            </Typography>
          </div>
          
          <div className="w-full">
            <div className="rss-feed-custom-wrapper">
              <div className="commonninja_component pid-7a02d2a6-3c84-4eb2-b9e5-4e1da7a50068"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-primary-800/20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-500 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-warning-500 rounded-full blur-2xl"></div>
        </div>
        
        <Container size="lg" className="relative z-10">
          <div className="text-center">
            <Typography variant="h2" className="mb-8 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Ready to Experience Paradise?
            </Typography>
            <Typography variant="body" className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
              From the moment you arrive, San Pedro will capture your heart with its crystal-clear waters, 
              vibrant culture, and endless opportunities for adventure.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="/lovejoy">Book The Lovejoy</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="/contact">Plan Your Trip</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </>
  )
}
