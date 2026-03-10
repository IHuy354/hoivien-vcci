"use client";
import { Toaster } from "@components/ui/toaster";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there is a hash in the URL on load or pathname change
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);
  return (
    <div className="min-h-screen bg-background flex flex-col">
        {/* <AuthGuard fallback={<FallbackSpinner />}> */}
        {/* <AbilityProvider> */}
          <Header />
          <main className="flex-1">
            {/* <RouteGuard> */}
              {children}
            {/* </RouteGuard> */}
          </main>
          <Footer />
          <Toaster
            richColors
            closeButton
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              className: "p-3 gap-2",
              classNames: {
                closeButton:
                  "left-auto right-0 top-0 -translate-y-2.5 translate-x-0",
              },
            }}
          />
        {/* </AbilityProvider> */}
      {/* </AuthGuard> */}
    </div>
  );
}
