"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Country, CountryInfo, getCurrentCountry, setCountry, getCountryInfo } from '@/lib/countryDetection'

interface CountryContextType {
  country: Country
  countryInfo: CountryInfo
  setCountry: (country: Country) => void
  isLoading: boolean
}

const CountryContext = createContext<CountryContextType | undefined>(undefined)

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<Country>('US')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeCountry = async () => {
      try {
        const detectedCountry = await getCurrentCountry()
        setCountryState(detectedCountry)
      } catch (error) {
        console.warn('Failed to initialize country:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initializeCountry()
  }, [])

  const handleSetCountry = (newCountry: Country) => {
    setCountryState(newCountry)
    setCountry(newCountry)
  }

  const value: CountryContextType = {
    country,
    countryInfo: getCountryInfo(country),
    setCountry: handleSetCountry,
    isLoading
  }

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  )
}

export function useCountry() {
  const context = useContext(CountryContext)
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider')
  }
  return context
} 