import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import Logo from '../Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-slate-900/98 backdrop-blur-xl border-b border-gray-500/20 shadow-2xl shadow-gray-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Premium Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group animate-fade-in">
            <div className="relative">
              <Logo size="lg" className="transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-gray-500/30" animated={true} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-gray-400 via-gray-400 to-gray-500 rounded-full shadow-lg animate-pulse">
                <Sparkles className="w-2 h-2 text-white absolute inset-0 m-auto" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-gray-50 to-gray-100 bg-clip-text text-transparent tracking-tight">
                WebCrafters
              </span>
              <div className="flex items-center space-x-2 -mt-1">
                <div className="w-1 h-1 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold bg-gradient-to-r from-gray-300 via-gray-300 to-gray-400 bg-clip-text text-transparent tracking-widest uppercase">
                  Elite Development
                </span>
                <div className="w-1 h-1 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </Link>

          {/* Premium Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-semibold transition-all duration-500 relative group ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-gray-100 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 tracking-wide">{item.name}</span>
                {isActive(item.path) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-500 rounded-full shadow-lg shadow-gray-500/50"></span>
                )}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-400 transition-all duration-500 group-hover:w-full rounded-full shadow-lg"></span>
              </Link>
            ))}
            
            <div className="ml-8 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 hover:from-gray-500 hover:via-gray-500 hover:to-gray-600 text-white rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/30 border border-gray-500/30 shadow-xl"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </Link>
            </div>
          </nav>

          {/* Premium Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-gray-100 hover:text-white transition-all duration-300 relative group"
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 transform rotate-180 transition-all duration-500" />
              ) : (
                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Premium Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-500/20 bg-slate-900/98 backdrop-blur-xl animate-fade-in shadow-2xl">
            <div className="py-8 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg font-semibold transition-all duration-500 transform hover:translate-x-2 tracking-wide ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-100 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 hover:from-gray-500 hover:via-gray-500 hover:to-gray-600 text-white rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/30 border border-gray-500/30 shadow-xl mx-auto"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 