"use client"

import { useState, useEffect } from 'react'
import { 
  Users, 
  Search, 
  Mail, 
  Phone,
  Sparkles
} from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  totalOrders: number
  totalSpent: number
  lastOrder: string
  joinedDate: string
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data
  useEffect(() => {
    const mockCustomers: Customer[] = [
      {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '+1 (555) 123-4567',
        totalOrders: 5,
        totalSpent: 1245.00,
        lastOrder: '2024-01-25',
        joinedDate: '2023-06-15'
      },
      {
        id: '2',
        name: 'Mike Chen',
        email: 'mike@example.com',
        phone: '+1 (555) 234-5678',
        totalOrders: 3,
        totalSpent: 567.50,
        lastOrder: '2024-01-24',
        joinedDate: '2023-08-22'
      },
      {
        id: '3',
        name: 'Emma Davis',
        email: 'emma@example.com',
        phone: '+1 (555) 345-6789',
        totalOrders: 8,
        totalSpent: 2340.00,
        lastOrder: '2024-01-23',
        joinedDate: '2023-05-10'
      }
    ]
    
    setCustomers(mockCustomers)
    setIsLoading(false)
  }, [])

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
            Customers
          </h1>
          <p className="text-[#6B7280] font-['Poppins']">
            Manage your customer database and relationships
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-500">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Customers</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{customers.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-green-500">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Active Customers</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{customers.filter(c => c.totalOrders > 0).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-purple-500">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">New This Month</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{customers.filter(c => new Date(c.joinedDate) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-yellow-500">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Revenue</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">${customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search customers by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Last Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                          {customer.name}
                        </div>
                        <div className="text-sm text-[#6B7280] font-['Poppins']">
                          ID: {customer.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-[#6B7280] font-['Poppins']">{customer.email}</span>
                    </div>
                    {customer.phone && (
                      <div className="flex items-center space-x-2 mt-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-[#6B7280] font-['Poppins']">{customer.phone}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {customer.totalOrders} orders
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                    ${customer.totalSpent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {new Date(customer.lastOrder).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {new Date(customer.joinedDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 