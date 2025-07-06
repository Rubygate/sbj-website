"use client"

import { useState } from 'react'
import { 
  Store, 
  Mail, 
  Palette,
  Save
} from 'lucide-react'

interface SettingsData {
  store: {
    name: string
    description: string
    email: string
    phone: string
    address: string
  }
  notifications: {
    emailNotifications: boolean
    orderNotifications: boolean
    inventoryAlerts: boolean
    marketingEmails: boolean
  }
  appearance: {
    theme: 'light' | 'dark'
    primaryColor: string
    accentColor: string
  }
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsData>({
    store: {
      name: 'Sparkles by Junetrain',
      description: 'Premium rhinestone supplies and custom bedazzled clothing',
      email: 'info@sparklesbyjunetrain.com',
      phone: '+1 (555) 123-4567',
      address: '123 Sparkle Street, Toronto, ON, Canada'
    },
    notifications: {
      emailNotifications: true,
      orderNotifications: true,
      inventoryAlerts: true,
      marketingEmails: false
    },
    appearance: {
      theme: 'light',
      primaryColor: '#712F91',
      accentColor: '#F9CCE3'
    }
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    // Show success message
    alert('Settings saved successfully!')
  }

  const updateStoreSettings = (field: keyof SettingsData['store'], value: string) => {
    setSettings(prev => ({
      ...prev,
      store: {
        ...prev.store,
        [field]: value
      }
    }))
  }

  const updateNotificationSettings = (field: keyof SettingsData['notifications'], value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value
      }
    }))
  }

  const updateAppearanceSettings = (field: keyof SettingsData['appearance'], value: string) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [field]: value
      }
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A] font-['Playfair_Display']">
            Settings
          </h1>
          <p className="text-[#6B7280] font-['Poppins']">
            Manage your store settings and preferences
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-[#F9CCE3] to-[#712F91] text-[#1A1A1A] font-semibold rounded-lg hover:from-[#F9CCE3]/90 hover:to-[#712F91]/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Poppins'] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaving ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          ) : (
            <Save className="w-5 h-5 mr-2" />
          )}
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {/* Store Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <Store className="w-6 h-6 text-[#712F91] mr-3" />
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Store Information
            </h3>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
                Store Name
              </label>
              <input
                type="text"
                value={settings.store.name}
                onChange={(e) => updateStoreSettings('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={settings.store.email}
                onChange={(e) => updateStoreSettings('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={settings.store.phone}
                onChange={(e) => updateStoreSettings('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
                Address
              </label>
              <input
                type="text"
                value={settings.store.address}
                onChange={(e) => updateStoreSettings('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
              Store Description
            </label>
            <textarea
              value={settings.store.description}
              onChange={(e) => updateStoreSettings('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-[#712F91] mr-3" />
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Notification Settings
            </h3>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#1A1A1A] font-['Poppins']">Email Notifications</p>
              <p className="text-sm text-[#6B7280] font-['Poppins']">Receive notifications via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.emailNotifications}
                onChange={(e) => updateNotificationSettings('emailNotifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#712F91]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#712F91]"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#1A1A1A] font-['Poppins']">Order Notifications</p>
              <p className="text-sm text-[#6B7280] font-['Poppins']">Get notified when new orders are placed</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.orderNotifications}
                onChange={(e) => updateNotificationSettings('orderNotifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#712F91]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#712F91]"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#1A1A1A] font-['Poppins']">Inventory Alerts</p>
              <p className="text-sm text-[#6B7280] font-['Poppins']">Alert when products are running low</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.inventoryAlerts}
                onChange={(e) => updateNotificationSettings('inventoryAlerts', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#712F91]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#712F91]"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#1A1A1A] font-['Poppins']">Marketing Emails</p>
              <p className="text-sm text-[#6B7280] font-['Poppins']">Receive promotional emails and updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.marketingEmails}
                onChange={(e) => updateNotificationSettings('marketingEmails', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#712F91]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#712F91]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <Palette className="w-6 h-6 text-[#712F91] mr-3" />
            <h3 className="text-lg font-semibold text-[#1A1A1A] font-['Playfair_Display']">
              Appearance
            </h3>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
              Theme
            </label>
            <select
              value={settings.appearance.theme}
              onChange={(e) => updateAppearanceSettings('theme', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
                Primary Color
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.appearance.primaryColor}
                  onChange={(e) => updateAppearanceSettings('primaryColor', e.target.value)}
                  className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.appearance.primaryColor}
                  onChange={(e) => updateAppearanceSettings('primaryColor', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] font-['Poppins'] mb-2">
                Accent Color
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.appearance.accentColor}
                  onChange={(e) => updateAppearanceSettings('accentColor', e.target.value)}
                  className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.appearance.accentColor}
                  onChange={(e) => updateAppearanceSettings('accentColor', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#712F91] focus:border-transparent transition-all duration-200 font-['Poppins']"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 