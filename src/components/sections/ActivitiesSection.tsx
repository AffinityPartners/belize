import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'

const activities = [
  {
    title: 'Blue Hole Diving',
    description: 'Experience the world-famous Blue Hole, a natural wonder that attracts divers from around the globe.',
    icon: '🤿',
    highlights: ['UNESCO World Heritage Site', 'Unique underwater formations', 'Professional diving guides'],
  },
  {
    title: 'Snorkeling Adventures',
    description: 'Explore vibrant coral reefs and swim alongside tropical fish in crystal-clear Caribbean waters.',
    icon: '🐠',
    highlights: ['Hol Chan Marine Reserve', 'Shark Ray Alley', 'Equipment included'],
  },
  {
    title: 'Fishing Excursions',
    description: 'Deep sea fishing, fly fishing, and reef fishing with experienced local captains.',
    icon: '🎣',
    highlights: ['Tarpon and bonefish', 'Half or full day trips', 'Catch and release options'],
  },
  {
    title: 'Island Hopping',
    description: 'Discover secluded beaches, hidden coves, and pristine islands around San Pedro.',
    icon: '🏝️',
    highlights: ['Caye Caulker day trips', 'Private boat charters', 'Beach BBQ included'],
  },
  {
    title: 'Mayan Ruins',
    description: 'Journey to ancient Mayan temples and learn about Belize&apos;s rich cultural heritage.',
    icon: '🏛️',
    highlights: ['Caracol and Tikal ruins', 'Expert archaeological guides', 'Cultural immersion'],
  },
  {
    title: 'Culinary Tours',
    description: 'Taste authentic Belizean cuisine and fresh seafood at local favorites and hidden gems.',
    icon: '🍽️',
    highlights: ['Local market visits', 'Traditional cooking classes', 'Rum tasting experiences'],
  },
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 bg-gradient-to-br from-white via-coral-50/20 to-teal-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Container size="lg">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <Typography variant="overline" className="text-primary-600 dark:text-primary-400 mb-4 tracking-[0.15em]">
            EXPLORE PARADISE
          </Typography>
          <Typography variant="h2" className="mb-6 bg-gradient-to-r from-primary-600 via-teal-600 to-coral-600 bg-clip-text text-transparent">
            Discover San Pedro
          </Typography>
          <Typography variant="body-lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            From underwater adventures to cultural discoveries, San Pedro offers endless opportunities 
            for exploration. Let us guide you to the island&apos;s most incredible experiences.
          </Typography>
        </div>

        {/* Enhanced Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {activities.map((activity, index) => {
            const colors = [
              { bg: 'from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800', text: 'text-teal-800 dark:text-teal-200', border: 'border-teal-200/50 dark:border-teal-700/50', dot: 'bg-teal-500' },
              { bg: 'from-coral-100 to-coral-200 dark:from-coral-900 dark:to-coral-800', text: 'text-coral-800 dark:text-coral-200', border: 'border-coral-200/50 dark:border-coral-700/50', dot: 'bg-coral-500' },
              { bg: 'from-gold-100 to-gold-200 dark:from-gold-900 dark:to-gold-800', text: 'text-gold-800 dark:text-gold-200', border: 'border-gold-200/50 dark:border-gold-700/50', dot: 'bg-gold-500' },
              { bg: 'from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800', text: 'text-primary-800 dark:text-primary-200', border: 'border-primary-200/50 dark:border-primary-700/50', dot: 'bg-primary-500' },
              { bg: 'from-sunset-100 to-sunset-200 dark:from-sunset-900 dark:to-sunset-800', text: 'text-sunset-800 dark:text-sunset-200', border: 'border-sunset-200/50 dark:border-sunset-700/50', dot: 'bg-sunset-500' },
              { bg: 'from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800', text: 'text-secondary-800 dark:text-secondary-200', border: 'border-secondary-200/50 dark:border-secondary-700/50', dot: 'bg-secondary-500' }
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl border ${colorScheme.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${colorScheme.bg} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <span className="text-4xl animate-wave" style={{animationDelay: `${index * 0.3}s`}}>{activity.icon}</span>
                </div>
                
                <Typography variant="h4" className={`mb-4 ${colorScheme.text} font-bold text-xl`}>
                  {activity.title}
                </Typography>
                
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {activity.description}
                </Typography>

                <div className="space-y-3">
                  {activity.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className={`w-2 h-2 ${colorScheme.dot} rounded-full mr-3 animate-pulse`} />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center bg-gradient-to-br from-teal-900 via-primary-800 to-coral-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-24 h-24 bg-gold-400 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-coral-400 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-teal-400 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10">
            <Typography variant="overline" className="text-gold-300 mb-6 tracking-[0.2em] text-sm md:text-base">
              YOUR ADVENTURE AWAITS
            </Typography>
            <Typography variant="h3" className="mb-6 text-white drop-shadow-xl text-2xl md:text-3xl">
              Ready for Your Belizean Adventure?
            </Typography>
            <Typography variant="body-lg" className="text-white/90 mb-10 max-w-3xl mx-auto text-lg leading-relaxed drop-shadow-lg">
              Let us help you plan the perfect itinerary. From booking excursions to restaurant 
              recommendations, we&apos;re here to make your stay unforgettable.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gold" size="lg" className="font-bold tracking-wide text-lg">
                🗺️ Plan My Trip
              </Button>
              <Button variant="glass" size="lg" className="font-bold tracking-wide text-lg border-2 border-white/50 hover:border-white/70">
                🌟 View All Activities
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 