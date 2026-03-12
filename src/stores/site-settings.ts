import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createStorage } from '@/utils/storage'
import { getApiV10PublicSiteSettings } from '@/api/endpoints/public'

// Types
export interface SiteSettings {
  contact_address: string | null
  contact_email: string | null
  contact_phone: string | null
  counter_ceos: string | null
  counter_cohorts: string | null
  counter_community: string | null
  counter_members: string | null
  counter_months: string | null
  opening_date: string | null
  registration_end: string | null
  registration_qr: string | null
  registration_start: string | null
  registration_url: string | null
  registration_setting: string | null
  site_favicon: string | null
  site_logo: string | null
  site_name: string | null
  site_og_image: string | null
  seo_description: string | null
  seo_title: string | null
  facebook_url: string | null
  youtube_url: string | null
  zalo_url: string | null
}

// States
interface States {
  settings: SiteSettings | null
  isLoading: boolean
  error: string | null
  lastFetched: number | null
}

// Actions
interface Actions {
  fetchSettings: () => Promise<void>
  setSettings: (settings: Partial<SiteSettings>) => void
  clearCache: () => void
  resetStore: () => void
}

// Store type
export type SiteSettingsStore = States & Actions

export const siteSettingsStoreName = 'site-settings-store'

// Constants
const INITIAL_STATES: States = {
  settings: null,
  isLoading: false,
  error: null,
  lastFetched: null
}

// Cache duration: 5 minutes (in milliseconds) - shorter cache for more frequent updates
const CACHE_DURATION = 5 * 60 * 1000

// Store version - increment this to invalidate all cached data
const STORE_VERSION = 3

// Create store
const useSiteSettingsStore = create<SiteSettingsStore>()(
  devtools(
    persist(
      (set, get) => ({
        // States
        ...INITIAL_STATES,

        // Actions
        fetchSettings: async () => {
          const state = get()
          
          // In development, always fetch fresh data (no cache)
          // In production, use cache with 5 minute duration
          const isDevelopment = process.env.NODE_ENV === 'development'
          
          if (
            !isDevelopment &&
            state.settings && 
            state.lastFetched && 
            Date.now() - state.lastFetched < CACHE_DURATION
          ) {
            return
          }

          set({ isLoading: true, error: null })

          try {
            const response = await getApiV10PublicSiteSettings()
            const data = (response as { responseData?: Record<string, string | null> })?.responseData

            if (data) {
              set({
                settings: {
                  contact_address: data.contact_address ?? null,
                  contact_email: data.contact_email ?? null,
                  contact_phone: data.contact_phone ?? null,
                  counter_ceos: data.counter_ceos ?? null,
                  counter_cohorts: data.counter_cohorts ?? null,
                  counter_community: data.counter_community ?? null,
                  counter_members: data.counter_members ?? null,
                  counter_months: data.counter_months ?? null,
                  opening_date: data.opening_date ?? null,
                  registration_end: data.registration_end ?? null,
                  registration_qr: data.registration_qr ?? null,
                  registration_start: data.registration_start ?? null,
                  registration_url: data.registration_url ?? null,
                  registration_setting: data.registration_setting ?? null,
                  site_favicon: data.site_favicon ?? null,
                  site_logo: data.site_logo ?? null,
                  site_name: data.site_name ?? null,
                  site_og_image: data.site_og_image ?? null,
                  seo_description: data.seo_description ?? null,
                  seo_title: data.seo_title ?? null,
                  facebook_url: data.facebook_url ?? null,
                  youtube_url: data.youtube_url ?? null,
                  zalo_url: data.zalo_url ?? null,
                },
                isLoading: false,
                error: null,
                lastFetched: Date.now()
              })
            }
          } catch (error) {
            set({
              isLoading: false,
              error: error instanceof Error ? error.message : 'Failed to fetch settings'
            })
          }
        },

        setSettings: (newSettings) => {
          set((state) => ({
            settings: state.settings 
              ? { ...state.settings, ...newSettings }
              : newSettings as SiteSettings
          }))
        },

        clearCache: () => {
          set({ lastFetched: null })
        },

        resetStore: () => set({ ...INITIAL_STATES })
      }),
      {
        name: siteSettingsStoreName,
        storage: createStorage<SiteSettingsStore>(),
        version: STORE_VERSION,
        migrate: (persistedState: unknown, version: number) => {
          // If version doesn't match, reset to initial state
          if (version !== STORE_VERSION) {
            return INITIAL_STATES as SiteSettingsStore
          }
          return persistedState as SiteSettingsStore
        }
      }
    )
  )
)

export default useSiteSettingsStore
