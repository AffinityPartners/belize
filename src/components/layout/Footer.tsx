import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'

const footerLinks = {
  explore: [
    { name: 'Things to Do', href: '/activities' },
    { name: 'Explore San Pedro', href: '/explore' },
    { name: 'Local Tips', href: '/explore#insights' },
    { name: 'Best Times to Visit', href: '/activities#planning' },
  ],
  stay: [
    { name: 'The Lovejoy', href: '/lovejoy' },
    { name: 'Check Availability', href: '/contact' },
    { name: 'Property Photos', href: '/lovejoy#gallery' },
    { name: 'Amenities', href: '/lovejoy#amenities' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/contact#faq' },
    { name: 'Plan My Trip', href: '/contact' },
    { name: 'Emergency Info', href: '/contact#emergency' },
  ],
}

const socialLinks = [
  { name: 'Instagram', href: '#', icon: '📸' },
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'YouTube', href: '#', icon: '📺' },
  { name: 'Email', href: 'mailto:hello@dontstopbelizen.com', icon: '📧' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container size="lg" className="py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="inline-block w-full">
                <div className="relative w-full h-24 hover:opacity-80 transition-opacity -ml-5">
                  <Image
                    src="/images/DSBelizen-Logo-retina.png"
                    alt="Don't Stop Belizen Logo"
                    fill
                    className="object-contain object-left"
                    priority
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </Link>
            </div>
            <Typography variant="body" className="text-gray-300 mb-6">
              Experience San Pedro, Belize through local eyes. Discover authentic adventures, 
              savor incredible cuisine, and stay at The Lovejoy—your gateway to island paradise.
            </Typography>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <Typography variant="h4" className="mb-6 text-white">
              Explore
            </Typography>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h4" className="mb-6 text-white">
              Stay
            </Typography>
            <ul className="space-y-3">
              {footerLinks.stay.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h4" className="mb-6 text-white">
              Support
            </Typography>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <Typography variant="label" className="text-white">Location</Typography>
                <Typography variant="caption" className="text-gray-300">San Pedro, Ambergris Caye, Belize</Typography>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <Typography variant="label" className="text-white">Email</Typography>
                <Typography variant="caption" className="text-gray-300">hello@dontstopbelizen.com</Typography>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <div>
                <Typography variant="label" className="text-white">WhatsApp</Typography>
                <Typography variant="caption" className="text-gray-300">+501 XXX-XXXX</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <Typography variant="caption" className="text-gray-400 mb-4 md:mb-0">
            © 2024 Don&apos;t Stop Belizen. All rights reserved.
          </Typography>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
} 