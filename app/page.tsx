import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { formatCurrency } from '../lib/utils';
import { useMobile } from '../hooks/use-mobile';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  image: string;
  featured: boolean;
  type: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface Agent {
  id: number;
  name: string;
  position: string;
  image: string;
  phone: string;
  email: string;
  properties: number;
  rating: number;
}

// Mock data
const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    description: "Stunning waterfront property with panoramic views and modern amenities.",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    type: "Villa"
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    description: "Sleek penthouse in the heart of downtown with spectacular city views.",
    price: 980000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: true,
    type: "Penthouse"
  },
  {
    id: 3,
    title: "Rustic Country Estate",
    description: "Spacious country estate with extensive land and charming architecture.",
    price: 1850000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    location: "Napa Valley, CA",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    type: "Estate"
  }
];

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Property Buying",
    description: "Expert guidance to find your dream home at the best price.",
    icon: "house",
    features: ["Market analysis", "Property tours", "Negotiation support"]
  },
  {
    id: 2,
    title: "Property Selling",
    description: "Comprehensive marketing and sales strategies for maximum returns.",
    icon: "sign",
    features: ["Home staging", "Professional photography", "Targeted marketing"]
  },
  {
    id: 3,
    title: "Property Management",
    description: "Full-service management for rental properties and investments.",
    icon: "building",
    features: ["Tenant screening", "Rent collection", "Maintenance coordination"]
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Smith",
    position: "Homeowner",
    company: "Tech Innovations Inc.",
    content: "Working with Estatery was the best decision we made when purchasing our new home. Their attention to detail and market knowledge made the process smooth and stress-free.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Johnson",
    position: "Property Investor",
    company: "Strategic Investments Group",
    content: "The team at Estatery has helped me build a successful real estate portfolio. Their insights into emerging markets and investment strategies have been invaluable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Williams",
    position: "First-time Buyer",
    company: "Creative Solutions LLC",
    content: "As a first-time homebuyer, I was nervous about the process, but Estatery guided me every step of the way. They answered all my questions and made me feel confident in my decision.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4
  }
];

const TOP_AGENTS: Agent[] = [
  {
    id: 1,
    name: "Robert Chen",
    position: "Senior Real Estate Advisor",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    phone: "+1 (555) 123-4567",
    email: "robert@estatery.com",
    properties: 127,
    rating: 4.9
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    position: "Luxury Property Specialist",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    phone: "+1 (555) 987-6543",
    email: "emily@estatery.com",
    properties: 98,
    rating: 4.8
  }
];

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('');
  const isMobile = useMobile();

  // Hero section search handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', { searchQuery, location, propertyType, priceRange });
    // Navigate to search results page or filter results
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury real estate" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Find Your Perfect <span className="text-primary">Property</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Discover exceptional real estate opportunities tailored to your lifestyle and investment goals.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 max-w-5xl">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search" className="text-sm font-medium text-gray-700">
                  Search
                </Label>
                <Input
                  id="search"
                  placeholder="Keywords, property type, features..."
                  className="w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="City, neighborhood, ZIP..."
                  className="w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type" className="text-sm font-medium text-gray-700">
                  Property Type
                </Label>
                <select
                  id="type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                  Price Range
                </Label>
                <select
                  id="price"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">Any Price</option>
                  <option value="0-500000">$0 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1M</option>
                  <option value="1000000-2000000">$1M - $2M</option>
                  <option value="2000000+">$2M+</option>
                </select>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end mt-2">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105"
                >
                  Search Properties
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Estatery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional real estate services tailored to your unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Our team of experienced real estate professionals provides personalized guidance through every step of the buying or selling process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Extensive Network</h3>
              <p className="text-gray-600">
                Gain access to off-market properties and a vast network of industry professionals to find the perfect match for your needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Process</h3>
              <p className="text-gray-600">
                We believe in full transparency, providing clear information and guidance to help you make informed decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Properties</h2>
              <p className="text-gray-600">Discover our handpicked selection of exceptional properties.</p>
            </div>
            <Button
              className="mt-4 md:mt-0 bg-transparent hover:bg-primary/10 text-primary border border-primary"
            >
              View All Properties
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      {formatCurrency(project.price)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex justify-between text-gray-700 border-t border-gray-100 pt-4">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">{project.bedrooms}</span>
                      <span className="text-xs text-gray-500">Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">{project.bathrooms}</span>
                      <span className="text-xs text-gray-500">Bathrooms</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">{project.area}</span>
                      <span className="text-xs text-gray-500">Sq Ft</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all hover:bg-white/15 hover:-translate-y-1">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/80 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with Estatery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md relative">
                <div className="text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Top Agents</h2>
              <p className="text-gray-600">Work with our experienced real estate professionals.</p>
            </div>
            <Button
              className="mt-4 md:mt-0 bg-transparent hover:bg-primary/10 text-primary border border-primary"
            >
              View All Agents
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOP_AGENTS.map((agent) => (
              <div key={agent.id} className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="md:w-1/3 relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                    Top Agent
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{agent.name}</h3>
                      <p className="text-primary text-sm">{agent.position}</p>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-5 h-5 fill-current mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold text-gray-700">{agent.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    With {agent.properties}+ properties sold and a {agent.rating} star rating, {agent.name} brings extensive market knowledge and negotiation expertise to every transaction.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-600">{agent.email}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm text-gray-600">{agent.phone}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                      Contact Agent
                    </Button>
                    <Button className="flex-1 bg-transparent hover:bg-primary/10 text-primary border border-primary">
                      View Listings
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Our team of real estate experts is ready to help you find the perfect property or sell your current home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white py-3 px-8 text-lg">
                Get Started
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 py-3 px-8 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;