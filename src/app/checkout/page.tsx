"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/UserContext'
import { AuthModal } from '@/components/AuthModal'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ShoppingBag, CreditCard, Truck, Shield, ArrowLeft } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { user, login } = useUser()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setIsAuthModalOpen(true)
    }
    setIsLoading(false)
  }, [user])

  const handleAuthSuccess = (userData: any) => {
    login(userData)
    setIsAuthModalOpen(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#712F91]"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display'] mb-4">
              Please sign in to continue
            </h1>
            <p className="text-[#6B7280] font-['Poppins'] mb-6">
              You need to be signed in to complete your purchase.
            </p>
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 font-['Poppins']"
            >
              Sign In
            </button>
          </div>
        </div>
        <Footer />
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => router.push('/shop')}
          onSuccess={handleAuthSuccess}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => router.push('/shop')}
            className="flex items-center text-[#712F91] hover:text-[#712F91]/80 font-['Poppins']"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-[#1A1A1A] font-['Playfair_Display'] mb-8">
                Checkout
              </h1>

              {/* Customer Info */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A1A1A] font-['Poppins'] mb-4">
                  Customer Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.firstName}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.lastName}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A1A1A] font-['Poppins'] mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      Province/State
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                      Country
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']">
                      <option>Canada</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1A1A1A] font-['Poppins'] mb-4">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border border-gray-300 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                      id="credit-card"
                      defaultChecked
                      className="mr-3"
                    />
                    <label htmlFor="credit-card" className="flex items-center font-['Poppins']">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center p-4 border border-gray-300 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                      id="paypal"
                      className="mr-3"
                    />
                    <label htmlFor="paypal" className="flex items-center font-['Poppins']">
                      <Shield className="w-5 h-5 mr-2" />
                      PayPal
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-[#1A1A1A] font-['Poppins'] mb-6">
                Order Summary
              </h2>

              {/* Mock Cart Items */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1A1A1A] font-['Poppins']">
                      Premium Rhinestone Kit
                    </h3>
                    <p className="text-sm text-[#6B7280] font-['Poppins']">
                      Size: Large | Color: Crystal
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">$49.99</p>
                    <p className="text-sm text-[#6B7280] font-['Poppins']">Qty: 1</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1A1A1A] font-['Poppins']">
                      Custom Design Template
                    </h3>
                    <p className="text-sm text-[#6B7280] font-['Poppins']">
                      Design: Custom Logo
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">$29.99</p>
                    <p className="text-sm text-[#6B7280] font-['Poppins']">Qty: 1</p>
                  </div>
                </div>
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between font-['Poppins']">
                  <span>Subtotal</span>
                  <span>$79.98</span>
                </div>
                <div className="flex justify-between font-['Poppins']">
                  <span>Shipping</span>
                  <span>$8.99</span>
                </div>
                <div className="flex justify-between font-['Poppins']">
                  <span>Tax</span>
                  <span>$4.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg font-['Poppins'] border-t border-gray-200 pt-2">
                  <span>Total</span>
                  <span>$92.97</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={() => alert('Order placed successfully! This would integrate with a payment processor.')}
                className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins']"
              >
                Place Order
              </button>

              {/* Security Notice */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center text-sm text-[#6B7280] font-['Poppins']">
                  <Shield className="w-4 h-4 mr-1" />
                  Secure checkout powered by Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 