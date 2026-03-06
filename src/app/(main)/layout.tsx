"use client";
import { Toaster } from "@components/ui/toaster";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
// import AuthGuard from "@/auth/AuthGuard";
// import FallbackSpinner from "@/components/common/loading";
import AbilityProvider from "@/providers/ability-provider";
import RouteGuard from "@/auth/RouteGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
        {/* <AuthGuard fallback={<FallbackSpinner />}> */}
        <AbilityProvider>
          <Header />
          <main className="flex-1">
            <RouteGuard>
              {children}
            </RouteGuard>
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
        </AbilityProvider>
      {/* </AuthGuard> */}
    </div>
  );
}
