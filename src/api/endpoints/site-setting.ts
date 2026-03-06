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
  GetApiV10SiteSetting200,
  GetApiV10SiteSettingParams,
  PutApiV10SiteSetting200,
  PutApiV10SiteSettingBody
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Retrieve all site settings. Optionally filter by group.
Query: ?group=general | ?group=contact | ?group=social | ?group=counter | ?group=event | ?group=seo

 * @summary Get all site settings
 */
export const getApiV10SiteSetting = (
    params?: GetApiV10SiteSettingParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10SiteSetting200>(
      {url: `/api/v1.0/siteSetting`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10SiteSettingInfiniteQueryKey = (params?: GetApiV10SiteSettingParams,) => {
    return [
    'infinite', `/api/v1.0/siteSetting`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10SiteSettingQueryKey = (params?: GetApiV10SiteSettingParams,) => {
    return [
    `/api/v1.0/siteSetting`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10SiteSettingInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SiteSetting>>>, TError = ErrorType<unknown>>(params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SiteSettingInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10SiteSetting>>> = ({ signal }) => getApiV10SiteSetting(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SiteSettingInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10SiteSetting>>>
export type GetApiV10SiteSettingInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10SiteSettingInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SiteSetting>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10SiteSettingParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SiteSetting>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SiteSetting>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SiteSettingInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SiteSetting>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SiteSetting>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SiteSetting>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SiteSettingInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SiteSetting>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all site settings
 */

export function useGetApiV10SiteSettingInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10SiteSetting>>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SiteSettingInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10SiteSettingQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError = ErrorType<unknown>>(params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10SiteSettingQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10SiteSetting>>> = ({ signal }) => getApiV10SiteSetting(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10SiteSettingQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10SiteSetting>>>
export type GetApiV10SiteSettingQueryError = ErrorType<unknown>


export function useGetApiV10SiteSetting<TData = Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10SiteSettingParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SiteSetting>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SiteSetting>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SiteSetting<TData = Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10SiteSetting>>,
          TError,
          Awaited<ReturnType<typeof getApiV10SiteSetting>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10SiteSetting<TData = Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all site settings
 */

export function useGetApiV10SiteSetting<TData = Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError = ErrorType<unknown>>(
 params?: GetApiV10SiteSettingParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10SiteSetting>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10SiteSettingQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Update one or more site settings by key.
All keys must already exist in the database.

 * @summary Bulk update site settings
 */
export const putApiV10SiteSetting = (
    putApiV10SiteSettingBody: BodyType<PutApiV10SiteSettingBody>,
 options?: SecondParameter<typeof mainInstance>,) => {
      
      
      return mainInstance<PutApiV10SiteSetting200>(
      {url: `/api/v1.0/siteSetting`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: putApiV10SiteSettingBody
    },
      options);
    }
  


export const getPutApiV10SiteSettingMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10SiteSetting>>, TError,{data: BodyType<PutApiV10SiteSettingBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof putApiV10SiteSetting>>, TError,{data: BodyType<PutApiV10SiteSettingBody>}, TContext> => {

const mutationKey = ['putApiV10SiteSetting'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiV10SiteSetting>>, {data: BodyType<PutApiV10SiteSettingBody>}> = (props) => {
          const {data} = props ?? {};

          return  putApiV10SiteSetting(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiV10SiteSettingMutationResult = NonNullable<Awaited<ReturnType<typeof putApiV10SiteSetting>>>
    export type PutApiV10SiteSettingMutationBody = BodyType<PutApiV10SiteSettingBody>
    export type PutApiV10SiteSettingMutationError = ErrorType<unknown>

    /**
 * @summary Bulk update site settings
 */
export const usePutApiV10SiteSetting = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiV10SiteSetting>>, TError,{data: BodyType<PutApiV10SiteSettingBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof putApiV10SiteSetting>>,
        TError,
        {data: BodyType<PutApiV10SiteSettingBody>},
        TContext
      > => {

      const mutationOptions = getPutApiV10SiteSettingMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    