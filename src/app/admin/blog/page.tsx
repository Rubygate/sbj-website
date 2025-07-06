"use client"

import { useState, useEffect } from 'react'
import { 
  FileText, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  Sparkles
} from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  category: string
  tags: string[]
  status: 'Published' | 'Draft' | 'Scheduled'
  publishedAt?: string
  createdAt: string
  views: number
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')

  // Mock data
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'How to Choose the Perfect Rhinestone Size for Your Project',
        excerpt: 'Learn the essential tips for selecting the right rhinestone size for different types of projects and materials.',
        author: 'Sparkles Editorial',
        category: 'Tutorials',
        tags: ['rhinestones', 'tutorial', 'tips', 'size guide'],
        status: 'Published',
        publishedAt: '2024-01-20',
        createdAt: '2024-01-18',
        views: 1245
      },
      {
        id: '2',
        title: 'The Art of Rhinestone Application: Professional Techniques',
        excerpt: 'Master the professional techniques used by experts for flawless rhinestone application on various surfaces.',
        author: 'Sparkles Editorial',
        category: 'Techniques',
        tags: ['application', 'techniques', 'professional', 'tutorial'],
        status: 'Published',
        publishedAt: '2024-01-15',
        createdAt: '2024-01-12',
        views: 892
      },
      {
        id: '3',
        title: 'Trending Rhinestone Designs for 2024',
        excerpt: 'Discover the hottest rhinestone design trends that will dominate the fashion world in 2024.',
        author: 'Sparkles Editorial',
        category: 'Trends',
        tags: ['trends', '2024', 'fashion', 'design'],
        status: 'Draft',
        createdAt: '2024-01-25',
        views: 0
      }
    ]
    
    setPosts(mockPosts)
    setIsLoading(false)
  }, [])

  const statuses = ['Published', 'Draft', 'Scheduled']
  const categories = ['Tutorials', 'Techniques', 'Trends', 'News', 'Reviews']

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === '' || post.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: BlogPost['status']) => {
    const statusStyles = {
      Published: 'bg-green-100 text-green-800',
      Draft: 'bg-yellow-100 text-yellow-800',
      Scheduled: 'bg-blue-100 text-blue-800'
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
            Blog Posts
          </h1>
          <p className="text-[#6B7280] font-['Poppins']">
            Manage your blog content and articles
          </p>
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins']"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Post
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-500">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Posts</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{posts.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-green-500">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Published</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{posts.filter(p => p.status === 'Published').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-yellow-500">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Drafts</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{posts.filter(p => p.status === 'Draft').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-purple-500">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[#6B7280] font-['Poppins']">Total Views</p>
              <p className="text-2xl font-bold text-[#1A1A1A] font-['Playfair_Display']">{posts.reduce((sum, p) => sum + p.views, 0).toLocaleString()}</p>
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
                placeholder="Search posts by title or content..."
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
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-['Poppins']">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[#1A1A1A] font-['Poppins']">
                          {post.title}
                        </div>
                        <div className="text-sm text-[#6B7280] font-['Poppins']">
                          {post.excerpt.substring(0, 60)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {post.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {post.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(post.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {post.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280] font-['Poppins']">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Not published'}
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
    </div>
  )
} 