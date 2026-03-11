/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  DeleteApiV10TermId200,
  GetApiV10Term200,
  GetApiV10TermId200,
  GetApiV10TermParams,
  PostApiV10Term201,
  PostApiV10TermBody,
  PutApiV10TermId200,
  PutApiV10TermIdBody
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Retrieve a single term with positions and members
 * @summary Get term by ID
 */
export const getApiV10TermId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10TermId200>(
      {url: `/api/v1.0/term/${id}`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10TermIdInfiniteQueryKey = (id?: string,) => {
    return [
    'infinite', `/api/v1.0/term/${id}`
    ] as const;
    }

export const getGetApiV10TermIdQueryKey = (id?: string,) => {
    return [
    `/api/v1.0/term/${id}`
    ] as const;
    }

    
export const getGetApiV10TermIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10TermId>>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10TermIdInfiniteQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10TermId>>> = ({ signal }) => getApiV10TermId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10TermIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10TermId>>>
export type GetApiV10TermIdInfiniteQueryError = ErrorType<void>


export function useGetApiV10TermIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10TermId>>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10TermId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10TermId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10TermIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10TermId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10TermId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10TermId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10TermIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10TermId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get term by ID
 */

export function useGetApiV10TermIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10TermId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10TermIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10TermIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10TermId>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10TermIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10TermId>>> = ({ signal }) => getApiV10TermId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10TermIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10TermId>>>
export type GetApiV10TermIdQueryError = ErrorType<void>


export function useGetApiV10TermId<TData = Awaited<ReturnType<typeof getApiV10TermId>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10TermId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10TermId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10TermId<TData = Awaited<ReturnType<typeof getApiV10TermId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10TermId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10TermId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10TermId<TData = Awaited<ReturnType<typeof getApiV10TermId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get term by ID
 */

export function useGetApiV10TermId<TData = Awaited<ReturnType<typeof getApiV10TermId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10TermId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10TermIdQueryOptions(id,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Update term fields and optionally replace positions and members
 * @summary Update term by ID
 */
export const putApiV10TermId = (
    id: string,
    putApiV10TermIdBody: BodyType<PutApiV10TermIdBody>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<PutApiV10TermId200>(
      {url: `/api/v1.0/term/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: putApiV10TermIdBody
    },
      options);
    }
  


export const getPutApiV10TermIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10TermId>>, TError,{id: string;data: BodyType<PutApiV10TermIdBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10TermId>>, TError,{id: string;data: BodyType<PutApiV10TermIdBody>}, TContext> => {

const mutationKey = ['putApiV10TermId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10TermId>>, {id: string;data: BodyType<PutApiV10TermIdBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  putApiV10TermId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10TermIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10TermId>>>
    export type PutApiV10TermIdMutationBody = BodyType<PutApiV10TermIdBody>
    export type PutApiV10TermIdMutationError = ErrorType<void>

    /**
 * @summary Update term by ID
 */
export const usePutApiV10TermId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10TermId>>, TError,{id: string;data: BodyType<PutApiV10TermIdBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10TermId>>,
        TError,
        {id: string;data: BodyType<PutApiV10TermIdBody>},
        TContext
      > => {

      const mutationOptions = getPutApiV10TermIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Delete a term and its related positions and members
 * @summary Delete term by ID
 */
export const deleteApiV10TermId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<DeleteApiV10TermId200>(
      {url: `/api/v1.0/term/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiV10TermIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10TermId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10TermId>>, TError,{id: string}, TContext> => {

const mutationKey = ['deleteApiV10TermId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiV10TermId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiV10TermId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiV10TermIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiV10TermId>>>
    
    export type DeleteApiV10TermIdMutationError = ErrorType<void>

    /**
 * @summary Delete term by ID
 */
export const useDeleteApiV10TermId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10TermId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiV10TermId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteApiV10TermIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Retrieve a list of terms with positions and members (pagination, filtering, sorting)
 * @summary Get all terms
 */
export const getApiV10Term = (
    params?: GetApiV10TermParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10Term200>(
      {url: `/api/v1.0/term`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10TermInfiniteQueryKey = (params?: GetApiV10TermParams,) => {
    return [
    'infinite', `/api/v1.0/term`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10TermQueryKey = (params?: GetApiV10TermParams,) => {
    return [
    `/api/v1.0/term`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10TermInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Term>>, GetApiV10TermParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10TermParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData, QueryKey, GetApiV10TermParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10TermInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Term>>, QueryKey, GetApiV10TermParams['page']> = ({ signal, pageParam }) => getApiV10Term({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData, QueryKey, GetApiV10TermParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10TermInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Term>>>
export type GetApiV10TermInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10TermInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Term>>, GetApiV10TermParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10TermParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData, QueryKey, GetApiV10TermParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Term>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Term>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10TermInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Term>>, GetApiV10TermParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10TermParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData, QueryKey, GetApiV10TermParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Term>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Term>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10TermInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Term>>, GetApiV10TermParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10TermParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData, QueryKey, GetApiV10TermParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all terms
 */

export function useGetApiV10TermInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Term>>, GetApiV10TermParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10TermParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData, QueryKey, GetApiV10TermParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10TermInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10TermQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10Term>>, TError = ErrorType<unknown>>(params?: GetApiV10TermParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10TermQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Term>>> = ({ signal }) => getApiV10Term(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10TermQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Term>>>
export type GetApiV10TermQueryError = ErrorType<unknown>


export function useGetApiV10Term<TData = Awaited<ReturnType<typeof getApiV10Term>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10TermParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Term>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Term>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Term<TData = Awaited<ReturnType<typeof getApiV10Term>>, TError = ErrorType<unknown>>(
 params?: GetApiV10TermParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Term>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Term>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Term<TData = Awaited<ReturnType<typeof getApiV10Term>>, TError = ErrorType<unknown>>(
 params?: GetApiV10TermParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all terms
 */

export function useGetApiV10Term<TData = Awaited<ReturnType<typeof getApiV10Term>>, TError = ErrorType<unknown>>(
 params?: GetApiV10TermParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Term>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10TermQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Create a new term with positions and members
 * @summary Create a term
 */
export const postApiV10Term = (
    postApiV10TermBody: BodyType<PostApiV10TermBody>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10Term201>(
      {url: `/api/v1.0/term`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postApiV10TermBody, signal
    },
      options);
    }
  


export const getPostApiV10TermMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Term>>, TError,{data: BodyType<PostApiV10TermBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10Term>>, TError,{data: BodyType<PostApiV10TermBody>}, TContext> => {

const mutationKey = ['postApiV10Term'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10Term>>, {data: BodyType<PostApiV10TermBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10Term(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10TermMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10Term>>>
    export type PostApiV10TermMutationBody = BodyType<PostApiV10TermBody>
    export type PostApiV10TermMutationError = ErrorType<unknown>

    /**
 * @summary Create a term
 */
export const usePostApiV10Term = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Term>>, TError,{data: BodyType<PostApiV10TermBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10Term>>,
        TError,
        {data: BodyType<PostApiV10TermBody>},
        TContext
      > => {

      const mutationOptions = getPostApiV10TermMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    