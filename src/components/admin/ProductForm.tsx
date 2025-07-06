"use client"

import { useState, useEffect } from 'react'
import { X, Plus, Upload, Sparkles } from 'lucide-react'

interface ProductFormData {
  name: string
  description: string
  price: string
  salePrice: string
  sku: string
  category: string
  subcategory: string
  tags: string[]
  images: string[]
  isActive: boolean
  inStock: boolean
  stockQuantity: string
  weight: string
  dimensions: string
}

interface ProductFormProps {
  product?: any
  onSubmit: (data: ProductFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

const categories = [
  'Custom Orders',
  'Rhinestones',
  'Iron-On Rhinestone Transfers',
  'Rhinestone Appliqués',
  'Cheer & Sports Blings',
  'Bedazzled Jackets & Kimonos',
  'Bedazzled Scarves & Headwear',
  'Bedazzled Skirts',
  'Rhinestoning Supplies',
  'DIY Bling Kits',
  'Rhinestone Wall Arts',
  'Limited Edition Bling Items'
]

const subcategories = {
  'Rhinestones': [
    'Hotfix Rhinestones',
    'Flatback Rhinestones',
    'Nail Art Rhinestones',
    'Rhinestone Beads',
    'Rhinestone Cabochons',
    'Rhinestone Brooches',
    'Rhinestone Buttons'
  ],
  'Custom Orders': [
    'Custom Templates',
    'Custom Iron-On Transfers',
    'Custom Logos & Branding',
    'Custom Initials',
    'Custom Numbers',
    'Custom Sports Blings',
    'Custom Cheer Bows & Blings',
    'Custom Sash'
  ],
  'Iron-On Rhinestone Transfers': [
    'Birthday Transfers',
    'Graduation Transfers',
    'Christmas Transfers',
    'Valentine\'s Day Transfers',
    'Halloween Transfers',
    'Easter Transfers',
    'New Year Transfers',
    'Bridal & Bachelorette',
    'Baby Shower',
    'Anniversary',
    'Retirement',
    'Family Reunion',
    'Girls\' Trip',
    'Quotes',
    'Popular Phrases',
    'Affirmations',
    'Sassy & Trendy Sayings',
    'Faith & Spiritual',
    'Business & Boss Babe',
    'Afrocentric',
    'African Print-Inspired',
    'Cultural Symbols',
    'Black History Themes',
    'Letters',
    'Numbers',
    'Icons & Symbols'
  ],
  'Rhinestone Appliqués': [
    'Iron-On Appliqués',
    'Sew-On Appliqués',
    'Stick-On Appliqués',
    'Rhinestone Ribbons',
    'Rhinestone Tassels'
  ],
  'Cheer & Sports Blings': [
    'Cheer Bows',
    'Cheer Belts',
    'Cheer Sashes',
    'Hairbands & Clips',
    'Team Name & Logo Transfers',
    'Player Name & Number Sets',
    'Sport Patches & Icons',
    'Fan Bows & Caps',
    'Sport Totes',
    'Sport Family & Fan Blings'
  ],
  'Bedazzled Jackets & Kimonos': [
    'Hip-Length',
    'Knee-Length',
    'Full-Length'
  ],
  'Bedazzled Scarves & Headwear': [
    'Scarves & Wraps',
    'Headbands',
    'Hair Bows, ties'
  ],
  'Bedazzled Skirts': [
    'Mini',
    'Knee-Length',
    'Midi',
    'Full-Length'
  ],
  'Rhinestoning Supplies': [
    'Starter Kits',
    'Tool Sets',
    'Custom Templates',
    'Reusable Templates'
  ],
  'DIY Bling Kits': [
    'Beginner Kits',
    'Advanced Kits',
    'Complete Sets',
    'Tool Kits'
  ],
  'Rhinestone Wall Arts': [
    'Wall Decorations',
    'Framed Art',
    'Hanging Pieces',
    'Custom Designs'
  ],
  'Limited Edition Bling Items': [
    'Seasonal',
    'Collaborations',
    'Custom Designs',
    'Exclusive Collections'
  ]
}

export default function ProductForm({ product, onSubmit, onCancel, isLoading = false }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
    salePrice: '',
    sku: '',
    category: '',
    subcategory: '',
    tags: [],
    images: [],
    isActive: true,
    inStock: true,
    stockQuantity: '0',
    weight: '',
    dimensions: ''
  })

  const [newTag, setNewTag] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Debug logging
  console.log('ProductForm - Categories available:', categories.length)
  console.log('ProductForm - Current category:', formData.category)
  console.log('ProductForm - Available subcategories for current category:', formData.category ? subcategories[formData.category as keyof typeof subcategories]?.length : 0)

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price?.toString() || '',
        salePrice: product.salePrice?.toString() || '',
        sku: product.sku || '',
        category: product.category || '',
        subcategory: product.subcategory || '',
        tags: product.tags || [],
        images: product.images || [],
        isActive: product.isActive !== undefined ? product.isActive : true,
        inStock: product.inStock !== undefined ? product.inStock : true,
        stockQuantity: product.stockQuantity?.toString() || '0',
        weight: product.weight?.toString() || '',
        dimensions: product.dimensions || ''
      })
    }
  }, [product])

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required'
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required'
    }

    if (!formData.sku.trim()) {
      newErrors.sku = 'SKU is required'
    }

    if (!formData.category) {
      newErrors.category = 'Category is required'
    }

    if (formData.salePrice && parseFloat(formData.salePrice) >= parseFloat(formData.price)) {
      newErrors.salePrice = 'Sale price must be less than regular price'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      })
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    })
  }

  const handleInputChange = (field: keyof ProductFormData, value: any) => {
    setFormData({
      ...formData,
      [field]: value
    })
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Sparkles className="w-6 h-6 text-[#712F91] mr-2" />
            <h2 className="text-xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
              {product ? 'Edit Product' : 'Add New Product'}
            </h2>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
                Basic Information
              </h3>

              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins'] ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 font-['Poppins']">{errors.name}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                  placeholder="Enter product description"
                />
              </div>

              {/* SKU */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  SKU *
                </label>
                <input
                  type="text"
                  value={formData.sku}
                  onChange={(e) => handleInputChange('sku', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins'] ${
                    errors.sku ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter SKU"
                />
                {errors.sku && (
                  <p className="mt-1 text-sm text-red-600 font-['Poppins']">{errors.sku}</p>
                )}
              </div>
            </div>

            {/* Pricing & Inventory */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
                Pricing & Inventory
              </h3>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Regular Price *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className={`w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins'] ${
                      errors.price ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0.00"
                  />
                </div>
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600 font-['Poppins']">{errors.price}</p>
                )}
              </div>

              {/* Sale Price */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Sale Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.salePrice}
                    onChange={(e) => handleInputChange('salePrice', e.target.value)}
                    className={`w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins'] ${
                      errors.salePrice ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0.00"
                  />
                </div>
                {errors.salePrice && (
                  <p className="mt-1 text-sm text-red-600 font-['Poppins']">{errors.salePrice}</p>
                )}
              </div>

              {/* Stock Quantity */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  value={formData.stockQuantity}
                  onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                  placeholder="0"
                  min="0"
                />
              </div>

              {/* Status Toggles */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                    Active Product
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => handleInputChange('isActive', e.target.checked)}
                    className="w-4 h-4 text-[#712F91] border-gray-300 rounded focus:ring-[#712F91]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                    In Stock
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) => handleInputChange('inStock', e.target.checked)}
                    className="w-4 h-4 text-[#712F91] border-gray-300 rounded focus:ring-[#712F91]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Categories
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => {
                    console.log('Category changed to:', e.target.value)
                    handleInputChange('category', e.target.value)
                    handleInputChange('subcategory', '')
                  }}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins'] cursor-pointer ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600 font-['Poppins']">{errors.category}</p>
                )}
              </div>

              {/* Subcategory */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Subcategory
                </label>
                <select
                  value={formData.subcategory}
                  onChange={(e) => {
                    console.log('Subcategory changed to:', e.target.value)
                    handleInputChange('subcategory', e.target.value)
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins'] cursor-pointer"
                  disabled={!formData.category}
                >
                  <option value="">Select subcategory</option>
                  {formData.category && subcategories[formData.category as keyof typeof subcategories]?.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Tags
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                  placeholder="Add a tag"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-[#712F91] text-white rounded-lg hover:bg-[#712F91]/90 transition-colors font-['Poppins']"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-[#F9CCE3]/20 text-[#712F91] rounded-full text-sm font-['Poppins']"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-[#712F91] hover:text-[#712F91]/80"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Additional Details
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                  placeholder="0.00"
                />
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2 font-['Poppins']">
                  Dimensions
                </label>
                <input
                  type="text"
                  value={formData.dimensions}
                  onChange={(e) => handleInputChange('dimensions', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                  placeholder="e.g., 12x8x2 inches"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-['Poppins']"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins'] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Saving...' : (product ? 'Update Product' : 'Create Product')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 