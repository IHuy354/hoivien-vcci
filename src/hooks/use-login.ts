// import { useCallback, useMemo } from 'react'
// import useAuthStore from '@/stores/auth'
// import {usePostApiV1AccountLogin } from '@/api/endpoints/account'
// // import type { PostApiV10AuthLoginMutationResult } from '@/api/endpoints/authentication'

// // Custom interface for the actual API response structure
// // export type User = {
// //   email: string;
// //   username: string;
// //   first_name: string;
// //   last_name: string;
// //   roles: string[];
// //   permissions: string[];
// //   last_login_at: string;
// // };
// export type LoginResponse = {
//   message: string;
//   message_en: string;
//     data: string;
//   status: string;
//   httpStatus: number;
//   isSuccess: string,
//   timeStamp: string;
//   violations: null | Record<string, unknown>;
// };
// const useSignInHandler = () => {
//   const { mutateAsync: signIn, isPending } = usePostApiV1AccountLogin()
//   const setStore = useAuthStore((state) => state.setStore)
//   const resetStore = useAuthStore((state) => state.resetStore)

//   const defaultValue = useMemo(
//     () => ({
//       email: '',
//       password: ''
//     }),
//     []
//   )

//   const signInHandler = useCallback(
//     async (fieldValues: { email: string; password: string }) => {
//       try {
//         const response = await signIn({
//           data: {
//             email: fieldValues.email,
//             password: fieldValues.password
//           }
//         }) as unknown as LoginResponse
//         if (!response.isSuccess) {
//           throw {
//             response: {
//               data: response.data
//             }
//           }
//         }
//  if (response.isSuccess) {
//           setStore({
//             token: response.data,
//             isSignedIn: true
//           })
//       }
//         return response
//       } catch (error) {
//         resetStore()
//         throw error
//       }
//     },
//     [signIn, setStore, resetStore]
//   )

//   return {
//     defaultValue,
//     signInHandler,
//     isPending
//   }
// }

// export default useSignInHandler