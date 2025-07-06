import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#F9CCE3]/10 to-[#712F91]/10 overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#F9CCE3]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#712F91]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#D6D6D6]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6 font-['Playfair_Display']">
              Blings Make It
              <span className="block bg-gradient-to-r from-[#F9CCE3] to-[#712F91] bg-clip-text text-transparent">
                All Better.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#6B7280] mb-8 max-w-2xl font-['Poppins']">
              Premium rhinestones, Iron-on transfers, appliques and custom sparkle solutions made for makers that dare to shine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/shop"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-full hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins']"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-[#F9CCE3] text-[#F9CCE3] font-semibold rounded-full hover:bg-[#F9CCE3] hover:text-[#1A1A1A] transition-all duration-200 font-['Poppins']"
              >
                Start Custom Order
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-[#6B7280]">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F9CCE3] rounded-full mr-2 animate-sparkle"></div>
                Fast Turnaround
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F9CCE3] rounded-full mr-2 animate-sparkle"></div>
                Premium Quality
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F9CCE3] rounded-full mr-2 animate-sparkle"></div>
                Custom Service
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="flex items-center justify-center relative">
            {/* Decorative elements around video */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#F9CCE3] to-[#712F91] rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#712F91] to-[#F9CCE3] rounded-full opacity-80 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#F9CCE3] rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-1/4 -right-2 w-3 h-3 bg-[#712F91] rounded-full opacity-60 animate-bounce animation-delay-500"></div>
            
            {/* Additional floating orbs */}
            <div className="absolute -top-8 right-8 w-5 h-5 bg-gradient-to-br from-[#F9CCE3] to-[#712F91] rounded-full opacity-70 animate-pulse animation-delay-1500"></div>
            <div className="absolute top-8 -right-8 w-7 h-7 bg-gradient-to-br from-[#712F91] to-[#F9CCE3] rounded-full opacity-75 animate-pulse animation-delay-300"></div>
            <div className="absolute -bottom-8 left-8 w-4 h-4 bg-[#F9CCE3] rounded-full opacity-65 animate-bounce animation-delay-1200"></div>
            <div className="absolute bottom-8 -left-8 w-6 h-6 bg-gradient-to-br from-[#712F91] to-[#F9CCE3] rounded-full opacity-70 animate-bounce animation-delay-800"></div>
            <div className="absolute top-1/3 -left-6 w-3 h-3 bg-[#F9CCE3] rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-2/3 -right-6 w-5 h-5 bg-[#712F91] rounded-full opacity-60 animate-bounce animation-delay-600"></div>
            <div className="absolute -top-6 left-1/2 w-4 h-4 bg-gradient-to-br from-[#F9CCE3] to-[#712F91] rounded-full opacity-70 animate-pulse animation-delay-900"></div>
            <div className="absolute -bottom-6 right-1/3 w-3 h-3 bg-[#712F91] rounded-full opacity-55 animate-bounce animation-delay-1400"></div>
            
            {/* Video container with enhanced styling */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F9CCE3]/30 bg-gradient-to-br from-[#F9CCE3]/10 to-[#712F91]/10">
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10"></div>
              
              {/* Sparkle decorations */}
              <div className="absolute top-4 right-4 z-20">
                <Sparkles className="w-6 h-6 text-[#F9CCE3] animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <Sparkles className="w-4 h-4 text-[#712F91] animate-pulse animation-delay-1000" />
              </div>
              
              {/* Hero Video - Simplified for testing */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-0"
                preload="auto"
                controls
                onError={(e) => console.error('Video error:', e)}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
                onLoadedData={() => console.log('Video data loaded')}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                <source src="/about-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-[#F9CCE3]/20 shadow-[0_0_20px_rgba(249,204,227,0.3)] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 