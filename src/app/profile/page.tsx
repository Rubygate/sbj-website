"use client"

import { useUser } from "@/contexts/UserContext"
import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { User, Package, Settings, Heart, MapPin, Phone, Mail, Calendar } from "lucide-react"

export default function ProfilePage() {
  const { user } = useUser()
  const [activeTab, setActiveTab] = useState('profile')

  // Mock orders data
  const mockOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 89.99,
      items: [
        { name: "Bedazzled Denim Jacket", quantity: 1, price: 89.99 }
      ]
    },
    {
      id: "ORD-002", 
      date: "2024-01-10",
      status: "Shipped",
      total: 156.50,
      items: [
        { name: "Rhinestone Kimono", quantity: 1, price: 89.99 },
        { name: "Sparkle Scarf", quantity: 1, price: 66.51 }
      ]
    },
    {
      id: "ORD-003",
      date: "2024-01-05", 
      status: "Processing",
      total: 45.00,
      items: [
        { name: "Rhinestone Appliqués Pack", quantity: 1, price: 45.00 }
      ]
    }
  ]

  // Mock wishlist data
  const mockWishlist = [
    { id: 1, name: "Limited Edition Crystal Jacket", price: 129.99, image: "/api/placeholder/150/150" },
    { id: 2, name: "Holographic Rhinestone Set", price: 78.50, image: "/api/placeholder/150/150" }
  ]

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to view your profile</h1>
            <p className="text-gray-600">You need to be logged in to access this page.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Logout handler
  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium shadow"
          >
            Logout
          </button>
        </div>
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">
                Member since {new Date(user.registrationDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <User className="w-4 h-4 inline mr-2" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'orders'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Package className="w-4 h-4 inline mr-2" />
                Orders
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'wishlist'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Heart className="w-4 h-4 inline mr-2" />
                Wishlist
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Settings
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <p className="mt-1 text-sm text-gray-900">{user.firstName} {user.lastName}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                    </div>
                    
                    {user.phone && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <p className="mt-1 text-sm text-gray-900">{user.phone}</p>
                      </div>
                    )}
                  </div>
                  
                  {user.address && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <div className="mt-1 text-sm text-gray-900">
                          <p>{user.address.street}</p>
                          <p>{user.address.city}, {user.address.province} {user.address.postalCode}</p>
                          <p>{user.address.country}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Order History</h2>
                
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">Order {order.id}</h3>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${order.total.toFixed(2)}</p>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.name} x{item.quantity}</span>
                            <span className="text-gray-900">${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">My Wishlist</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockWishlist.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="w-full h-32 bg-gray-200 rounded-md mb-3"></div>
                      <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-lg font-semibold text-pink-600 mb-3">${item.price.toFixed(2)}</p>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-pink-600 text-white py-2 px-3 rounded-md text-sm hover:bg-pink-700 transition-colors">
                          Add to Cart
                        </button>
                        <button className="px-3 py-2 text-gray-500 hover:text-red-600 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Password</h3>
                    <p className="text-sm text-gray-600 mb-3">Change your account password</p>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                      Change Password
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Email Preferences</h3>
                    <p className="text-sm text-gray-600 mb-3">Manage your email notifications</p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Order updates</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">New product announcements</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
                        <span className="ml-2 text-sm text-gray-700">Promotional offers</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Account Deletion</h3>
                    <p className="text-sm text-gray-600 mb-3">Permanently delete your account and all associated data</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 