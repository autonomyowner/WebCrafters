import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '../Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white border-t border-cyan-800/30">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Enhanced Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Logo size="md" animated={false} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">WebCrafters</span>
                <span className="text-caption text-green-300 -mt-1">
                  Elite Development
                </span>
              </div>
            </div>
            <p className="text-body text-green-200 mb-8 max-w-md">
              We craft elite websites that drive results. From concept to launch, 
              we deliver exceptional digital experiences that elevate your brand.
            </p>
          </div>

          {/* Enhanced Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-8 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-4 text-green-200">
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">Web Applications</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">CMS Development</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">API Integration</a></li>
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-8 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-6 text-green-200">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="break-all group-hover:text-white transition-colors duration-300">hello@webcrafters.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-green-800/30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-200 text-sm text-center md:text-left">
              © {currentYear} WebCrafters. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <Link to="/" className="text-green-200 hover:text-white text-sm transition-all duration-300 text-center md:text-left transform hover:translate-x-1">
                Privacy Policy
              </Link>
              <Link to="/" className="text-green-200 hover:text-white text-sm transition-all duration-300 text-center md:text-left transform hover:translate-x-1">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 