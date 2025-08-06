import { Link } from 'react-router-dom'
import { Phone, MapPin, Facebook } from 'lucide-react'
import Logo from '../Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-200 to-slate-900 text-white border-t border-gray-800/30">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Enhanced Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Logo size="md" animated={false} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">WebCrafters</span>
                <span className="text-caption text-gray-300 -mt-1">
                  Elite Development
                </span>
              </div>
            </div>
            <p className="text-body text-gray-200 mb-8 max-w-md">
              We craft elite websites that drive results. From concept to launch, 
              we deliver exceptional digital experiences that elevate your brand.
            </p>
          </div>

          {/* Enhanced Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-8 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">Web Applications</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">CMS Development</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block">API Integration</a></li>
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-8 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-6 text-gray-200">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 via-amber-500 to-slate-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Azeedine Zellag</div>
                  <a href="tel:+213797339451" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent group-hover:text-blue-200 transition-colors duration-300">0797339451</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 via-amber-500 to-slate-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Belkasm Islam</div>
                  <a href="tel:+213676610457" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent group-hover:text-blue-200 transition-colors duration-300">0676610457</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">Ben Aknoun, Algeria</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="https://www.facebook.com/profile.php?id=61578739567649" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group-hover:text-white transition-colors duration-300"
                >
                  WebCrafters Algeria
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800/30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-200 text-sm text-center md:text-left">
              © {currentYear} WebCrafters. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <Link to="/" className="text-gray-200 hover:text-white text-sm transition-all duration-300 text-center md:text-left transform hover:translate-x-1">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-200 hover:text-white text-sm transition-all duration-300 text-center md:text-left transform hover:translate-x-1">
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