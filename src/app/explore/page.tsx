import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ActivitiesSection } from '@/components/sections/ActivitiesSection'

export default function ExplorePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/30 dark:via-gray-900 dark:to-secondary-900/30 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warning-500 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          
          <Container size="lg" className="relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <Typography variant="h1" className="mb-8 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 bg-clip-text text-transparent">
                Explore San Pedro
              </Typography>
              <Typography variant="body" className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
                Discover the vibrant culture, stunning natural beauty, and endless adventures 
                that make San Pedro, Belize a true Caribbean paradise.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="#activities">View Activities</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="/contact">Plan My Trip</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <Container size="lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Typography variant="h2" className="mb-6">
                  Paradise Found
                </Typography>
                <div className="space-y-4">
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    San Pedro, located on Ambergris Caye, is Belize&apos;s premier island destination. 
                    Known for its laid-back Caribbean vibe, world-class diving, and warm, 
                    welcoming locals, this tropical paradise offers the perfect blend of 
                    adventure and relaxation.
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    From the moment you step off the plane, you&apos;ll be captivated by the 
                    crystal-clear waters, vibrant coral reefs, and the infectious energy 
                    of island life. Whether you&apos;re seeking underwater adventures, cultural 
                    experiences, or simply a place to unwind, San Pedro has it all.
                  </Typography>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary-100 dark:bg-primary-900 rounded-xl p-6 text-center">
                    <Typography variant="h3" className="text-primary-600 dark:text-primary-400 mb-2">
                      25°C
                    </Typography>
                    <Typography variant="label">Perfect Weather</Typography>
                  </div>
                  <div className="bg-secondary-100 dark:bg-secondary-900 rounded-xl p-6 text-center">
                    <Typography variant="h3" className="text-secondary-600 dark:text-secondary-400 mb-2">
                      300+
                    </Typography>
                    <Typography variant="label">Sunny Days</Typography>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-success-100 dark:bg-success-900 rounded-xl p-6 text-center">
                    <Typography variant="h3" className="text-success-600 dark:text-success-400 mb-2">
                      15km
                    </Typography>
                    <Typography variant="label">Barrier Reef</Typography>
                  </div>
                  <div className="bg-warning-100 dark:bg-warning-900 rounded-xl p-6 text-center">
                    <Typography variant="h3" className="text-warning-600 dark:text-warning-400 mb-2">
                      ∞
                    </Typography>
                    <Typography variant="label">Adventures</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Activities Section */}
        <ActivitiesSection />

        {/* Local Insights */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <Container size="lg">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-4">
                Local Insights
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tips and recommendations from someone who truly knows San Pedro
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Best Time to Visit
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                  December through April offers the driest weather and calmest seas, 
                  perfect for diving and snorkeling adventures.
                </Typography>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Getting Around
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                  Golf carts are the main mode of transportation. Rent one for ultimate 
                  freedom to explore the island at your own pace.
                </Typography>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Local Flavors
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                  Don&apos;t miss the fresh conch fritters, lobster tail, and local Belikin beer. 
                  Ask locals for their favorite &ldquo;hole-in-the-wall&rdquo; spots.
                </Typography>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
} 