"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { useCountry } from "@/contexts/CountryContext"

export function Footer() {
  const { countryInfo } = useCountry()
  
  return (
    <footer className="bg-gradient-to-br from-[#1A1A1A] via-[#2A1A2A] to-[#1A1A1A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/Sparkles3.svg" alt="Sparkles by Junetrain logo" width={200} height={60} priority />
            </Link>
            <p className="text-[#D6D6D6] text-sm font-['Poppins']">
              Blings make it all better. Crafted with care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="mailto:hello@sparklesbyjunetrain.com" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-['Playfair_Display']">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Shop
                </Link>
              </li>
              <li>
                <a href="#" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Amazon Store
                </a>
              </li>
              <li>
                <Link href="/about" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Order Custom Design
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-['Playfair_Display']">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=custom" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Custom Blinging Solutions
                </Link>
              </li>
              <li>
                <Link href="/shop?category=rhinestones" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Rhinestones
                </Link>
              </li>
              <li>
                <Link href="/shop?category=cheer" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Cheer & Sports Blings
                </Link>
              </li>
              <li>
                <Link href="/shop?category=transfers" className="text-[#D6D6D6] hover:text-[#F9CCE3] transition-colors font-['Poppins']">
                  Transfers & Appliqués
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-['Playfair_Display']">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[#D6D6D6]">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-['Poppins']">{countryInfo.contactEmail}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#D6D6D6]">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-['Poppins']">{countryInfo.phoneCode} (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2 text-[#D6D6D6]">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm font-['Poppins']">
                  Made in Canada<br />
                  {countryInfo.shippingInfo}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#D6D6D6] text-sm font-['Poppins']">
            © 2025 Sparkles by Junetrain. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-[#D6D6D6] hover:text-[#F9CCE3] text-sm transition-colors font-['Poppins']">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#D6D6D6] hover:text-[#F9CCE3] text-sm transition-colors font-['Poppins']">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 