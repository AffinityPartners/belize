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
    <section id="activities" className="py-20">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Discover San Pedro
          </Typography>
          <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            From underwater adventures to cultural discoveries, San Pedro offers endless opportunities 
            for exploration. Let us guide you to the island&apos;s most incredible experiences.
          </Typography>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{activity.icon}</span>
              </div>
              
              <Typography variant="h4" className="mb-3">
                {activity.title}
              </Typography>
              
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-4">
                {activity.description}
              </Typography>

              <div className="space-y-2">
                {activity.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12">
          <Typography variant="h3" className="mb-4">
            Ready for Your Belizean Adventure?
          </Typography>
          <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect itinerary. From booking excursions to restaurant 
            recommendations, we&apos;re here to make your stay unforgettable.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Plan My Trip
            </Button>
            <Button variant="outline" size="lg">
              View All Activities
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
} 