/**
 * Hook to automatically refresh token before expiration
 * Monitors token expiration and refreshes proactively
 */

import { useEffect, useRef, useCallback } from "react";
import useAuthStore from "@stores/auth";
import { shouldRefreshToken } from "@/utils/token";

const REFRESH_CHECK_INTERVAL = 60 * 1000; // Check every minute
const REFRESH_THRESHOLD_MINUTES = 5; // Refresh when less than 5 minutes remaining

export const useTokenRefresh = () => {
  const store = useAuthStore();
  const token = store.token;
  const isSignedIn = store.isSignedIn;
  const resetStore = store.resetStore;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRefreshingRef = useRef(false);

  /**
   * Refresh the access token via API
   */
  const refreshAccessToken = useCallback(async () => {
    if (isRefreshingRef.current) return;

    isRefreshingRef.current = true;

    try {
      const { postApiV10AuthRefresh } = await import(
        "@/api/endpoints/authentication"
      );

      // Note: adapt refreshToken field to match your store if needed
      const refreshToken = (useAuthStore.getState() as { refreshToken?: string }).refreshToken;
      if (!refreshToken) {
        console.warn("No refresh token available");
        return;
      }

      const response = await postApiV10AuthRefresh({ refresh_token: refreshToken });

      if ((response as { accessToken?: string })?.accessToken) {
        useAuthStore.getState().setStore({
          token: (response as { accessToken?: string }).accessToken,
        } as { token?: string });
        console.log("Token refreshed successfully in background");
      }
    } catch (error) {
      console.error("Background token refresh failed:", error);
      resetStore();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    } finally {
      isRefreshingRef.current = false;
    }
  }, [resetStore]);

  /**
   * Check token and refresh if needed
   */
  const checkAndRefreshToken = useCallback(async () => {
    if (!isSignedIn || !token) return;

    if (shouldRefreshToken(token, REFRESH_THRESHOLD_MINUTES)) {
      console.log("Token expiring soon, refreshing...");
      await refreshAccessToken();
    }
  }, [isSignedIn, token, refreshAccessToken]);

  useEffect(() => {
    if (!isSignedIn || !token) return;

    // Initial check
    checkAndRefreshToken();

    // Set up periodic check every minute
    intervalRef.current = setInterval(() => {
      checkAndRefreshToken();
    }, REFRESH_CHECK_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isSignedIn, token, checkAndRefreshToken]);

  /**
   * Manually trigger token refresh
   */
  const manualRefresh = async () => {
    await refreshAccessToken();
  };

  return { manualRefresh };
};
