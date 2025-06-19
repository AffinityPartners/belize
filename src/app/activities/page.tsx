import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ActivitiesSection } from '@/components/sections/ActivitiesSection'

const featuredActivities = [
  {
    title: 'Blue Hole National Monument',
    description: 'Dive into the world-famous Blue Hole, a UNESCO World Heritage site featuring incredible stalactite formations and diverse marine life.',
    duration: 'Full Day',
    difficulty: 'Advanced',
    image: '🌊',
    highlights: ['UNESCO World Heritage Site', 'Stalactite formations', '400ft deep crater', 'Nurse sharks and reef sharks']
  },
  {
    title: 'Hol Chan Marine Reserve',
    description: 'Snorkel in Belize&apos;s first marine reserve, home to vibrant coral reefs and an abundance of tropical fish.',
    duration: 'Half Day',
    difficulty: 'Beginner',
    image: '🐠',
    highlights: ['Marine protected area', 'Shark Ray Alley', 'Sea turtles', 'Colorful coral formations']
  },
  {
    title: 'Caracol Archaeological Site',
    description: 'Explore ancient Mayan ruins deep in the rainforest, including the tallest man-made structure in Belize.',
    duration: 'Full Day',
    difficulty: 'Moderate',
    image: '🏛️',
    highlights: ['Ancient Mayan city', 'Caana pyramid', 'Wildlife spotting', 'Historical significance']
  }
]

export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-coral-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Enhanced Hero Section with Island Luxury */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          {/* Floating elements for island ambiance */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-3 h-3 bg-gold-400/40 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-coral-400/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-20 w-4 h-4 bg-teal-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-gold-300/60 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>

          <Container size="lg" className="relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <Typography variant="overline" className="text-teal-600 dark:text-teal-400 tracking-[0.15em] animate-fade-in">
                  ISLAND ADVENTURES
                </Typography>
              </div>
              
              <Typography variant="h1" serif={true} className="mb-8 bg-gradient-to-r from-teal-700 via-primary-600 to-coral-600 bg-clip-text text-transparent animate-slide-up">
                Adventures Await
              </Typography>
              
              <Typography variant="body-lg" className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
                From world-class diving to ancient Mayan ruins, San Pedro offers unforgettable 
                experiences for every type of traveler. Let us help you create memories that will last a lifetime.
              </Typography>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
                <Button variant="sunset" size="lg" asChild className="font-semibold tracking-wide">
                  <a href="#featured">🏝️ View Featured</a>
                </Button>
                <Button variant="glass" size="lg" asChild className="font-semibold tracking-wide border-2 border-white/40 hover:border-white/60">
                  <a href="/contact">✨ Plan My Adventure</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Enhanced Featured Activities with Island Luxury */}
        <section id="featured" className="py-24">
          <Container size="lg">
            <div className="text-center mb-20">
              <Typography variant="overline" className="text-coral-600 dark:text-coral-400 mb-4 tracking-[0.15em]">
                SIGNATURE EXPERIENCES
              </Typography>
              <Typography variant="h2" className="mb-6 bg-gradient-to-r from-coral-700 via-primary-600 to-teal-600 bg-clip-text text-transparent">
                Featured Adventures
              </Typography>
              <Typography variant="body-lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                Our most popular and unforgettable adventures that showcase the best of Belize
              </Typography>
            </div>

            <div className="space-y-16">
              {featuredActivities.map((activity, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 animate-slide-up ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`text-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="text-9xl mb-8 animate-float" style={{animationDelay: `${index * 0.5}s`}}>{activity.image}</div>
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <span className="bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {activity.duration}
                      </span>
                      <span className="bg-gradient-to-r from-coral-100 to-coral-200 dark:from-coral-900 dark:to-coral-800 text-coral-700 dark:text-coral-300 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Typography variant="h3" className="mb-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-700 to-coral-600 bg-clip-text text-transparent">
                      {activity.title}
                    </Typography>
                    <Typography variant="body-lg" className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                      {activity.description}
                    </Typography>
                    <div className="space-y-4 mb-8">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full mr-4 animate-pulse"></div>
                          <Typography variant="body" className="text-gray-600 dark:text-gray-300 font-medium">
                            {highlight}
                          </Typography>
                        </div>
                      ))}
                    </div>
                    <Button variant={index === 0 ? 'teal' : index === 1 ? 'coral' : 'gold'} size="lg" className="font-semibold">
                      🌟 Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* All Activities */}
        <ActivitiesSection />

        {/* Enhanced Planning Your Trip with Island Luxury */}
        <section className="py-24 bg-gradient-to-br from-teal-50/50 via-white to-coral-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <Container size="lg">
            <div className="text-center mb-20">
              <Typography variant="overline" className="text-gold-600 dark:text-gold-400 mb-4 tracking-[0.15em]">
                EXPERT GUIDANCE
              </Typography>
              <Typography variant="h2" className="mb-6 bg-gradient-to-r from-gold-700 via-teal-600 to-coral-600 bg-clip-text text-transparent">
                Planning Your Adventure
              </Typography>
              <Typography variant="body-lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                Essential information to help you make the most of your San Pedro experience
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-teal-200/50 dark:border-teal-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <span className="text-3xl animate-wave">🌅</span>
                </div>
                <Typography variant="h4" className="mb-4 text-teal-800 dark:text-teal-200 font-bold">
                  Best Times to Go
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  December to April offers the best weather for diving and outdoor activities.
                </Typography>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>Calm seas for diving</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>Minimal rainfall</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>Comfortable temperatures</li>
                </ul>
              </div>

              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-coral-200/50 dark:border-coral-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-coral-100 to-coral-200 dark:from-coral-900 dark:to-coral-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <span className="text-3xl animate-wave" style={{animationDelay: '0.5s'}}>🎒</span>
                </div>
                <Typography variant="h4" className="mb-4 text-coral-800 dark:text-coral-200 font-bold">
                  What to Bring
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Pack light and bring essentials for tropical island adventures.
                </Typography>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-coral-500 rounded-full mr-3"></span>Reef-safe sunscreen</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-coral-500 rounded-full mr-3"></span>Quick-dry clothing</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-coral-500 rounded-full mr-3"></span>Underwater camera</li>
                </ul>
              </div>

              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gold-200/50 dark:border-gold-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-900 dark:to-gold-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <span className="text-3xl animate-wave" style={{animationDelay: '1s'}}>📋</span>
                </div>
                <Typography variant="h4" className="mb-4 text-gold-800 dark:text-gold-200 font-bold">
                  Booking Tips
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Book popular activities in advance, especially during peak season.
                </Typography>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>Blue Hole trips fill up fast</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>Group discounts available</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>Weather-dependent activities</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
} 