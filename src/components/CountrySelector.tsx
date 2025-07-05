"use client"

import { useState } from 'react'
import { useCountry } from '@/contexts/CountryContext'
import { COUNTRIES } from '@/lib/countryDetection'
import { ChevronDown, Globe } from 'lucide-react'

export function CountrySelector() {
  const { country, setCountry, isLoading } = useCountry()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-white/70">
        <Globe className="w-4 h-4" />
        <span className="text-sm">Loading...</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-[#F9CCE3] transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-['Poppins']">{COUNTRIES[country].name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[140px] z-50">
          {Object.values(COUNTRIES).map((countryInfo) => (
            <button
              key={countryInfo.code}
              onClick={() => {
                setCountry(countryInfo.code)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm font-['Poppins'] hover:bg-gray-50 transition-colors ${
                country === countryInfo.code 
                  ? 'text-[#712F91] bg-[#F9CCE3]/10' 
                  : 'text-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{countryInfo.name}</span>
                <span className="text-xs text-gray-500">{countryInfo.currencySymbol}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 