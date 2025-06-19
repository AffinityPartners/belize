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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
          {/* Enhanced gradient overlays for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-transparent to-coral-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          {/* Subtle animated overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-teal-500/5 animate-pulse-slow" />
        </div>

        {/* Floating elements for island ambiance */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400/60 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-coral-400/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-teal-400/60 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-gold-300/70 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Content */}
        <Container size="lg" className="relative z-10">
          <div className="text-center max-w-6xl mx-auto py-24">
            {/* Logo with enhanced glass effect */}
            <div className="mb-16 flex justify-center">
              <div className="relative w-36 h-36 md:w-52 md:h-52 p-6 rounded-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl animate-breathe">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coral-500/10 to-teal-500/10"></div>
                <Image
                  src="/images/DSBelizen-Logo-retina.png"
                  alt="Don't Stop Belizen Logo"
                  fill
                  className="object-contain drop-shadow-2xl p-4 relative z-10"
                  priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/20 to-coral-400/20 blur-xl animate-pulse-slow"></div>
              </div>
            </div>

            {/* Enhanced tagline above title */}
            <div className="mb-6">
              <Typography 
                variant="overline" 
                className="text-gold-300 tracking-[0.2em] font-bold text-sm md:text-base drop-shadow-lg animate-fade-in"
              >
                ISLAND LUXURY AWAITS
              </Typography>
            </div>

            <Typography 
              variant="h1" 
              serif={true}
              className="mb-8 text-white drop-shadow-xl animate-slide-up"
              style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.1)' }}
            >
              Don&apos;t Stop Belizen
            </Typography>
            
            <Typography 
              variant="body-lg" 
              className="mb-12 text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-lg animate-slide-up"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                animationDelay: '0.2s'
              }}
            >
              Experience the vibrant lifestyle, culture, and adventure opportunities in San Pedro, Belize. 
              From snorkeling in the Blue Hole to beachside dining, discover paradise through local eyes.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button 
                variant="sunset"
                size="lg" 
                asChild
                className="font-semibold tracking-wide"
              >
                <a href="/explore">🏝️ Explore San Pedro</a>
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                asChild
                className="font-semibold tracking-wide border-2 border-white/40 hover:border-white/60"
              >
                <a href="/lovejoy">✨ View The Lovejoy</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-teal-50/30 to-coral-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Container size="lg">
          <div className="text-center mb-20">
            <Typography variant="overline" className="text-teal-600 dark:text-teal-400 mb-4 tracking-[0.15em]">
              LUXURY EXPERIENCES
            </Typography>
            <Typography variant="h2" className="mb-6 bg-gradient-to-r from-teal-700 via-primary-600 to-coral-600 bg-clip-text text-transparent">
              Your Gateway to Paradise
            </Typography>
            <Typography variant="body-lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover authentic experiences and luxury accommodations that showcase 
              the best of San Pedro, Belize.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Destination Discovery */}
            <div className="group p-8 rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-xl border border-teal-200/50 dark:border-teal-700/50 hover:shadow-2xl hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-500 hover:-translate-y-2 animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <span className="text-4xl animate-wave">🏝️</span>
              </div>
              <Typography variant="h4" className="mb-6 text-teal-800 dark:text-teal-200">
                Destination Discovery
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Insider recommendations, stunning visuals, and curated guides on what to do, 
                where to eat, and how to explore San Pedro.
              </Typography>
              <div className="pt-4 border-t border-teal-200/50 dark:border-teal-700/50">
                <Button variant="teal" size="sm" className="text-xs font-semibold">
                  DISCOVER MORE
                </Button>
              </div>
            </div>

            {/* The Lovejoy */}
            <div className="group p-8 rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-xl border border-coral-200/50 dark:border-coral-700/50 hover:shadow-2xl hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-coral-100 to-coral-200 dark:from-coral-900 dark:to-coral-800 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <span className="text-4xl animate-wave" style={{animationDelay: '0.5s'}}>🏖️</span>
              </div>
              <Typography variant="h4" className="mb-6 text-coral-800 dark:text-coral-200">
                The Lovejoy
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                A premium beachfront property offering guests a luxurious, 
                relaxing home base to enjoy everything Belize has to offer.
              </Typography>
              <div className="pt-4 border-t border-coral-200/50 dark:border-coral-700/50">
                <Button variant="coral" size="sm" className="text-xs font-semibold">
                  VIEW PROPERTY
                </Button>
              </div>
            </div>

            {/* Local Experience */}
            <div className="group p-8 rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-xl border border-gold-200/50 dark:border-gold-700/50 hover:shadow-2xl hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-900 dark:to-gold-800 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <span className="text-4xl animate-wave" style={{animationDelay: '1s'}}>🤿</span>
              </div>
              <Typography variant="h4" className="mb-6 text-gold-800 dark:text-gold-200">
                Authentic Adventures
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                From snorkeling in the Blue Hole to enjoying beachside tacos, 
                experience San Pedro through the eyes of someone who truly loves it.
              </Typography>
              <div className="pt-4 border-t border-gold-200/50 dark:border-gold-700/50">
                <Button variant="gold" size="sm" className="text-xs font-semibold">
                  BOOK ADVENTURE
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Design System Demo */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <Container size="lg">
          <div className="text-center mb-20">
            <Typography variant="overline" className="text-primary-600 dark:text-primary-400 mb-4 tracking-[0.15em]">
              ISLAND PALETTE
            </Typography>
            <Typography variant="h2" className="mb-6 bg-gradient-to-r from-primary-600 via-teal-600 to-coral-600 bg-clip-text text-transparent">
              Luxury Color Harmony
            </Typography>
            <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our carefully curated color palette inspired by Belize's natural beauty
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Island Colors */}
            <div className="space-y-4">
              <Typography variant="label" className="text-teal-700 dark:text-teal-300">Island Waters</Typography>
              <div className="space-y-3">
                <div className="h-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
                  Teal
                </div>
                <div className="h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
                  Ocean Blue
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Typography variant="label" className="text-coral-700 dark:text-coral-300">Sunset Hues</Typography>
              <div className="space-y-3">
                <div className="h-16 bg-gradient-to-r from-coral-400 to-coral-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
                  Coral
                </div>
                <div className="h-16 bg-gradient-to-r from-sunset-400 to-sunset-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
                  Sunset
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Typography variant="label" className="text-gold-700 dark:text-gold-300">Golden Sands</Typography>
              <div className="space-y-3">
                <div className="h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-gray-900 font-semibold shadow-lg">
                  Gold
                </div>
                <div className="h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
                  Lavender
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Typography variant="label" className="text-gray-700 dark:text-gray-300">Button Showcase</Typography>
              <div className="space-y-3">
                <Button variant="gradient" className="w-full font-semibold">Gradient</Button>
                <Button variant="glass" className="w-full font-semibold">Glass</Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Typography variant="caption" className="text-gray-500 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
              Built with Next.js 14, TypeScript, Tailwind CSS, and Island Luxury Design
            </Typography>
          </div>
        </Container>
      </section>

      {/* RSS Feed Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal-50/50 via-white to-coral-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Typography variant="overline" className="text-teal-600 dark:text-teal-400 mb-4 tracking-[0.15em]">
              ISLAND UPDATES
            </Typography>
            <Typography variant="h2" className="mb-6 bg-gradient-to-r from-teal-700 via-primary-600 to-coral-600 bg-clip-text text-transparent">
              What&apos;s Happening in San Pedro
            </Typography>
            <Typography variant="body-lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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

      {/* Enhanced Call to Action Section */}
      <section className="py-32 bg-gradient-to-br from-teal-900 via-primary-800 to-coral-900 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold-400 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-coral-400 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-400 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gold-300/60 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-coral-300/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-3/4 w-4 h-4 bg-teal-300/60 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <Container size="lg" className="relative z-10">
          <div className="text-center">
            <Typography variant="overline" className="text-gold-300 mb-6 tracking-[0.2em] text-sm md:text-base">
              YOUR PARADISE AWAITS
            </Typography>
            <Typography variant="h2" className="mb-10 text-white drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              Ready to Experience Paradise?
            </Typography>
            <Typography variant="body-lg" className="text-white/90 max-w-4xl mx-auto mb-12 text-lg md:text-xl leading-relaxed drop-shadow-lg">
              From the moment you arrive, San Pedro will capture your heart with its crystal-clear waters, 
              vibrant culture, and endless opportunities for adventure. Let us be your guide to luxury and authenticity.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button variant="gold" size="lg" asChild className="font-bold tracking-wide text-lg">
                <a href="/lovejoy">🏖️ Book The Lovejoy</a>
              </Button>
              <Button variant="glass" size="lg" asChild className="font-bold tracking-wide text-lg border-2 border-white/50 hover:border-white/70">
                <a href="/contact">✈️ Plan Your Trip</a>
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
