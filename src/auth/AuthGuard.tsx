// "use client";
// import { ReactNode, ReactElement, useEffect, useState } from "react";
// import useAuthStore from "@stores/auth";
// import useProfileStore from "@stores/profile";
// import { useRouter, usePathname } from "next/navigation";
// import { useGetApiV1AccountGetmyinfo } from "@/api/endpoints/account";
// import { useGetApiV1ProfileAccountId } from "@/api/endpoints/profile";
// import { FirstLoginProfileDialog } from "@/components/features/first-login-profile-dialog";
// import { getDefaultRouteByRole } from "@/lib/get-default-route";
// import { buildAbilityFor } from "@/configs/acl";
// import { getACLForRoute } from "@/configs/route-acl";

// interface AuthGuardProps {
//   children: ReactNode;
//   fallback: ReactElement | null;
// }

// const AuthGuard = ({ children, fallback }: AuthGuardProps) => {
//   const auth = useAuthStore();
//   const setProfileStore = useProfileStore((state) => state.setStore);
//   const resetStore = useAuthStore((state) => state.resetStore);
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isFirstLogin, setIsFirstLogin] = useState(false);
//   const [showProfileDialog, setShowProfileDialog] = useState(false);
//   const [accountId, setAccountId] = useState<string>('');
//   const [hasUpdatedProfile, setHasUpdatedProfile] = useState(false);

//   const {
//     data: profileData,
//     isSuccess,
//     refetch,
//   } = useGetApiV1AccountGetmyinfo({
//     query: {
//       enabled: auth._hasHydrated && auth.isSignedIn && !!auth.token,
//       staleTime: 0,
//       gcTime: 0,
//       retry: 3,
//     },
//   });

//   // Fetch full profile info using accountId
//   const {
//     data: fullProfileData,
//     isSuccess: isProfileSuccess,
//   } = useGetApiV1ProfileAccountId(
//     accountId || "",
//     {
//       query: {
//         enabled: !!accountId,
//         staleTime: 0,
//         gcTime: 0,
//       }
//     }
//   );

//   useEffect(() => {
//     if (auth._hasHydrated && auth.isSignedIn && auth.token) {
//       refetch();
//     }
//   }, [pathname, auth._hasHydrated, auth.isSignedIn, auth.token, refetch]);

//   useEffect(() => {
//     if (isSuccess && profileData) {
//       const response = profileData as unknown as {
//         data?: {
//           id?: string;
//           email?: string | null;
//           role_id?: string;
//           role_name?: string | null;
//           role_code?: string | null;
//           status?: string | null;
//           created_at?: string | null;
//           updated_at?: string | null;
//           is_first_login?: boolean;
//         };
//       };
//       const data = response?.data;

//       if (data) {
//         setProfileStore({
//           id: data.id || null,
//           email: data.email || null,
//           role_id: data.role_id || null,
//           role_name: data.role_name || null,
//           role_code: data.role_code || null,
//           status: data.status || null,
//           created_at: data.created_at || null,
//           updated_at: data.updated_at || null,
//           user_permisions: null,
//         });

//         if (data.id) {
//           setAccountId(data.id);
//         }

//         if (data.is_first_login === true && !hasUpdatedProfile) {
//           setIsFirstLogin(true);
//           setShowProfileDialog(true);
//         } else if (data.is_first_login === false || hasUpdatedProfile) {
//           setIsFirstLogin(false);
//           setShowProfileDialog(false);
          
//           // Check if user has access to current route, if not redirect to default route
//           const acl = getACLForRoute(pathname);
//           if (acl && data.role_code) {
//             const ability = buildAbilityFor(data.role_code);
//             if (!ability.can(acl.action, acl.subject)) {
//               const defaultRoute = getDefaultRouteByRole(data.role_code);
//               router.replace(defaultRoute);
//             }
//           }
//         }
//       }
//     }
//   }, [isSuccess, profileData, setProfileStore, hasUpdatedProfile, pathname, router]);

//   // Update profile store with full profile data
//   useEffect(() => {
//     if (isProfileSuccess && fullProfileData) {
//       const response = fullProfileData as unknown as {
//         data?: {
//           id?: string;
//           account_id?: string;
//           full_name?: string | null;
//           phone?: string | null;
//           avatar_url?: string | null;
//           department_id?: string | null;
//           school_id?: string | null;
//           mentor_id?: string | null;
//           contract_url?: string | null;
//         };
//       };
//       const data = response?.data;

//       if (data) {
//         setProfileStore({
//           full_name: data.full_name || null,
//           phone: data.phone || null,
//           avatar_url: data.avatar_url || null,
//           department_id: data.department_id || null,
//           school_id: data.school_id || null,
//           mentor_id: data.mentor_id || null,
//           contract_url: data.contract_url || null,
//         });
//       }
//     }
//   }, [isProfileSuccess, fullProfileData, setProfileStore]);

//   useEffect(() => {
//     if (!auth._hasHydrated) return;

//     if (pathname === "/admin") {
//       return;
//     }
//     if (!auth.isSignedIn || !auth.token) {
//       resetStore();
//       localStorage.removeItem("auth-store");
//       if (pathname !== "/login") {
//         router.replace(`/login?returnUrl=${encodeURIComponent(pathname)}`);
//       }
//     }
//   }, [
//     auth._hasHydrated,
//     auth.isSignedIn,
//     auth.token,
//     pathname,
//     router,
//     resetStore,
//   ]);

//   if (!auth._hasHydrated || !auth.isSignedIn || !auth.token) {
//     return fallback;
//   }

//   const handleProfileUpdateSuccess = () => {
//     setHasUpdatedProfile(true);
//     setIsFirstLogin(false);
//     setShowProfileDialog(false);
//     refetch();
//   };

//   return (
//     <>
//       {children}
//       <FirstLoginProfileDialog
//         open={showProfileDialog}
//         onOpenChange={setShowProfileDialog}
//         onSuccess={handleProfileUpdateSuccess}
//         accountId={accountId}
//         isFirstLogin={isFirstLogin}
//       />
//     </>
//   );
// };

// export default AuthGuard;
