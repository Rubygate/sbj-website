"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  address?: {
    street: string
    city: string
    province: string
    postalCode: string
    country: string
  }
  isAuthenticated: boolean
  registrationDate: string
  lastLogin: string
}

interface UserContextType {
  user: User | null
  login: (userData: User) => void
  logout: () => void
  isLoading: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing user session (e.g., from localStorage or cookies)
    const savedUser = localStorage.getItem('sbj_user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
      } catch (error) {
        console.error('Error parsing saved user data:', error)
        localStorage.removeItem('sbj_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = (userData: User) => {
    const userWithTimestamps = {
      ...userData,
      registrationDate: userData.registrationDate || new Date().toISOString(),
      lastLogin: new Date().toISOString()
    }
    setUser(userWithTimestamps)
    localStorage.setItem('sbj_user', JSON.stringify(userWithTimestamps))
  }

  const logout = () => {
    console.log('Logout called')
    setUser(null)
    localStorage.removeItem('sbj_user')
    sessionStorage.clear()
    // Clear any other potential storage
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
    console.log('User logged out, all storage cleared')
  }

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
} 