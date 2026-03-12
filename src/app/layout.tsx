import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Providers from "@/components/providers";
import { Providers } from "@/app/_providers";
import { Toaster } from "@components/ui/toaster";
import { generateSEOMetadata } from "@/lib/metadata";
// import Header from "@/components/common/header";
// import Footer from "@/components/common/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Generate metadata from site settings
export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* <Header/> */}
          <main className="min-h-screen">{children}</main>
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
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
