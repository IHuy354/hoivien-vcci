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
  DeleteApiV10GalleryId200,
  GalleryMutate,
  GetApiV10GalleryId200,
  GetApiV10GalleryParams,
  PostApiV10Gallery200,
  PutApiV10GalleryId200,
  ResponseGetAllData
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Retrieve a single gallery item by its ID
 * @summary Get gallery item by ID
 */
export const getApiV10GalleryId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10GalleryId200>(
      {url: `/api/v1.0/gallery/${id}`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10GalleryIdInfiniteQueryKey = (id?: string,) => {
    return [
    'infinite', `/api/v1.0/gallery/${id}`
    ] as const;
    }

export const getGetApiV10GalleryIdQueryKey = (id?: string,) => {
    return [
    `/api/v1.0/gallery/${id}`
    ] as const;
    }

    
export const getGetApiV10GalleryIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10GalleryId>>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10GalleryIdInfiniteQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10GalleryId>>> = ({ signal }) => getApiV10GalleryId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10GalleryIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10GalleryId>>>
export type GetApiV10GalleryIdInfiniteQueryError = ErrorType<void>


export function useGetApiV10GalleryIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10GalleryId>>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10GalleryId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10GalleryId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10GalleryIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10GalleryId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10GalleryId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10GalleryId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10GalleryIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10GalleryId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get gallery item by ID
 */

export function useGetApiV10GalleryIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10GalleryId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10GalleryIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10GalleryIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10GalleryId>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10GalleryIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10GalleryId>>> = ({ signal }) => getApiV10GalleryId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10GalleryIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10GalleryId>>>
export type GetApiV10GalleryIdQueryError = ErrorType<void>


export function useGetApiV10GalleryId<TData = Awaited<ReturnType<typeof getApiV10GalleryId>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10GalleryId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10GalleryId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10GalleryId<TData = Awaited<ReturnType<typeof getApiV10GalleryId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10GalleryId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10GalleryId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10GalleryId<TData = Awaited<ReturnType<typeof getApiV10GalleryId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get gallery item by ID
 */

export function useGetApiV10GalleryId<TData = Awaited<ReturnType<typeof getApiV10GalleryId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10GalleryId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10GalleryIdQueryOptions(id,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Update a single gallery item by its ID
 * @summary Update gallery item by ID
 */
export const putApiV10GalleryId = (
    id: string,
    galleryMutate: BodyType<GalleryMutate>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<PutApiV10GalleryId200>(
      {url: `/api/v1.0/gallery/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: galleryMutate
    },
      options);
    }
  


export const getPutApiV10GalleryIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10GalleryId>>, TError,{id: string;data: BodyType<GalleryMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10GalleryId>>, TError,{id: string;data: BodyType<GalleryMutate>}, TContext> => {

const mutationKey = ['putApiV10GalleryId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10GalleryId>>, {id: string;data: BodyType<GalleryMutate>}> = (props) => {
          const {id,data} = props ?? {};

          return  putApiV10GalleryId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10GalleryIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10GalleryId>>>
    export type PutApiV10GalleryIdMutationBody = BodyType<GalleryMutate>
    export type PutApiV10GalleryIdMutationError = ErrorType<void>

    /**
 * @summary Update gallery item by ID
 */
export const usePutApiV10GalleryId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10GalleryId>>, TError,{id: string;data: BodyType<GalleryMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10GalleryId>>,
        TError,
        {id: string;data: BodyType<GalleryMutate>},
        TContext
      > => {

      const mutationOptions = getPutApiV10GalleryIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Delete a single gallery item by its ID
 * @summary Delete gallery item by ID
 */
export const deleteApiV10GalleryId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<DeleteApiV10GalleryId200>(
      {url: `/api/v1.0/gallery/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiV10GalleryIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10GalleryId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10GalleryId>>, TError,{id: string}, TContext> => {

const mutationKey = ['deleteApiV10GalleryId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiV10GalleryId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiV10GalleryId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiV10GalleryIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiV10GalleryId>>>
    
    export type DeleteApiV10GalleryIdMutationError = ErrorType<void>

    /**
 * @summary Delete gallery item by ID
 */
export const useDeleteApiV10GalleryId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10GalleryId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiV10GalleryId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteApiV10GalleryIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Retrieve a list of gallery items with pagination, filtering and sorting.
Common filters:
- filters=category==learning
- filters=category==graduation
- filters=year==2025
- filters=is_active==true

 * @summary Get all gallery items
 */
export const getApiV10Gallery = (
    params?: GetApiV10GalleryParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<ResponseGetAllData>(
      {url: `/api/v1.0/gallery`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10GalleryInfiniteQueryKey = (params?: GetApiV10GalleryParams,) => {
    return [
    'infinite', `/api/v1.0/gallery`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10GalleryQueryKey = (params?: GetApiV10GalleryParams,) => {
    return [
    `/api/v1.0/gallery`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10GalleryInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Gallery>>, GetApiV10GalleryParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10GalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData, QueryKey, GetApiV10GalleryParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10GalleryInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Gallery>>, QueryKey, GetApiV10GalleryParams['page']> = ({ signal, pageParam }) => getApiV10Gallery({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData, QueryKey, GetApiV10GalleryParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10GalleryInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Gallery>>>
export type GetApiV10GalleryInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10GalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Gallery>>, GetApiV10GalleryParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10GalleryParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData, QueryKey, GetApiV10GalleryParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Gallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Gallery>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10GalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Gallery>>, GetApiV10GalleryParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10GalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData, QueryKey, GetApiV10GalleryParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Gallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Gallery>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10GalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Gallery>>, GetApiV10GalleryParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10GalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData, QueryKey, GetApiV10GalleryParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all gallery items
 */

export function useGetApiV10GalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Gallery>>, GetApiV10GalleryParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10GalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData, QueryKey, GetApiV10GalleryParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10GalleryInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10GalleryQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10Gallery>>, TError = ErrorType<unknown>>(params?: GetApiV10GalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10GalleryQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Gallery>>> = ({ signal }) => getApiV10Gallery(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10GalleryQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Gallery>>>
export type GetApiV10GalleryQueryError = ErrorType<unknown>


export function useGetApiV10Gallery<TData = Awaited<ReturnType<typeof getApiV10Gallery>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10GalleryParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Gallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Gallery>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Gallery<TData = Awaited<ReturnType<typeof getApiV10Gallery>>, TError = ErrorType<unknown>>(
 params?: GetApiV10GalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Gallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Gallery>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Gallery<TData = Awaited<ReturnType<typeof getApiV10Gallery>>, TError = ErrorType<unknown>>(
 params?: GetApiV10GalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all gallery items
 */

export function useGetApiV10Gallery<TData = Awaited<ReturnType<typeof getApiV10Gallery>>, TError = ErrorType<unknown>>(
 params?: GetApiV10GalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Gallery>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10GalleryQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Create a new gallery image record
 * @summary Create a gallery item
 */
export const postApiV10Gallery = (
    galleryMutate: BodyType<GalleryMutate>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10Gallery200>(
      {url: `/api/v1.0/gallery`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: galleryMutate, signal
    },
      options);
    }
  


export const getPostApiV10GalleryMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Gallery>>, TError,{data: BodyType<GalleryMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10Gallery>>, TError,{data: BodyType<GalleryMutate>}, TContext> => {

const mutationKey = ['postApiV10Gallery'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10Gallery>>, {data: BodyType<GalleryMutate>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10Gallery(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10GalleryMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10Gallery>>>
    export type PostApiV10GalleryMutationBody = BodyType<GalleryMutate>
    export type PostApiV10GalleryMutationError = ErrorType<unknown>

    /**
 * @summary Create a gallery item
 */
export const usePostApiV10Gallery = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Gallery>>, TError,{data: BodyType<GalleryMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10Gallery>>,
        TError,
        {data: BodyType<GalleryMutate>},
        TContext
      > => {

      const mutationOptions = getPostApiV10GalleryMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    