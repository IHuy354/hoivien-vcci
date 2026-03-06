// Core
import { isUndefined } from 'lodash-es'
import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
// App
import { createStorage } from '@/utils/storage'

// Types
export interface Permission {
  id: string
  permission_id: string
  permission: {
    id: string
    name: string
    code: string
  }
}

// States
export interface States {
  id: string | null
  email: string | null
  role_id: string | null
  role_name: string | null
  role_code: string | null
  status: string | null
  created_at: string | null
  updated_at: string | null
  user_permisions: Permission[] | null
  avatar_url: string | null
  full_name: string | null
  phone: string | null
  department_id: string | null
  school_id: string | null
  mentor_id: string | null
  contract_url: string | null
}

// Actions
interface SetStoreActionValues {
  id?: States['id']
  email?: States['email']
  role_id?: States['role_id']
  role_name?: States['role_name']
  role_code?: States['role_code']
  status?: States['status']
  created_at?: States['created_at']
  updated_at?: States['updated_at']
  user_permisions?: States['user_permisions']
  avatar_url?: States['avatar_url']
  full_name?: States['full_name']
  phone?: States['phone']
  department_id?: States['department_id']
  school_id?: States['school_id']
  mentor_id?: States['mentor_id']
  contract_url?: States['contract_url']
}

interface Actions {
  setStore: (values: SetStoreActionValues) => void
  resetStore: () => void
}

// Store
export type ProfileStore = States & Actions

export const profileStoreName = 'profile-store'

// Constants
export const INITIAL_STATES: States = {
  id: null,
  email: null,
  role_id: null,
  role_name: null,
  role_code: null,
  status: null,
  created_at: null,
  updated_at: null,
  user_permisions: null,
  avatar_url: null,
  full_name: null,
  phone: null,
  department_id: null,
  school_id: null,
  mentor_id: null,
  contract_url: null
}

// Define store
const profileStore: StateCreator<ProfileStore> = (set) => ({
  // States
  ...INITIAL_STATES,

  // Actions
  setStore: ({
    id,
    email,
    role_id,
    role_name,
    role_code,
    status,
    created_at,
    updated_at,
    user_permisions,
    avatar_url,
    full_name,
    phone,
    department_id,
    school_id,
    mentor_id,
    contract_url
  }) =>
    set((state) => {
      return {
        id: isUndefined(id) ? state.id : id,
        email: isUndefined(email) ? state.email : email,
        role_id: isUndefined(role_id) ? state.role_id : role_id,
        role_name: isUndefined(role_name) ? state.role_name : role_name,
        role_code: isUndefined(role_code) ? state.role_code : role_code,
        status: isUndefined(status) ? state.status : status,
        created_at: isUndefined(created_at) ? state.created_at : created_at,
        updated_at: isUndefined(updated_at) ? state.updated_at : updated_at,
        user_permisions: isUndefined(user_permisions) ? state.user_permisions : user_permisions,
        avatar_url: isUndefined(avatar_url) ? state.avatar_url : avatar_url,
        full_name: isUndefined(full_name) ? state.full_name : full_name,
        phone: isUndefined(phone) ? state.phone : phone,
        department_id: isUndefined(department_id) ? state.department_id : department_id,
        school_id: isUndefined(school_id) ? state.school_id : school_id,
        mentor_id: isUndefined(mentor_id) ? state.mentor_id : mentor_id,
        contract_url: isUndefined(contract_url) ? state.contract_url : contract_url
      }
    }),
  resetStore: () => set({ ...INITIAL_STATES })
})

export const useProfileStore = create<ProfileStore>()(
  devtools(
    persist(profileStore, {
      name: profileStoreName,
      storage: createStorage<States>()
    })
  )
)

export default useProfileStore
