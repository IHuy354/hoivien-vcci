"use client";

import { useEffect } from "react";
import useAuthStore from "@stores/auth";
import { setCookie } from "@/utils/cookies";

/**
 * Component to sync auth token from Zustand store (localStorage) to cookies.
 * This ensures middleware can read the token for server-side authentication.
 */
export function AuthSync() {
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      setCookie("accessToken", token, 60 * 60 * 24 * 7); // 7 days
    } else {
      setCookie("accessToken", "", 0);
    }
  }, [token]);

  return null;
}

export default AuthSync;
