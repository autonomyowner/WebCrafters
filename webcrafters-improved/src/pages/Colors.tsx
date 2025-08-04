import { useState } from 'react'
import { Check, Copy, Sparkles } from 'lucide-react'

const Colors = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const colorSchemes = [
    {
      id: 'emerald',
      name: 'Emerald Elegance',
      gradient: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900',
      description: 'Professional cyan gradient with deep slate accents',
      code: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900'
    },
    {
      id: 'sapphire',
      name: 'Sapphire Serenity',
      gradient: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      description: 'Premium blue gradient with sophisticated depth',
      code: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
    },
    {
      id: 'golden',
      name: 'Golden Majesty',
      gradient: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900',
      description: 'Luxurious gold gradient with rich amber tones',
      code: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900'
    },
    {
      id: 'silver',
      name: 'Silver Sophistication',
      gradient: 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900',
      description: 'Elegant silver gradient with refined gray accents',
      code: 'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900'
    },
    {
      id: 'royal-purple',
      name: 'Royal Purple',
      gradient: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      description: 'Regal purple gradient with majestic depth',
      code: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    },
    {
      id: 'crimson',
      name: 'Crimson Passion',
      gradient: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      description: 'Bold red gradient with passionate intensity',
      code: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900'
    },
    {
      id: 'teal',
      name: 'Teal Tranquility',
      gradient: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      description: 'Calming teal gradient with peaceful serenity',
      code: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900'
    },
    {
      id: 'indigo',
      name: 'Indigo Insight',
      gradient: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900',
      description: 'Deep indigo gradient with intellectual depth',
      code: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900'
    },
    {
      id: 'rose',
      name: 'Rose Radiance',
      gradient: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900',
      description: 'Elegant rose gradient with romantic charm',
      code: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900'
    },
    {
      id: 'emerald-blue',
      name: 'Emerald Blue',
      gradient: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900',
      description: 'Fresh cyan gradient with modern sophistication',
      code: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900'
    }
  ]

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedColor(id)
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
                         <Sparkles className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
             <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-50 to-cyan-100 bg-clip-text text-transparent">
               Color Selection
             </h1>
             <Sparkles className="w-8 h-8 text-cyan-400 ml-3 animate-pulse" />
           </div>
           <p className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Choose from our premium collection of elegant gradient backgrounds for your website
          </p>
        </div>

        {/* Color Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {colorSchemes.map((scheme, index) => (
            <div
              key={scheme.id}
                             className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Color Preview */}
              <div className={`w-full h-32 rounded-xl mb-4 ${scheme.gradient} relative overflow-hidden group-hover:shadow-lg transition-all duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Color Info */}
              <div className="space-y-3">
                                 <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
                   {scheme.name}
                 </h3>
                 <p className="text-sm text-cyan-200 leading-relaxed">
                  {scheme.description}
                </p>

                                 {/* Code Display */}
                 <div className="bg-slate-900/80 rounded-lg p-3 border border-cyan-500/20">
                   <code className="text-xs text-cyan-300 font-mono break-all">
                    {scheme.code}
                  </code>
                </div>

                                 {/* Copy Button */}
                 <button
                   onClick={() => copyToClipboard(scheme.code, scheme.id)}
                   className="w-full mt-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center space-x-2 group"
                >
                  {copiedColor === scheme.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

                             {/* Premium Badge */}
               <div className="absolute top-4 left-4">
                 <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                   PREMIUM
                 </div>
               </div>
            </div>
          ))}
        </div>

                 {/* Footer Section */}
         <div className="text-center mt-16">
           <div className="bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 backdrop-blur-xl rounded-2xl p-8 border border-rose-500/20">
             <h3 className="text-2xl font-bold text-white mb-4">
               Ready to Transform Your Website?
             </h3>
             <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
               Simply copy the gradient code and apply it to your website's main container. 
               Each gradient is carefully crafted for premium visual appeal and professional presentation.
             </p>
             <div className="flex items-center justify-center space-x-4">
               <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
               <span className="text-rose-300 font-semibold">Premium Quality Gradients</span>
               <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Colors 