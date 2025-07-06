"use client"

import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Package,
  Sparkles
} from 'lucide-react'

interface AnalyticsData {
  totalRevenue: number
  totalOrders: number
  totalCustomers: number
  totalProducts: number
  revenueGrowth: number
  orderGrowth: number
  customerGrowth: number
  topProducts: Array<{name: string, sales: number, revenue: number}>
  recentSales: Array<{id: string, customer: string, product: string, amount: number, date: string}>
  monthlyRevenue: Array<{month: string, revenue: number}>
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalProducts: 0,
    revenueGrowth: 0,
    orderGrowth: 0,
    customerGrowth: 0,
    topProducts: [],
    recentSales: [],
    monthlyRevenue: []
  })
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  useEffect(() => {
    const mockAnalytics: AnalyticsData = {
      totalRevenue: 12450.75,
      totalOrders: 89,
      totalCustomers: 234,
      totalProducts: 156,
      revenueGrowth: 23.5,
      orderGrowth: 12.8,
      customerGrowth: 15.2,
      topProducts: [
        { name: 'Premium Rhinestone Pack - 2mm', sales: 45, revenue: 899.55 },
        { name: 'Custom Rhinestone Denim Jacket', sales: 12, revenue: 2940.00 },
        { name: 'Iron-On Rhinestone Transfer - Floral', sales: 28, revenue: 1260.00 },
        { name: 'Rhinestone Appliqué - Butterfly', sales: 32, revenue: 960.00 },
        { name: 'Cheer Bling Kit - Team Spirit', sales: 18, revenue: 540.00 }
      ],
      recentSales: [
        { id: '1', customer: 'Sarah Johnson', product: 'Custom Rhinestone Denim Jacket', amount: 245.00, date: '2024-01-25' },
        { id: '2', customer: 'Mike Chen', product: 'Premium Rhinestone Pack - 2mm', amount: 19.99, date: '2024-01-24' },
        { id: '3', customer: 'Emma Davis', product: 'Iron-On Rhinestone Transfer - Floral', amount: 45.00, date: '2024-01-23' },
        { id: '4', customer: 'Alex Thompson', product: 'Rhinestone Appliqué - Butterfly', amount: 30.00, date: '2024-01-22' },
        { id: '5', customer: 'Lisa Wang', product: 'Cheer Bling Kit - Team Spirit', amount: 30.00, date: '2024-01-21' }
      ],
      monthlyRevenue: [
        { month: 'Jan', revenue: 12450.75 },
        { month: 'Dec', revenue: 11890.25 },
        { month: 'Nov', revenue: 10234.50 },
        { month: 'Oct', revenue: 9876.30 },
        { month: 'Sep', revenue: 11234.80 },
        { month: 'Aug', revenue: 10567.90 }
      ]
    }
    
    setAnalytics(mockAnalytics)
    setIsLoading(false)
  }, [])

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 ? (
      <TrendingUp className="w-4 h-4 text-green-500" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-500" />
    )
  }

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600'
  }

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
            Analytics
          </h1>
          <p className="text-[#6B7280] font-['Poppins']">
            Track your business performance and insights
          </p>
        </div>
        <div className="flex items-center">
          <Sparkles className="w-8 h-8 text-[#712F91] mr-2" />
          <span className="text-sm text-[#6B7280] font-['Poppins']">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-green-500">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Revenue</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
                ${analytics.totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {getGrowthIcon(analytics.revenueGrowth)}
            <span className={`ml-2 text-sm font-medium ${getGrowthColor(analytics.revenueGrowth)}`}>
              {analytics.revenueGrowth >= 0 ? '+' : ''}{analytics.revenueGrowth}%
            </span>
            <span className="ml-2 text-sm text-[#6B7280]">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-500">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Orders</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
                {analytics.totalOrders}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {getGrowthIcon(analytics.orderGrowth)}
            <span className={`ml-2 text-sm font-medium ${getGrowthColor(analytics.orderGrowth)}`}>
              {analytics.orderGrowth >= 0 ? '+' : ''}{analytics.orderGrowth}%
            </span>
            <span className="ml-2 text-sm text-[#6B7280]">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-purple-500">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Customers</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
                {analytics.totalCustomers}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {getGrowthIcon(analytics.customerGrowth)}
            <span className={`ml-2 text-sm font-medium ${getGrowthColor(analytics.customerGrowth)}`}>
              {analytics.customerGrowth >= 0 ? '+' : ''}{analytics.customerGrowth}%
            </span>
            <span className="ml-2 text-sm text-[#6B7280]">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-yellow-500">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Products</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
                {analytics.totalProducts}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-[#6B7280]">Active inventory</span>
          </div>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Top Products
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analytics.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#712F91] text-white rounded-full flex items-center justify-center text-sm font-bold font-['Poppins']">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                        {product.name}
                      </p>
                      <p className="text-sm text-[#6B7280] font-['Poppins']">
                        {product.sales} sales
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                      ${product.revenue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Recent Sales
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analytics.recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                      {sale.customer}
                    </p>
                    <p className="text-sm text-[#6B7280] font-['Poppins']">
                      {sale.product}
                    </p>
                    <p className="text-xs text-[#6B7280] font-['Poppins']">
                      {new Date(sale.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1A1A1A] font-['Poppins']">
                      ${sale.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Revenue Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
            Monthly Revenue Trend
          </h3>
        </div>
        <div className="p-6">
          <div className="flex items-end justify-between h-64 space-x-2">
                         {analytics.monthlyRevenue.map((month) => {
              const maxRevenue = Math.max(...analytics.monthlyRevenue.map(m => m.revenue))
              const height = (month.revenue / maxRevenue) * 100
              return (
                <div key={month.month} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-gradient-to-t from-[#712F91] to-[#F9CCE3] rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                      ${month.revenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-[#6B7280] font-['Poppins']">
                      {month.month}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
} 