"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Calendar, Clock, User, ArrowRight, Search, Tag, Filter } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Create Stunning Rhinestone Designs: A Beginner's Guide",
    excerpt: "Learn the essential techniques and tools needed to create beautiful rhinestone designs that will make your projects sparkle and shine.",
    content: `
      <p>Discover the world of rhinestone crafting with our comprehensive beginner's guide. From choosing the right rhinestones to mastering application techniques, we'll walk you through everything you need to know to create stunning designs that will make your projects truly special.</p>
      <h2>Choosing Your Rhinestones</h2>
      <p>There are many types of rhinestones available, including hotfix, flatback, and more. Consider the following:</p>
      <ul>
        <li>Hotfix Rhinestones</li>
        <li>Flatback Rhinestones</li>
        <li>Specialty Shapes</li>
      </ul>
      <h2>Application Techniques</h2>
      <p>To apply rhinestones, you'll need the right tools and adhesives. Here are some tips:</p>
      <ol>
        <li>Plan your design on paper first.</li>
        <li>Use tweezers or a rhinestone applicator for precision.</li>
        <li>Apply heat or glue as needed for your rhinestone type.</li>
      </ol>
      <p>With practice, your rhinestone designs will become more intricate and dazzling!</p>
    `,
    author: "Sparkles Editorial",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Tutorials",
    tags: ["Beginner", "Rhinestones", "DIY", "Crafting"],
    image: "/api/placeholder/600/400",
    featured: true,
    slug: "how-to-create-stunning-rhinestone-designs"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Hotfix Rhinestones vs. Flatback Rhinestones",
    excerpt: "Understanding the differences between hotfix and flatback rhinestones will help you choose the perfect option for your next project.",
    content: "When it comes to rhinestone crafting, choosing between hotfix and flatback rhinestones can make all the difference in your final result. In this comprehensive guide, we'll explore the unique properties, applications, and best practices for each type.",
    author: "Sparkles Editorial",
    date: "2024-12-20",
    readTime: "6 min read",
    category: "Product Guide",
    tags: ["Hotfix", "Flatback", "Comparison", "Tips"],
    image: "/api/placeholder/600/400",
    featured: true,
    slug: "hotfix-vs-flatback-rhinestones-guide"
  },
  {
    id: 3,
    title: "10 Creative Ways to Use Rhinestones in Fashion Design",
    excerpt: "From statement pieces to subtle accents, discover innovative ways to incorporate rhinestones into your fashion designs.",
    content: "Rhinestones aren't just for evening wear anymore! Modern fashion designers are finding creative ways to incorporate these sparkling elements into everyday clothing and accessories. Explore these innovative techniques that will add glamour to any design.",
    author: "Sparkles Editorial",
    date: "2024-08-15",
    readTime: "10 min read",
    category: "Fashion",
    tags: ["Fashion", "Design", "Creative", "Trends"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "creative-rhinestone-fashion-design"
  },
  {
    id: 4,
    title: "DIY Rhinestone Phone Case: Step-by-Step Tutorial",
    excerpt: "Transform your plain phone case into a dazzling accessory with this easy-to-follow rhinestone tutorial.",
    content: "Personalize your phone case with beautiful rhinestone designs! This step-by-step tutorial will guide you through the process of creating a custom rhinestone phone case that reflects your unique style and personality.",
    author: "Sparkles Editorial",
    date: "2024-05-22",
    readTime: "12 min read",
    category: "Tutorials",
    tags: ["Phone Case", "DIY", "Tutorial", "Personalization"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "diy-rhinestone-phone-case-tutorial"
  },
  {
    id: 5,
    title: "The History of Rhinestones: From Bohemian Glass to Modern Sparkle",
    excerpt: "Explore the fascinating journey of rhinestones from their humble beginnings to becoming a staple in modern fashion and design.",
    content: "The story of rhinestones is as glittering as the stones themselves. From their origins in Bohemian glassmaking to their current status as fashion essentials, rhinestones have played a fascinating role in design history.",
    author: "Sparkles Editorial",
    date: "2023-11-08",
    readTime: "7 min read",
    category: "History",
    tags: ["History", "Culture", "Fashion History", "Bohemian"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "history-of-rhinestones"
  },
  {
    id: 6,
    title: "Essential Tools Every Rhinestone Crafter Needs",
    excerpt: "Build your rhinestone crafting toolkit with these essential tools that will make your projects easier and more professional.",
    content: "Having the right tools can make all the difference in your rhinestone crafting projects. From precision applicators to quality adhesives, discover the essential tools that every serious crafter should have in their collection.",
    author: "Sparkles Editorial",
    date: "2023-07-14",
    readTime: "9 min read",
    category: "Tools & Supplies",
    tags: ["Tools", "Supplies", "Equipment", "Professional"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "essential-rhinestone-tools"
  },
  {
    id: 7,
    title: "Rhinestone Trends for 2024: What's Hot in the Bling World",
    excerpt: "Stay ahead of the curve with the latest rhinestone trends and techniques that are dominating the crafting world this year.",
    content: "The world of rhinestone crafting is constantly evolving, with new trends and techniques emerging each year. Discover what's hot in 2024 and how you can incorporate these trends into your own projects.",
    author: "Sparkles Editorial",
    date: "2023-03-30",
    readTime: "5 min read",
    category: "Trends",
    tags: ["Trends", "2024", "Fashion", "Innovation"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "rhinestone-trends-2024"
  },
  {
    id: 8,
    title: "How to Care for Your Rhinestone Jewelry and Accessories",
    excerpt: "Learn the proper care and maintenance techniques to keep your rhinestone pieces looking their best for years to come.",
    content: "Proper care and maintenance are essential for preserving the beauty and longevity of your rhinestone jewelry and accessories. Follow these expert tips to ensure your sparkling pieces continue to shine.",
    author: "Sparkles Editorial",
    date: "2022-09-12",
    readTime: "6 min read",
    category: "Care & Maintenance",
    tags: ["Care", "Maintenance", "Jewelry", "Longevity"],
    image: "/api/placeholder/600/400",
    featured: false,
    slug: "caring-for-rhinestone-jewelry"
  }
]

const categories = [
  "All",
  "Tutorials",
  "Product Guide",
  "Fashion",
  "History",
  "Tools & Supplies",
  "Trends",
  "Care & Maintenance"
]

const popularTags = [
  "DIY",
  "Tutorial",
  "Fashion",
  "Rhinestones",
  "Crafting",
  "Tips",
  "Trends",
  "Beginner",
  "Professional"
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter posts based on category, search, and tags
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => post.tags.includes(tag))
    
    return matchesCategory && matchesSearch && matchesTags
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sparkles Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover tips, tutorials, and inspiration for all your rhinestone crafting projects. 
            From beginner guides to advanced techniques, we've got everything you need to make your projects shine.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
                <div className="grid gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="h-48 md:h-full bg-gradient-to-br from-[#F9CCE3]/20 to-purple-100 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Featured Image</span>
                          </div>
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="bg-[#F9CCE3] text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#F9CCE3] transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-[#F9CCE3] hover:text-[#F9CCE3]/80 transition-colors font-medium">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
              <div className="grid gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="h-48 md:h-full bg-gradient-to-br from-[#F9CCE3]/20 to-purple-100 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">Post Image</span>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="bg-[#F9CCE3] text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#F9CCE3] transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-[#F9CCE3] hover:text-[#F9CCE3]/80 transition-colors font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Posts</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CCE3] focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#F9CCE3] text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-[#F9CCE3] text-gray-900'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-[#F9CCE3] to-purple-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Get the latest rhinestone crafting tips and tutorials delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CCE3] focus:border-transparent"
                />
                <button className="w-full px-4 py-2 bg-[#F9CCE3] text-gray-900 rounded-lg hover:bg-[#F9CCE3]/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 