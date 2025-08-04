import React from 'react'
import { Sparkles, Zap } from 'lucide-react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className} group`}>
      {/* Premium background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-green-600/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-all duration-700"></div>
      
      {/* Main logo container with premium styling */}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-full border border-green-500/30 shadow-2xl overflow-hidden">
        {/* Main logo image with enhanced effects */}
        <img
          src="/1.jpeg"
          alt="WebCrafters Logo"
          className="w-full h-full object-cover rounded-full transition-all duration-700 group-hover:scale-110"
          style={{
            filter: `
              brightness(1.3) 
              contrast(1.4) 
              saturate(1.5) 
              hue-rotate(15deg) 
              drop-shadow(0 8px 24px rgba(34, 197, 94, 0.4))
            `,
            animation: animated ? 'logoSpin 20s linear infinite, logoFlip 8s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/15 to-green-700/25 rounded-full mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
        
        {/* Sophisticated border with animated gradient */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-green-400/60 via-emerald-400/40 to-green-500/60 bg-clip-border transition-all duration-500 group-hover:from-green-300/80 group-hover:via-emerald-300/60 group-hover:to-green-400/80"></div>
        
        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-emerald-400/0 to-green-600/0 rounded-full transition-all duration-700 group-hover:from-green-400/15 group-hover:via-emerald-400/10 group-hover:to-green-600/15"></div>
        
        {/* Animated energy particles */}
        {animated && (
          <>
            <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg animate-pulse">
              <Sparkles className="w-1 h-1 text-white absolute inset-0 m-auto" />
            </div>
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full shadow-md animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Zap className="w-0.5 h-0.5 text-white absolute inset-0 m-auto" />
            </div>
          </>
        )}
        
        {/* Premium shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
        
        {/* Floating energy field */}
        <div className="absolute inset-0 animate-float-slow">
          <div className="w-full h-full bg-gradient-to-br from-green-400/8 via-emerald-400/5 to-green-600/8 rounded-full"></div>
        </div>
        
        {/* Circular accent rings */}
        <div className="absolute inset-0 rounded-full border border-green-400/30 transition-all duration-500 group-hover:border-green-300/50"></div>
        <div className="absolute inset-1 rounded-full border border-emerald-400/20 transition-all duration-500 group-hover:border-emerald-300/40"></div>
        
        {/* Inner glow ring */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Outer glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-emerald-400/0 to-green-500/0 rounded-full transition-all duration-700 group-hover:from-green-400/20 group-hover:via-emerald-400/15 group-hover:to-green-500/20 blur-sm scale-110 opacity-0 group-hover:opacity-100"></div>
    </div>
  )
}

export default Logo 