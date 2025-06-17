import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'

// Mock blog post data - in a real app this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'First Time in San Pedro? Your Ultimate Guide',
    excerpt: 'Everything you need to know for your inaugural visit to this Caribbean paradise, from must-see spots to local dining favorites.',
    date: '2024-01-15',
    author: 'Maria Rodriguez',
    readTime: '8 min read',
    category: 'Travel Guide',
    image: '/belize-beach-dsb.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'The Best Snorkeling Spots Around Ambergris Caye',
    excerpt: 'Discover the most spectacular underwater locations accessible from San Pedro, including the famous Blue Hole.',
    date: '2024-01-10',
    author: 'Carlos Martinez',
    readTime: '6 min read',
    category: 'Adventure',
    image: '/belize-beach-dsb.jpg'
  },
  {
    id: 3,
    title: 'Local Eats: Where San Pedro Residents Actually Dine',
    excerpt: 'Skip the tourist traps and eat where the locals do. Our insider guide to authentic Belizean cuisine in San Pedro.',
    date: '2024-01-05',
    author: 'Sofia Chen',
    readTime: '5 min read',
    category: 'Food & Drink',
    image: '/belize-beach-dsb.jpg'
  },
  {
    id: 4,
    title: 'Planning Your San Pedro Wedding: A Complete Guide',
    excerpt: 'From beachfront ceremonies to local traditions, everything couples need to know about tying the knot in paradise.',
    date: '2024-01-01',
    author: 'Miguel Gonzalez',
    readTime: '10 min read',
    category: 'Events',
    image: '/belize-beach-dsb.jpg'
  },
  {
    id: 5,
    title: 'Seasonal Guide: When to Visit San Pedro',
    excerpt: 'Understanding weather patterns, tourist seasons, and the best times to visit based on your interests and budget.',
    date: '2023-12-28',
    author: 'Elena Torres',
    readTime: '7 min read',
    category: 'Travel Guide',
    image: '/belize-beach-dsb.jpg'
  },
  {
    id: 6,
    title: 'Diving the Blue Hole: What to Expect',
    excerpt: 'Everything you need to know about one of the world\'s most famous dive sites, from preparation to what you\'ll see below.',
    date: '2023-12-20',
    author: 'David Kim',
    readTime: '9 min read',
    category: 'Adventure',
    image: '/belize-beach-dsb.jpg'
  }
]

const categories = ['All', 'Travel Guide', 'Adventure', 'Food & Drink', 'Events']

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <Typography variant="h1" className="mb-6">
                Stories from Paradise
              </Typography>
              <Typography variant="body" className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover insider stories, travel tips, and local insights about life in San Pedro, Belize. 
                From adventure guides to cultural experiences, get inspired for your next Caribbean escape.
              </Typography>
            </div>
          </Container>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-gray-200 dark:border-gray-700">
          <Container size="lg">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <Container size="lg">
              <div className="mb-8">
                <Typography variant="h3" className="text-center mb-2">
                  Featured Story
                </Typography>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 group">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-80 md:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <Typography variant="h2" className="mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {featuredPost.title}
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </Typography>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{featuredPost.author}</span>
                        <span>•</span>
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="self-start">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <Container size="lg">
            <div className="text-center mb-12">
              <Typography variant="h3" className="mb-2">
                Latest Stories
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                Stay updated with the latest from San Pedro
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Typography variant="h4" className="mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </Typography>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <div className="flex items-center space-x-2">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <Container size="lg">
            <div className="text-center max-w-2xl mx-auto">
              <Typography variant="h2" className="mb-4 text-white">
                Never Miss a Story
              </Typography>
              <Typography variant="body" className="mb-8 text-primary-100">
                Get the latest San Pedro insights, travel tips, and exclusive content delivered to your inbox.
              </Typography>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button variant="glass" className="sm:px-8">
                  Subscribe
                </Button>
              </form>
              
              <Typography variant="caption" className="mt-4 text-primary-200">
                No spam, just great stories. Unsubscribe anytime.
              </Typography>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
} 