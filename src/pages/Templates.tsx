import { Link } from 'react-router-dom'
import { Palette, Sparkles, CheckCircle } from 'lucide-react'

const Templates = () => {
  const colorThemes = [
    {
      name: 'Emerald Elegance',
      description: 'Professional cyan gradient with deep slate accents',
      gradient: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900',
      accentColor: 'from-cyan-400 to-cyan-500',
      borderColor: 'border-cyan-800/30',
      category: 'Professional'
    },
    {
      name: 'Sapphire Serenity',
      description: 'Premium blue gradient with sophisticated depth',
      gradient: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      accentColor: 'from-blue-400 to-blue-500',
      borderColor: 'border-blue-800/30',
      category: 'Premium'
    },
    {
      name: 'Golden Majesty',
      description: 'Luxurious gold gradient with rich amber tones',
      gradient: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900',
      accentColor: 'from-amber-400 to-amber-500',
      borderColor: 'border-amber-800/30',
      category: 'Luxury'
    },
    {
      name: 'Silver Sophistication',
      description: 'Elegant silver gradient with refined gray accents',
      gradient: 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900',
      accentColor: 'from-gray-400 to-gray-500',
      borderColor: 'border-gray-800/30',
      category: 'Elegant'
    },
    {
      name: 'Royal Purple',
      description: 'Regal purple gradient with majestic depth',
      gradient: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      accentColor: 'from-purple-400 to-purple-500',
      borderColor: 'border-purple-800/30',
      category: 'Royal'
    },
    {
      name: 'Crimson Passion',
      description: 'Bold red gradient with passionate intensity',
      gradient: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      accentColor: 'from-red-400 to-red-500',
      borderColor: 'border-red-800/30',
      category: 'Bold'
    },
    {
      name: 'Teal Tranquility',
      description: 'Calming teal gradient with peaceful serenity',
      gradient: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      accentColor: 'from-teal-400 to-teal-500',
      borderColor: 'border-teal-800/30',
      category: 'Calming'
    },
    {
      name: 'Indigo Insight',
      description: 'Deep indigo gradient with intellectual depth',
      gradient: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900',
      accentColor: 'from-indigo-400 to-indigo-500',
      borderColor: 'border-indigo-800/30',
      category: 'Intellectual'
    },
    {
      name: 'Rose Radiance',
      description: 'Elegant rose gradient with romantic charm',
      gradient: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900',
      accentColor: 'from-rose-400 to-rose-500',
      borderColor: 'border-rose-800/30',
      category: 'Romantic'
    },
    {
      name: 'Vibrant Gold',
      description: 'Bright and energetic gold with maximum impact',
      gradient: 'bg-gradient-to-br from-slate-900 via-amber-400 to-slate-900',
      accentColor: 'from-amber-300 to-amber-400',
      borderColor: 'border-amber-600/30',
      category: 'Vibrant'
    },
    {
      name: 'Rich Gold',
      description: 'Deep and luxurious gold with premium feel',
      gradient: 'bg-gradient-to-br from-slate-900 via-amber-500 to-slate-900',
      accentColor: 'from-amber-400 to-amber-500',
      borderColor: 'border-amber-700/30',
      category: 'Luxury'
    },
    {
      name: 'Bright Gold',
      description: 'Illuminating yellow gold with energy',
      gradient: 'bg-gradient-to-br from-slate-900 via-yellow-500 to-slate-900',
      accentColor: 'from-yellow-400 to-yellow-500',
      borderColor: 'border-yellow-600/30',
      category: 'Energetic'
    },
    {
      name: 'Warm Orange',
      description: 'Warm and inviting orange with comfort',
      gradient: 'bg-gradient-to-br from-slate-900 via-orange-500 to-slate-900',
      accentColor: 'from-orange-400 to-orange-500',
      borderColor: 'border-orange-600/30',
      category: 'Warm'
    },
    {
      name: 'Bright Silver',
      description: 'Clean and modern bright silver',
      gradient: 'bg-gradient-to-br from-slate-900 via-gray-200 to-slate-900',
      accentColor: 'from-gray-100 to-gray-200',
      borderColor: 'border-gray-400/30',
      category: 'Modern'
    },
    {
      name: 'Cool Silver',
      description: 'Sophisticated cool silver with depth',
      gradient: 'bg-gradient-to-br from-slate-900 via-slate-300 to-slate-900',
      accentColor: 'from-slate-200 to-slate-300',
      borderColor: 'border-slate-500/30',
      category: 'Sophisticated'
    },
    {
      name: 'Zinc Silver',
      description: 'Neutral zinc silver with versatility',
      gradient: 'bg-gradient-to-br from-slate-900 via-zinc-400 to-slate-900',
      accentColor: 'from-zinc-300 to-zinc-400',
      borderColor: 'border-zinc-600/30',
      category: 'Neutral'
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Artistic Colorful Background */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Distinct geometric color zones - no blending */}
        <div className="absolute inset-0">
          {/* Cyan zones */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyan-900"></div>
          <div className="absolute top-1/4 right-1/4 w-1/4 h-1/4 bg-cyan-900"></div>
          
          {/* Blue zones */}
          <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-blue-900"></div>
          <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-indigo-900"></div>
          
          {/* Purple zones */}
          <div className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-purple-900"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-purple-900"></div>
          
          {/* Gold/Amber zones */}
          <div className="absolute top-1/4 left-1/2 w-1/4 h-1/4 bg-amber-900"></div>
          <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-amber-400"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-amber-600"></div>
          <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-yellow-600"></div>
          <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-orange-500"></div>
          <div className="absolute bottom-1/2 right-1/2 w-1/4 h-1/4 bg-amber-500"></div>
          <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-yellow-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 bg-yellow-400"></div>
          
          {/* Silver/Gray zones */}
          <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-gray-800"></div>
          <div className="absolute bottom-0 right-1/3 w-1/4 h-1/4 bg-gray-400"></div>
          <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-slate-400"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1/4 h-1/4 bg-zinc-400"></div>
          <div className="absolute top-1/3 right-1/2 w-1/4 h-1/4 bg-gray-300"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1/4 h-1/4 bg-slate-300"></div>
          <div className="absolute top-1/2 left-0 w-1/4 h-1/4 bg-gray-200"></div>
          
          {/* Red/Rose zones */}
          <div className="absolute top-1/3 left-1/3 w-1/4 h-1/4 bg-red-900"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1/4 h-1/4 bg-rose-900"></div>
          
          {/* Teal zones */}
          <div className="absolute top-1/2 right-1/2 w-1/4 h-1/4 bg-teal-900"></div>
          <div className="absolute bottom-1/2 left-1/2 w-1/4 h-1/4 bg-teal-900"></div>
        </div>
        
        {/* Sharp geometric shapes with solid colors */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Triangle shapes with solid colors */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-cyan-400 transform rotate-45"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-purple-500 transform rotate-12"></div>
          <div className="absolute bottom-1/4 left-3/4 w-20 h-20 bg-amber-400 transform -rotate-30"></div>
          
          {/* Diamond shapes with solid colors */}
          <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-teal-500 transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-rose-500 transform rotate-60"></div>
          
          {/* Hexagon-like shapes with solid colors */}
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-indigo-500 transform rotate-15"></div>
          <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-orange-400 transform -rotate-45"></div>
          
          {/* Additional sharp shapes */}
          <div className="absolute top-1/8 right-1/8 w-8 h-8 bg-lime-400 transform rotate-30"></div>
          <div className="absolute bottom-1/8 left-1/8 w-10 h-10 bg-fuchsia-500 transform -rotate-15"></div>
          <div className="absolute top-5/8 left-5/8 w-12 h-12 bg-violet-500 transform rotate-75"></div>
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
        
        {/* Light rays effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen py-32 lg:py-40 relative overflow-hidden flex items-center">
          <div className="container relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium tracking-wider uppercase mb-8 rounded-full shadow-lg border border-white/20">
                  Color Themes
                </span>
              </div>
              
              <h1 className="mb-12 text-white">
                Choose Your
                <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Perfect Theme</span>
              </h1>
              
              <p className="text-lead mb-16 max-w-3xl mx-auto text-gray-200">
                Select from our curated collection of premium color themes. Each theme is carefully designed 
                to create the perfect atmosphere for your brand and audience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-white/30 shadow-lg">
                  <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/30 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link to="/work" className="px-8 py-4 bg-transparent border border-white/30 text-white hover:text-white hover:bg-white/20 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="relative z-10">View Our Work</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Color Themes Grid */}
        <section className="py-32">
          <div className="container">
            <div className="text-center mb-24">
              <h2 className="mb-12 text-white">
                Premium Color Themes
              </h2>
              <p className="text-lead max-w-3xl mx-auto text-gray-200">
                Each theme is designed to create a unique visual experience that aligns with your brand identity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {colorThemes.map((theme, index) => (
                <div 
                  key={theme.name} 
                  className={`group relative ${theme.gradient} border ${theme.borderColor} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-5 h-5 text-white/80" />
                  </div>

                  {/* Theme Info */}
                  <div className="text-center relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-2">{theme.name}</h3>
                    <p className="text-sm text-gray-200 mb-4 leading-relaxed">{theme.description}</p>
                    
                    {/* Category Badge */}
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white mb-4 border border-white/20`}>
                      {theme.category}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-8 my-16"></div>

        {/* Features Section */}
        <section className="py-32">
          <div className="container">
            <div className="text-center mb-24">
              <h2 className="mb-12 text-white">
                Why Choose Our Themes?
              </h2>
              <p className="text-lead max-w-3xl mx-auto text-gray-200">
                Our color themes are designed with psychology and branding in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Professional Design
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Each theme is crafted by professional designers with years of experience in color psychology and branding.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Fully Customizable
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  All themes can be customized to match your specific brand requirements and preferences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Premium Quality
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  High-quality gradients and color combinations that create stunning visual experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-12 text-white">
                Ready to Choose Your Theme?
              </h2>
              <p className="text-lead mb-16 max-w-2xl mx-auto text-gray-200">
                Let's discuss your preferences and create a custom theme that perfectly represents your brand.
              </p>
              <Link to="/contact" className="group relative inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-white/30 shadow-lg">
                <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/30 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Templates 