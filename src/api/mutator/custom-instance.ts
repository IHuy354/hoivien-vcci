// Core
import Axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "sonner";
import { isUndefined } from "lodash-es";

// App
import useAuthStore from "@stores/auth";
import { shouldRefreshToken } from "@/utils/token";
import baseConfig from "@/configs/base";

// ─── Axios Instance ───────────────────────────────────────────────────────────

export const AXIOS_INSTANCE = Axios.create({
  baseURL: baseConfig.backendDomain,
  timeout: 60000,
});

// ─── Refresh Token State ──────────────────────────────────────────────────────

let isRefreshing = false;
let refreshTokenPromise: Promise<string> | null = null;

interface QueuedRequest {
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
}

let failedQueue: QueuedRequest[] = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null,
): void => {
  failedQueue.forEach((request) => {
    if (error) {
      request.reject(error);
    } else if (token) {
      request.resolve(token);
    }
  });
  failedQueue = [];
};

const addToQueue = (
  resolve: (token: string) => void,
  reject: (error: AxiosError) => void,
): void => {
  failedQueue.push({ resolve, reject });
};

// ─── Refresh Access Token ─────────────────────────────────────────────────────

const refreshAccessToken = async (): Promise<string> => {
  // Import dynamically to avoid circular dependency
  const { postApiV10AuthRefresh } = await import("../endpoints/authentication");
  const store = useAuthStore.getState();

  const refreshToken = store.refreshToken;

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await postApiV10AuthRefresh({ refresh_token: refreshToken });

  // API trả về { responseData: { access_token, refresh_token, ... } }
  const responseData = (response as { responseData?: { access_token?: string; refresh_token?: string; session?: { expires_at?: string } } })?.responseData;
  const newAccessToken = responseData?.access_token;
  const newRefreshToken = responseData?.refresh_token;

  if (!newAccessToken) {
    throw new Error("Refresh token failed - no access token returned");
  }

  const newToken = newAccessToken;

  useAuthStore.getState().setStore({
    token: newToken,
    ...(newRefreshToken ? { refreshToken: newRefreshToken } : {}),
    ...(responseData?.session?.expires_at
      ? { expiredAt: new Date(responseData.session.expires_at) }
      : {}),
  });

  return newToken;
};

// ─── Request Interceptor ──────────────────────────────────────────────────────

AXIOS_INSTANCE.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;

    // Skip auth for public endpoints
    const publicEndpoints = [
      "/api/auth/login",
      "/api/auth/register",
      "/api/auth/forgot-password",
      "/api/auth/refresh-token",
    ];
    const isPublicEndpoint = publicEndpoints.some((endpoint) =>
      config.url?.includes(endpoint),
    );

    if (isPublicEndpoint) return config;
    if (!token) return config;

    // Proactive refresh — if token expires in < 5 minutes
    if (shouldRefreshToken(token, 5)) {
      try {
        if (isRefreshing && refreshTokenPromise) {
          const newToken = await refreshTokenPromise;
          if (config.headers) {
            config.headers.Authorization = `Bearer ${newToken}`;
          }
          return config;
        }

        isRefreshing = true;
        refreshTokenPromise = refreshAccessToken();
        const newToken = await refreshTokenPromise;

        if (config.headers) {
          config.headers.Authorization = `Bearer ${newToken}`;
        }

        isRefreshing = false;
        refreshTokenPromise = null;
        return config;
      } catch (error) {
        console.error("Proactive token refresh failed:", error);
        isRefreshing = false;
        refreshTokenPromise = null;
      }
    }

    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// ─── Response Interceptor ─────────────────────────────────────────────────────

AXIOS_INSTANCE.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
      _retryCount?: number;
    };

    if (isUndefined(error.response)) {
      console.error("Network error or request cancelled:", error.message);
      return Promise.reject(error);
    }

    // Handle 401 — token expired
    if (error.response?.status === 401) {
      const authEndpoints = [
        "/api/auth/login",
        "/api/auth/register",
        "/api/auth/refresh-token",
      ];
      if (
        authEndpoints.some((endpoint) =>
          originalRequest.url?.includes(endpoint),
        )
      ) {
        return Promise.reject(error);
      }

      if (originalRequest._retry) {
        console.error("Token refresh already attempted, logging out");
        useAuthStore.getState().resetStore();
        if (!originalRequest._retryCount || originalRequest._retryCount === 1) {
          toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        }
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }

      if (isRefreshing && refreshTokenPromise) {
        try {
          const newToken = await new Promise<string>((resolve, reject) => {
            addToQueue(resolve, reject);
          });
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
          }
          return AXIOS_INSTANCE(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      originalRequest._retry = true;
      originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;
      isRefreshing = true;

      try {
        refreshTokenPromise = refreshAccessToken();
        const newToken = await refreshTokenPromise;

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }

        processQueue(null, newToken);
        return AXIOS_INSTANCE(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        processQueue(refreshError as AxiosError, null);
        useAuthStore.getState().resetStore();
        toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
        refreshTokenPromise = null;
      }
    }

    if (error.response?.status === 429) {
      toast.error("Quá nhiều yêu cầu. Vui lòng thử lại sau.");
    } else if (error.response?.status >= 500) {
      toast.error("Lỗi server. Vui lòng thử lại sau.");
    }

    return Promise.reject(error);
  },
);

// ─── Main Instance ────────────────────────────────────────────────────────────

export const mainInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data, status }) => {
    return data instanceof Blob ? data : { ...data, statusCode: status };
  });

  // @ts-expect-error not exist cancel
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };
  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;

export default mainInstance;
