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
  Mail,
  Clock,
  Award
} from 'lucide-react'

const OfferCard = () => {
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
      discount: 'Get -30% discount for 5+ projects/month'
    },
    {
      title: 'Advanced Websites',
      price: '22.000 DA', // Updated
      features: ['User authentication & Role management', 'Admin dashboard & Analytics', 'Database integration & API', 'Advanced forms & Validation', '5-10 pages with dynamic content'],
      icon: Database,
      delivery: '1-2 weeks',
      discount: 'Get -30% discount for 5+ projects/month'
    },
    {
      title: 'Full SaaS Projects',
      price: '62.000 DA',
      features: ['Complete web applications & Multi-user systems', 'E-commerce + Payment integration', 'Custom integrations & Third-party APIs', 'Scalable architecture & Cloud deployment', 'Advanced admin panels & Analytics'],
      icon: Users,
      delivery: '2-4 weeks'
    },
    {
      title: 'Mobile Applications',
      price: '42.000 DA',
      features: ['Cross-platform development (iOS/Android)', 'Native performance & Smooth animations', 'Offline capabilities & Data sync', 'App store deployment & Push notifications', 'Advanced UI/UX & User experience'],
      icon: Smartphone,
      delivery: '3-4 weeks'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-medium tracking-wider uppercase rounded-full shadow-lg">
              Special Offer for Incubyte Academy
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Premium Web Development
            <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Elevate your agency's service offerings with cutting-edge web development solutions. 
            We craft exceptional digital experiences that convert visitors into loyal customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.title} className="bg-slate-800/50 border border-green-800/30 backdrop-blur-sm p-8 rounded-2xl text-center group hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-4">
                  {service.price}
                </div>
                <div className="text-sm text-green-300 mb-4">Delivery: {service.delivery}</div>
                {service.discount && (
                  <div className="mb-4 p-2 bg-yellow-600/20 border border-yellow-500/30 rounded-lg">
                    <p className="text-xs text-yellow-300 font-medium">{service.discount}</p>
                  </div>
                )}
                <ul className="text-sm text-green-200 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cutting-Edge Tech Stack</h2>
            <p className="text-green-100">We utilize the latest technologies to ensure your projects are future-proof</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech) => {
              const IconComponent = tech.icon
              return (
                <div key={tech.name} className="bg-slate-800/30 border border-green-800/20 p-6 rounded-xl text-center group hover:bg-slate-800/50 transition-all duration-300">
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

        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose WebCrafters?</h2>
            <p className="text-green-100">We combine cutting-edge technology with proven strategies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon
              return (
                <div key={benefit.title} className="bg-slate-800/50 border border-green-800/30 p-8 rounded-2xl group hover:bg-slate-800/70 transition-all duration-300">
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

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-green-900/50 to-slate-800/50 border border-green-600/30 p-8 rounded-2xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-green-100">Special advantages for Incubyte Academy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Volume Discounts</h3>
              <p className="text-sm text-green-200">Special rates for multiple projects</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Priority Support</h3>
              <p className="text-sm text-green-200">Dedicated account manager</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">White-label Options</h3>
              <p className="text-sm text-green-200">Customizable for your branding</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Training Sessions</h3>
              <p className="text-sm text-green-200">Technical knowledge transfer</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-slate-800/50 border border-yellow-600/30 p-8 rounded-2xl mb-16">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Important Notes</h3>
              <ul className="text-green-200 space-y-2">
                <li>• All prices are base rates and may vary depending on project complexity</li>
                <li>• We provide detailed quotes for each specific project</li>
                <li>• Free consultation session included</li>
                <li>• 30-day revision period after delivery</li>
                <li>• Ongoing maintenance packages available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Service Offerings?</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Let's discuss your first project and create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-4 bg-slate-800/50 border border-green-600/30 px-8 py-4 rounded-xl">
              <Phone className="w-6 h-6 text-green-400" />
              <span className="text-white font-medium">[Your Phone Number]</span>
            </div>
            <div className="flex items-center space-x-4 bg-slate-800/50 border border-green-600/30 px-8 py-4 rounded-xl">
              <Mail className="w-6 h-6 text-green-400" />
              <span className="text-white font-medium">[Your Email]</span>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="group relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-green-500/30 shadow-lg">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCard 