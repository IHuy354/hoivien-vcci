// Core
import { isUndefined } from 'lodash-es'
import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// App
import { createStorage } from '../utils/storage'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: string
  email: string
  username: string
  first_name: string
  last_name: string
  roles: string[]
  permissions: string[]
  status: string
  last_login_at: string
}

export interface AuthSession {
  id: string
  expires_at: string
  refresh_expires_at: string
}

// States
export interface States {
  isSignedIn: boolean
  token: string | null
  refreshToken: string | null
  expiredAt: Date | null
  user: AuthUser | null
  session: AuthSession | null
  storedUsername: string | null
  storedPassword: string | null
  _hasHydrated: boolean
}

// Actions
interface SetStoreActionValues {
  isSignedIn?: States['isSignedIn']
  token?: States['token']
  refreshToken?: States['refreshToken']
  expiredAt?: States['expiredAt']
  user?: States['user']
  session?: States['session']
  storedUsername?: States['storedUsername']
  storedPassword?: States['storedPassword']
}

interface Actions {
  setStore: (values: SetStoreActionValues) => void
  resetStore: () => void
}

// Store
type Store = States & Actions

export const authStoreName = 'auth-store'

// Constants
const INITIAL_STATES: States = {
  isSignedIn: false,
  token: null,
  refreshToken: null,
  expiredAt: null,
  user: null,
  session: null,
  storedUsername: null,
  storedPassword: null,
  _hasHydrated: false,
}

// Define store
const authStore: StateCreator<Store> = (set) => ({
  // States
  ...INITIAL_STATES,

  // Methods
  setStore: ({ isSignedIn, token, refreshToken, expiredAt, user, session, storedUsername, storedPassword }) =>
    set((state) => ({
      isSignedIn: isUndefined(isSignedIn) ? state.isSignedIn : isSignedIn,
      token: isUndefined(token) ? state.token : token,
      refreshToken: isUndefined(refreshToken) ? state.refreshToken : refreshToken,
      expiredAt: isUndefined(expiredAt) ? state.expiredAt : expiredAt,
      user: isUndefined(user) ? state.user : user,
      session: isUndefined(session) ? state.session : session,
      storedUsername: isUndefined(storedUsername) ? state.storedUsername : storedUsername,
      storedPassword: isUndefined(storedPassword) ? state.storedPassword : storedPassword,
    })),

  resetStore: () =>
    set({
      isSignedIn: INITIAL_STATES.isSignedIn,
      token: INITIAL_STATES.token,
      refreshToken: INITIAL_STATES.refreshToken,
      expiredAt: INITIAL_STATES.expiredAt,
      user: INITIAL_STATES.user,
      session: INITIAL_STATES.session,
    }),
})

const useAuthStore = create<Store>()(
  devtools(
    persist(authStore, {
      name: authStoreName,
      storage: createStorage<States>(),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state._hasHydrated = true
        }
      },
    })
  )
)

export default useAuthStore
