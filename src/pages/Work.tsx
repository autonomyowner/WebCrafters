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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Video - Full Page */}
      <video 
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-50"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/bg gif.mp4" type="video/mp4" />
      </video>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen py-32 lg:py-40 flex items-center">
          <div className="container">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm font-medium tracking-wider uppercase mb-8 rounded-full border border-white/20">
                  Our Portfolio
                </span>
              </div>
              
              <h1 className="mb-12 text-white text-4xl lg:text-6xl font-bold">
                Our Work
              </h1>

              <p className="text-lead max-w-3xl mx-auto text-white/90">
                Discover our latest projects and see how we transform visionary ideas 
                into extraordinary digital experiences.
              </p>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-12 text-white text-3xl lg:text-4xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-lead mb-16 max-w-2xl mx-auto text-white/90">
                Let's create something amazing together. Get in touch to discuss your project.
              </p>
              <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-white/30 shadow-lg">
                <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/30 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work 