import { 
  Star, 
  Zap, 
  Code,
  Database,
  Smartphone,
  Server,
  Shield,
  ArrowRight,
  Phone
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SpecialOffer = () => {
  const programmingServices = [
    {
      title: 'Backend Development',
      services: [
        { name: 'API Development', price: '11.000 DA', description: 'RESTful APIs, GraphQL endpoints' },
        { name: 'Database Design', price: '8.000 DA', description: 'PostgreSQL, MongoDB schemas' },
        { name: 'Authentication Systems', price: '14.000 DA', description: 'JWT, OAuth, role-based access' },
        { name: 'Payment Integration', price: '21.000 DA', description: 'Stripe, PayPal, local payment gateways' }
      ],
      icon: Server
    },
    {
      title: 'Frontend Development',
      services: [
        { name: 'React/Next.js Apps', price: '16.000 DA', description: 'Modern UI with TypeScript' },
        { name: 'Mobile Apps (React Native)', price: '31.000 DA', description: 'Cross-platform mobile applications' },
        { name: 'Admin Dashboards', price: '18.000 DA', description: 'Data visualization, analytics panels' },
        { name: 'E-commerce Frontend', price: '26.000 DA', description: 'Product catalogs, shopping carts' }
      ],
      icon: Code
    },
    {
      title: 'Full-Stack Projects',
      services: [
        { name: 'Complete Web Applications', price: '41.000 DA', description: 'Full-stack with database' },
        { name: 'SaaS Platforms', price: '51.000 DA', description: 'Multi-tenant applications' },
        { name: 'E-commerce Platforms', price: '61.000 DA', description: 'Complete online stores' }
      ],
      icon: Database
    }
  ]

  const techStack = [
    { name: 'React.js', icon: Code, description: 'Modern UI development' },
    { name: 'TypeScript', icon: Shield, description: 'Type-safe code' },
    { name: 'Node.js', icon: Server, description: 'Scalable backend' },
    { name: 'PostgreSQL', icon: Database, description: 'Robust database' },
    { name: 'Next.js', icon: Zap, description: 'Server-side rendering' }
  ]

  const whatWeProvide = [
    { title: 'Clean, Optimized Code', description: 'Production-ready, well-documented code', icon: Code },
    { title: 'Modern Tech Stack', description: 'Latest frameworks and best practices', icon: Shield },
    { title: 'API Documentation', description: 'Comprehensive API docs and examples', icon: Database },
    { title: 'Database Schemas', description: 'Optimized database design and migrations', icon: Server },
    { title: 'Deployment Ready', description: 'Docker containers and deployment scripts', icon: Zap },
    { title: 'Technical Support', description: 'Ongoing development support and maintenance', icon: Phone }
  ]

  const whatYouHandle = [
    { title: 'UI/UX Design', description: 'Visual design and user experience', icon: Code },
    { title: 'Content Creation', description: 'Text, images, and multimedia content', icon: Database },
    { title: 'Graphics & Branding', description: 'Logos, colors, and brand identity', icon: Shield },
    { title: 'App Store Submissions', description: 'Mobile app store deployment', icon: Smartphone },
    { title: 'Domain & Hosting', description: 'Domain registration and hosting setup', icon: Server },
    { title: 'Client Communication', description: 'Direct client interaction and project management', icon: Phone }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-medium tracking-wider uppercase mb-8 rounded-full shadow-lg">
                Special Programming Services
              </span>
            </div>
            
            <h1 className="mb-12 animate-fade-in text-white" style={{ animationDelay: '0.2s' }}>
              Programming Services
              <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">For Incubyte Academy</span>
            </h1>
            
            <p className="text-lead mb-16 max-w-3xl mx-auto animate-fade-in text-green-100" style={{ animationDelay: '0.4s' }}>
              Focused programming services for your development needs. We handle the code, you handle the creative aspects.
              Clean, efficient, and scalable solutions delivered on time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-green-500/30 shadow-lg">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link to="/work" className="px-8 py-4 bg-transparent border border-green-500/30 text-green-100 hover:text-white hover:bg-green-600/20 font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">View Our Code</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Services Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Programming Services Only
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              Special pricing for Incubyte Academy. We focus on clean, efficient code while you handle design and content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programmingServices.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={category.title} className="bg-slate-800/50 border border-green-800/30 backdrop-blur-sm p-8 rounded-2xl group animate-fade-in hover:bg-slate-800/70 transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-white text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <div key={service.name} className="bg-slate-700/30 border border-green-800/20 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-medium">{service.name}</h4>
                          <span className="text-green-400 font-bold">{service.price}</span>
                        </div>
                        <p className="text-sm text-green-200">{service.description}</p>
                      </div>
                    ))}
                  </div>
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
              Our Programming Stack
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              Modern, reliable technologies for scalable and maintainable code.
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

      {/* What We Provide vs What You Handle */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Clear Division of Responsibilities
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              We focus on what we do best - programming. You handle what you do best - creative and business aspects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Provide */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">✅ What We Provide</h3>
                <p className="text-green-100">Programming and technical services</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatWeProvide.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div key={item.title} className="bg-slate-800/50 border border-green-600/30 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <IconComponent className="w-5 h-5 text-green-400 mr-2" />
                        <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      </div>
                      <p className="text-xs text-green-200">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* What You Handle */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">🎨 What You Handle</h3>
                <p className="text-green-100">Creative and business aspects</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatYouHandle.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div key={item.title} className="bg-slate-800/50 border border-blue-600/30 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <IconComponent className="w-5 h-5 text-blue-400 mr-2" />
                        <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      </div>
                      <p className="text-xs text-green-200">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
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
                <h3 className="text-xl font-semibold text-white mb-4">Special Terms for Incubyte Academy</h3>
                <ul className="text-green-200 space-y-2">
                  <li>• All prices are for programming services only</li>
                  <li>• We provide clean, documented, production-ready code</li>
                  <li>• You handle design, content, and client communication</li>
                  <li>• Volume discounts available for multiple projects</li>
                  <li>• Technical support included for 30 days after delivery</li>
                  <li>• Code ownership transfers to you upon completion</li>
                </ul>
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
              Ready to Start Programming?
            </h2>
            <p className="text-lead mb-16 max-w-2xl mx-auto text-green-100">
              Let's discuss your programming needs and create efficient, scalable solutions together.
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

export default SpecialOffer 