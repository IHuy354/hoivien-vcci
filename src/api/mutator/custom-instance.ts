// Core
import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import useAuthStore from '@stores/auth'
import i18n from '@/utils/i18n'

// App
import baseConfig from '@/configs/base'
// const mockAuthToken =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZiZGY0ZDVlLTdkZmItNDI1OC1hMDFkLWIyOTkzM2VjNzI4NSIsImlhdCI6MTczODQ4NDQzMywiZXhwIjoxNzM4NTc0NDMzfQ.wJIFnqs52FW1rnpAlCKVDvvWlysoNxqvWGoix-9s9oc'
// Instance
export const AXIOS_INSTANCE = Axios.create({ baseURL: baseConfig.backendDomain })

// Request middleware
AXIOS_INSTANCE.interceptors.request.use(async (config) => {
  const token = useAuthStore.getState().token
  if (token) config.headers.Authorization = `Bearer ${useAuthStore.getState().token}`
  config.headers['Accept-Language'] = i18n.language

  // Mock
  // config.headers.Authorization = mockAuthToken
  return config
})

// Response middleware
AXIOS_INSTANCE.interceptors.response.use(
  async (response) => response,
  (error) => Promise.reject(error)
)

// Main instance
export const mainInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options
  }).then(({ data, status }) => {
    return data instanceof Blob ? data : { ...data, statusCode: status }
  })

  // @ts-expect-error not exist cancel
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }
  return promise
}

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this

export type ErrorType<Error> = AxiosError<Error>

export type BodyType<BodyData> = BodyData

export default mainInstance
// Or, in case you want to wrap the body type (optional)

// (if the custom instance is processing data before sending it, like changing the case for example)
// export type BodyType<BodyData> = CamelCase<BodyData>;

// export const fileUploadServiceInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
//   const source = Axios.CancelToken.source()
//   const promise = AXIOS_INSTANCE({
//     ...config,
//     ...options,
//     baseURL: baseConfig.fileUploadServiceEndpoint
//   }).then(({ data, status }) => {
//     return data instanceof Blob ? data : { ...data, statusCode: status }
//   })

//   // @ts-expect-error not exist cancel
//   promise.cancel = () => {
//     source.cancel('Query was cancelled')
//   }
//   return promise
// }
