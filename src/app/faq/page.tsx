"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ChevronDown, ChevronRight, Search } from "lucide-react"
import { useState } from "react"

// FAQ data organized by categories
const faqData = [
  {
    category: "Product Information",
    questions: [
      {
        question: "What's the difference between hotfix and flatback rhinestones?",
        answer: "Hotfix rhinestones come with a heat-activated adhesive backing and are perfect for fabric applications. They're quick to apply and provide a professional finish. Flatback rhinestones have a smooth back and require separate adhesive, making them more versatile for various surfaces like wood, plastic, and fabric."
      },
      {
        question: "What sizes of rhinestones do you offer?",
        answer: "We offer rhinestones in various sizes from SS3 (1.3-1.4mm) to SS30 (6.3-6.5mm), plus mixed size packs. Our most popular sizes are SS10 (2.7-2.9mm) and SS16 (3.8-4.0mm) for general crafting projects."
      },
      {
        question: "Do you offer custom rhinestone designs?",
        answer: "Yes! We specialize in custom rhinestone designs for logos, names, numbers, and special occasions. Our custom services include iron-on transfers, appliqués, and personalized templates. Contact us for a quote on your custom project."
      },
      {
        question: "What colors are available for rhinestones?",
        answer: "We offer a wide range of colors including crystal & neutrals, pink, red, gold, green, blue, purple, orange, brown, AB colors, metallics, neon shades, glow-in-the-dark, and holographic options. We also have mixed color collections for variety."
      }
    ]
  },
  {
    category: "Ordering & Payment",
    questions: [
      {
        question: "How do I place a custom order?",
        answer: "To place a custom order, contact us through our website or email with your design requirements. Include details like size, colors, quantity, and any specific preferences. We'll provide a quote and timeline for your project."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For custom orders, we may require a deposit before starting work."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "Orders can be modified or cancelled within 24 hours of placement, as long as production hasn't begun. Custom orders may have different cancellation policies depending on the stage of completion."
      },
      {
        question: "Do you offer bulk discounts?",
        answer: "Yes! We offer quantity discounts for bulk orders. The more you order, the better the discount. Contact us for specific pricing on large quantities."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping within Canada takes 3-5 business days. Express shipping is available for 1-2 business days. International shipping times vary by location. Custom orders may have longer processing times."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Contact us for specific shipping information to your country."
      },
      {
        question: "How much does shipping cost?",
        answer: "Shipping costs depend on your location and order size. We offer free shipping on orders over $100 within Canada. International shipping rates are calculated at checkout."
      },
      {
        question: "Can I track my order?",
        answer: "Yes! You'll receive a tracking number via email once your order ships. You can track your package through our website or the courier's tracking system."
      }
    ]
  },
  {
    category: "Rhinestone Crafting Tips",
    questions: [
      {
        question: "What tools do I need to get started with rhinestone crafting?",
        answer: "Essential tools include rhinestone applicator or tweezers, adhesive (for flatback rhinestones), heat source (for hotfix rhinestones), design template, and a clean work surface. We offer starter kits that include all the basics."
      },
      {
        question: "How do I apply hotfix rhinestones?",
        answer: "For hotfix rhinestones, use a heat source like an iron or heat press. Place the rhinestone on your surface, apply heat for 10-15 seconds, then let it cool. Always test on a scrap piece first."
      },
      {
        question: "What's the best adhesive for flatback rhinestones?",
        answer: "We recommend E6000 or Gem-Tac for fabric applications, and super glue or epoxy for hard surfaces. Always test the adhesive on a small area first to ensure compatibility."
      },
      {
        question: "How do I care for rhinestone jewelry and accessories?",
        answer: "Clean gently with a soft cloth and mild soap. Avoid harsh chemicals, ultrasonic cleaners, and excessive heat. Store in a cool, dry place to prevent damage to the adhesive."
      }
    ]
  },
  {
    category: "Returns & Warranty",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days for unused items in original packaging. Custom orders are non-refundable unless there's a defect. Shipping costs for returns are the responsibility of the customer."
      },
      {
        question: "Do you offer warranties on your products?",
        answer: "Our rhinestones come with a quality guarantee. If you receive defective products, we'll replace them at no cost. Custom work includes a satisfaction guarantee."
      },
      {
        question: "Can I get a refund for custom orders?",
        answer: "Custom orders are non-refundable once production begins, as they're made specifically for you. We work closely with customers to ensure satisfaction before starting custom work."
      }
    ]
  },
  {
    category: "Business & Wholesale",
    questions: [
      {
        question: "Do you offer wholesale pricing?",
        answer: "Yes! We offer wholesale pricing for businesses, craft stores, and bulk orders. Contact us with your business details and requirements for wholesale pricing information."
      },
      {
        question: "Can you create custom designs for my business?",
        answer: "Absolutely! We specialize in custom business branding with rhinestones. We can create logos, company names, and branded designs for uniforms, promotional items, and more."
      },
      {
        question: "Do you offer rush orders for businesses?",
        answer: "Yes, we offer rush order services for businesses with urgent deadlines. Rush fees apply and availability depends on current workload. Contact us for rush order pricing."
      },
      {
        question: "Can you help with large event orders?",
        answer: "We love helping with large events! Whether it's team uniforms, event merchandise, or special occasion items, we can handle large orders with proper planning. Contact us well in advance for large event orders."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])

  // Filter FAQ data based on search query
  const filteredFAQData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(q => q !== questionId)
        : [...prev, questionId]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our rhinestone products, custom orders and shipping.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9CCE3] focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {filteredFAQData.map((category) => (
            <div key={category.category} className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-semibold text-gray-900">{category.category}</h2>
                {expandedCategories.includes(category.category) ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Category Questions */}
              {expandedCategories.includes(category.category) && (
                <div className="border-t border-gray-200">
                  {category.questions.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => toggleQuestion(`${category.category}-${index}`)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                        {expandedQuestions.includes(`${category.category}-${index}`) ? (
                          <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {expandedQuestions.includes(`${category.category}-${index}`) && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#F9CCE3] to-purple-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help!
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-transparent hover:border-[#F9CCE3]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 