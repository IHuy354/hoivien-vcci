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
  GetApiV10UserParams,
  UserChangePassword,
  UserCreate,
  UserUpdate
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Retrieve a single user record by its ID (includes roles + avatar
 * @summary Get user by ID
 */
export const getApiV10UserId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/user/${id}`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10UserIdInfiniteQueryKey = (id?: string,) => {
    return [
    'infinite', `/api/v1.0/user/${id}`
    ] as const;
    }

export const getGetApiV10UserIdQueryKey = (id?: string,) => {
    return [
    `/api/v1.0/user/${id}`
    ] as const;
    }

    
export const getGetApiV10UserIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10UserId>>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10UserIdInfiniteQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10UserId>>> = ({ signal }) => getApiV10UserId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10UserIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10UserId>>>
export type GetApiV10UserIdInfiniteQueryError = ErrorType<void>


export function useGetApiV10UserIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10UserId>>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10UserId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10UserId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10UserIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10UserId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10UserId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10UserId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10UserIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10UserId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get user by ID
 */

export function useGetApiV10UserIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10UserId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10UserIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10UserIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10UserId>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10UserIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10UserId>>> = ({ signal }) => getApiV10UserId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10UserIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10UserId>>>
export type GetApiV10UserIdQueryError = ErrorType<void>


export function useGetApiV10UserId<TData = Awaited<ReturnType<typeof getApiV10UserId>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10UserId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10UserId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10UserId<TData = Awaited<ReturnType<typeof getApiV10UserId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10UserId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10UserId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10UserId<TData = Awaited<ReturnType<typeof getApiV10UserId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get user by ID
 */

export function useGetApiV10UserId<TData = Awaited<ReturnType<typeof getApiV10UserId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10UserId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10UserIdQueryOptions(id,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Update a single user record by its ID (response includes roles + avatar).
Note: avatar_id should be fileId (uuid) returned by /file/upload (recommended). Legacy URL still supported.
birth_date uses DATEONLY format: YYYY-MM-DD

 * @summary Update user by ID
 */
export const putApiV10UserId = (
    id: string,
    userUpdate: BodyType<UserUpdate>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/user/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: userUpdate
    },
      options);
    }
  


export const getPutApiV10UserIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10UserId>>, TError,{id: string;data: BodyType<UserUpdate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10UserId>>, TError,{id: string;data: BodyType<UserUpdate>}, TContext> => {

const mutationKey = ['putApiV10UserId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10UserId>>, {id: string;data: BodyType<UserUpdate>}> = (props) => {
          const {id,data} = props ?? {};

          return  putApiV10UserId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10UserIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10UserId>>>
    export type PutApiV10UserIdMutationBody = BodyType<UserUpdate>
    export type PutApiV10UserIdMutationError = ErrorType<void>

    /**
 * @summary Update user by ID
 */
export const usePutApiV10UserId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10UserId>>, TError,{id: string;data: BodyType<UserUpdate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10UserId>>,
        TError,
        {id: string;data: BodyType<UserUpdate>},
        TContext
      > => {

      const mutationOptions = getPutApiV10UserIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Delete a single user record by its ID
 * @summary Delete user by ID
 */
export const deleteApiV10UserId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/user/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiV10UserIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10UserId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10UserId>>, TError,{id: string}, TContext> => {

const mutationKey = ['deleteApiV10UserId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiV10UserId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiV10UserId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiV10UserIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiV10UserId>>>
    
    export type DeleteApiV10UserIdMutationError = ErrorType<void>

    /**
 * @summary Delete user by ID
 */
export const useDeleteApiV10UserId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10UserId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiV10UserId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteApiV10UserIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Retrieve a list of user with pagination, filtering and sorting (includes roles + avatar)
 * @summary Get all user
 */
export const getApiV10User = (
    params?: GetApiV10UserParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/user`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10UserInfiniteQueryKey = (params?: GetApiV10UserParams,) => {
    return [
    'infinite', `/api/v1.0/user`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10UserQueryKey = (params?: GetApiV10UserParams,) => {
    return [
    `/api/v1.0/user`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10UserInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10User>>, GetApiV10UserParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10UserParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData, QueryKey, GetApiV10UserParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10UserInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10User>>, QueryKey, GetApiV10UserParams['page']> = ({ signal, pageParam }) => getApiV10User({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData, QueryKey, GetApiV10UserParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10UserInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10User>>>
export type GetApiV10UserInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10UserInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10User>>, GetApiV10UserParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10UserParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData, QueryKey, GetApiV10UserParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10User>>,
          TError,
          Awaited<ReturnType<typeof getApiV10User>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10UserInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10User>>, GetApiV10UserParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10UserParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData, QueryKey, GetApiV10UserParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10User>>,
          TError,
          Awaited<ReturnType<typeof getApiV10User>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10UserInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10User>>, GetApiV10UserParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10UserParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData, QueryKey, GetApiV10UserParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all user
 */

export function useGetApiV10UserInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10User>>, GetApiV10UserParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10UserParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData, QueryKey, GetApiV10UserParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10UserInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10UserQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10User>>, TError = ErrorType<unknown>>(params?: GetApiV10UserParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10UserQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10User>>> = ({ signal }) => getApiV10User(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10UserQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10User>>>
export type GetApiV10UserQueryError = ErrorType<unknown>


export function useGetApiV10User<TData = Awaited<ReturnType<typeof getApiV10User>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10UserParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10User>>,
          TError,
          Awaited<ReturnType<typeof getApiV10User>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10User<TData = Awaited<ReturnType<typeof getApiV10User>>, TError = ErrorType<unknown>>(
 params?: GetApiV10UserParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10User>>,
          TError,
          Awaited<ReturnType<typeof getApiV10User>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10User<TData = Awaited<ReturnType<typeof getApiV10User>>, TError = ErrorType<unknown>>(
 params?: GetApiV10UserParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all user
 */

export function useGetApiV10User<TData = Awaited<ReturnType<typeof getApiV10User>>, TError = ErrorType<unknown>>(
 params?: GetApiV10UserParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10User>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10UserQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Create a new user record (response includes roles + avatar).
Note: avatar_url should be fileId (uuid) returned by /file/upload (recommended). Legacy URL still supported.
birth_date uses DATEONLY format: YYYY-MM-DD

 * @summary Create a user
 */
export const postApiV10User = (
    userCreate: BodyType<UserCreate>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/user`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: userCreate, signal
    },
      options);
    }
  


export const getPostApiV10UserMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10User>>, TError,{data: BodyType<UserCreate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10User>>, TError,{data: BodyType<UserCreate>}, TContext> => {

const mutationKey = ['postApiV10User'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10User>>, {data: BodyType<UserCreate>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10User(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10UserMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10User>>>
    export type PostApiV10UserMutationBody = BodyType<UserCreate>
    export type PostApiV10UserMutationError = ErrorType<unknown>

    /**
 * @summary Create a user
 */
export const usePostApiV10User = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10User>>, TError,{data: BodyType<UserCreate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10User>>,
        TError,
        {data: BodyType<UserCreate>},
        TContext
      > => {

      const mutationOptions = getPostApiV10UserMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Change password for current authenticated user.
BE validation:
- newPassword must be at least 6 characters
- newPassword must not equal oldPassword
Higher password rules are handled by FE.

 * @summary Change password (current user)
 */
export const putApiV10UserChangePassword = (
    userChangePassword: BodyType<UserChangePassword>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/user/change-password`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: userChangePassword
    },
      options);
    }
  


export const getPutApiV10UserChangePasswordMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10UserChangePassword>>, TError,{data: BodyType<UserChangePassword>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10UserChangePassword>>, TError,{data: BodyType<UserChangePassword>}, TContext> => {

const mutationKey = ['putApiV10UserChangePassword'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10UserChangePassword>>, {data: BodyType<UserChangePassword>}> = (props) => {
          const {data} = props ?? {};

          return  putApiV10UserChangePassword(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10UserChangePasswordMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10UserChangePassword>>>
    export type PutApiV10UserChangePasswordMutationBody = BodyType<UserChangePassword>
    export type PutApiV10UserChangePasswordMutationError = ErrorType<void>

    /**
 * @summary Change password (current user)
 */
export const usePutApiV10UserChangePassword = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10UserChangePassword>>, TError,{data: BodyType<UserChangePassword>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10UserChangePassword>>,
        TError,
        {data: BodyType<UserChangePassword>},
        TContext
      > => {

      const mutationOptions = getPutApiV10UserChangePasswordMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    