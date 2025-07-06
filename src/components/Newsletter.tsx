"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{left: string, top: string, delay: string}>>([])

  useEffect(() => {
    // Generate sparkle positions only on client side
    const sparklePositions = [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }))
    setSparkles(sparklePositions)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", email)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Sparkle decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {sparkles.map((sparkle, i) => (
            <div
              key={i}
              className="absolute animate-sparkle"
              style={{
                left: sparkle.left,
                top: sparkle.top,
                animationDelay: sparkle.delay,
              }}
            >
              <Sparkles className="w-3 h-3 text-[#F9CCE3]" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start min-h-[200px]">
          {/* Left Block - Content */}
          <div className="text-left flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 font-['Playfair_Display']">
              Join the Sparkle List
            </h2>
            <p className="text-lg text-[#6B7280] mb-6 font-['Poppins']">
              Get exclusive access to new designs, special offers, and sparkle inspiration 
              delivered straight to your inbox.
            </p>
            <p className="text-xs text-[#6B7280]/60 font-['Poppins']">
              No spam, just sparkle! Unsubscribe anytime.
            </p>
          </div>

          {/* Right Block - Form */}
          <div className="flex flex-col items-center justify-center h-full">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-white border border-[#D6D6D6]/30 rounded-full text-[#1A1A1A] placeholder-[#6B7280]/60 focus:outline-none focus:ring-2 focus:ring-[#F9CCE3] focus:border-transparent font-['Poppins'] shadow-sm text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-full hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 font-['Poppins'] text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="w-full max-w-md">
                              <div className="px-4 py-3 bg-[#F9CCE3]/10 border border-[#F9CCE3]/20 rounded-full text-[#F9CCE3] font-['Poppins'] text-sm">
                ✨ Welcome to the Sparkle List! Check your email for confirmation.
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 