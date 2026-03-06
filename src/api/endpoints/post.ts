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
  GetApiV10PostId200,
  GetApiV10PostParams,
  PostApiV10Post200,
  PostApiV10PostBody,
  PutApiV10PostId200,
  PutApiV10PostIdBody
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Retrieve a single post record by its ID (includes categories)
 * @summary Get post by ID
 */
export const getApiV10PostId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10PostId200>(
      {url: `/api/v1.0/post/${id}`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10PostIdInfiniteQueryKey = (id?: string,) => {
    return [
    'infinite', `/api/v1.0/post/${id}`
    ] as const;
    }

export const getGetApiV10PostIdQueryKey = (id?: string,) => {
    return [
    `/api/v1.0/post/${id}`
    ] as const;
    }

    
export const getGetApiV10PostIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PostId>>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PostIdInfiniteQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PostId>>> = ({ signal }) => getApiV10PostId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PostIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PostId>>>
export type GetApiV10PostIdInfiniteQueryError = ErrorType<void>


export function useGetApiV10PostIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PostId>>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PostId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PostId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PostIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PostId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PostId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PostId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PostIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PostId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get post by ID
 */

export function useGetApiV10PostIdInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PostId>>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PostIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PostIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10PostId>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PostIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PostId>>> = ({ signal }) => getApiV10PostId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PostIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PostId>>>
export type GetApiV10PostIdQueryError = ErrorType<void>


export function useGetApiV10PostId<TData = Awaited<ReturnType<typeof getApiV10PostId>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PostId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PostId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PostId<TData = Awaited<ReturnType<typeof getApiV10PostId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PostId>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PostId>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PostId<TData = Awaited<ReturnType<typeof getApiV10PostId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get post by ID
 */

export function useGetApiV10PostId<TData = Awaited<ReturnType<typeof getApiV10PostId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PostId>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PostIdQueryOptions(id,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Update a post by ID.
category_ids behavior:
- Not provided: do not change existing category mappings
- Provided as []: remove all category mappings
- Provided as [ids...]: replace all mappings by the provided ids
Rule: all category_ids must exist and must be same type (post | trade | industry).

 * @summary Update post by ID
 */
export const putApiV10PostId = (
    id: string,
    putApiV10PostIdBody: BodyType<PutApiV10PostIdBody>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<PutApiV10PostId200>(
      {url: `/api/v1.0/post/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: putApiV10PostIdBody
    },
      options);
    }
  


export const getPutApiV10PostIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10PostId>>, TError,{id: string;data: BodyType<PutApiV10PostIdBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10PostId>>, TError,{id: string;data: BodyType<PutApiV10PostIdBody>}, TContext> => {

const mutationKey = ['putApiV10PostId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10PostId>>, {id: string;data: BodyType<PutApiV10PostIdBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  putApiV10PostId(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10PostIdMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10PostId>>>
    export type PutApiV10PostIdMutationBody = BodyType<PutApiV10PostIdBody>
    export type PutApiV10PostIdMutationError = ErrorType<void>

    /**
 * @summary Update post by ID
 */
export const usePutApiV10PostId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10PostId>>, TError,{id: string;data: BodyType<PutApiV10PostIdBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10PostId>>,
        TError,
        {id: string;data: BodyType<PutApiV10PostIdBody>},
        TContext
      > => {

      const mutationOptions = getPutApiV10PostIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Delete a single post record by its ID
 * @summary Delete post by ID
 */
export const deleteApiV10PostId = (
    id: string,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/post/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getDeleteApiV10PostIdMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10PostId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10PostId>>, TError,{id: string}, TContext> => {

const mutationKey = ['deleteApiV10PostId'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiV10PostId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiV10PostId(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiV10PostIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiV10PostId>>>
    
    export type DeleteApiV10PostIdMutationError = ErrorType<void>

    /**
 * @summary Delete post by ID
 */
export const useDeleteApiV10PostId = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiV10PostId>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof deleteApiV10PostId>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteApiV10PostIdMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Retrieve a list of post with pagination, filtering and sorting (includes categories).
Extra filter supported:
- filters=category.type==trade (allowed: post, trade, industry)
- filters=category.type==(trade|post)
- filters=category.id=={categoryId}

 * @summary Get all post
 */
export const getApiV10Post = (
    params?: GetApiV10PostParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/post`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10PostInfiniteQueryKey = (params?: GetApiV10PostParams,) => {
    return [
    'infinite', `/api/v1.0/post`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10PostQueryKey = (params?: GetApiV10PostParams,) => {
    return [
    `/api/v1.0/post`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10PostInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Post>>>, TError = ErrorType<unknown>>(params?: GetApiV10PostParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PostInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Post>>> = ({ signal }) => getApiV10Post(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PostInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Post>>>
export type GetApiV10PostInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10PostInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Post>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PostParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Post>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Post>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PostInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Post>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PostParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Post>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Post>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PostInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Post>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PostParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all post
 */

export function useGetApiV10PostInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10Post>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PostParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PostInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PostQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10Post>>, TError = ErrorType<unknown>>(params?: GetApiV10PostParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PostQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10Post>>> = ({ signal }) => getApiV10Post(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PostQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10Post>>>
export type GetApiV10PostQueryError = ErrorType<unknown>


export function useGetApiV10Post<TData = Awaited<ReturnType<typeof getApiV10Post>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PostParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Post>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Post>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Post<TData = Awaited<ReturnType<typeof getApiV10Post>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PostParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10Post>>,
          TError,
          Awaited<ReturnType<typeof getApiV10Post>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10Post<TData = Awaited<ReturnType<typeof getApiV10Post>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PostParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all post
 */

export function useGetApiV10Post<TData = Awaited<ReturnType<typeof getApiV10Post>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PostParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10Post>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PostQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Create a new post record.
If category_ids is provided, it will link this post to those categories.
Rule: all category_ids must exist and must be same type (post | trade | industry).

 * @summary Create a post
 */
export const postApiV10Post = (
    postApiV10PostBody: BodyType<PostApiV10PostBody>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<PostApiV10Post200>(
      {url: `/api/v1.0/post`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postApiV10PostBody, signal
    },
      options);
    }
  


export const getPostApiV10PostMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Post>>, TError,{data: BodyType<PostApiV10PostBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10Post>>, TError,{data: BodyType<PostApiV10PostBody>}, TContext> => {

const mutationKey = ['postApiV10Post'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10Post>>, {data: BodyType<PostApiV10PostBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10Post(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10PostMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10Post>>>
    export type PostApiV10PostMutationBody = BodyType<PostApiV10PostBody>
    export type PostApiV10PostMutationError = ErrorType<void>

    /**
 * @summary Create a post
 */
export const usePostApiV10Post = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10Post>>, TError,{data: BodyType<PostApiV10PostBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10Post>>,
        TError,
        {data: BodyType<PostApiV10PostBody>},
        TContext
      > => {

      const mutationOptions = getPostApiV10PostMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    