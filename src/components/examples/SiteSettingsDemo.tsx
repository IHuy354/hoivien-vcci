'use client';

/**
 * Demo Component - Shows how to use the Site Settings Store
 * 
 * This is a reference implementation showing best practices for using
 * the site settings store in your components.
 */

import { useSiteSettings, useSiteSetting } from '@/hooks/use-site-settings';
import useSiteSettingsStore from '@/stores/site-settings';
import { Mail, Phone, MapPin, Facebook, Youtube, RefreshCw } from 'lucide-react';

export function SiteSettingsDemo() {
  // Method 1: Get all settings with auto-fetch
  const { settings, isLoading, error, refetch } = useSiteSettings();

  // Method 2: Get specific settings
  const siteName = useSiteSetting('site_name');
  const contactEmail = useSiteSetting('contact_email');

  // Method 3: Direct store access (advanced)
  const resetSettings = useSiteSettingsStore((state) => state.resetStore);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={() => refetch()}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{siteName || 'Site Settings Demo'}</h1>
          <p className="text-gray-600 text-sm mt-1">
            Data fetched from Zustand store (cached for 1 hour)
          </p>
        </div>
        <button
          onClick={() => refetch()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{settings?.contact_email || contactEmail || 'N/A'}</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{settings?.contact_phone || 'N/A'}</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-red-600 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium text-sm">{settings?.contact_address || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <p className="text-sm text-blue-600 font-medium">CEOs</p>
          <p className="text-2xl font-bold text-blue-900">{settings?.counter_ceos || '0'}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
          <p className="text-sm text-purple-600 font-medium">Cohorts</p>
          <p className="text-2xl font-bold text-purple-900">{settings?.counter_cohorts || '0'}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
          <p className="text-sm text-green-600 font-medium">Community</p>
          <p className="text-2xl font-bold text-green-900">{settings?.counter_community || '0'}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
          <p className="text-sm text-orange-600 font-medium">Members</p>
          <p className="text-2xl font-bold text-orange-900">{settings?.counter_members || '0'}</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        {settings?.facebook_url && (
          <a
            href={settings.facebook_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        )}
        {settings?.youtube_url && (
          <a
            href={settings.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Registration Info */}
      {settings?.registration_url && (
        <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
          <h3 className="text-lg font-bold mb-2">Registration Open!</h3>
          <p className="text-sm opacity-90 mb-4">
            Registration Period: {settings?.registration_start} to {settings?.registration_end}
          </p>
          <a
            href={settings.registration_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Register Now
          </a>
        </div>
      )}

      {/* Debug Info */}
      <details className="p-4 bg-gray-50 border rounded-lg">
        <summary className="cursor-pointer font-medium text-gray-700">
          Debug: View Raw Settings Data
        </summary>
        <pre className="mt-4 text-xs overflow-auto p-4 bg-gray-900 text-green-400 rounded">
          {JSON.stringify(settings, null, 2)}
        </pre>
      </details>

      {/* Advanced Actions */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => resetSettings()}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Reset Store
        </button>
      </div>
    </div>
  );
}

export default SiteSettingsDemo;
