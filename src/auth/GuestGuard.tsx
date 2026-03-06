"use client";
import useAuthStore from "@stores/auth";
import { useRouter } from "next/navigation";
import { ReactElement, ReactNode, useEffect } from "react";
interface GuestGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props;
  const router = useRouter();
  const auth = useAuthStore();
  useEffect(() => {
    if ( auth.isSignedIn) {
      router.push("/");
    }
  }, [router, auth.isSignedIn]);
  if ( auth.isSignedIn) {
    return fallback;
  }
  return <>{children}</>;
};

export default GuestGuard;
