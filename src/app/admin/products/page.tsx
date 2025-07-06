"use client"

import { useState, useEffect } from 'react'
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  MoreHorizontal,
  ChevronDown,
  Sparkles
} from 'lucide-react'
import ProductForm from '@/components/admin/ProductForm'

interface Product {
  id: string
  name: string
  description: string
  price: number
  salePrice?: number
  sku: string
  category: string
  subcategory?: string
  tags: string[]
  images: string[]
  isActive: boolean
  inStock: boolean
  stockQuantity: number
  createdAt: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock data - replace with API call
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Rhinestone Denim Jacket',
        description: 'Beautiful bedazzled denim jacket with premium rhinestones',
        price: 245.00,
        salePrice: 199.00,
        sku: 'RDJ-001',
        category: 'Bedazzled Jackets',
        subcategory: 'Denim',
        tags: ['denim', 'jacket', 'rhinestones', 'bedazzled'],
        images: ['/product1.jpg'],
        isActive: true,
        inStock: true,
        stockQuantity: 15,
        createdAt: '2024-01-15'
      },
      {
        id: '2',
        name: 'Sparkle Silk Scarf',
        description: 'Elegant silk scarf with crystal rhinestone accents',
        price: 89.50,
        sku: 'SSS-001',
        category: 'Scarves & Accessories',
        subcategory: 'Silk',
        tags: ['silk', 'scarf', 'crystal', 'elegant'],
        images: ['/product2.jpg'],
        isActive: true,
        inStock: true,
        stockQuantity: 25,
        createdAt: '2024-01-20'
      },
      {
        id: '3',
        name: 'Crystal Kimono',
        description: 'Stunning kimono with intricate rhinestone patterns',
        price: 320.00,
        sku: 'CK-001',
        category: 'Bedazzled Jackets',
        subcategory: 'Kimonos',
        tags: ['kimono', 'crystal', 'intricate', 'patterns'],
        images: ['/product3.jpg'],
        isActive: true,
        inStock: false,
        stockQuantity: 0,
        createdAt: '2024-01-25'
      }
    ]
    
    setProducts(mockProducts)
    setIsLoading(false)
  }, [])

  const categories = [
    'all',
    'Bedazzled Jackets',
    'Scarves & Accessories',
    'Rhinestoning Supplies',
    'Limited Edition Bling Items',
    'Bedazzled Skirts'
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddProduct = () => {
    setEditingProduct(null)
    setShowForm(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleFormSubmit = async (formData: any) => {
    setIsSubmitting(true)
    
    try {
      if (editingProduct) {
        // Update existing product
        const updatedProduct = { ...editingProduct, ...formData }
        setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p))
      } else {
        // Create new product
        const newProduct = {
          id: Date.now().toString(),
          ...formData,
          createdAt: new Date().toISOString().split('T')[0]
        }
        setProducts([newProduct, ...products])
      }
      
      setShowForm(false)
      setEditingProduct(null)
    } catch (error) {
      console.error('Error saving product:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId))
    }
  }

  const getStatusBadge = (product: Product) => {
    if (!product.isActive) {
      return <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">Inactive</span>
    }
    if (!product.inStock) {
      return <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Out of Stock</span>
    }
    if (product.stockQuantity < 5) {
      return <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Low Stock</span>
    }
    return <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">In Stock</span>
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
            Products
          </h1>
          <p className="text-[#6B7280] font-['Poppins']">
            Manage your rhinestone product inventory
          </p>
        </div>
        <button 
          onClick={handleAddProduct}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins']"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-500">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Products</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-green-500">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Active Products</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{products.filter(p => p.isActive).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-yellow-500">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Low Stock</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{products.filter(p => p.stockQuantity < 5 && p.stockQuantity > 0).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-red-500">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Out of Stock</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{products.filter(p => p.stockQuantity === 0).length}</p>
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
                placeholder="Search products by name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-['Poppins']"
            >
              <Filter className="w-5 h-5 mr-2" />
              {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            
            {showFilters && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowFilters(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors font-['Poppins'] ${
                      selectedCategory === category ? 'bg-[#F9CCE3]/20 text-[#712F91]' : ''
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                          {product.name}
                        </div>
                        <div className="text-sm text-[#6B7280] font-['Poppins']">
                          {product.description.substring(0, 50)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {product.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                      ${product.price}
                    </div>
                    {product.salePrice && (
                      <div className="text-sm text-green-600 font-['Poppins']">
                        Sale: ${product.salePrice}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {product.stockQuantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(product)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-[#712F91] hover:text-[#712F91]/80 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditProduct(product)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-['Poppins']">No products found</p>
          </div>
        )}
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false)
            setEditingProduct(null)
          }}
          isLoading={isSubmitting}
        />
      )}
    </div>
  )
} 