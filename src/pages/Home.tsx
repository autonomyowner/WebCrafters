import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  Users,
  Shield,
  Star,
  Award,
  Zap,
  Globe,
  ExternalLink
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      title: 'Custom Design',
      description: 'Bespoke digital experiences crafted with precision and attention to every detail.',
      icon: Shield,
      theme: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      accentColor: 'from-blue-400 to-blue-500',
      borderColor: 'border-blue-800/30'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Scalable platforms that convert visitors into loyal customers.',
      icon: Users,
      theme: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900',
      accentColor: 'from-amber-400 to-amber-500',
      borderColor: 'border-amber-800/30'
    },
    {
      title: 'Enterprise Applications',
      description: 'Robust systems built for performance, security, and growth.',
      icon: Zap,
      theme: 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900',
      accentColor: 'from-gray-400 to-gray-500',
      borderColor: 'border-gray-800/30'
    },
    {
      title: 'Content Management',
      description: 'Intuitive systems that give you complete control over your digital presence.',
      icon: Globe,
      theme: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      accentColor: 'from-purple-400 to-purple-500',
      borderColor: 'border-purple-800/30'
    },
    {
      title: 'API Development',
      description: 'Seamless integrations that connect your business with the world.',
      icon: Shield,
      theme: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      accentColor: 'from-red-400 to-red-500',
      borderColor: 'border-red-800/30'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and lightning-fast hosting solutions.',
      icon: Zap,
      theme: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      accentColor: 'from-teal-400 to-teal-500',
      borderColor: 'border-teal-800/30'
    }
  ]

  const portfolioProjects = [
    {
      title: 'TN Prom',
      description: 'Comprehensive digital solutions platform with modern UI/UX design and advanced functionality.',
      url: 'https://tn-prom.vercel.app/',
      theme: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900',
      accentColor: 'from-cyan-400 to-cyan-500',
      borderColor: 'border-cyan-800/30',
      category: 'Digital Solutions'
    },
    {
      title: 'SPEA Cup',
      description: 'Revolutionary e-learning platform that transforms traditional education into an engaging digital experience. Take your school to the next level with our comprehensive learning management system featuring interactive courses, real-time progress tracking, and seamless student-teacher collaboration.',
      url: 'https://spea-cup.vercel.app/',
      theme: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      accentColor: 'from-blue-400 to-blue-500',
      borderColor: 'border-blue-800/30',
      category: 'E-Learning Platform'
    },
    {
      title: 'Ikhlas Automobiles',
      description: 'Luxury automotive platform showcasing premium vehicles with sophisticated design.',
      url: 'https://ikhlas-automobiles.vercel.app/',
      theme: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900',
      accentColor: 'from-amber-400 to-amber-500',
      borderColor: 'border-amber-800/30',
      category: 'Luxury Automotive'
    },
    {
      title: 'Meublux',
      description: 'Elegant furniture design platform with modern aesthetics and user-friendly interface.',
      url: 'https://meublux.vercel.app/',
      theme: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      accentColor: 'from-purple-400 to-purple-500',
      borderColor: 'border-purple-800/30',
      category: 'Furniture Design'
    },
    {
      title: 'Perfect Events',
      description: 'Transformez vos événements en moments inoubliables avec nos services de décoration personnalisés et élégants. Mariages, anniversaires, cérémonies - nous créons l\'ambiance parfaite pour vos occasions spéciales.',
      url: 'https://perfe-dun.vercel.app/',
      theme: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900',
      accentColor: 'from-rose-400 to-rose-500',
      borderColor: 'border-rose-800/30',
      category: 'Event Decoration'
    }
  ]

  const benefits = [
    {
      title: 'Unmatched Quality',
      description: 'Every pixel, every interaction, every detail is crafted to perfection.',
      icon: Award,
    },
    {
      title: 'Global Excellence',
      description: 'Serving discerning clients worldwide with 24/7 premium support.',
      icon: Globe,
    },
    {
      title: 'Future-Proof Technology',
      description: 'Built with cutting-edge technologies that stand the test of time.',
      icon: Zap,
    }
  ]

  const testimonials = [
    {
      name: 'Alexander Chen',
      role: 'CEO, TechCorp Global',
      content: 'WebCrafters delivered beyond our wildest expectations. The attention to detail and premium quality is simply unmatched in the industry.',
      rating: 5
    },
    {
      name: 'Isabella Rodriguez',
      role: 'Founder, Luxury Brands',
      content: 'Working with WebCrafters was like having a world-class design team at our fingertips. The results speak for themselves.',
      rating: 5
    },
    {
      name: 'Marcus Thompson',
      role: 'CTO, Innovation Labs',
      content: 'Our new platform has increased conversions by 400%. The premium design and seamless functionality are truly game-changing.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-200 to-slate-900">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm font-medium tracking-wider uppercase mb-8 rounded-full shadow-lg">
                Elite Web Development
              </span>
            </div>
            

            
            <p className="text-lead mb-16 max-w-3xl mx-auto animate-fade-in text-gray-100" style={{ animationDelay: '0.4s' }}>
              Where innovation meets elegance. We transform visionary ideas into 
              extraordinary digital realities that captivate and convert.
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

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-200 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">99%</div>
                <div className="text-gray-200 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-200 font-medium">Premium Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Comprehensive Solutions
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-gray-100">
              We provide end-to-end digital solutions that elevate your brand and drive exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={service.title} className={`${service.theme} border ${service.borderColor} backdrop-blur-sm p-8 rounded-2xl text-center group animate-fade-in hover:scale-105 transition-all duration-300 shadow-2xl`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-8 my-16"></div>

      {/* Portfolio Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-gray-100">
              Explore our diverse portfolio of digital solutions, each crafted with unique themes and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {portfolioProjects.map((project, index) => (
              <div key={project.title} className={`${project.theme} border ${project.borderColor} backdrop-blur-sm p-8 rounded-3xl group animate-fade-in hover:scale-105 transition-all duration-500 shadow-2xl`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-white/80 mb-6 leading-relaxed text-lg max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Live Website Preview */}
                <div className="mb-8">
                  <div className="bg-black/20 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-b border-white/10">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      </div>
                      <div className="text-white/60 text-sm font-mono">
                        {project.url.replace('https://', '').replace('http://', '')}
                      </div>
                    </div>
                    <div className="relative h-96 w-full">
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0"
                        title={`Live preview of ${project.title}`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        style={{
                          background: 'white',
                          transform: 'scale(0.8)',
                          transformOrigin: 'top left',
                          width: '125%',
                          height: '125%'
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                    <span className="text-white/70 text-sm">Live Project</span>
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="mb-12 text-white">
              Why Choose WebCrafters?
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-gray-100">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={benefit.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="mb-12 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lead mb-16 max-w-2xl mx-auto text-gray-100">
              Let's discuss your project and create something extraordinary together.
            </p>
            <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-gray-500/30 shadow-lg">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 