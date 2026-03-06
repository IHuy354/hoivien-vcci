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
  DeleteApiV10SpeakerId200,
  GetApiV10SpeakerId200,
  GetApiV10SpeakerParams,
  PostApiV10Speaker200,
  PutApiV10SpeakerId200,
  ResponseGetAllData,
  SpeakerMutate
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Retrieve a single speaker record by its ID
 * @summary Get speaker by ID
 */
export const getApiV10SpeakerId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10SpeakerId200>(
      {url: `/api/v1.0/speaker/${id}`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10SpeakerIdInfiniteQueryKey = (id?: string,) => {
    return [
    'infinite', `/api/v1.0/speaker/${id}`
    ] as const;
    }

export const getGetApiV10SpeakerIdQueryKey = (id?: string,) => {
    return [
    `/api/v1.0/speaker/${id}`
    ] as const;
    }

    
export const getGetApiV10SpeakerIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SpeakerId>>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SpeakerIdInfiniteQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10SpeakerId>>> = ({ signal }) => getApiV10SpeakerId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SpeakerIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10SpeakerId>>>
export type GetApiV10SpeakerIdInfiniteQueryError = ErrorType<void>


export function useGetApiV10SpeakerIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SpeakerId>>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SpeakerId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SpeakerId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SpeakerIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SpeakerId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SpeakerId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SpeakerId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SpeakerIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SpeakerId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get speaker by ID
 */

export function useGetApiV10SpeakerIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SpeakerId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SpeakerIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10SpeakerIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SpeakerIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10SpeakerId>>> = ({ signal }) => getApiV10SpeakerId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SpeakerIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10SpeakerId>>>
export type GetApiV10SpeakerIdQueryError = ErrorType<void>


export function useGetApiV10SpeakerId<TData = Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SpeakerId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SpeakerId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SpeakerId<TData = Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SpeakerId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SpeakerId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SpeakerId<TData = Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get speaker by ID
 */

export function useGetApiV10SpeakerId<TData = Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SpeakerId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SpeakerIdQueryOptions(id,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Update a single speaker record by its ID
 * @summary Update speaker by ID
 */
export const putApiV10SpeakerId = (
    id: string,
    speakerMutate: BodyType<SpeakerMutate>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<PutApiV10SpeakerId200>(
      {url: `/api/v1.0/speaker/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: speakerMutate
    },
      options);
    }
  


export const getPutApiV10SpeakerIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10SpeakerId>>, TError,{id: string;data: BodyType<SpeakerMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10SpeakerId>>, TError,{id: string;data: BodyType<SpeakerMutate>}, TContext> => {

const mutationKey = ['putApiV10SpeakerId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10SpeakerId>>, {id: string;data: BodyType<SpeakerMutate>}> = (props) => {
          const {id,data} = props ?? {};

          return  putApiV10SpeakerId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10SpeakerIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10SpeakerId>>>
    export type PutApiV10SpeakerIdMutationBody = BodyType<SpeakerMutate>
    export type PutApiV10SpeakerIdMutationError = ErrorType<void>

    /**
 * @summary Update speaker by ID
 */
export const usePutApiV10SpeakerId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10SpeakerId>>, TError,{id: string;data: BodyType<SpeakerMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10SpeakerId>>,
        TError,
        {id: string;data: BodyType<SpeakerMutate>},
        TContext
      > => {

      const mutationOptions = getPutApiV10SpeakerIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Delete a single speaker record by its ID
 * @summary Delete speaker by ID
 */
export const deleteApiV10SpeakerId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<DeleteApiV10SpeakerId200>(
      {url: `/api/v1.0/speaker/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiV10SpeakerIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10SpeakerId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10SpeakerId>>, TError,{id: string}, TContext> => {

const mutationKey = ['deleteApiV10SpeakerId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiV10SpeakerId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiV10SpeakerId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiV10SpeakerIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiV10SpeakerId>>>
    
    export type DeleteApiV10SpeakerIdMutationError = ErrorType<void>

    /**
 * @summary Delete speaker by ID
 */
export const useDeleteApiV10SpeakerId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10SpeakerId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiV10SpeakerId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteApiV10SpeakerIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Retrieve a list of speakers with pagination, filtering and sorting.
Common filters:
- filters=type==speaker
- filters=type==instructor
- filters=type==advisor
- filters=year==2025
- filters=is_active==true

 * @summary Get all speakers
 */
export const getApiV10Speaker = (
    params?: GetApiV10SpeakerParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<ResponseGetAllData>(
      {url: `/api/v1.0/speaker`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10SpeakerInfiniteQueryKey = (params?: GetApiV10SpeakerParams,) => {
    return [
    'infinite', `/api/v1.0/speaker`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10SpeakerQueryKey = (params?: GetApiV10SpeakerParams,) => {
    return [
    `/api/v1.0/speaker`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10SpeakerInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Speaker>>>, TError = ErrorType<unknown>>(params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SpeakerInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Speaker>>> = ({ signal }) => getApiV10Speaker(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SpeakerInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Speaker>>>
export type GetApiV10SpeakerInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10SpeakerInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Speaker>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10SpeakerParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Speaker>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Speaker>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SpeakerInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Speaker>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Speaker>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Speaker>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SpeakerInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Speaker>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all speakers
 */

export function useGetApiV10SpeakerInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Speaker>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SpeakerInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10SpeakerQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10Speaker>>, TError = ErrorType<unknown>>(params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SpeakerQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Speaker>>> = ({ signal }) => getApiV10Speaker(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SpeakerQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Speaker>>>
export type GetApiV10SpeakerQueryError = ErrorType<unknown>


export function useGetApiV10Speaker<TData = Awaited<ReturnType<typeof getApiV10Speaker>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10SpeakerParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Speaker>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Speaker>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Speaker<TData = Awaited<ReturnType<typeof getApiV10Speaker>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Speaker>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Speaker>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Speaker<TData = Awaited<ReturnType<typeof getApiV10Speaker>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all speakers
 */

export function useGetApiV10Speaker<TData = Awaited<ReturnType<typeof getApiV10Speaker>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SpeakerParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Speaker>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SpeakerQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Create a new speaker/instructor/advisor/director record
 * @summary Create a speaker
 */
export const postApiV10Speaker = (
    speakerMutate: BodyType<SpeakerMutate>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10Speaker200>(
      {url: `/api/v1.0/speaker`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: speakerMutate, signal
    },
      options);
    }
  


export const getPostApiV10SpeakerMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Speaker>>, TError,{data: BodyType<SpeakerMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10Speaker>>, TError,{data: BodyType<SpeakerMutate>}, TContext> => {

const mutationKey = ['postApiV10Speaker'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10Speaker>>, {data: BodyType<SpeakerMutate>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10Speaker(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10SpeakerMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10Speaker>>>
    export type PostApiV10SpeakerMutationBody = BodyType<SpeakerMutate>
    export type PostApiV10SpeakerMutationError = ErrorType<unknown>

    /**
 * @summary Create a speaker
 */
export const usePostApiV10Speaker = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Speaker>>, TError,{data: BodyType<SpeakerMutate>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10Speaker>>,
        TError,
        {data: BodyType<SpeakerMutate>},
        TContext
      > => {

      const mutationOptions = getPostApiV10SpeakerMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    