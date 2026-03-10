// @ts-nocheck
import {
  useInfiniteQuery,
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseInfiniteQueryResult,
  DefinedUseQueryResult,
  InfiniteData,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  BadRequestResponse,
  ForgotPasswordResetRequest,
  ForgotPasswordSendOtpRequest,
  ForgotPasswordVerifyOtpRequest,
  GetApiV10AuthProfile200,
  LoginRequest,
  PostApiV10AuthForgotPasswordVerifyOtp200,
  PostApiV10AuthLogin200,
  PostApiV10AuthLogin423,
  PostApiV10AuthLogout200,
  PostApiV10AuthRefresh200,
  PostApiV10AuthRefreshBody,
  PostApiV10AuthRegister200,
  UnauthorizedResponse,
  UserCreate
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Create a new user record
 * @summary Create a user
 */
export const postApiV10AuthRegister = (
    userCreate: BodyType<UserCreate>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10AuthRegister200>(
      {url: `/api/v1.0/auth/register`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: userCreate, signal
    },
      options);
    }
  


export const getPostApiV10AuthRegisterMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthRegister>>, TError,{data: BodyType<UserCreate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthRegister>>, TError,{data: BodyType<UserCreate>}, TContext> => {

const mutationKey = ['postApiV10AuthRegister'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10AuthRegister>>, {data: BodyType<UserCreate>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10AuthRegister(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10AuthRegisterMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10AuthRegister>>>
    export type PostApiV10AuthRegisterMutationBody = BodyType<UserCreate>
    export type PostApiV10AuthRegisterMutationError = ErrorType<unknown>

    /**
 * @summary Create a user
 */
export const usePostApiV10AuthRegister = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthRegister>>, TError,{data: BodyType<UserCreate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10AuthRegister>>,
        TError,
        {data: BodyType<UserCreate>},
        TContext
      > => {

      const mutationOptions = getPostApiV10AuthRegisterMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Get a new access token using refresh token from cookie or body
 * @summary Refresh access token
 */
export const postApiV10AuthRefresh = (
    postApiV10AuthRefreshBody?: BodyType<PostApiV10AuthRefreshBody>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10AuthRefresh200>(
      {url: `/api/v1.0/auth/refresh`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postApiV10AuthRefreshBody, signal
    },
      options);
    }
  


export const getPostApiV10AuthRefreshMutationOptions = <TError = ErrorType<UnauthorizedResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthRefresh>>, TError,{data: BodyType<PostApiV10AuthRefreshBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthRefresh>>, TError,{data: BodyType<PostApiV10AuthRefreshBody>}, TContext> => {

const mutationKey = ['postApiV10AuthRefresh'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10AuthRefresh>>, {data: BodyType<PostApiV10AuthRefreshBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10AuthRefresh(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10AuthRefreshMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10AuthRefresh>>>
    export type PostApiV10AuthRefreshMutationBody = BodyType<PostApiV10AuthRefreshBody>
    export type PostApiV10AuthRefreshMutationError = ErrorType<UnauthorizedResponse>

    /**
 * @summary Refresh access token
 */
export const usePostApiV10AuthRefresh = <TError = ErrorType<UnauthorizedResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthRefresh>>, TError,{data: BodyType<PostApiV10AuthRefreshBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10AuthRefresh>>,
        TError,
        {data: BodyType<PostApiV10AuthRefreshBody>},
        TContext
      > => {

      const mutationOptions = getPostApiV10AuthRefreshMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Get current authenticated user's profile information
 * @summary Get user profile
 */
export const getApiV10AuthProfile = (
    
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10AuthProfile200>(
      {url: `/api/v1.0/auth/profile`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10AuthProfileInfiniteQueryKey = () => {
    return [
    'infinite', `/api/v1.0/auth/profile`
    ] as const;
    }

export const getGetApiV10AuthProfileQueryKey = () => {
    return [
    `/api/v1.0/auth/profile`
    ] as const;
    }

    
export const getGetApiV10AuthProfileInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10AuthProfile>>>, TError = ErrorType<UnauthorizedResponse>>( options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10AuthProfileInfiniteQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10AuthProfile>>> = ({ signal }) => getApiV10AuthProfile(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10AuthProfileInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10AuthProfile>>>
export type GetApiV10AuthProfileInfiniteQueryError = ErrorType<UnauthorizedResponse>


export function useGetApiV10AuthProfileInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10AuthProfile>>>, TError = ErrorType<UnauthorizedResponse>>(
  options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10AuthProfile>>,
          TError,
          Awaited<ReturnType<typeof getApiV10AuthProfile>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10AuthProfileInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10AuthProfile>>>, TError = ErrorType<UnauthorizedResponse>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10AuthProfile>>,
          TError,
          Awaited<ReturnType<typeof getApiV10AuthProfile>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10AuthProfileInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10AuthProfile>>>, TError = ErrorType<UnauthorizedResponse>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get user profile
 */

export function useGetApiV10AuthProfileInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10AuthProfile>>>, TError = ErrorType<UnauthorizedResponse>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10AuthProfileInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10AuthProfileQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError = ErrorType<UnauthorizedResponse>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10AuthProfileQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10AuthProfile>>> = ({ signal }) => getApiV10AuthProfile(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10AuthProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10AuthProfile>>>
export type GetApiV10AuthProfileQueryError = ErrorType<UnauthorizedResponse>


export function useGetApiV10AuthProfile<TData = Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError = ErrorType<UnauthorizedResponse>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10AuthProfile>>,
          TError,
          Awaited<ReturnType<typeof getApiV10AuthProfile>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10AuthProfile<TData = Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError = ErrorType<UnauthorizedResponse>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10AuthProfile>>,
          TError,
          Awaited<ReturnType<typeof getApiV10AuthProfile>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10AuthProfile<TData = Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError = ErrorType<UnauthorizedResponse>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get user profile
 */

export function useGetApiV10AuthProfile<TData = Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError = ErrorType<UnauthorizedResponse>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10AuthProfile>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10AuthProfileQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Logout user and invalidate current session
 * @summary Logout user
 */
export const postApiV10AuthLogout = (
    
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10AuthLogout200>(
      {url: `/api/v1.0/auth/logout`, method: 'POST', signal
    },
      options);
    }
  


export const getPostApiV10AuthLogoutMutationOptions = <TError = ErrorType<UnauthorizedResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthLogout>>, TError,void, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthLogout>>, TError,void, TContext> => {

const mutationKey = ['postApiV10AuthLogout'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10AuthLogout>>, void> = () => {
          

          return  postApiV10AuthLogout(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10AuthLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10AuthLogout>>>
    
    export type PostApiV10AuthLogoutMutationError = ErrorType<UnauthorizedResponse>

    /**
 * @summary Logout user
 */
export const usePostApiV10AuthLogout = <TError = ErrorType<UnauthorizedResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthLogout>>, TError,void, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10AuthLogout>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getPostApiV10AuthLogoutMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Authenticate user with email and password
 * @summary User login
 */
export const postApiV10AuthLogin = (
    loginRequest: BodyType<LoginRequest>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10AuthLogin200>(
      {url: `/api/v1.0/auth/login`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: loginRequest, signal
    },
      options);
    }
  


export const getPostApiV10AuthLoginMutationOptions = <TError = ErrorType<BadRequestResponse | UnauthorizedResponse | PostApiV10AuthLogin423>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthLogin>>, TError,{data: BodyType<LoginRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthLogin>>, TError,{data: BodyType<LoginRequest>}, TContext> => {

const mutationKey = ['postApiV10AuthLogin'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10AuthLogin>>, {data: BodyType<LoginRequest>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10AuthLogin(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10AuthLoginMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10AuthLogin>>>
    export type PostApiV10AuthLoginMutationBody = BodyType<LoginRequest>
    export type PostApiV10AuthLoginMutationError = ErrorType<BadRequestResponse | UnauthorizedResponse | PostApiV10AuthLogin423>

    /**
 * @summary User login
 */
export const usePostApiV10AuthLogin = <TError = ErrorType<BadRequestResponse | UnauthorizedResponse | PostApiV10AuthLogin423>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthLogin>>, TError,{data: BodyType<LoginRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10AuthLogin>>,
        TError,
        {data: BodyType<LoginRequest>},
        TContext
      > => {

      const mutationOptions = getPostApiV10AuthLoginMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Verify OTP and return reset_token
 * @summary Forgot password - verify OTP
 */
export const postApiV10AuthForgotPasswordVerifyOtp = (
    forgotPasswordVerifyOtpRequest: BodyType<ForgotPasswordVerifyOtpRequest>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10AuthForgotPasswordVerifyOtp200>(
      {url: `/api/v1.0/auth/forgot-password/verify-otp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: forgotPasswordVerifyOtpRequest, signal
    },
      options);
    }
  


export const getPostApiV10AuthForgotPasswordVerifyOtpMutationOptions = <TError = ErrorType<BadRequestResponse | void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordVerifyOtp>>, TError,{data: BodyType<ForgotPasswordVerifyOtpRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordVerifyOtp>>, TError,{data: BodyType<ForgotPasswordVerifyOtpRequest>}, TContext> => {

const mutationKey = ['postApiV10AuthForgotPasswordVerifyOtp'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordVerifyOtp>>, {data: BodyType<ForgotPasswordVerifyOtpRequest>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10AuthForgotPasswordVerifyOtp(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10AuthForgotPasswordVerifyOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordVerifyOtp>>>
    export type PostApiV10AuthForgotPasswordVerifyOtpMutationBody = BodyType<ForgotPasswordVerifyOtpRequest>
    export type PostApiV10AuthForgotPasswordVerifyOtpMutationError = ErrorType<BadRequestResponse | void>

    /**
 * @summary Forgot password - verify OTP
 */
export const usePostApiV10AuthForgotPasswordVerifyOtp = <TError = ErrorType<BadRequestResponse | void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordVerifyOtp>>, TError,{data: BodyType<ForgotPasswordVerifyOtpRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10AuthForgotPasswordVerifyOtp>>,
        TError,
        {data: BodyType<ForgotPasswordVerifyOtpRequest>},
        TContext
      > => {

      const mutationOptions = getPostApiV10AuthForgotPasswordVerifyOtpMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Send OTP to email for password reset
 * @summary Forgot password - send OTP
 */
export const postApiV10AuthForgotPasswordSendOtp = (
    forgotPasswordSendOtpRequest: BodyType<ForgotPasswordSendOtpRequest>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/auth/forgot-password/send-otp`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: forgotPasswordSendOtpRequest, signal
    },
      options);
    }
  


export const getPostApiV10AuthForgotPasswordSendOtpMutationOptions = <TError = ErrorType<BadRequestResponse | void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordSendOtp>>, TError,{data: BodyType<ForgotPasswordSendOtpRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordSendOtp>>, TError,{data: BodyType<ForgotPasswordSendOtpRequest>}, TContext> => {

const mutationKey = ['postApiV10AuthForgotPasswordSendOtp'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordSendOtp>>, {data: BodyType<ForgotPasswordSendOtpRequest>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10AuthForgotPasswordSendOtp(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10AuthForgotPasswordSendOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordSendOtp>>>
    export type PostApiV10AuthForgotPasswordSendOtpMutationBody = BodyType<ForgotPasswordSendOtpRequest>
    export type PostApiV10AuthForgotPasswordSendOtpMutationError = ErrorType<BadRequestResponse | void>

    /**
 * @summary Forgot password - send OTP
 */
export const usePostApiV10AuthForgotPasswordSendOtp = <TError = ErrorType<BadRequestResponse | void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordSendOtp>>, TError,{data: BodyType<ForgotPasswordSendOtpRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10AuthForgotPasswordSendOtp>>,
        TError,
        {data: BodyType<ForgotPasswordSendOtpRequest>},
        TContext
      > => {

      const mutationOptions = getPostApiV10AuthForgotPasswordSendOtpMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Reset password using reset_token
 * @summary Forgot password - confirm reset
 */
export const postApiV10AuthForgotPasswordReset = (
    forgotPasswordResetRequest: BodyType<ForgotPasswordResetRequest>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/auth/forgot-password/reset`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: forgotPasswordResetRequest, signal
    },
      options);
    }
  


export const getPostApiV10AuthForgotPasswordResetMutationOptions = <TError = ErrorType<BadRequestResponse | void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordReset>>, TError,{data: BodyType<ForgotPasswordResetRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordReset>>, TError,{data: BodyType<ForgotPasswordResetRequest>}, TContext> => {

const mutationKey = ['postApiV10AuthForgotPasswordReset'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordReset>>, {data: BodyType<ForgotPasswordResetRequest>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10AuthForgotPasswordReset(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10AuthForgotPasswordResetMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordReset>>>
    export type PostApiV10AuthForgotPasswordResetMutationBody = BodyType<ForgotPasswordResetRequest>
    export type PostApiV10AuthForgotPasswordResetMutationError = ErrorType<BadRequestResponse | void>

    /**
 * @summary Forgot password - confirm reset
 */
export const usePostApiV10AuthForgotPasswordReset = <TError = ErrorType<BadRequestResponse | void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10AuthForgotPasswordReset>>, TError,{data: BodyType<ForgotPasswordResetRequest>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10AuthForgotPasswordReset>>,
        TError,
        {data: BodyType<ForgotPasswordResetRequest>},
        TContext
      > => {

      const mutationOptions = getPostApiV10AuthForgotPasswordResetMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    