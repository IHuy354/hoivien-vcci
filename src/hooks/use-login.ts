import { useCallback, useMemo } from 'react'
import { toast } from 'sonner'
import useAuthStore from '@stores/auth'
import { usePostApiV10AuthLogin } from '@/api/endpoints/authentication'

// ─── Types ────────────────────────────────────────────────────────────────────

export type LoginUser = {
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

export type LoginSession = {
  id: string
  expires_at: string
  refresh_expires_at: string
}

export type LoginResponseData = {
  user: LoginUser
  session: LoginSession
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
}

export type LoginResponse = {
  message: string
  message_en: string
  responseData: LoginResponseData
  status: string
  timeStamp: string
  violations: null | Record<string, unknown>
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

const useSignInHandler = () => {
  const { mutateAsync: signIn, isPending } = usePostApiV10AuthLogin()
  const setStore = useAuthStore((state) => state.setStore)
  const resetStore = useAuthStore((state) => state.resetStore)

  const defaultValue = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    []
  )

  const signInHandler = useCallback(
    async (fieldValues: { email: string; password: string }) => {
      try {
        const response = (await signIn({
          data: {
            email: fieldValues.email,
            password: fieldValues.password,
          },
        })) as unknown as LoginResponse

        if (response.status !== 'success' || !response.responseData) {
          throw new Error(response.message || 'Đăng nhập thất bại')
        }

        const { access_token, refresh_token, user, session } = response.responseData

        setStore({
          token: access_token,
          refreshToken: refresh_token,
          isSignedIn: true,
          user,
          session,
          expiredAt: session?.expires_at ? new Date(session.expires_at) : null,
        })

        toast.success(response.message || 'Đăng nhập thành công')

        return response
      } catch (error: unknown) {
        resetStore()
        const msg =
          (error as { response?: { data?: { message?: string } }; message?: string })?.response?.data?.message ||
          (error as { message?: string })?.message ||
          'Đăng nhập thất bại. Vui lòng thử lại.'
        toast.error(msg)
        throw error
      }
    },
    [signIn, setStore, resetStore]
  )

  return {
    defaultValue,
    signInHandler,
    isPending,
  }
}

export default useSignInHandler