"use client"

import { useState, useEffect } from 'react'
import { 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Sparkles,
  BarChart3
} from 'lucide-react'

interface DashboardStats {
  totalProducts: number
  totalOrders: number
  totalCustomers: number
  totalRevenue: number
  recentOrders: any[]
  recentProducts: any[]
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    recentOrders: [],
    recentProducts: []
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock data for now
    setStats({
      totalProducts: 156,
      totalOrders: 89,
      totalCustomers: 234,
      totalRevenue: 12450.75,
      recentOrders: [
        { id: '1', orderNumber: 'SBJ-001', customer: 'Sarah Johnson', amount: 245.00, status: 'Processing' },
        { id: '2', orderNumber: 'SBJ-002', customer: 'Mike Chen', amount: 189.50, status: 'Shipped' },
        { id: '3', orderNumber: 'SBJ-003', customer: 'Emma Davis', amount: 320.00, status: 'Delivered' },
      ],
      recentProducts: [
        { id: '1', name: 'Rhinestone Jacket', category: 'Bedazzled Jackets', price: 245.00 },
        { id: '2', name: 'Sparkle Scarf', category: 'Scarves & Accessories', price: 89.50 },
        { id: '3', name: 'Crystal Kimono', category: 'Bedazzled Jackets', price: 320.00 },
      ]
    })
    setIsLoading(false)
  }, [])

  const statCards = [
    {
      name: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      change: '+12%',
      changeType: 'increase' as const,
      color: 'bg-blue-500'
    },
    {
      name: 'Total Orders',
      value: stats.totalOrders,
      icon: ShoppingCart,
      change: '+8%',
      changeType: 'increase' as const,
      color: 'bg-green-500'
    },
    {
      name: 'Total Customers',
      value: stats.totalCustomers,
      icon: Users,
      change: '+15%',
      changeType: 'increase' as const,
      color: 'bg-purple-500'
    },
    {
      name: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      change: '+23%',
      changeType: 'increase' as const,
      color: 'bg-yellow-500'
    }
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#712F91]"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
            Dashboard
          </h1>
          <p className="text-[#6B7280] font-['Poppins']">
            Welcome to your Sparkles by Junetrain admin panel
          </p>
        </div>
        <div className="flex items-center">
          <Sparkles className="w-8 h-8 text-[#712F91] mr-2" />
          <span className="text-sm text-[#6B7280] font-['Poppins']">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
                  {stat.value}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.changeType === 'increase' ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`ml-2 text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="ml-2 text-sm text-[#6B7280]">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Recent Orders
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {stats.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                      {order.orderNumber}
                    </p>
                    <p className="text-sm text-[#6B7280] font-['Poppins']">
                      {order.customer}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                      ${order.amount}
                    </p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 text-sm font-medium text-[#712F91] bg-[#F9CCE3]/20 rounded-lg hover:bg-[#F9CCE3]/30 transition-colors font-['Poppins']">
                View All Orders
              </button>
            </div>
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Recent Products
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {stats.recentProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                      {product.name}
                    </p>
                    <p className="text-sm text-[#6B7280] font-['Poppins']">
                      {product.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 text-sm font-medium text-[#712F91] bg-[#F9CCE3]/20 rounded-lg hover:bg-[#F9CCE3]/30 transition-colors font-['Poppins']">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 