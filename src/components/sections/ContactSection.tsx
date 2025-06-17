import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <Container size="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Ready to Experience Belize?
          </Typography>
          <Typography variant="body" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Get in touch to plan your perfect San Pedro getaway. From booking The Lovejoy 
            to planning your adventure itinerary, we&apos;re here to help make your 
            Belizean dreams come true.
          </Typography>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <Typography variant="h3" className="mb-6">
                Get in Touch
              </Typography>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-1">
                      Email Us
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                      hello@dontstopbelizen.com
                    </Typography>
                    <Typography variant="caption" className="text-gray-500">
                      We usually respond within 24 hours
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-1">
                      WhatsApp
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                      +501 XXX-XXXX
                    </Typography>
                    <Typography variant="caption" className="text-gray-500">
                      Quick responses during Belize hours
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-1">
                      Location
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                      San Pedro, Ambergris Caye
                    </Typography>
                    <Typography variant="caption" className="text-gray-500">
                      Belize, Central America
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <Typography variant="h4" className="mb-4">
                Follow Our Journey
              </Typography>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="flex items-center space-x-2">
                    <span>📸</span>
                    <span>Instagram</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="flex items-center space-x-2">
                    <span>📘</span>
                    <span>Facebook</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <Typography variant="h3" className="mb-6">
              Quick Inquiry
            </Typography>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Travel Dates
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., March 15-22, 2024"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your dream Belize vacation..."
                />
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
} 