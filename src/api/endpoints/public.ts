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
  GetApiV10PublicGalleryParams,
  GetApiV10PublicPageConfigParams,
  GetApiV10PublicPostsParams,
  GetApiV10PublicSiteSettings200,
  GetApiV10PublicSpeakersParams,
  GetApiV10PublicSponsorsParams,
  PostApiV10PublicContactBody,
  PostApiV10PublicRegistrationBody
} from '../models';

import { mainInstance } from '../mutator/custom-instance';
import type { ErrorType , BodyType } from '../mutator/custom-instance';



type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Public list of sponsors for frontend.
Only active records returned.
Use ?grouped=true to get sponsors grouped by tier.

 * @summary Get sponsors (public)
 */
export const getApiV10PublicSponsors = (
    params?: GetApiV10PublicSponsorsParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/public/sponsors`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10PublicSponsorsInfiniteQueryKey = (params?: GetApiV10PublicSponsorsParams,) => {
    return [
    'infinite', `/api/v1.0/public/sponsors`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10PublicSponsorsQueryKey = (params?: GetApiV10PublicSponsorsParams,) => {
    return [
    `/api/v1.0/public/sponsors`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10PublicSponsorsInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, GetApiV10PublicSponsorsParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData, QueryKey, GetApiV10PublicSponsorsParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicSponsorsInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, QueryKey, GetApiV10PublicSponsorsParams['page']> = ({ signal, pageParam }) => getApiV10PublicSponsors({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData, QueryKey, GetApiV10PublicSponsorsParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicSponsorsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicSponsors>>>
export type GetApiV10PublicSponsorsInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10PublicSponsorsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, GetApiV10PublicSponsorsParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicSponsorsParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData, QueryKey, GetApiV10PublicSponsorsParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSponsorsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, GetApiV10PublicSponsorsParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData, QueryKey, GetApiV10PublicSponsorsParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSponsorsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, GetApiV10PublicSponsorsParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData, QueryKey, GetApiV10PublicSponsorsParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get sponsors (public)
 */

export function useGetApiV10PublicSponsorsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, GetApiV10PublicSponsorsParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData, QueryKey, GetApiV10PublicSponsorsParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicSponsorsInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PublicSponsorsQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError = ErrorType<unknown>>(params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicSponsorsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicSponsors>>> = ({ signal }) => getApiV10PublicSponsors(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicSponsorsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicSponsors>>>
export type GetApiV10PublicSponsorsQueryError = ErrorType<unknown>


export function useGetApiV10PublicSponsors<TData = Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicSponsorsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSponsors<TData = Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSponsors>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSponsors<TData = Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get sponsors (public)
 */

export function useGetApiV10PublicSponsors<TData = Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSponsorsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSponsors>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicSponsorsQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Public list of speakers/instructors/advisors for frontend.
Only active records returned.

 * @summary Get speakers (public)
 */
export const getApiV10PublicSpeakers = (
    params?: GetApiV10PublicSpeakersParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/public/speakers`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10PublicSpeakersInfiniteQueryKey = (params?: GetApiV10PublicSpeakersParams,) => {
    return [
    'infinite', `/api/v1.0/public/speakers`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10PublicSpeakersQueryKey = (params?: GetApiV10PublicSpeakersParams,) => {
    return [
    `/api/v1.0/public/speakers`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10PublicSpeakersInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, GetApiV10PublicSpeakersParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData, QueryKey, GetApiV10PublicSpeakersParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicSpeakersInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, QueryKey, GetApiV10PublicSpeakersParams['page']> = ({ signal, pageParam }) => getApiV10PublicSpeakers({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData, QueryKey, GetApiV10PublicSpeakersParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicSpeakersInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>>
export type GetApiV10PublicSpeakersInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10PublicSpeakersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, GetApiV10PublicSpeakersParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicSpeakersParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData, QueryKey, GetApiV10PublicSpeakersParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSpeakersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, GetApiV10PublicSpeakersParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData, QueryKey, GetApiV10PublicSpeakersParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSpeakersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, GetApiV10PublicSpeakersParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData, QueryKey, GetApiV10PublicSpeakersParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get speakers (public)
 */

export function useGetApiV10PublicSpeakersInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, GetApiV10PublicSpeakersParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData, QueryKey, GetApiV10PublicSpeakersParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicSpeakersInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PublicSpeakersQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError = ErrorType<unknown>>(params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicSpeakersQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>> = ({ signal }) => getApiV10PublicSpeakers(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicSpeakersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>>
export type GetApiV10PublicSpeakersQueryError = ErrorType<unknown>


export function useGetApiV10PublicSpeakers<TData = Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicSpeakersParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSpeakers<TData = Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSpeakers>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSpeakers<TData = Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get speakers (public)
 */

export function useGetApiV10PublicSpeakers<TData = Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicSpeakersParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSpeakers>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicSpeakersQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Returns all site configuration as a flat key-value object.
No authentication required. Optimized for frontend consumption.

 * @summary Get all site settings (public)
 */
export const getApiV10PublicSiteSettings = (
    
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<GetApiV10PublicSiteSettings200>(
      {url: `/api/v1.0/public/site-settings`, method: 'GET', signal
    },
      options);
    }
  



export const getGetApiV10PublicSiteSettingsInfiniteQueryKey = () => {
    return [
    'infinite', `/api/v1.0/public/site-settings`
    ] as const;
    }

export const getGetApiV10PublicSiteSettingsQueryKey = () => {
    return [
    `/api/v1.0/public/site-settings`
    ] as const;
    }

    
export const getGetApiV10PublicSiteSettingsInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicSiteSettingsInfiniteQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>> = ({ signal }) => getApiV10PublicSiteSettings(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicSiteSettingsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>>
export type GetApiV10PublicSiteSettingsInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10PublicSiteSettingsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSiteSettingsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSiteSettingsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all site settings (public)
 */

export function useGetApiV10PublicSiteSettingsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicSiteSettingsInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PublicSiteSettingsQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicSiteSettingsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>> = ({ signal }) => getApiV10PublicSiteSettings(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicSiteSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>>
export type GetApiV10PublicSiteSettingsQueryError = ErrorType<unknown>


export function useGetApiV10PublicSiteSettings<TData = Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSiteSettings<TData = Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicSiteSettings<TData = Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get all site settings (public)
 */

export function useGetApiV10PublicSiteSettings<TData = Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicSiteSettings>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicSiteSettingsQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Public endpoint to submit CEO 4.0 registration form. Email must be unique per year.
 * @summary Submit registration form
 */
export const postApiV10PublicRegistration = (
    postApiV10PublicRegistrationBody: BodyType<PostApiV10PublicRegistrationBody>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/public/registration`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postApiV10PublicRegistrationBody, signal
    },
      options);
    }
  


export const getPostApiV10PublicRegistrationMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10PublicRegistration>>, TError,{data: BodyType<PostApiV10PublicRegistrationBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10PublicRegistration>>, TError,{data: BodyType<PostApiV10PublicRegistrationBody>}, TContext> => {

const mutationKey = ['postApiV10PublicRegistration'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10PublicRegistration>>, {data: BodyType<PostApiV10PublicRegistrationBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10PublicRegistration(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10PublicRegistrationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10PublicRegistration>>>
    export type PostApiV10PublicRegistrationMutationBody = BodyType<PostApiV10PublicRegistrationBody>
    export type PostApiV10PublicRegistrationMutationError = ErrorType<void>

    /**
 * @summary Submit registration form
 */
export const usePostApiV10PublicRegistration = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10PublicRegistration>>, TError,{data: BodyType<PostApiV10PublicRegistrationBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10PublicRegistration>>,
        TError,
        {data: BodyType<PostApiV10PublicRegistrationBody>},
        TContext
      > => {

      const mutationOptions = getPostApiV10PublicRegistrationMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    /**
 * Public posts list for frontend.
Only active and released posts returned.
Filter by page_config_code to get posts for a specific section.

 * @summary Get posts (public)
 */
export const getApiV10PublicPosts = (
    params?: GetApiV10PublicPostsParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/public/posts`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10PublicPostsInfiniteQueryKey = (params?: GetApiV10PublicPostsParams,) => {
    return [
    'infinite', `/api/v1.0/public/posts`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10PublicPostsQueryKey = (params?: GetApiV10PublicPostsParams,) => {
    return [
    `/api/v1.0/public/posts`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10PublicPostsInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPosts>>, GetApiV10PublicPostsParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData, QueryKey, GetApiV10PublicPostsParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicPostsInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicPosts>>, QueryKey, GetApiV10PublicPostsParams['page']> = ({ signal, pageParam }) => getApiV10PublicPosts({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData, QueryKey, GetApiV10PublicPostsParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicPostsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicPosts>>>
export type GetApiV10PublicPostsInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10PublicPostsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPosts>>, GetApiV10PublicPostsParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicPostsParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData, QueryKey, GetApiV10PublicPostsParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPosts>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPosts>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPostsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPosts>>, GetApiV10PublicPostsParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData, QueryKey, GetApiV10PublicPostsParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPosts>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPosts>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPostsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPosts>>, GetApiV10PublicPostsParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData, QueryKey, GetApiV10PublicPostsParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get posts (public)
 */

export function useGetApiV10PublicPostsInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPosts>>, GetApiV10PublicPostsParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData, QueryKey, GetApiV10PublicPostsParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicPostsInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PublicPostsQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError = ErrorType<unknown>>(params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicPostsQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicPosts>>> = ({ signal }) => getApiV10PublicPosts(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicPostsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicPosts>>>
export type GetApiV10PublicPostsQueryError = ErrorType<unknown>


export function useGetApiV10PublicPosts<TData = Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicPostsParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPosts>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPosts>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPosts<TData = Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPosts>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPosts>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPosts<TData = Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get posts (public)
 */

export function useGetApiV10PublicPosts<TData = Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPostsParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPosts>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicPostsQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Public navigation tree for frontend.
Returns hierarchical page config structure.

 * @summary Get navigation tree (public)
 */
export const getApiV10PublicPageConfig = (
    params?: GetApiV10PublicPageConfigParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/public/page-config`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10PublicPageConfigInfiniteQueryKey = (params?: GetApiV10PublicPageConfigParams,) => {
    return [
    'infinite', `/api/v1.0/public/page-config`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10PublicPageConfigQueryKey = (params?: GetApiV10PublicPageConfigParams,) => {
    return [
    `/api/v1.0/public/page-config`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10PublicPageConfigInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, GetApiV10PublicPageConfigParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData, QueryKey, GetApiV10PublicPageConfigParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicPageConfigInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, QueryKey, GetApiV10PublicPageConfigParams['page']> = ({ signal, pageParam }) => getApiV10PublicPageConfig({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData, QueryKey, GetApiV10PublicPageConfigParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicPageConfigInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>>
export type GetApiV10PublicPageConfigInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10PublicPageConfigInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, GetApiV10PublicPageConfigParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicPageConfigParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData, QueryKey, GetApiV10PublicPageConfigParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPageConfigInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, GetApiV10PublicPageConfigParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData, QueryKey, GetApiV10PublicPageConfigParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPageConfigInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, GetApiV10PublicPageConfigParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData, QueryKey, GetApiV10PublicPageConfigParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get navigation tree (public)
 */

export function useGetApiV10PublicPageConfigInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, GetApiV10PublicPageConfigParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData, QueryKey, GetApiV10PublicPageConfigParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicPageConfigInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PublicPageConfigQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError = ErrorType<unknown>>(params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicPageConfigQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>> = ({ signal }) => getApiV10PublicPageConfig(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicPageConfigQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>>
export type GetApiV10PublicPageConfigQueryError = ErrorType<unknown>


export function useGetApiV10PublicPageConfig<TData = Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicPageConfigParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPageConfig<TData = Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicPageConfig>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicPageConfig<TData = Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get navigation tree (public)
 */

export function useGetApiV10PublicPageConfig<TData = Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicPageConfigParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicPageConfig>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicPageConfigQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Public gallery images list for frontend.
Only active records returned.

 * @summary Get gallery images (public)
 */
export const getApiV10PublicGallery = (
    params?: GetApiV10PublicGalleryParams,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/public/gallery`, method: 'GET',
        params, signal
    },
      options);
    }
  



export const getGetApiV10PublicGalleryInfiniteQueryKey = (params?: GetApiV10PublicGalleryParams,) => {
    return [
    'infinite', `/api/v1.0/public/gallery`, ...(params ? [params]: [])
    ] as const;
    }

export const getGetApiV10PublicGalleryQueryKey = (params?: GetApiV10PublicGalleryParams,) => {
    return [
    `/api/v1.0/public/gallery`, ...(params ? [params]: [])
    ] as const;
    }

    
export const getGetApiV10PublicGalleryInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicGallery>>, GetApiV10PublicGalleryParams['page']>, TError = ErrorType<unknown>>(params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData, QueryKey, GetApiV10PublicGalleryParams['page']>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicGalleryInfiniteQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicGallery>>, QueryKey, GetApiV10PublicGalleryParams['page']> = ({ signal, pageParam }) => getApiV10PublicGallery({...params, 'page': pageParam || params?.['page']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData, QueryKey, GetApiV10PublicGalleryParams['page']> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicGalleryInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicGallery>>>
export type GetApiV10PublicGalleryInfiniteQueryError = ErrorType<unknown>


export function useGetApiV10PublicGalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicGallery>>, GetApiV10PublicGalleryParams['page']>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicGalleryParams, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData, QueryKey, GetApiV10PublicGalleryParams['page']>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicGallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicGallery>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicGalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicGallery>>, GetApiV10PublicGalleryParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData, QueryKey, GetApiV10PublicGalleryParams['page']>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicGallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicGallery>>, QueryKey
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicGalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicGallery>>, GetApiV10PublicGalleryParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData, QueryKey, GetApiV10PublicGalleryParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get gallery images (public)
 */

export function useGetApiV10PublicGalleryInfinite<TData = InfiniteData<Awaited<ReturnType<typeof getApiV10PublicGallery>>, GetApiV10PublicGalleryParams['page']>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData, QueryKey, GetApiV10PublicGalleryParams['page']>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicGalleryInfiniteQueryOptions(params,options)

  const query = useInfiniteQuery(queryOptions, queryClient) as  UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const getGetApiV10PublicGalleryQueryOptions = <TData = Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError = ErrorType<unknown>>(params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV10PublicGalleryQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiV10PublicGallery>>> = ({ signal }) => getApiV10PublicGallery(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiV10PublicGalleryQueryResult = NonNullable<Awaited<ReturnType<typeof getApiV10PublicGallery>>>
export type GetApiV10PublicGalleryQueryError = ErrorType<unknown>


export function useGetApiV10PublicGallery<TData = Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiV10PublicGalleryParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicGallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicGallery>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicGallery<TData = Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiV10PublicGallery>>,
          TError,
          Awaited<ReturnType<typeof getApiV10PublicGallery>>
        > , 'initialData'
      >, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetApiV10PublicGallery<TData = Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get gallery images (public)
 */

export function useGetApiV10PublicGallery<TData = Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError = ErrorType<unknown>>(
 params?: GetApiV10PublicGalleryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiV10PublicGallery>>, TError, TData>>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGetApiV10PublicGalleryQueryOptions(params,options)

  const query = useQuery(queryOptions, queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * Public contact form submission. No authentication required.
Creates a new contact with status "new".

 * @summary Submit contact form (public)
 */
export const postApiV10PublicContact = (
    postApiV10PublicContactBody: BodyType<PostApiV10PublicContactBody>,
 options?: SecondParameter<typeof mainInstance>,signal?: AbortSignal
) => {
      
      
      return mainInstance<void>(
      {url: `/api/v1.0/public/contact`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postApiV10PublicContactBody, signal
    },
      options);
    }
  


export const getPostApiV10PublicContactMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10PublicContact>>, TError,{data: BodyType<PostApiV10PublicContactBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof postApiV10PublicContact>>, TError,{data: BodyType<PostApiV10PublicContactBody>}, TContext> => {

const mutationKey = ['postApiV10PublicContact'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiV10PublicContact>>, {data: BodyType<PostApiV10PublicContactBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiV10PublicContact(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV10PublicContactMutationResult = NonNullable<Awaited<ReturnType<typeof postApiV10PublicContact>>>
    export type PostApiV10PublicContactMutationBody = BodyType<PostApiV10PublicContactBody>
    export type PostApiV10PublicContactMutationError = ErrorType<unknown>

    /**
 * @summary Submit contact form (public)
 */
export const usePostApiV10PublicContact = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiV10PublicContact>>, TError,{data: BodyType<PostApiV10PublicContactBody>}, TContext>, request?: SecondParameter<typeof mainInstance>}
 , queryClient?: QueryClient): UseMutationResult<
        Awaited<ReturnType<typeof postApiV10PublicContact>>,
        TError,
        {data: BodyType<PostApiV10PublicContactBody>},
        TContext
      > => {

      const mutationOptions = getPostApiV10PublicContactMutationOptions(options);

      return useMutation(mutationOptions, queryClient);
    }
    