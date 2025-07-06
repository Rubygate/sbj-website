"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Search, Grid, List, Heart, ShoppingBag, Star, ChevronDown, ChevronRight, ArrowRight } from "lucide-react"
import { useCountry } from "@/contexts/CountryContext"
import { useUser } from "@/contexts/UserContext"
import { useState } from "react"
import Link from "next/link"

// Mock products data for Sparkles by Junetrain
const products = [
  {
    id: 1,
    name: "Custom Rhinestone T-Shirt Design",
    price: 89.99,
    originalPrice: 119.99,
    category: "Custom Orders",
    subcategory: "Custom Templates",
    rating: 4.8,
    reviewCount: 127,
    isNew: true,
    isSale: true,
    image: "/api/placeholder/400/500",
  },
  {
    id: 2,
    name: "Premium Hotfix Rhinestone Pack - 1000 pieces",
    price: 64.99,
    originalPrice: 64.99,
    category: "Rhinestones",
    subcategory: "Hotfix Rhinestones",
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 3,
    name: "Cheer Competition Rhinestone Set",
    price: 45.99,
    originalPrice: 59.99,
    category: "Cheer & Sports Blings",
    subcategory: "Cheer Bows",
    rating: 4.7,
    reviewCount: 203,
    isNew: false,
    isSale: true,
    image: "/api/placeholder/400/500",
  },
  {
    id: 4,
    name: "Iron-On Rhinestone Transfer Design",
    price: 199.99,
    originalPrice: 199.99,
    category: "Iron-On Rhinestone Transfers",
    subcategory: "Birthday Transfers",
    rating: 5.0,
    reviewCount: 56,
    isNew: true,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 5,
    name: "Mixed Color Flatback Rhinestone Collection",
    price: 129.99,
    originalPrice: 129.99,
    category: "Rhinestones",
    subcategory: "Flatback Rhinestones",
    rating: 4.6,
    reviewCount: 78,
    isNew: false,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 6,
    name: "Sports Team Rhinestone Kit",
    price: 79.99,
    originalPrice: 99.99,
    category: "Cheer & Sports Blings",
    subcategory: "Team Name & Logo Transfers",
    rating: 4.5,
    reviewCount: 92,
    isNew: false,
    isSale: true,
    image: "/api/placeholder/400/500",
  },
  {
    id: 7,
    name: "Bedazzled Denim Jacket",
    price: 34.99,
    originalPrice: 34.99,
    category: "Bedazzled Jackets & Kimonos",
    subcategory: "Hip-Length",
    rating: 4.4,
    reviewCount: 156,
    isNew: false,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 8,
    name: "Rhinestone Appliqué Design",
    price: 55.99,
    originalPrice: 55.99,
    category: "Rhinestone Appliqués",
    subcategory: "Iron-On Appliqués",
    rating: 4.8,
    reviewCount: 67,
    isNew: true,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 9,
    name: "DIY Bling Starter Kit",
    price: 89.99,
    originalPrice: 89.99,
    category: "DIY Bling Kits",
    subcategory: "Beginner Kits",
    rating: 4.9,
    reviewCount: 234,
    isNew: true,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 10,
    name: "Rhinestone Wall Art - Sparkle Design",
    price: 149.99,
    originalPrice: 149.99,
    category: "Rhinestone Wall Arts",
    subcategory: "Wall Decorations",
    rating: 4.7,
    reviewCount: 89,
    isNew: false,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 11,
    name: "Rhinestoning Tool Kit",
    price: 39.99,
    originalPrice: 49.99,
    category: "Rhinestoning Supplies",
    subcategory: "Tool Sets",
    rating: 4.6,
    reviewCount: 156,
    isNew: false,
    isSale: true,
    image: "/api/placeholder/400/500",
  },
  {
    id: 12,
    name: "Bedazzled Scarf Collection",
    price: 69.99,
    originalPrice: 69.99,
    category: "Bedazzled Scarves & Headwear",
    subcategory: "Scarves & Wraps",
    rating: 4.8,
    reviewCount: 78,
    isNew: true,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 13,
    name: "Nail Art Rhinestone Kit",
    price: 24.99,
    originalPrice: 24.99,
    category: "Rhinestones",
    subcategory: "Nail Art Rhinestones",
    rating: 4.7,
    reviewCount: 156,
    isNew: false,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 14,
    name: "Rhinestone Beads Assortment",
    price: 34.99,
    originalPrice: 39.99,
    category: "Rhinestones",
    subcategory: "Rhinestone Beads",
    rating: 4.5,
    reviewCount: 89,
    isNew: false,
    isSale: true,
    image: "/api/placeholder/400/500",
  },
  {
    id: 15,
    name: "Rhinestone Cabochon Set",
    price: 44.99,
    originalPrice: 44.99,
    category: "Rhinestones",
    subcategory: "Rhinestone Cabochons",
    rating: 4.8,
    reviewCount: 67,
    isNew: true,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
  {
    id: 16,
    name: "Vintage Rhinestone Brooch Collection",
    price: 89.99,
    originalPrice: 89.99,
    category: "Rhinestones",
    subcategory: "Rhinestone Brooches",
    rating: 4.9,
    reviewCount: 123,
    isNew: false,
    isSale: false,
    image: "/api/placeholder/400/500",
  },
]

const categories = [
  "All", 
  "On Sale",
  "New",
  "Limited Edition Bling Items"
]

const rhinestoneSubcategories = [
  "Hotfix Rhinestones",
  "Flatback Rhinestones", 
  "Nail Art Rhinestones", 
  "Rhinestone Beads", 
  "Rhinestone Cabochons", 
  "Rhinestone Brooches",
  "Rhinestone buttons"
]

const customOrderSubcategories = [
  "Custom Templates",
  "Custom Iron-On Transfers",
  "Custom Logos & Branding",
  "Custom Initials",
  "Custom Numbers",
  "Custom Sports Blings",
  "Custom Cheer Bows & Blings",
  "Custom Sash"
]

const ironOnTransferSubcategories = [
  // Occasions
  "Birthday Transfers",
  "Graduation Transfers",
  "Christmas Transfers",
  "Valentine's Day Transfers",
  "Halloween Transfers",
  "Easter Transfers",
  "New Year Transfers",
  "Bridal & Bachelorette",
  "Baby Shower",
  "Anniversary",
  "Retirement",
  "Family Reunion",
  "Girls' Trip",
  // Quotes & Sayings
  "Quotes",
  "Popular Phrases",
  "Affirmations",
  "Sassy & Trendy Sayings",
  "Faith & Spiritual",
  "Business & Boss Babe",
  // Cultural
  "Afrocentric",
  "African Print-Inspired",
  "Cultural Symbols",
  "Black History Themes",
  // Basic Elements
  "Letters",
  "Numbers",
  "Icons & Symbols"
]

const appliqueSubcategories = [
  "Iron-On Appliqués",
  "Sew-On Appliqués",
  "Stick-On Appliqués",
  "Rhinestone Ribbons",
  "Rhinestone Tassels"
]

const cheerSportsSubcategories = [
  "Cheer Bows",
  "Cheer Belts",
  "Cheer Sashes",
  "Hairbands & Clips",
  "Team Name & Logo Transfers",
  "Player Name & Number Sets",
  "Sport Patches & Icons",
  "Fan Bows & Caps",
  "Sport Totes",
  "Sport Family & Fan Blings"
]

const bedazzledJacketsSubcategories = [
  "Hip-Length",
  "Knee-Length",
  "Full-Length"
]

const bedazzledScarvesSubcategories = [
  "Scarves & Wraps",
  "Headbands",
  "Hair Bows, ties"
]

const bedazzledSkirtsSubcategories = [
  "Mini",
  "Knee-Length",
  "Midi",
  "Full-Length"
]

const rhinestoningSuppliesSubcategories = [
  "Starter Kits",
  "Tool Sets",
  "Custom Templates",
  "Reusable Templates"
]

const rhinestoneSizesSubcategories = [
  "SS3 (1.3 – 1.4 mm)",
  "SS6 (1.9 – 2.0 mm)",
  "SS10 (2.7 – 2.9 mm)",
  "SS16 (3.8 – 4.0 mm)",
  "SS20 (4.6 – 4.8 mm)",
  "SS30 (6.3 – 6.5 mm)",
  "Mixed Sizes"
]

const colorCollectionsSubcategories = [
  "Crystal & Neutrals",
  "Pink",
  "Red",
  "Gold & Yellow",
  "Green",
  "Blue",
  "Purple",
  "Orange & Peach",
  "Brown & Copper",
  "AB Colors (e.g., AB Pink, AB Blue)",
  "Metallics (Silver, Gold, Gunmetal)",
  "Neon Shades (Pink, Green, Yellow, Orange)",
  "Glow in the Dark",
  "Holographic / Iridescent",
  "Mixed Colors"
]
const priceRanges = ["Under $50", "$50 - $100", "$100 - $200", "Over $200"]

export default function ShopPage() {
  const { country } = useCountry()
  const { user } = useUser()
  const [isRhinestonesExpanded, setIsRhinestonesExpanded] = useState(false)
  const [isCustomOrdersExpanded, setIsCustomOrdersExpanded] = useState(false)
  const [isIronOnTransfersExpanded, setIsIronOnTransfersExpanded] = useState(false)
  const [isAppliquesExpanded, setIsAppliquesExpanded] = useState(false)
  const [isCheerSportsExpanded, setIsCheerSportsExpanded] = useState(false)
  const [isBedazzledJacketsExpanded, setIsBedazzledJacketsExpanded] = useState(false)
  const [isBedazzledScarvesExpanded, setIsBedazzledScarvesExpanded] = useState(false)
  const [isBedazzledSkirtsExpanded, setIsBedazzledSkirtsExpanded] = useState(false)
  const [isRhinestoningSuppliesExpanded, setIsRhinestoningSuppliesExpanded] = useState(false)
  const [isRhinestoneSizesExpanded, setIsRhinestoneSizesExpanded] = useState(false)
  const [isColorCollectionsExpanded, setIsColorCollectionsExpanded] = useState(false)
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  
  // Convert prices based on country
  const getPrice = (usdPrice: number) => {
    if (country === 'CA') {
      return (usdPrice * 1.35).toFixed(2) // Approximate CAD conversion
    }
    return usdPrice.toFixed(2)
  }
  
  const getCurrencySymbol = () => {
    return country === 'CA' ? 'C$' : '$'
  }
  
  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = products.slice(startIndex, endIndex)
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop All Products</h1>
          <p className="text-gray-600 text-lg">Discover our complete collection of rhinestone supplies and custom blinging solutions</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CCE3] focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
                
                {/* Rhinestones Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsRhinestonesExpanded(!isRhinestonesExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Rhinestones</span>
                    {isRhinestonesExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isRhinestonesExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {rhinestoneSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Custom Orders Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsCustomOrdersExpanded(!isCustomOrdersExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Custom Orders</span>
                    {isCustomOrdersExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isCustomOrdersExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {customOrderSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Iron-On Rhinestone Transfers Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsIronOnTransfersExpanded(!isIronOnTransfersExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Iron-On Rhinestone Transfers</span>
                    {isIronOnTransfersExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isIronOnTransfersExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {ironOnTransferSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Rhinestone Appliqués Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsAppliquesExpanded(!isAppliquesExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Rhinestone Appliqués</span>
                    {isAppliquesExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isAppliquesExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {appliqueSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Cheer & Sports Blings Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsCheerSportsExpanded(!isCheerSportsExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Cheer & Sports Blings</span>
                    {isCheerSportsExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isCheerSportsExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {cheerSportsSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Bedazzled Jackets & Kimonos Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsBedazzledJacketsExpanded(!isBedazzledJacketsExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Bedazzled Jackets & Kimonos</span>
                    {isBedazzledJacketsExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isBedazzledJacketsExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {bedazzledJacketsSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Bedazzled Scarves & Accessories Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsBedazzledScarvesExpanded(!isBedazzledScarvesExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Bedazzled Scarves & Accessories</span>
                    {isBedazzledScarvesExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isBedazzledScarvesExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {bedazzledScarvesSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Bedazzled Skirts Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsBedazzledSkirtsExpanded(!isBedazzledSkirtsExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Bedazzled Skirts</span>
                    {isBedazzledSkirtsExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isBedazzledSkirtsExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {bedazzledSkirtsSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Rhinestoning Supplies Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsRhinestoningSuppliesExpanded(!isRhinestoningSuppliesExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Rhinestoning Supplies</span>
                    {isRhinestoningSuppliesExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isRhinestoningSuppliesExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {rhinestoningSuppliesSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Search by Size Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsRhinestoneSizesExpanded(!isRhinestoneSizesExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Search by Size</span>
                    {isRhinestoneSizesExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isRhinestoneSizesExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {rhinestoneSizesSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Search by Color Dropdown */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button
                    onClick={() => setIsColorCollectionsExpanded(!isColorCollectionsExpanded)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-[#F9CCE3] transition-colors"
                  >
                    <span>Search by Color</span>
                    {isColorCollectionsExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {isColorCollectionsExpanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {colorCollectionsSubcategories.map((subcategory) => (
                        <label key={subcategory} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                          />
                          <span className="ml-2 text-sm text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#F9CCE3] focus:ring-[#F9CCE3]"
                    />
                    <span className="ml-2 text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Filters */}
            <button className="w-full px-4 py-2 text-sm text-white bg-[#F9CCE3] border border-[#F9CCE3] rounded-lg hover:bg-[#F9CCE3]/90 transition-colors font-medium">
              Apply Filters
            </button>

            {/* Clear Filters */}
            <button className="w-full px-4 py-2 text-sm text-[#F9CCE3] border border-[#F9CCE3] rounded-lg hover:bg-[#F9CCE3]/10 transition-colors">
              Clear All Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#F9CCE3]">
                    <Grid className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-[#F9CCE3]">
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4">
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-[#F9CCE3]/20 to-purple-100 rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Product Image</span>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-[#F9CCE3] text-gray-900 text-xs px-2 py-1 rounded-full font-medium">
                          New
                        </span>
                      )}
                      {product.isSale && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Sale
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                        <ShoppingBag className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 group-hover:text-[#F9CCE3] transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Category */}
                    <p className="text-sm text-gray-500">{product.category}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({product.reviewCount})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">
                        {getCurrencySymbol()}{getPrice(product.price)}
                      </span>
                      {product.isSale && (
                        <span className="text-sm text-gray-500 line-through">
                          {getCurrencySymbol()}{getPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-12 space-x-2">
                {/* Previous Page */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-3 py-2 text-sm rounded-lg ${
                        currentPage === pageNumber
                          ? 'bg-[#F9CCE3] text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                })}
                
                {/* Next Page */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Checkout Section */}
      <section className="bg-gradient-to-r from-[#F9CCE3] to-[#712F91] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white font-['Playfair_Display'] mb-4">
              Ready to Add Some Sparkle?
            </h2>
            <p className="text-white/90 text-lg mb-8 font-['Poppins'] max-w-2xl mx-auto">
              {user 
                ? "You're all set! Proceed to checkout to complete your purchase and start your rhinestone journey."
                : "Sign in to your account to proceed with checkout and complete your purchase."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  href="/checkout"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#1A1A1A] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins']"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              ) : (
                <Link
                  href="/checkout"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#1A1A1A] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins']"
                >
                  Sign In & Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              )}
              <Link
                href="/shop"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1A1A1A] transition-all duration-200 font-['Poppins']"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 