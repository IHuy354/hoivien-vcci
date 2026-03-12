'use client';

import { useEffect } from 'react';
import useSiteSettingsStore from '@/stores/site-settings';

/**
 * SiteSettingsProvider - Auto-fetches site settings on app mount
 * 
 * This provider automatically loads site settings into the Zustand store
 * when the application starts. Settings are cached for 1 hour.
 */
export function SiteSettingsProvider() {
  const fetchSettings = useSiteSettingsStore((state) => state.fetchSettings);

  useEffect(() => {
    // Auto-fetch settings on mount
    fetchSettings();
  }, [fetchSettings]);

  return null; // This is a data provider, no UI needed
}
