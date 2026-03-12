import { useEffect } from 'react'
import useSiteSettingsStore, { type SiteSettings } from '@/stores/site-settings'

/**
 * Hook to get site settings and automatically fetch if not available
 * @param autoFetch - Whether to automatically fetch settings on mount (default: true)
 */
export function useSiteSettings(autoFetch = true) {
  const { settings, isLoading, error, fetchSettings, clearCache } = useSiteSettingsStore()

  useEffect(() => {
    if (autoFetch && !settings && !isLoading) {
      fetchSettings()
    }
  }, [autoFetch, settings, isLoading, fetchSettings])

  return {
    settings,
    isLoading,
    error,
    refetch: fetchSettings,
    clearCache
  }
}

/**
 * Hook to get a specific setting value
 * @param key - The setting key to retrieve
 */
export function useSiteSetting<K extends keyof SiteSettings>(
  key: K
): SiteSettings[K] | null {
  const { settings } = useSiteSettings()
  return settings?.[key] ?? null
}

export default useSiteSettings
