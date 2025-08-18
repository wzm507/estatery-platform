import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { formatDate, truncateText } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

// Define blog post type
interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: number
  category: string
  tags: string[]
  featured: boolean
  imageUrl: string
}

// Blog page component
const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Buying Property in Dubai',
      excerpt: 'Everything you need to know about the property buying process in Dubai, from legal requirements to financing options.',
      content: 'Detailed content about buying property in Dubai...',
      author: {
        name: 'Sarah Johnson',
        avatar: '/placeholder-user.jpg'
      },
      date: '2023-06-15',
      readTime: 8,
      category: 'Buying Tips',
      tags: ['Property Buying', 'Dubai', 'Real Estate'],
      featured: true,
      imageUrl: '/image/pm_bannar_476666954c_9a05633066.webp'
    },
    {
      id: '2',
      title: 'Top 10 Luxury Villas in Palm Jumeirah',
      excerpt: 'Explore the most exclusive villas in one of Dubai\'s most prestigious residential areas.',
      content: 'Detailed content about luxury villas in Palm Jumeirah...',
      author: {
        name: 'Michael Chen',
        avatar: '/placeholder-user.jpg'
      },
      date: '2023-06-10',
      readTime: 10,
      category: 'Luxury Properties',
      tags: ['Luxury', 'Villas', 'Palm Jumeirah'],
      featured: true,
      imageUrl: '/image/pm_bannar_476666954c_9a05633066.webp'
    },
    {
      id: '3',
      title: 'Real Estate Investment Trends in 2023',
      excerpt: 'Stay ahead of the curve with the latest investment trends in the Dubai real estate market.',
      content: 'Detailed content about real estate investment trends...',
      author: {
        name: 'Aisha Al-Mansoori',
        avatar: '/placeholder-user.jpg'
      },
      date: '2023-06-05',
      readTime: 6,
      category: 'Investment',
      tags: ['Investment', 'Trends', '2023'],
      featured: false,
      imageUrl: '/image/pm_bannar_476666954c_9a05633066.webp'
    },
    {
      id: '4',
      title: 'Guide to Property Financing in Dubai',
      excerpt: 'Understanding mortgage options, interest rates, and financing solutions for property buyers.',
      content: 'Detailed content about property financing in Dubai...',
      author: {
        name: 'David Rodriguez',
        avatar: '/placeholder-user.jpg'
      },
      date: '2023-05-28',
      readTime: 7,
      category: 'Financing',
      tags: ['Financing', 'Mortgage', 'Dubai'],
      featured: false,
      imageUrl: '/image/pm_bannar_476666954c_9a05633066.webp'
    },
    {
      id: '5',
      title: 'Emerging Areas to Watch in Dubai Real Estate',
      excerpt: 'Discover up-and-coming neighborhoods that offer great potential for investors and homebuyers.',
      content: 'Detailed content about emerging areas in Dubai...',
      author: {
        name: 'Sarah Johnson',
        avatar: '/placeholder-user.jpg'
      },
      date: '2023-05-20',
      readTime: 9,
      category: 'Market Insights',
      tags: ['Emerging Areas', 'Investment', 'Market'],
      featured: false,
      imageUrl: '/image/pm_bannar_476666954c_9a05633066.webp'
    },
    {
      id: '6',
      title: 'How to Stage Your Property for Maximum Appeal',
      excerpt: 'Professional tips on preparing your property for sale or rental to attract the best offers.',
      content: 'Detailed content about property staging...',
      author: {
        name: 'Aisha Al-Mansoori',
        avatar: '/placeholder-user.jpg'
      },
      date: '2023-05-15',
      readTime: 5,
      category: 'Selling Tips',
      tags: ['Property Staging', 'Selling', 'Tips'],
      featured: false,
      imageUrl: '/image/pm_bannar_476666954c_9a05633066.webp'
    }
  ]

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  // Filter blog posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Real Estate Insights</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay informed with the latest trends, tips, and advice from our real estate experts.
        </p>
      </div>

      {/* Search and filters */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative">
            <Input
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start overflow-x-auto py-1">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-4 py-2 whitespace-nowrap">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Featured posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Featured Posts
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary/90">Featured</Badge>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/80 mb-3">
                      {truncateText(post.excerpt, 100)}
                    </p>
                    <div className="flex items-center text-white/70 text-sm">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>{post.author.name}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
                <CardFooter className="bg-white dark:bg-slate-800 p-6">
                  <Button className="w-full">
                    Read More
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All blog posts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          {selectedCategory === 'all' ? 'All Posts' : `${selectedCategory} Posts`}
        </h2>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {post.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="p-6 pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="text-sm">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {truncateText(post.excerpt, 120)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-muted-foreground">
                        #{tag.toLowerCase().replace(/\s+/g, '-')}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto group-hover:text-primary transition-colors">
                    Read More
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 text-center">
            <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any blog posts matching your search criteria.
            </p>
            <Button onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Newsletter signup */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-0">
              Subscribe to our newsletter to receive the latest real estate news, tips, and property listings directly to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="px-6 py-3 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Popular tags */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
            <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors">
              #{tag.toLowerCase().replace(/\s+/g, '-')}
            </Badge>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Have Questions About Real Estate?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our team of experts is here to help you navigate the real estate market. Contact us today for personalized advice.
        </p>
        <Button className="px-8 py-6 text-lg">
          Contact Our Experts
        </Button>
      </div>
    </div>
  )
}

export default BlogPage