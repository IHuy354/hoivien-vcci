/* eslint-disable */
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
  GetApiV10RegistrationParams,
  GetApiV10RegistrationStatsParams
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * @summary Get registration by ID
 */
export const getApiV10RegistrationId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/registration/${id}`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10RegistrationIdInfiniteQueryKey = (id?: string,) => {
    return [
    'infinite', `/api/v1.0/registration/${id}`
    ] as const;
    }

export const getGetApiV10RegistrationIdQueryKey = (id?: string,) => {
    return [
    `/api/v1.0/registration/${id}`
    ] as const;
    }

    
export const getGetApiV10RegistrationIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationId>>>, TError = ErrorType<unknown>>(id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10RegistrationIdInfiniteQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10RegistrationId>>> = ({ signal }) => getApiV10RegistrationId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10RegistrationIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10RegistrationId>>>
export type GetApiV10RegistrationIdInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10RegistrationIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationId>>>, TError = ErrorType<unknown>>(
 id: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationId>>>, TError = ErrorType<unknown>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationId>>>, TError = ErrorType<unknown>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get registration by ID
 */

export function useGetApiV10RegistrationIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationId>>>, TError = ErrorType<unknown>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10RegistrationIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10RegistrationIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError = ErrorType<unknown>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10RegistrationIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10RegistrationId>>> = ({ signal }) => getApiV10RegistrationId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10RegistrationIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10RegistrationId>>>
export type GetApiV10RegistrationIdQueryError = ErrorType<unknown>


export function useGetApiV10RegistrationId<TData = Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError = ErrorType<unknown>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationId<TData = Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError = ErrorType<unknown>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationId<TData = Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError = ErrorType<unknown>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get registration by ID
 */

export function useGetApiV10RegistrationId<TData = Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError = ErrorType<unknown>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10RegistrationIdQueryOptions(id,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Update registration status/admin_notes
 */
export const putApiV10RegistrationId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/registration/${id}`, method: 'PUT'
    },
      options);
    }
  


export const getPutApiV10RegistrationIdMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10RegistrationId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10RegistrationId>>, TError,{id: string}, TContext> => {

const mutationKey = ['putApiV10RegistrationId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10RegistrationId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  putApiV10RegistrationId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10RegistrationIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10RegistrationId>>>
    
    export type PutApiV10RegistrationIdMutationError = ErrorType<unknown>

    /**
 * @summary Update registration status/admin_notes
 */
export const usePutApiV10RegistrationId = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10RegistrationId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10RegistrationId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getPutApiV10RegistrationIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * @summary Delete registration by ID
 */
export const deleteApiV10RegistrationId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/registration/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiV10RegistrationIdMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10RegistrationId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10RegistrationId>>, TError,{id: string}, TContext> => {

const mutationKey = ['deleteApiV10RegistrationId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiV10RegistrationId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiV10RegistrationId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiV10RegistrationIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiV10RegistrationId>>>
    
    export type DeleteApiV10RegistrationIdMutationError = ErrorType<unknown>

    /**
 * @summary Delete registration by ID
 */
export const useDeleteApiV10RegistrationId = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10RegistrationId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiV10RegistrationId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteApiV10RegistrationIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * @summary Get registration statistics
 */
export const getApiV10RegistrationStats = (
    params?: GetApiV10RegistrationStatsParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/registration/stats`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10RegistrationStatsInfiniteQueryKey = (params?: GetApiV10RegistrationStatsParams,) => {
    return [
    'infinite', `/api/v1.0/registration/stats`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10RegistrationStatsQueryKey = (params?: GetApiV10RegistrationStatsParams,) => {
    return [
    `/api/v1.0/registration/stats`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10RegistrationStatsInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationStats>>>, TError = ErrorType<unknown>>(params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10RegistrationStatsInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10RegistrationStats>>> = ({ signal }) => getApiV10RegistrationStats(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10RegistrationStatsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10RegistrationStats>>>
export type GetApiV10RegistrationStatsInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10RegistrationStatsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationStats>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10RegistrationStatsParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationStatsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationStats>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationStatsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationStats>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get registration statistics
 */

export function useGetApiV10RegistrationStatsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10RegistrationStats>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10RegistrationStatsInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10RegistrationStatsQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError = ErrorType<unknown>>(params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10RegistrationStatsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10RegistrationStats>>> = ({ signal }) => getApiV10RegistrationStats(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10RegistrationStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10RegistrationStats>>>
export type GetApiV10RegistrationStatsQueryError = ErrorType<unknown>


export function useGetApiV10RegistrationStats<TData = Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10RegistrationStatsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationStats<TData = Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>,
          TError,
          Awaited<ReturnType<typeof getApiV10RegistrationStats>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationStats<TData = Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get registration statistics
 */

export function useGetApiV10RegistrationStats<TData = Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationStatsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10RegistrationStats>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10RegistrationStatsQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Retrieve registration list with pagination/filter/sort.
 * @summary Get all registrations
 */
export const getApiV10Registration = (
    params?: GetApiV10RegistrationParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/registration`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10RegistrationInfiniteQueryKey = (params?: GetApiV10RegistrationParams,) => {
    return [
    'infinite', `/api/v1.0/registration`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10RegistrationQueryKey = (params?: GetApiV10RegistrationParams,) => {
    return [
    `/api/v1.0/registration`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10RegistrationInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Registration>>>, TError = ErrorType<unknown>>(params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10RegistrationInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Registration>>> = ({ signal }) => getApiV10Registration(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10RegistrationInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Registration>>>
export type GetApiV10RegistrationInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10RegistrationInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Registration>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10RegistrationParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Registration>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Registration>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Registration>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Registration>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Registration>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10RegistrationInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Registration>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all registrations
 */

export function useGetApiV10RegistrationInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Registration>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10RegistrationInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10RegistrationQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10Registration>>, TError = ErrorType<unknown>>(params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10RegistrationQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Registration>>> = ({ signal }) => getApiV10Registration(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10RegistrationQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Registration>>>
export type GetApiV10RegistrationQueryError = ErrorType<unknown>


export function useGetApiV10Registration<TData = Awaited<ReturnType<typeof getApiV10Registration>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10RegistrationParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Registration>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Registration>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Registration<TData = Awaited<ReturnType<typeof getApiV10Registration>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Registration>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Registration>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Registration<TData = Awaited<ReturnType<typeof getApiV10Registration>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all registrations
 */

export function useGetApiV10Registration<TData = Awaited<ReturnType<typeof getApiV10Registration>>, TError = ErrorType<unknown>>(
 params?: GetApiV10RegistrationParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Registration>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10RegistrationQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




