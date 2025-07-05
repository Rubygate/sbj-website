"use client"

import Link from "next/link"
import { Heart, ShoppingBag, Star, Sparkles } from "lucide-react"
import { useCountry } from "@/contexts/CountryContext"

// Mock data for rhinestone products
const featuredProducts = [
  {
    id: 1,
    name: "Custom Cheerleading Rhinestone Design",
    price: 89.99,
    originalPrice: 119.99,
    image: "/api/placeholder/400/500",
    rating: 4.8,
    reviewCount: 127,
    isNew: true,
    isSale: true,
    category: "Cheer & Sports Blings",
  },
  {
    id: 2,
    name: "Floral Rhinestone Template Set",
    price: 64.99,
    originalPrice: 64.99,
    image: "/api/placeholder/400/500",
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    isSale: false,
    category: "Rhinestones",
  },
  {
    id: 3,
    name: "Sports Team Rhinestone Transfer",
    price: 45.99,
    originalPrice: 59.99,
    image: "/api/placeholder/400/500",
    rating: 4.7,
    reviewCount: 203,
    isNew: false,
    isSale: true,
    category: "Transfers & Appliqués",
  },
  {
    id: 4,
    name: "Custom Logo Rhinestone Design",
    price: 199.99,
    originalPrice: 199.99,
    image: "/api/placeholder/400/500",
    rating: 5.0,
    reviewCount: 56,
    isNew: true,
    isSale: false,
    category: "Custom Blinging Solutions",
  },
]

export function FeaturedProducts() {
  const { countryInfo } = useCountry()
  
  // Convert prices based on country
  const getLocalPrice = (usdPrice: number) => {
    if (countryInfo.code === 'CA') {
      // Convert USD to CAD (approximate rate)
      return (usdPrice * 1.35).toFixed(2)
    }
    return usdPrice.toFixed(2)
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 font-['Playfair_Display']">
            Featured Products
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto font-['Poppins']">
            Discover our most popular rhinestone designs and templates that bring 
            sparkle to every project.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Image */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#F9CCE3]/20 to-[#712F91]/20 rounded-2xl overflow-hidden mb-6 border border-[#F9CCE3]/30 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-[#F9CCE3]/10 to-[#712F91]/10 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-[#712F91]/40" />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-[#F9CCE3] text-[#1A1A1A] text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-[#712F91] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                      Sale
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-[#6B7280] text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-[#F9CCE3] rounded-full flex items-center justify-center shadow-lg hover:bg-[#F9CCE3]/90 transition-colors">
                    <Heart className="w-5 h-5 text-[#1A1A1A]" />
                  </button>
                  <button className="w-10 h-10 bg-[#712F91] rounded-full flex items-center justify-center shadow-lg hover:bg-[#712F91]/90 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-semibold text-[#1A1A1A] group-hover:text-[#712F91] transition-colors font-['Playfair_Display']">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-[#712F91] fill-current"
                            : "text-[#6B7280]/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#6B7280]">
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#712F91] text-lg">
                    {countryInfo.currencySymbol}{getLocalPrice(product.price)}
                  </span>
                  {product.isSale && (
                    <span className="text-sm text-[#6B7280] line-through">
                      {countryInfo.currencySymbol}{getLocalPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/shop"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-full hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 font-['Poppins'] shadow-lg hover:shadow-xl hover:shadow-[#F9CCE3]/20 transform hover:scale-105"
            >
              View All Products
            </Link>
            <a
              href={countryInfo.code === 'CA' 
                ? "https://www.amazon.ca/s?k=sparkles+by+junetrain+rhinestones"
                : "https://www.amazon.com/s?k=sparkles+by+junetrain+rhinestones"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF9900] to-[#FF6B00] text-white font-semibold rounded-full hover:from-[#FF9900]/90 hover:to-[#FF6B00]/90 transition-all duration-200 font-['Poppins'] shadow-lg hover:shadow-xl hover:shadow-[#FF9900]/20 transform hover:scale-105"
            >
              Visit Our Amazon Store
              <ShoppingBag className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 