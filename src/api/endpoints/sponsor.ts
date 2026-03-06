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
  DeleteApiV10SponsorId200,
  GetApiV10SponsorId200,
  GetApiV10SponsorParams,
  PostApiV10Sponsor200,
  PutApiV10SponsorId200,
  ResponseGetAllData,
  SponsorMutate
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Retrieve a single sponsor record by its ID
 * @summary Get sponsor by ID
 */
export const getApiV10SponsorId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10SponsorId200>(
      {url: `/api/v1.0/sponsor/${id}`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10SponsorIdInfiniteQueryKey = (id?: string,) => {
    return [
    'infinite', `/api/v1.0/sponsor/${id}`
    ] as const;
    }

export const getGetApiV10SponsorIdQueryKey = (id?: string,) => {
    return [
    `/api/v1.0/sponsor/${id}`
    ] as const;
    }

    
export const getGetApiV10SponsorIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SponsorId>>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SponsorIdInfiniteQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10SponsorId>>> = ({ signal }) => getApiV10SponsorId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SponsorIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10SponsorId>>>
export type GetApiV10SponsorIdInfiniteQueryError = ErrorType<void>


export function useGetApiV10SponsorIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SponsorId>>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SponsorId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SponsorId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SponsorIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SponsorId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SponsorId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SponsorId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SponsorIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SponsorId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get sponsor by ID
 */

export function useGetApiV10SponsorIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SponsorId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SponsorIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10SponsorIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10SponsorId>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SponsorIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10SponsorId>>> = ({ signal }) => getApiV10SponsorId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SponsorIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10SponsorId>>>
export type GetApiV10SponsorIdQueryError = ErrorType<void>


export function useGetApiV10SponsorId<TData = Awaited<ReturnType<typeof getApiV10SponsorId>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SponsorId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SponsorId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SponsorId<TData = Awaited<ReturnType<typeof getApiV10SponsorId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SponsorId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SponsorId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SponsorId<TData = Awaited<ReturnType<typeof getApiV10SponsorId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get sponsor by ID
 */

export function useGetApiV10SponsorId<TData = Awaited<ReturnType<typeof getApiV10SponsorId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SponsorId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SponsorIdQueryOptions(id,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Update a single sponsor record by its ID
 * @summary Update sponsor by ID
 */
export const putApiV10SponsorId = (
    id: string,
    sponsorMutate: BodyType<SponsorMutate>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<PutApiV10SponsorId200>(
      {url: `/api/v1.0/sponsor/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: sponsorMutate
    },
      options);
    }
  


export const getPutApiV10SponsorIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10SponsorId>>, TError,{id: string;data: BodyType<SponsorMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10SponsorId>>, TError,{id: string;data: BodyType<SponsorMutate>}, TContext> => {

const mutationKey = ['putApiV10SponsorId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10SponsorId>>, {id: string;data: BodyType<SponsorMutate>}> = (props) => {
          const {id,data} = props ?? {};

          return  putApiV10SponsorId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10SponsorIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10SponsorId>>>
    export type PutApiV10SponsorIdMutationBody = BodyType<SponsorMutate>
    export type PutApiV10SponsorIdMutationError = ErrorType<void>

    /**
 * @summary Update sponsor by ID
 */
export const usePutApiV10SponsorId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10SponsorId>>, TError,{id: string;data: BodyType<SponsorMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10SponsorId>>,
        TError,
        {id: string;data: BodyType<SponsorMutate>},
        TContext
      > => {

      const mutationOptions = getPutApiV10SponsorIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Delete a single sponsor record by its ID
 * @summary Delete sponsor by ID
 */
export const deleteApiV10SponsorId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<DeleteApiV10SponsorId200>(
      {url: `/api/v1.0/sponsor/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiV10SponsorIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10SponsorId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10SponsorId>>, TError,{id: string}, TContext> => {

const mutationKey = ['deleteApiV10SponsorId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiV10SponsorId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiV10SponsorId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiV10SponsorIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiV10SponsorId>>>
    
    export type DeleteApiV10SponsorIdMutationError = ErrorType<void>

    /**
 * @summary Delete sponsor by ID
 */
export const useDeleteApiV10SponsorId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10SponsorId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiV10SponsorId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteApiV10SponsorIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Retrieve a list of sponsors with pagination, filtering and sorting.
Common filters:
- filters=tier==gold
- filters=year==2025
- filters=is_active==true

 * @summary Get all sponsors
 */
export const getApiV10Sponsor = (
    params?: GetApiV10SponsorParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<ResponseGetAllData>(
      {url: `/api/v1.0/sponsor`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10SponsorInfiniteQueryKey = (params?: GetApiV10SponsorParams,) => {
    return [
    'infinite', `/api/v1.0/sponsor`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10SponsorQueryKey = (params?: GetApiV10SponsorParams,) => {
    return [
    `/api/v1.0/sponsor`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10SponsorInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Sponsor>>>, TError = ErrorType<unknown>>(params?: GetApiV10SponsorParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SponsorInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Sponsor>>> = ({ signal }) => getApiV10Sponsor(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SponsorInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Sponsor>>>
export type GetApiV10SponsorInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10SponsorInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Sponsor>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10SponsorParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Sponsor>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Sponsor>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SponsorInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Sponsor>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SponsorParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Sponsor>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Sponsor>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SponsorInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Sponsor>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SponsorParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all sponsors
 */

export function useGetApiV10SponsorInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Sponsor>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SponsorParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SponsorInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10SponsorQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10Sponsor>>, TError = ErrorType<unknown>>(params?: GetApiV10SponsorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SponsorQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Sponsor>>> = ({ signal }) => getApiV10Sponsor(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SponsorQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Sponsor>>>
export type GetApiV10SponsorQueryError = ErrorType<unknown>


export function useGetApiV10Sponsor<TData = Awaited<ReturnType<typeof getApiV10Sponsor>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10SponsorParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Sponsor>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Sponsor>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Sponsor<TData = Awaited<ReturnType<typeof getApiV10Sponsor>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SponsorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Sponsor>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Sponsor>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Sponsor<TData = Awaited<ReturnType<typeof getApiV10Sponsor>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SponsorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all sponsors
 */

export function useGetApiV10Sponsor<TData = Awaited<ReturnType<typeof getApiV10Sponsor>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SponsorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Sponsor>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SponsorQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Create a new sponsor record
 * @summary Create a sponsor
 */
export const postApiV10Sponsor = (
    sponsorMutate: BodyType<SponsorMutate>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10Sponsor200>(
      {url: `/api/v1.0/sponsor`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: sponsorMutate, signal
    },
      options);
    }
  


export const getPostApiV10SponsorMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Sponsor>>, TError,{data: BodyType<SponsorMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10Sponsor>>, TError,{data: BodyType<SponsorMutate>}, TContext> => {

const mutationKey = ['postApiV10Sponsor'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10Sponsor>>, {data: BodyType<SponsorMutate>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10Sponsor(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10SponsorMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10Sponsor>>>
    export type PostApiV10SponsorMutationBody = BodyType<SponsorMutate>
    export type PostApiV10SponsorMutationError = ErrorType<unknown>

    /**
 * @summary Create a sponsor
 */
export const usePostApiV10Sponsor = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Sponsor>>, TError,{data: BodyType<SponsorMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10Sponsor>>,
        TError,
        {data: BodyType<SponsorMutate>},
        TContext
      > => {

      const mutationOptions = getPostApiV10SponsorMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    