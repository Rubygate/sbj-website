"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Sparkles } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/admin/dashboard')
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F9CCE3]/10 to-[#712F91]/10 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#F9CCE3]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#712F91]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#D6D6D6]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#F9CCE3]/30 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#712F91] mr-2" />
              <h1 className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
                Sparkles Admin
              </h1>
            </div>
            <p className="text-[#6B7280] font-['Poppins']">
              Sign in to manage your rhinestone business
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[#F9CCE3]/50 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                placeholder="admin@sparklesbyjunetrain.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-[#F9CCE3]/50 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] hover:text-[#712F91] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm font-['Poppins']">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold py-3 rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins'] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#1A1A1A] border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#6B7280] font-['Poppins']">
              Secure admin access for Sparkles by Junetrain
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#F9CCE3] to-[#712F91] rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#712F91] to-[#F9CCE3] rounded-full opacity-80 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#F9CCE3] rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/4 -right-2 w-3 h-3 bg-[#712F91] rounded-full opacity-60 animate-bounce animation-delay-500"></div>
      </div>
    </div>
  )
} 