import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Luxury E-commerce Platform',
      description: 'A sophisticated e-commerce platform for luxury brands with advanced inventory management, personalized experiences, and seamless payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'E-commerce',
      link: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true
    },
    {
      id: 2,
      title: 'Enterprise SaaS Dashboard',
      description: 'Comprehensive SaaS dashboard with real-time analytics, advanced user management, and enterprise-grade security features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'SaaS',
      link: '#',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      featured: true
    },
    {
      id: 3,
      title: 'Premium Portfolio Platform',
      description: 'Elegant portfolio website with sophisticated animations, advanced content management, and seamless user experiences.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      category: 'Portfolio',
      link: '#',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      featured: false
    },
    {
      id: 4,
      title: 'Mobile App Backend',
      description: 'Scalable backend API for mobile applications with advanced authentication, real-time notifications, and data synchronization.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      category: 'Mobile',
      link: '#',
      technologies: ['Node.js', 'Express', 'Redis', 'Firebase'],
      featured: false
    },
    {
      id: 5,
      title: 'Corporate Website',
      description: 'Professional corporate website with advanced CMS integration, multilingual support, and comprehensive SEO optimization.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      category: 'Corporate',
      link: '#',
      technologies: ['React', 'Strapi', 'GraphQL', 'Netlify'],
      featured: false
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with advanced property listings, virtual tours, and sophisticated agent management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      category: 'Real Estate',
      link: '#',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Google Maps'],
      featured: false
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
            backgroundImage: 'url(/55.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100%'
          }}
        />
        
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gray-600/20 text-gray-400 text-sm font-medium tracking-wider uppercase mb-8">
                Our Portfolio
              </span>
            </div>
            
            <h1 className="mb-12 text-white">
              Exceptional
              <span className="block text-gray-400">Projects</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto text-gray-100">
              Discover our latest projects and see how we transform visionary ideas 
              into extraordinary digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="mb-12 text-white">
              Featured Work
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              Our most recent and impactful projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6">
                    <span className="bg-slate-800/90 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium border border-green-800/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    {project.title}
                  </h3>
                  <p className="text-green-200 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-800/50 text-green-200 px-4 py-2 text-sm font-medium border border-green-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mx-8 my-16"></div>

      {/* All Projects */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="mb-12 text-white">
              All Projects
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-green-100">
              A comprehensive showcase of our diverse portfolio and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-slate-800/90 backdrop-blur-sm text-white px-3 py-1 text-sm font-medium border border-green-800/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-green-200 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-800/50 text-green-200 px-3 py-1 text-sm border border-green-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-12 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-lead mb-16 max-w-2xl mx-auto text-green-100">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-green-500/30 shadow-lg">
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work 