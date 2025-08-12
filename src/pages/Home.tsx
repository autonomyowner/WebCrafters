import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  Users,
  Shield,
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
    },
    {
      title: 'Elghella',
      description: 'Modern digital platform showcasing innovative solutions with cutting-edge technology and elegant design. Experience the future of digital excellence with our comprehensive web development services.',
      url: 'https://elghella-v16.vercel.app/',
      theme: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      accentColor: 'from-teal-400 to-teal-500',
      borderColor: 'border-teal-800/30',
      category: 'Digital Platform'
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

  /* Testimonials temporarily unused
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
  */

  return (
    <div className="min-h-screen bg-dark-gradient bg-mesh relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        {/* Background Image with Lazy Loading */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Lazy loading placeholder */}
          <img 
            src="/background.avif" 
            alt="Background" 
            loading="lazy" 
            className="hidden"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.parentElement) {
                target.parentElement.style.backgroundImage = `url(${target.src})`;
              }
            }}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <span className="inline-block px-6 py-3 glass-vibrant text-white text-sm font-semibold tracking-wider uppercase mb-8 rounded-full shadow-glow animate-pulse-glow">
                ⚡ Elite Web Development
              </span>
            </div>
            

            <h1 className="text-heading-xl mb-8 max-w-4xl mx-auto animate-fade-in-up text-white text-shimmer" style={{ animationDelay: '0.2s' }}>
              Crafting Digital
              <span className="gradient-text-electric block">Masterpieces</span>
              That Convert
            </h1>
            
            <p className="text-lead mb-16 max-w-3xl mx-auto animate-fade-in-up text-neutral-200" style={{ animationDelay: '0.4s' }}>
              Where innovation meets elegance. We transform visionary ideas into 
              extraordinary digital realities that captivate and convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact" className="btn-cta group">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link to="/work" className="btn-ghost">
                <span className="relative z-10">View Our Work</span>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center group interactive-soft">
                <div className="text-5xl font-bold gradient-text-electric mb-4 animate-bounce-gentle">500+</div>
                <div className="text-neutral-300 font-semibold text-lg">Projects Delivered</div>
                <div className="w-16 h-1 bg-gradient-electric rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center group interactive-soft">
                <div className="text-5xl font-bold gradient-text-emerald mb-4 animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>99%</div>
                <div className="text-neutral-300 font-semibold text-lg">Client Satisfaction</div>
                <div className="w-16 h-1 bg-gradient-emerald rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center group interactive-soft">
                <div className="text-5xl font-bold gradient-text-sunset mb-4 animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>24/7</div>
                <div className="text-neutral-300 font-semibold text-lg">Premium Support</div>
                <div className="w-16 h-1 bg-gradient-sunset rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-grid">
        <div className="container-responsive">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-heading-lg mb-8 text-white">
              Comprehensive Solutions
            </h2>
            <p className="text-lead max-w-4xl mx-auto text-neutral-200">
              We provide end-to-end digital solutions that elevate your brand and drive exceptional results.
            </p>
          </div>

          <div className="grid grid-auto-fit gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const cardClasses = [
                'card-electric',
                'card-emerald', 
                'card-sunset',
                'card-cosmic',
                'card-electric',
                'card-emerald'
              ]
              return (
                <div key={service.title} className={`${cardClasses[index % cardClasses.length]} text-center animate-fade-in-up interactive`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-20 h-20 glass-subtle rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-heading-sm mb-6 text-white">
                    {service.title}
                  </h3>
                  <p className="text-body text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-electric-500 to-transparent mx-8 my-24 shadow-glow"></div>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-heading-lg mb-8 text-white">
              Our Digital Portfolio
            </h2>
            <p className="text-lead max-w-4xl mx-auto text-neutral-200">
              Explore our diverse portfolio of digital solutions, each crafted with unique themes and cutting-edge technology.
            </p>
          </div>

          <div className="space-content">
            {portfolioProjects.map((project, index) => (
              <div key={project.title} className="glass-card p-12 group animate-fade-in-up interactive-soft" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start justify-between mb-10">
                  <div>
                    <span className="inline-block px-4 py-2 glass-vibrant text-white text-sm font-semibold rounded-full mb-6">
                      {project.category}
                    </span>
                    <h3 className="text-heading-md gradient-text-electric mb-6">{project.title}</h3>
                    <p className="text-body text-neutral-300 mb-8 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-20 h-20 glass-subtle rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <Globe className="w-10 h-10 text-electric-400" />
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
                      {project.url.includes('elghella-v16.vercel.app') ? (
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Globe className="w-8 h-8 text-teal-400" />
                            </div>
                            <h3 className="text-white text-lg font-semibold mb-2">Live Preview Unavailable</h3>
                            <p className="text-gray-300 text-sm mb-4">This website doesn't allow embedding for security reasons</p>
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-300"
                            >
                              <span>View Website</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      ) : (
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
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-glow-emerald"></div>
                    <span className="text-neutral-300 font-medium">Live Project</span>
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary group/btn"
                  >
                    <span className="flex items-center gap-2">
                      Visit Website
                      <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="section-padding bg-grid">
        <div className="container-responsive">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-heading-lg mb-8 text-white">
              Why Choose WebCrafters?
            </h2>
            <p className="text-lead max-w-4xl mx-auto text-neutral-200">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-auto-fit gap-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const iconClasses = [
                'gradient-electric',
                'gradient-emerald',
                'gradient-cosmic'
              ]
              return (
                <div key={benefit.title} className="text-center animate-fade-in-up interactive-soft" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-24 h-24 ${iconClasses[index % iconClasses.length]} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-heading-sm text-white mb-6">
                    {benefit.title}
                  </h3>
                  <p className="text-body text-neutral-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-mesh relative overflow-hidden">
        <div className="container-responsive">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-heading-lg mb-8 text-white">
              Ready to Transform Your 
              <span className="gradient-text-electric block">Digital Presence?</span>
            </h2>
            <p className="text-lead mb-16 max-w-3xl mx-auto text-neutral-200">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-cta group">
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link to="/offers" className="btn-secondary">
                <span className="relative z-10">View Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 