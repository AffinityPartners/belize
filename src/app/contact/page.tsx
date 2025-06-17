import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactSection } from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-warning-50 to-secondary-50 dark:from-warning-900/20 dark:to-secondary-900/20">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <Typography variant="h1" className="mb-6">
                Let&apos;s Plan Your Perfect Trip
              </Typography>
              <Typography variant="body" className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Whether you&apos;re booking The Lovejoy, planning activities, or need local recommendations, 
                we&apos;re here to help make your San Pedro experience unforgettable.
              </Typography>
            </div>
          </Container>
        </section>

        {/* Quick Actions */}
        <section className="py-16">
          <Container size="lg">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-primary-50 dark:bg-primary-900/20 rounded-2xl">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏖️</span>
                </div>
                <Typography variant="h4" className="mb-4">
                  Book The Lovejoy
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6">
                  Check availability and book your stay at our premium beachfront property.
                </Typography>
                <Button asChild>
                  <a href="#contact">Check Availability</a>
                </Button>
              </div>

              <div className="text-center p-8 bg-secondary-50 dark:bg-secondary-900/20 rounded-2xl">
                <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🗓️</span>
                </div>
                <Typography variant="h4" className="mb-4">
                  Plan Activities
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6">
                  Get personalized recommendations for diving, tours, and local experiences.
                </Typography>
                <Button variant="outline" asChild>
                  <a href="#contact">Plan My Trip</a>
                </Button>
              </div>

              <div className="text-center p-8 bg-success-50 dark:bg-success-900/20 rounded-2xl">
                <div className="w-16 h-16 bg-success-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <Typography variant="h4" className="mb-4">
                  Ask Locals
                </Typography>
                <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6">
                  Get insider tips and recommendations from people who know San Pedro best.
                </Typography>
                <Button variant="outline" asChild>
                  <a href="#contact">Get Tips</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <Container size="lg">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-4">
                Frequently Asked Questions
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Quick answers to common questions about visiting San Pedro and staying at The Lovejoy
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <Typography variant="h4" className="mb-3">
                    How do I get to San Pedro?
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    Fly into Belize City (BZE) and take a short domestic flight to San Pedro (SPR), 
                    or take a water taxi from Belize City. We can help arrange transportation.
                  </Typography>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <Typography variant="h4" className="mb-3">
                    What&apos;s the best time to visit?
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    December through April offers dry weather and calm seas. May through November 
                    can have more rain but fewer crowds and better rates.
                  </Typography>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <Typography variant="h4" className="mb-3">
                    Do I need a rental car?
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    No! Golf carts are the main transportation on the island. We include one 
                    with your stay at The Lovejoy, and they&apos;re easy to rent elsewhere too.
                  </Typography>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <Typography variant="h4" className="mb-3">
                    What&apos;s included with The Lovejoy?
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    Private pool, golf cart, fully equipped kitchen, premium linens, WiFi, 
                    and our personal recommendations for the best local experiences.
                  </Typography>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <Typography variant="h4" className="mb-3">
                    Can you help book activities?
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    Absolutely! We work with the best local operators and can arrange everything 
                    from Blue Hole diving to sunset sailing and Mayan ruin tours.
                  </Typography>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <Typography variant="h4" className="mb-3">
                    What should I pack?
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    Lightweight clothing, reef-safe sunscreen, swimwear, and a light rain jacket. 
                    We provide snorkel gear, beach towels, and other essentials.
                  </Typography>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 bg-primary-50 dark:bg-primary-900/10">
          <Container size="lg">
            <div className="text-center">
              <Typography variant="h3" className="mb-8">
                Need Help While You&apos;re Here?
              </Typography>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Typography variant="h4" className="mb-2">
                    Emergency Services
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    911 or 90 (Belize)
                  </Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h4" className="mb-2">
                    Medical Clinic
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    PolyClinic San Pedro<br />226-2536
                  </Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h4" className="mb-2">
                    Tourist Police
                  </Typography>
                  <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                    San Pedro Station<br />226-2022
                  </Typography>
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