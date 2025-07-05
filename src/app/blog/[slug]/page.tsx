"use client"

import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"

// Same mock data as blog page
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
    content: `
      <p>When it comes to rhinestone crafting, choosing between hotfix and flatback rhinestones can make all the difference in your final result. In this comprehensive guide, we'll explore the unique properties, applications, and best practices for each type.</p>
      
      <h2>What Are Hotfix Rhinestones?</h2>
      <p>Hotfix rhinestones are pre-glued rhinestones that can be applied using heat. They come with a heat-activated adhesive backing that melts when exposed to heat, creating a strong bond with your fabric or surface.</p>
      
      <h3>Advantages of Hotfix Rhinestones:</h3>
      <ul>
        <li>Quick and easy application</li>
        <li>No additional glue needed</li>
        <li>Perfect for fabric applications</li>
        <li>Professional finish</li>
      </ul>
      
      <h2>What Are Flatback Rhinestones?</h2>
      <p>Flatback rhinestones have a flat, smooth back surface and require separate adhesive for application. They are more versatile and can be used on various surfaces including fabric, wood, plastic, and more.</p>
      
      <h3>Advantages of Flatback Rhinestones:</h3>
      <ul>
        <li>More affordable</li>
        <li>Versatile applications</li>
        <li>Better for non-fabric surfaces</li>
        <li>Wide variety of sizes and colors</li>
      </ul>
      
      <h2>When to Use Each Type</h2>
      <p>Choose hotfix rhinestones when working with fabrics and you want a quick, professional application. Choose flatback rhinestones when working with multiple surfaces or when you need more control over the adhesive type.</p>
    `,
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

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[#F9CCE3] hover:text-[#F9CCE3]/80 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => router.push('/blog')}
          className="flex items-center gap-2 text-[#F9CCE3] hover:text-[#F9CCE3]/80 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
        <div className="mb-6">
          <span className="bg-[#F9CCE3] text-gray-900 px-3 py-1 rounded-full text-xs font-medium mr-2">{post.category}</span>
          <span className="text-gray-500 text-xs mr-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            {formatDate(post.date)}
          </span>
          <span className="text-gray-500 text-xs mr-2">
            <Clock className="inline w-4 h-4 mr-1" />
            {post.readTime}
          </span>
          <span className="text-gray-500 text-xs">
            <User className="inline w-4 h-4 mr-1" />
            {post.author}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
          ))}
        </div>
        <div className="prose prose-pink max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
      <Footer />
    </div>
  )
} 