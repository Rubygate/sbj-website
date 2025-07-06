"use client"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, Award, Users, Sparkles, Star, Zap } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#F9CCE3]/20 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Sparkles by Junetrain
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting custom rhinestone solutions and premium blinging supplies.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2019, Sparkles by Junetrain began as a passion project in a small Canadian workshop, fueled by a deep love for rhinestone crafting and custom blinging. What started with just a handful of supplies has since grown into a trusted brand serving fashion designers, DIY makers, and creative professionals across the world.
                  </p>
                  <p>
                    We believe that every piece deserves to shine and our mission is to deliver high-quality rhinestone supplies and tailored blinging solutions that bring your creative ideas to life.
                  </p>
                  <p>
                    From our wide range of rhinestones in every size and color to custom iron-on transfers and appliqués, Sparkles by Junetrain is your creative partner, we&apos;re here to support your blinging journey with premium materials and expert guidance.
                  </p>
                </div>
              </div>
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#F9CCE3]/20 via-purple-100/30 to-pink-100/20 rounded-3xl blur-xl"></div>
                
                {/* Main video container */}
                <div className="relative bg-gradient-to-br from-[#F9CCE3]/40 to-purple-100/60 rounded-2xl aspect-square overflow-hidden shadow-2xl border border-white/20">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-[#F9CCE3] to-purple-300 rounded-br-lg z-10"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-300 to-[#F9CCE3] rounded-bl-lg z-10"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-purple-300 to-[#F9CCE3] rounded-tr-lg z-10"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-[#F9CCE3] to-purple-300 rounded-tl-lg z-10"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-[#F9CCE3] rounded-full animate-pulse z-10"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse z-10" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-6 left-8 w-1 h-1 bg-pink-300 rounded-full animate-pulse z-10" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-[#F9CCE3] rounded-full animate-pulse z-10" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Video with enhanced styling */}
                  <video 
                    className="w-full h-full object-cover relative z-0"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/about-video.mp4" type="video/mp4" />
                    <source src="/about video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Subtle overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-5"></div>
                  
                  {/* Play button overlay (optional) */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#F9CCE3] to-purple-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do at Sparkles by Junetrain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F9CCE3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Crafted with Care</h3>
                <p className="text-gray-600">
                  Every rhinestone supply and custom design is selected and crafted with attention to detail and Canadian pride.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  We source only the finest rhinestones and materials to ensure your blinging projects shine their brightest.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Support</h3>
                <p className="text-gray-600">
                  From beginners to professionals, we&apos;re here to support your rhinestone journey with expert guidance and inspiration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-[#F9CCE3]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#F9CCE3] mb-2">1000+</div>
                <div className="flex items-center justify-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F9CCE3] mb-2">50+</div>
                <div className="text-gray-600">Rhinestone Colors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F9CCE3] mb-2">500+</div>
                <div className="text-gray-600">Custom Designs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive rhinestone solutions for all your blinging needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  expandedCard === 0 ? 'ring-2 ring-[#F9CCE3] shadow-2xl scale-105' : ''
                }`}
                onClick={() => toggleCard(0)}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#F9CCE3]/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-tr-full"></div>
                
                {/* Icon with enhanced styling */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#F9CCE3] to-purple-300 rounded-xl flex items-center justify-center mb-4 shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                </div>
                
                {/* Title with gradient text */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  Premium Rhinestones
                </h3>
                
                {/* Description with enhanced animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 0 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    High-quality rhinestones in all sizes (SS3-SS30) and colors, from classic crystals to neon shades and special finishes.
                  </p>
                </div>
                
                {/* Floating sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#F9CCE3] rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div 
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  expandedCard === 1 ? 'ring-2 ring-[#F9CCE3] shadow-2xl scale-105' : ''
                }`}
                onClick={() => toggleCard(1)}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#F9CCE3]/20 to-transparent rounded-tr-full"></div>
                
                {/* Icon with enhanced styling */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                </div>
                
                {/* Title with gradient text */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  Custom Designs
                </h3>
                
                {/* Description with enhanced animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 1 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    Personalized iron-on transfers, custom logos, initials, and sports blings tailored to your specific needs.
                  </p>
                </div>
                
                {/* Floating sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#F9CCE3] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div 
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  expandedCard === 2 ? 'ring-2 ring-[#F9CCE3] shadow-2xl scale-105' : ''
                }`}
                onClick={() => toggleCard(2)}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-100/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#F9CCE3]/20 to-transparent rounded-tr-full"></div>
                
                {/* Icon with enhanced styling */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <Star className="w-7 h-7 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                </div>
                
                {/* Title with gradient text */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  Cheer & Sports
                </h3>
                
                {/* Description with enhanced animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 2 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized cheer bows, belts, sashes, and sports team blings that make your team stand out.
                  </p>
                </div>
                
                {/* Floating sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#F9CCE3] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div 
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  expandedCard === 3 ? 'ring-2 ring-[#F9CCE3] shadow-2xl scale-105' : ''
                }`}
                onClick={() => toggleCard(3)}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#F9CCE3]/20 to-transparent rounded-tr-full"></div>
                
                {/* Icon with enhanced styling */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                </div>
                
                {/* Title with gradient text */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  Bedazzled Fashion
                </h3>
                
                {/* Description with enhanced animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 3 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    Beautiful bedazzled jackets, kimonos, scarves, and accessories that add sparkle to any outfit.
                  </p>
                </div>
                
                {/* Floating sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#F9CCE3] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div 
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  expandedCard === 4 ? 'ring-2 ring-[#F9CCE3] shadow-2xl scale-105' : ''
                }`}
                onClick={() => toggleCard(4)}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#F9CCE3]/20 to-transparent rounded-tr-full"></div>
                
                {/* Icon with enhanced styling */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                </div>
                
                {/* Title with gradient text */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  Supplies & Tools
                </h3>
                
                {/* Description with enhanced animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 4 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    Complete rhinestoning supplies including starter kits, tools, and templates for DIY projects.
                  </p>
                </div>
                
                {/* Floating sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#F9CCE3] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div 
                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  expandedCard === 5 ? 'ring-2 ring-[#F9CCE3] shadow-2xl scale-105' : ''
                }`}
                onClick={() => toggleCard(5)}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pink-100/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#F9CCE3]/20 to-transparent rounded-tr-full"></div>
                
                {/* Icon with enhanced styling */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                </div>
                
                {/* Title with gradient text */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  Expert Support
                </h3>
                
                {/* Description with enhanced animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCard === 5 ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    Personalized guidance and support to help you achieve the perfect blinging results every time.
                  </p>
                </div>
                
                {/* Floating sparkles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#F9CCE3] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9CCE3]/20 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Blinging Journey?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our premium rhinestone supplies and custom blinging solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/shop" 
                className="px-8 py-3 bg-[#F9CCE3] text-gray-900 font-semibold rounded-full hover:bg-[#F9CCE3]/90 transition-colors"
              >
                Shop Now
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border-2 border-[#F9CCE3] text-[#F9CCE3] font-semibold rounded-full hover:bg-[#F9CCE3] hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 