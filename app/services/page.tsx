import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Define service type
interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

// Services page component
const ServicesPage: React.FC = () => {
  // Services data
  const services: Service[] = [
    {
      id: '1',
      title: 'Property Buying',
      description: 'Expert guidance to find your dream home or investment property in Dubai.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        'Property search assistance',
        'Market analysis and advice',
        'Negotiation support',
        'Legal and documentation guidance'
      ]
    },
    {
      id: '2',
      title: 'Property Selling',
      description: 'Comprehensive services to sell your property quickly and at the best price.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      features: [
        'Property valuation',
        'Professional photography',
        'Marketing strategy',
        'Open house coordination'
      ]
    },
    {
      id: '3',
      title: 'Property Management',
      description: 'Full-service management to maximize your property investment returns.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: [
        'Tenant screening and placement',
        'Rent collection and financial management',
        'Property maintenance and repairs',
        'Legal compliance and documentation'
      ]
    },
    {
      id: '4',
      title: 'Investment Consultancy',
      description: 'Strategic advice to build and optimize your real estate investment portfolio.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: [
        'Market research and trends',
        'Investment property analysis',
        'Portfolio planning',
        'ROI calculation and projections'
      ]
    },
    {
      id: '5',
      title: 'Interior Design',
      description: 'Transform your space with our professional interior design services.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      features: [
        'Space planning and layout',
        'Material and color selection',
        'Furniture and decor sourcing',
        'Project management and implementation'
      ]
    },
    {
      id: '6',
      title: 'Property Financing',
      description: 'Expert guidance to secure the best financing options for your property purchase.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'Mortgage comparison',
        'Loan pre-approval assistance',
        'Financial document preparation',
        'Negotiation with lenders'
      ]
    }
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Page header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive real estate solutions tailored to your needs. Whether you're buying, selling, investing, or
          managing property, we have the expertise to guide you every step of the way.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-center">
                {service.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full group-hover:bg-primary/90 transition-colors">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA section */}
      <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Real Estate Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our team of experts is ready to help you with all your real estate needs. Contact us today to schedule a consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-8 py-6 text-lg">
            Contact Us
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage