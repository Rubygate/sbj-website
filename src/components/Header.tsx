"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Menu, X, Search, User } from "lucide-react"

import { CountrySelector } from "./CountrySelector"
import { useUser } from "@/contexts/UserContext"
import { AuthModal } from "./AuthModal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, login, logout } = useUser()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#D6D6D6]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/Sparkles3.svg" alt="Sparkles by Junetrain logo" width={120} height={36} className="w-40 sm:w-48 lg:w-56" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors duration-200 font-medium text-sm px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <CountrySelector />
            <button className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-[#D6D6D6] text-sm">
                  Hi, {user.firstName}
                </div>
                <Link href="/profile" className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors">
                  <User className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors"
              >
                <User className="w-5 h-5" />
              </button>
            )}
            <Link href="/cart" className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#F9CCE3] text-[#1A1A1A] text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#D6D6D6]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#D6D6D6]/20 bg-[#1A1A1A]/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-[#D6D6D6] hover:text-[#F9CCE3] hover:bg-[#F9CCE3]/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-4 py-2">
                <button className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3]">
                  <Search className="w-5 h-5" />
                </button>
                {user ? (
                  <>
                    <div className="text-[#D6D6D6] text-sm">
                      Hi, {user.firstName}
                    </div>
                    <Link href="/profile" className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3]">
                      <User className="w-5 h-5" />
                    </Link>
                  </>
                ) : (
                  <button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3]"
                  >
                    <User className="w-5 h-5" />
                  </button>
                )}
                <Link href="/cart" className="p-2 text-[#D6D6D6] hover:text-[#F9CCE3] relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-[#F9CCE3] text-[#1A1A1A] text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    0
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        )}

        {/* Auth Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onSuccess={login}
        />
      </div>
    </header>
  )
} 