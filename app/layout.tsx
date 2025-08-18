import React from 'react'
import { Toaster } from '@/components/ui/toaster'
import { useMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import './globals.css'

// Navigation links type
interface NavLink {
  id: string
  href: string
  label: string
  isExternal?: boolean
}

// Footer column type
interface FooterColumn {
  id: string
  title: string
  links: NavLink[]
}

// Root layout component
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile } = useMobile()

  // Main navigation links
  const mainNavLinks: NavLink[] = [
    { id: 'home', href: '/', label: 'Home' },
    { id: 'projects', href: '/projects', label: 'Projects' },
    { id: 'services', href: '/services', label: 'Services' },
    { id: 'about', href: '/about-us', label: 'About Us' },
    { id: 'blog', href: '/blog', label: 'Blog' },
    { id: 'contact', href: '/contact', label: 'Contact' }
  ]

  // Footer columns
  const footerColumns: FooterColumn[] = [
    {
      id: 'company',
      title: 'Company',
      links: [
        { id: 'footer-about', href: '/about-us', label: 'About Us' },
        { id: 'footer-team', href: '/about-us', label: 'Our Team' },
        { id: 'footer-careers', href: '#', label: 'Careers' },
        { id: 'footer-privacy', href: '#', label: 'Privacy Policy' },
        { id: 'footer-terms', href: '#', label: 'Terms of Service' }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      links: [
        { id: 'footer-buying', href: '/services', label: 'Property Buying' },
        { id: 'footer-selling', href: '/services', label: 'Property Selling' },
        { id: 'footer-management', href: '/services', label: 'Property Management' },
        { id: 'footer-investment', href: '/services', label: 'Investment Consultancy' },
        { id: 'footer-financing', href: '/services', label: 'Property Financing' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        { id: 'footer-blog', href: '/blog', label: 'Blog' },
        { id: 'footer-guides', href: '/blog', label: 'Buying Guides' },
        { id: 'footer-market', href: '/blog', label: 'Market Reports' },
        { id: 'footer-faqs', href: '/contact', label: 'FAQs' },
        { id: 'footer-newsletter', href: '/blog', label: 'Newsletter' }
      ]
    },
    {
      id: 'contact',
      title: 'Contact Us',
      links: [
        { id: 'footer-address', href: '/contact', label: 'Sheikh Zayed Road, Dubai, UAE' },
        { id: 'footer-phone', href: 'tel:+97144445555', label: '+971 4 444 5555' },
        { id: 'footer-email', href: 'mailto:info@hawsonhouse.com', label: 'info@hawsonhouse.com' },
        { id: 'footer-hours', href: '/contact', label: 'Mon-Fri: 9AM - 7PM' },
        { id: 'footer-map', href: '/contact', label: 'View on Map' }
      ]
    }
  ]

  // Social media links
  const socialLinks: NavLink[] = [
    { id: 'facebook', href: '#', label: 'Facebook', isExternal: true },
    { id: 'twitter', href: '#', label: 'Twitter', isExternal: true },
    { id: 'instagram', href: '#', label: 'Instagram', isExternal: true },
    { id: 'linkedin', href: '#', label: 'LinkedIn', isExternal: true }
  ]

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hawson House | Luxury Real Estate in Dubai</title>
        <meta name="description" content="Discover luxury properties in Dubai with Hawson House, your trusted real estate partner." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased min-h-screen flex flex-col">
        {/* Header / Navigation */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-primary">
                  Hawson<span className="text-foreground">House</span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {mainNavLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" className="text-sm">
                  Book a Consultation
                </Button>
                <Button className="text-sm">
                  Contact Agent
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col h-full">
                      <div className="py-6">
                        <a href="/" className="text-2xl font-bold text-primary">
                          Hawson<span className="text-foreground">House</span>
                        </a>
                      </div>
                      <Separator />
                      <ScrollArea className="flex-1 py-6">
                        <nav className="flex flex-col space-y-6">
                          {mainNavLinks.map((link) => (
                            <a
                              key={link.id}
                              href={link.href}
                              className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary"
                            >
                              {link.label}
                            </a>
                          ))}
                        </nav>
                        <Separator className="my-6" />
                        <div className="space-y-6">
                          <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <a href="/projects" className="text-sm hover:text-primary">Featured Properties</a>
                            <a href="/services" className="text-sm hover:text-primary">Our Services</a>
                            <a href="/blog" className="text-sm hover:text-primary">Market Insights</a>
                            <a href="/contact" className="text-sm hover:text-primary">FAQs</a>
                          </div>
                        </div>
                      </ScrollArea>
                      <Separator />
                      <div className="py-6 space-y-4">
                        <Button className="w-full">
                          Contact Agent
                        </Button>
                        <Button variant="ghost" className="w-full">
                          Book a Consultation
                        </Button>
                        <div className="pt-4 flex justify-center space-x-4">
                          {socialLinks.map((link) => (
                            <a
                              key={link.id}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-muted border-t pt-16 pb-8">
          <div className="container mx-auto px-4">
            {/* Main Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {footerColumns.map((column) => (
                <div key={column.id}>
                  <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          target={link.isExternal ? "_blank" : undefined}
                          rel={link.isExternal ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="bg-background rounded-lg p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-muted-foreground">
                    Stay updated with the latest real estate news, market trends, and property listings.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="pt-8 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex items-center space-x-6">
                  <a href="/" className="text-xl font-bold text-primary">
                    Hawson<span className="text-foreground">House</span>
                  </a>
                  <p className="text-sm text-muted-foreground">
                    © 2023 Hawson House. All rights reserved.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end space-x-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Toast notification */}
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout