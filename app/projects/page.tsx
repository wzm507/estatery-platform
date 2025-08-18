import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'

// Define project type
interface Project {
  id: string
  title: string
  location: string
  price: number
  type: 'apartment' | 'villa' | 'townhouse'
  bedrooms: number
  imageUrl: string
}

// Sample project data
const projects: Project[] = [
  {
    id: '1',
    title: 'EMAAR South',
    location: 'Dubai South, Dubai',
    price: 1500000,
    type: 'apartment',
    bedrooms: 2,
    imageUrl: '/image/All Projects7/EMAAR_SOUTH.jpg'
  },
  {
    id: '2',
    title: 'Palm Jumeirah',
    location: 'Dubai Marina, Dubai',
    price: 3200000,
    type: 'villa',
    bedrooms: 4,
    imageUrl: '/image/All Projects8/PALM_JUMEIRAH.jpg'
  },
  {
    id: '3',
    title: 'Downtown Dubai',
    location: 'Downtown, Dubai',
    price: 2800000,
    type: 'apartment',
    bedrooms: 3,
    imageUrl: '/image/All Projects9/DOWNTOWN_DUBAI.jpg'
  },
  {
    id: '4',
    title: 'Dubai Hills Estate',
    location: 'Dubai Hills, Dubai',
    price: 4500000,
    type: 'villa',
    bedrooms: 5,
    imageUrl: '/image/All Projects10/DUBAI_HILLS.jpg'
  },
  {
    id: '5',
    title: 'Jumeirah Golf Estates',
    location: 'Jumeirah, Dubai',
    price: 3800000,
    type: 'townhouse',
    bedrooms: 3,
    imageUrl: '/image/All Projects11/JUMEIRAH_GOLF.jpg'
  },
  {
    id: '6',
    title: 'Arabian Ranches',
    location: 'Dubailand, Dubai',
    price: 2900000,
    type: 'villa',
    bedrooms: 4,
    imageUrl: '/image/All Projects12/ARABIAN_RANCHES.jpg'
  }
]

// Projects page component
const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Page header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Our Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our premium selection of properties in the most desirable locations across Dubai.
          From luxury villas to modern apartments, we have something for every lifestyle.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
            {/* Project image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium uppercase tracking-wider">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </span>
              </div>
            </div>
            
            {/* Project details */}
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{project.bedrooms} {project.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                </div>
                <div className="font-bold text-primary">
                  {formatCurrency(project.price)}
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full group-hover:bg-primary/90 transition-colors">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* View all button */}
      <div className="mt-12 text-center">
        <Button variant="outline" className="px-8 py-6 text-lg">
          View All Projects
        </Button>
      </div>
    </div>
  )
}

export default ProjectsPage