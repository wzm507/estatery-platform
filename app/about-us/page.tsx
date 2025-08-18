import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Define team member type
interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  imageUrl: string
}

// About Us page component
const AboutUsPage: React.FC = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      bio: 'With over 15 years of experience in real estate, Sarah leads our company with vision and expertise.',
      imageUrl: '/placeholder-user.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'Head of Sales',
      bio: 'Michael brings a strategic approach to our sales team, ensuring exceptional results for our clients.',
      imageUrl: '/placeholder-user.jpg'
    },
    {
      id: '3',
      name: 'Aisha Al-Mansoori',
      position: 'Property Consultant',
      bio: 'Aisha specializes in luxury properties and provides personalized service to high-end clients.',
      imageUrl: '/placeholder-user.jpg'
    },
    {
      id: '4',
      name: 'David Rodriguez',
      position: 'Investment Advisor',
      bio: 'David helps clients build and optimize their real estate investment portfolios for maximum returns.',
      imageUrl: '/placeholder-user.jpg'
    }
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero section */}
      <div className="mb-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Hawson House</h1>
            <p className="text-lg mb-6">
              We are a premier real estate company specializing in luxury properties in Dubai. With years of experience
              and a deep understanding of the local market, we help our clients find their perfect home or investment property.
            </p>
            <p className="text-lg mb-8">
              Our mission is to provide exceptional service and expert guidance to every client, ensuring a smooth and
              successful real estate experience.
            </p>
            <Button className="px-8 py-6 text-lg">
              Our Story
            </Button>
          </div>
          <div className="relative h-64 md:h-96 overflow-hidden rounded-xl">
            <img 
              src="/image/pm_bannar_476666954c_9a05633066.webp" 
              alt="Hawson House Office" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do and ensure we provide the highest level of service to our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <CardTitle className="text-center">Integrity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                We conduct business with honesty, transparency, and ethical standards in all our interactions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <CardTitle className="text-center">Client Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Our clients' needs and goals are our top priority in every transaction and decision.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle className="text-center">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                We strive for excellence in everything we do, delivering the highest quality service and results.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <CardTitle className="text-center">Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Our team of professionals brings extensive knowledge and experience to every real estate transaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our team */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of real estate professionals is here to help you with all your property needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {member.name}
                </CardTitle>
                <CardDescription>
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-start group-hover:text-primary transition-colors">
                  Contact {member.name}
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Our mission and vision */}
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              To provide exceptional real estate services that exceed our clients' expectations, helping them achieve
              their property goals through expert guidance, integrity, and personalized attention.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              To be the leading real estate company in Dubai, recognized for our professionalism, innovation, and
              commitment to client satisfaction.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you're looking to buy, sell, invest, or manage property, our team is here to help you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-8 py-6 text-lg">
            Contact Us
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg">
            Meet Our Team
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage