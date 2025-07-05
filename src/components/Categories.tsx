import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Necklaces",
    description: "Elegant necklaces for every occasion",
    image: "/api/placeholder/400/300",
    productCount: 24,
    href: "/shop/necklaces",
  },
  {
    id: 2,
    name: "Earrings",
    description: "Beautiful earrings to frame your face",
    image: "/api/placeholder/400/300",
    productCount: 18,
    href: "/shop/earrings",
  },
  {
    id: 3,
    name: "Bracelets",
    description: "Delicate bracelets for your wrist",
    image: "/api/placeholder/400/300",
    productCount: 15,
    href: "/shop/bracelets",
  },
  {
    id: 4,
    name: "Rings",
    description: "Stunning rings for your fingers",
    image: "/api/placeholder/400/300",
    productCount: 12,
    href: "/shop/rings",
  },
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed to complement your unique style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-100 to-purple-100">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Category Image</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
              </div>

              {/* Category Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {category.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all duration-200" />
                </div>
                
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                
                <span className="text-sm text-gray-500">
                  {category.productCount} products
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <Link
            href="/collections"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            View All Collections
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 