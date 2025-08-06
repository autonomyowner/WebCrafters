import { 
  CheckCircle, 
  Star, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  Smartphone,
  Database,
  Cloud,
  Code,
  ArrowRight,
  Phone,
  Clock,
  Award,
  Rocket,
  Target
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Offers = () => {
  const techStack = [
    { name: 'React.js', icon: Code, description: 'Modern UI development' },
    { name: 'TypeScript', icon: Shield, description: 'Type-safe code' },
    { name: 'Next.js', icon: Zap, description: 'Server-side rendering' },
    { name: 'Node.js', icon: Database, description: 'Scalable backend' },
    { name: 'PostgreSQL', icon: Database, description: 'Robust database' },
    { name: 'Tailwind CSS', icon: Code, description: 'Modern styling' },
    { name: 'Vercel/AWS', icon: Cloud, description: 'Cloud deployment' },
    { name: 'Stripe', icon: Shield, description: 'Secure payments' },
    { name: 'Firebase', icon: Zap, description: 'Real-time features' },
    { name: 'Docker', icon: Cloud, description: 'Containerized deployment' }
  ]

  const services = [
    {
      title: 'Simple Websites',
      price: '9.000 DA', // Updated
      features: ['Responsive design & Mobile optimization', 'SEO optimization & Analytics', 'Contact forms & Lead capture', 'Basic CMS & Content management', '2-3 pages with modern UI'],
      icon: Globe,
      delivery: '2-4 days',
      popular: false,
      discount: 'Get -30% discount for 5+ projects/month'
    },
    {
      title: 'Advanced Websites',
      price: '22.000 DA', // Updated
      features: ['User authentication & Role management', 'Admin dashboard & Analytics', 'Database integration & API', 'Advanced forms & Validation', '5-10 pages with dynamic content'],
      icon: Database,
      delivery: '1-2 weeks',
      popular: true,
      discount: 'Get -30% discount for 5+ projects/month'
    },
    {
      title: 'Full SaaS Projects',
      price: '62.000 DA', // Updated
      features: ['Complete web applications & Multi-user systems', 'E-commerce + Payment integration', 'Custom integrations & Third-party APIs', 'Scalable architecture & Cloud deployment', 'Advanced admin panels & Analytics'],
      icon: Users,
      delivery: '2-4 weeks',
      popular: false
    },
    {
      title: 'Mobile Applications',
      price: '42.000 DA', // Updated
      features: ['Cross-platform development (iOS/Android)', 'Native performance & Smooth animations', 'Offline capabilities & Data sync', 'App store deployment & Push notifications', 'Advanced UI/UX & User experience'],
      icon: Smartphone,
      delivery: '3-4 weeks',
      popular: false
    }
  ]

  const benefits = [
    { title: 'Premium Quality', description: 'Every pixel crafted with attention to detail', icon: Award },
    { title: 'Fast Delivery', description: 'Quick turnaround without compromising quality', icon: Clock },
    { title: '24/7 Support', description: 'Ongoing technical support and maintenance', icon: Phone },
    { title: 'Scalable Solutions', description: 'Built to grow with your business', icon: Zap },
    { title: 'Modern Design', description: 'Latest UI/UX trends and best practices', icon: Globe },
    { title: 'SEO Optimized', description: 'Built for search engine success', icon: Shield }
  ]

  const partnershipTypes = [
    {
      title: 'Agency Partnerships',
      description: 'White-label solutions for marketing agencies and digital studios',
      icon: Users,
      benefits: ['Volume discounts', 'White-label branding', 'Dedicated support', 'Training sessions']
    },
    {
      title: 'Startup Collaborations',
      description: 'Custom development for innovative startups and tech companies',
      icon: Rocket,
      benefits: ['MVP development', 'Scalable architecture', 'Technical consulting', 'Growth support']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale applications for established businesses',
      icon: Target,
      benefits: ['Enterprise architecture', 'Security compliance', 'Performance optimization', 'Maintenance contracts']
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen py-32 lg:py-40 relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/contactbg.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm font-medium tracking-wider uppercase mb-8 rounded-full shadow-lg">
                Offers & Partnerships
              </span>
            </div>
            

            
            <p className="text-lead mb-16 max-w-3xl mx-auto animate-fade-in text-gray-100" style={{ animationDelay: '0.4s' }}>
              Elevate your business with our comprehensive web development services. 
              From simple websites to complex SaaS applications, we deliver exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-gray-500/30 shadow-lg">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link to="/work" className="px-8 py-4 bg-transparent border border-gray-500/30 text-gray-100 hover:text-white hover:bg-gray-600/20 font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">View Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Our Service Packages
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              Choose the perfect package for your project needs. All prices are base rates and may vary based on complexity.
            </p>
            <p className="text-sm max-w-2xl mx-auto text-green-200 mt-4 font-medium">
              One-time payment and the website is totally yours.
            </p>
            
            {/* Domain Pricing Cards */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full px-6 py-3 text-white text-center shadow-lg border border-blue-500/30">
                <div className="text-lg font-bold">.com</div>
                <div className="text-sm opacity-90">$15/year</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-full px-6 py-3 text-white text-center shadow-lg border border-purple-500/30">
                <div className="text-lg font-bold">.net</div>
                <div className="text-sm opacity-90">$13/year</div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-full px-6 py-3 text-white text-center shadow-lg border border-green-500/30">
                <div className="text-lg font-bold">.shop</div>
                <div className="text-sm opacity-90">$10/year</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={service.title} className={`relative bg-slate-800/50 border backdrop-blur-sm p-8 rounded-2xl text-center group animate-fade-in hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 ${service.popular ? 'border-green-500/50 shadow-lg shadow-green-500/20' : 'border-green-800/30'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-4">
                    {service.price}
                  </div>
                  <div className="text-sm text-green-300 mb-6">Delivery: {service.delivery}</div>
                  {service.discount && (
                    <div className="mb-4 p-2 bg-yellow-600/20 border border-yellow-500/30 rounded-lg">
                      <p className="text-xs text-yellow-300 font-medium">{service.discount}</p>
                    </div>
                  )}
                  <ul className="text-sm text-green-200 space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-8 my-16"></div>

      {/* Tech Stack Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              We utilize the latest technologies to ensure your projects are future-proof and perform exceptionally.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div key={tech.name} className="bg-slate-800/30 border border-green-800/20 p-6 rounded-xl text-center group animate-fade-in hover:bg-slate-800/50 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-xs text-green-300">{tech.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-8 my-16"></div>

      {/* Partnership Types */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Partnership Opportunities
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              We offer specialized partnerships for different types of organizations and projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {partnershipTypes.map((partnership, index) => {
              const IconComponent = partnership.icon
              return (
                <div key={partnership.title} className="bg-slate-800/50 border border-green-800/30 p-8 rounded-2xl group animate-fade-in hover:bg-slate-800/70 transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6">{partnership.title}</h3>
                  <p className="text-green-200 mb-8 leading-relaxed">{partnership.description}</p>
                  <ul className="space-y-3">
                    {partnership.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-green-200">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-8 my-16"></div>

      {/* Why Choose Us Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Why Choose WebCrafters?
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={benefit.title} className="bg-slate-800/50 border border-green-800/30 p-8 rounded-2xl group animate-fade-in hover:bg-slate-800/70 transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-green-200 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-32">
        <div className="container">
          <div className="bg-slate-800/50 border border-yellow-600/30 p-8 rounded-2xl">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Important Information</h3>
                <ul className="text-green-200 space-y-2">
                  <li>• All prices are base rates and may vary depending on project complexity and requirements</li>
                  <li>• We provide detailed quotes for each specific project after understanding your needs</li>
                  <li>• Free consultation session included with every partnership</li>
                  <li>• 30-day revision period after project delivery</li>
                  <li>• Ongoing maintenance and support packages available</li>
                  <li>• Volume discounts available for multiple projects and long-term partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container">
          <div className="bg-slate-800/50 border border-green-600/30 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Accepted Payment Methods</h3>
              <p className="text-green-200">Secure and convenient payment options</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* CCP */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-xs text-green-200">CCP</span>
              </div>
              
              {/* Baridi Mob */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                    <path d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <span className="text-xs text-green-200">Baridi Mob</span>
              </div>
              
              {/* Redotpay */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <span className="text-xs text-green-200">Redotpay</span>
              </div>
              
              {/* Paysera */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-xs text-green-200">Paysera</span>
              </div>
              
              {/* PayPal */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                  </svg>
                </div>
                <span className="text-xs text-green-200">PayPal</span>
              </div>
              
              {/* Wise */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-xs text-green-200">Wise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="mb-12 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-lead mb-16 max-w-2xl mx-auto text-green-100">
              Let's discuss your requirements and create something extraordinary together.
            </p>
            <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-green-500/30 shadow-lg">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers 