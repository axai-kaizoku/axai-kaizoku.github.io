import "@/styles/globals.css";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ScreenSize } from "@/components/screen-size";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  display: "swap",
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s • Akshay Yelle",
    default: siteConfig.name,
  },
  description: siteConfig.description,
  applicationName: "Portfolio Website",
  keywords: [
    "frontend",
    "developer",
    "fullstack",
    "reactjs",
    "nextjs",
    "javascript",
    "typescript",
    "portfolio",
    "t3-stack",
    "tailwindcss",
  ],
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Akshay Yelle" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        alt: "Akshay Yelle",
      },
    ],
    creator: "@akshay_yelle",
    site: "@akshay_yelle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-dvh overflow-x-hidden bg-background font-space_grotesk text-foreground antialiased",
        GeistSans.className,
        montserrat.variable,
        space_grotesk.variable
      )}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="px-8 md:px-10">{children}</main>
          <ScreenSize />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
