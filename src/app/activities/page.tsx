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
    description: 'Snorkel in Belize\'s first marine reserve, home to vibrant coral reefs and an abundance of tropical fish.',
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
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-success-50 to-primary-50 dark:from-success-900/20 dark:to-primary-900/20">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <Typography variant="h1" className="mb-6">
                Adventures Await
              </Typography>
              <Typography variant="body" className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                From world-class diving to ancient Mayan ruins, San Pedro offers unforgettable 
                experiences for every type of traveler. Let us help you create memories that will last a lifetime.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#featured">View Featured</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">Plan My Adventure</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Activities */}
        <section id="featured" className="py-20">
          <Container size="lg">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-4">
                Featured Experiences
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our most popular and unforgettable adventures that showcase the best of Belize
              </Typography>
            </div>

            <div className="space-y-12">
              {featuredActivities.map((activity, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="text-8xl mb-6">{activity.image}</div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
                        {activity.duration}
                      </span>
                      <span className="bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 px-3 py-1 rounded-full text-sm font-medium">
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Typography variant="h3" className="mb-4">
                      {activity.title}
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6">
                      {activity.description}
                    </Typography>
                    <div className="space-y-2 mb-6">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                          <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                            {highlight}
                          </Typography>
                        </div>
                      ))}
                    </div>
                    <Button>
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* All Activities */}
        <ActivitiesSection />

        {/* Planning Your Trip */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <Container size="lg">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-4">
                Planning Your Adventure
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Essential information to help you make the most of your San Pedro experience
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌅</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Best Times to Go
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-4">
                  December to April offers the best weather for diving and outdoor activities.
                </Typography>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Calm seas for diving</li>
                  <li>• Minimal rainfall</li>
                  <li>• Comfortable temperatures</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎒</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  What to Bring
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-4">
                  Pack light and bring essentials for tropical island adventures.
                </Typography>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Reef-safe sunscreen</li>
                  <li>• Quick-dry clothing</li>
                  <li>• Underwater camera</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-success-100 dark:bg-success-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Booking Tips
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-4">
                  Book popular activities in advance, especially during peak season.
                </Typography>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Blue Hole trips fill up fast</li>
                  <li>• Group discounts available</li>
                  <li>• Weather-dependent activities</li>
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