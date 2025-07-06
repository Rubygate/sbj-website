"use client"

import { useState, useEffect } from 'react'
import { 
  Users, 
  Search, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ShoppingBag,
  Eye,
  Edit,
  Trash2,
  Filter,
  Download,
  UserPlus,
  Sparkles
} from 'lucide-react'

interface Customer {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  address?: {
    street: string
    city: string
    province: string
    postalCode: string
    country: string
  }
  registrationDate: string
  lastLogin: string
  totalOrders: number
  totalSpent: number
  status: 'Active' | 'Inactive' | 'New'
  hasCheckedOut: boolean
  subscriptionStatus?: 'Active' | 'Paused' | 'Cancelled' | 'None'
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedHasCheckedOut, setSelectedHasCheckedOut] = useState('')

  // Mock customer data
  useEffect(() => {
    const mockCustomers: Customer[] = [
      {
        id: '1',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@example.com',
        phone: '+1 (555) 123-4567',
        address: {
          street: '123 Main Street',
          city: 'Toronto',
          province: 'ON',
          postalCode: 'M5V 2H1',
          country: 'Canada'
        },
        registrationDate: '2024-01-15',
        lastLogin: '2024-01-20',
        totalOrders: 3,
        totalSpent: 249.97,
        status: 'Active',
        hasCheckedOut: true,
        subscriptionStatus: 'Active'
      },
      {
        id: '2',
        firstName: 'Mike',
        lastName: 'Chen',
        email: 'mike.chen@example.com',
        phone: '+1 (555) 234-5678',
        address: {
          street: '456 Oak Avenue',
          city: 'Vancouver',
          province: 'BC',
          postalCode: 'V6B 1A1',
          country: 'Canada'
        },
        registrationDate: '2023-12-01',
        lastLogin: '2024-01-18',
        totalOrders: 1,
        totalSpent: 299.99,
        status: 'Active',
        hasCheckedOut: true,
        subscriptionStatus: 'Active'
      },
      {
        id: '3',
        firstName: 'Emma',
        lastName: 'Davis',
        email: 'emma.davis@example.com',
        phone: '+1 (555) 345-6789',
        address: {
          street: '789 Pine Road',
          city: 'Montreal',
          province: 'QC',
          postalCode: 'H2Y 1C6',
          country: 'Canada'
        },
        registrationDate: '2023-10-15',
        lastLogin: '2024-01-10',
        totalOrders: 0,
        totalSpent: 0,
        status: 'Inactive',
        hasCheckedOut: false,
        subscriptionStatus: 'Paused'
      },
      {
        id: '4',
        firstName: 'Alex',
        lastName: 'Thompson',
        email: 'alex.thompson@example.com',
        phone: '+1 (555) 456-7890',
        address: {
          street: '321 Elm Street',
          city: 'Calgary',
          province: 'AB',
          postalCode: 'T2P 1J9',
          country: 'Canada'
        },
        registrationDate: '2023-08-20',
        lastLogin: '2024-01-05',
        totalOrders: 2,
        totalSpent: 179.98,
        status: 'Active',
        hasCheckedOut: true,
        subscriptionStatus: 'Cancelled'
      },
      {
        id: '5',
        firstName: 'Jessica',
        lastName: 'Wilson',
        email: 'jessica.wilson@example.com',
        phone: '+1 (555) 567-8901',
        address: {
          street: '654 Maple Drive',
          city: 'Ottawa',
          province: 'ON',
          postalCode: 'K1P 1J1',
          country: 'Canada'
        },
        registrationDate: '2024-01-22',
        lastLogin: '2024-01-22',
        totalOrders: 0,
        totalSpent: 0,
        status: 'New',
        hasCheckedOut: false,
        subscriptionStatus: 'None'
      },
      {
        id: '6',
        firstName: 'David',
        lastName: 'Brown',
        email: 'david.brown@example.com',
        phone: '+1 (555) 678-9012',
        address: {
          street: '987 Cedar Lane',
          city: 'Edmonton',
          province: 'AB',
          postalCode: 'T5J 0R2',
          country: 'Canada'
        },
        registrationDate: '2023-11-10',
        lastLogin: '2024-01-15',
        totalOrders: 1,
        totalSpent: 89.99,
        status: 'Active',
        hasCheckedOut: true,
        subscriptionStatus: 'None'
      },
      {
        id: '7',
        firstName: 'Lisa',
        lastName: 'Garcia',
        email: 'lisa.garcia@example.com',
        phone: '+1 (555) 789-0123',
        address: {
          street: '147 Birch Boulevard',
          city: 'Winnipeg',
          province: 'MB',
          postalCode: 'R3C 0P8',
          country: 'Canada'
        },
        registrationDate: '2024-01-05',
        lastLogin: '2024-01-12',
        totalOrders: 0,
        totalSpent: 0,
        status: 'New',
        hasCheckedOut: false,
        subscriptionStatus: 'None'
      },
      {
        id: '8',
        firstName: 'Robert',
        lastName: 'Miller',
        email: 'robert.miller@example.com',
        phone: '+1 (555) 890-1234',
        address: {
          street: '258 Spruce Street',
          city: 'Quebec City',
          province: 'QC',
          postalCode: 'G1R 4P3',
          country: 'Canada'
        },
        registrationDate: '2023-09-25',
        lastLogin: '2024-01-08',
        totalOrders: 4,
        totalSpent: 459.96,
        status: 'Active',
        hasCheckedOut: true,
        subscriptionStatus: 'Active'
      }
    ]
    
    setCustomers(mockCustomers)
    setIsLoading(false)
  }, [])

  const statuses = ['Active', 'Inactive', 'New']
  const checkoutStatuses = ['All', 'Checked Out', 'Not Checked Out']

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = 
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone?.includes(searchTerm) ||
      customer.address?.city.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = selectedStatus === '' || customer.status === selectedStatus
    const matchesCheckout = 
      selectedHasCheckedOut === '' || 
      (selectedHasCheckedOut === 'Checked Out' && customer.hasCheckedOut) ||
      (selectedHasCheckedOut === 'Not Checked Out' && !customer.hasCheckedOut)
    
    return matchesSearch && matchesStatus && matchesCheckout
  })

  const getStatusBadge = (status: Customer['status']) => {
    const statusStyles = {
      Active: 'bg-green-100 text-green-800',
      Inactive: 'bg-gray-100 text-gray-800',
      New: 'bg-blue-100 text-blue-800'
    }
    
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
        {status}
      </span>
    )
  }

  const getSubscriptionBadge = (status?: Customer['subscriptionStatus']) => {
    if (!status || status === 'None') return null
    
    const statusStyles = {
      Active: 'bg-purple-100 text-purple-800',
      Paused: 'bg-yellow-100 text-yellow-800',
      Cancelled: 'bg-red-100 text-red-800'
    }
    
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
        {status}
      </span>
    )
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
            Customers
          </h1>
          <p className="text-[#6B7280] font-['Poppins']">
            Manage your customer database and track user activity
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#6B7280] hover:bg-gray-50 transition-colors font-['Poppins']">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins']">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Customer
          </button>
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
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Active Customers</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{customers.filter(c => c.status === 'Active').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-purple-500">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">New This Month</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{customers.filter(c => new Date(c.registrationDate).getMonth() === new Date().getMonth()).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-orange-500">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Checked Out</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{customers.filter(c => c.hasCheckedOut).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search customers by name, email, phone, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
            >
              <option value="">All Statuses</option>
              {statuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          {/* Checkout Status Filter */}
          <div className="relative">
            <select
              value={selectedHasCheckedOut}
              onChange={(e) => setSelectedHasCheckedOut(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
            >
              <option value="">All Customers</option>
              {checkoutStatuses.slice(1).map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
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
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Last Activity
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Actions
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
                          {customer.firstName} {customer.lastName}
                        </div>
                        <div className="text-sm text-[#6B7280] font-['Poppins']">
                          ID: {customer.id}
                        </div>
                        <div className="text-xs text-[#6B7280] font-['Poppins']">
                          Joined: {new Date(customer.registrationDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#1A1A1A] font-['Poppins']">
                      <div className="flex items-center mb-1">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        {customer.email}
                      </div>
                      {customer.phone && (
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-400" />
                          {customer.phone}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {customer.address ? (
                      <div className="text-sm text-[#6B7280] font-['Poppins']">
                        <div className="flex items-start mb-1">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400 mt-0.5" />
                          <div>
                            <div>{customer.address.street}</div>
                            <div>{customer.address.city}, {customer.address.province}</div>
                            <div>{customer.address.postalCode}</div>
                            <div>{customer.address.country}</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400 font-['Poppins']">No address</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      {getStatusBadge(customer.status)}
                      {getSubscriptionBadge(customer.subscriptionStatus)}
                      {customer.hasCheckedOut ? (
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Checked Out
                        </span>
                      ) : (
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                          No Checkout
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    <div>
                      <div className="font-medium text-[#1A1A1A]">{customer.totalOrders} orders</div>
                      <div>${customer.totalSpent.toFixed(2)} spent</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    <div>
                      <div>Last login:</div>
                      <div className="font-medium text-[#1A1A1A]">
                        {new Date(customer.lastLogin).toLocaleDateString()}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-[#712F91] hover:text-[#712F91]/80">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="text-center text-sm text-[#6B7280] font-['Poppins']">
        Showing {filteredCustomers.length} of {customers.length} customers
      </div>
    </div>
  )
} 