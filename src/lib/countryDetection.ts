export type Country = 'US' | 'CA'

export interface CountryInfo {
  code: Country
  name: string
  currency: string
  currencySymbol: string
  phoneCode: string
  shippingInfo: string
  contactEmail: string
}

export const COUNTRIES: Record<Country, CountryInfo> = {
  US: {
    code: 'US',
    name: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    phoneCode: '+1',
    shippingInfo: 'Free shipping on orders over $50',
    contactEmail: 'hello@sparklesbyjunetrain.com'
  },
  CA: {
    code: 'CA',
    name: 'Canada',
    currency: 'CAD',
    currencySymbol: 'C$',
    phoneCode: '+1',
    shippingInfo: 'Free shipping on orders over $65 CAD',
    contactEmail: 'hello@sparklesbyjunetrain.com'
  }
}

export const DEFAULT_COUNTRY: Country = 'US'

// Detect country from IP address
export async function detectCountry(): Promise<Country> {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    const countryCode = data.country_code
    
    if (countryCode === 'US' || countryCode === 'CA') {
      return countryCode as Country
    }
    
    return DEFAULT_COUNTRY
  } catch (error) {
    console.warn('Failed to detect country:', error)
    return DEFAULT_COUNTRY
  }
}

// Get country from localStorage or detect
export async function getCurrentCountry(): Promise<Country> {
  if (typeof window === 'undefined') return DEFAULT_COUNTRY
  
  const stored = localStorage.getItem('selectedCountry') as Country
  if (stored && (stored === 'US' || stored === 'CA')) {
    return stored
  }
  
  const detected = await detectCountry()
  localStorage.setItem('selectedCountry', detected)
  return detected
}

// Set country preference
export function setCountry(country: Country): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('selectedCountry', country)
}

// Get country info
export function getCountryInfo(country: Country): CountryInfo {
  return COUNTRIES[country]
} 