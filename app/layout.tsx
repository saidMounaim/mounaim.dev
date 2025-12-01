import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/Theme";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Said MOUNAIM | Full Stack JavaScript Developer",
    template: "%s | Said MOUNAIM",
  },
  description: "Said MOUNAIM - Full Stack JavaScript developer based in Morocco. Expert in React, Next.js, and Node.js.",
  metadataBase: new URL("https://mounaim.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: "Said MOUNAIM | Full Stack JavaScript Developer",
    description: "Said MOUNAIM - Full Stack JavaScript developer based in Morocco. Expert in React, Next.js, and Node.js.",
    url: "https://mounaim.dev",
    siteName: "Said MOUNAIM Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Said MOUNAIM - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Said MOUNAIM | Full Stack JavaScript Developer",
    description: "Full Stack JavaScript Developer showcasing projects and skills",
    images: ["/og-image.png"],
    creator: "@saidmounaim",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Said MOUNAIM",
    url: "https://mounaim.dev",
    jobTitle: "Full Stack JavaScript Developer",
    sameAs: [
      "https://x.com/said_mounaim",
      "https://github.com/saidMounaim",
      "https://linkedin.com/in/said-mounaim/",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Morocco", 
    },
  };
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster
            toastOptions={{
              classNames: {
                error: "bg-red-500",
                info: "bg-blue-400",
                success: "bg-teal-600",
                warning: "bg-orange-400",
                toast: "bg-blue-400",
                title: "text-white",
                description: "text-white",
                actionButton: "bg-zinc-400",
                cancelButton: "bg-orange-400",
                closeButton: "bg-lime-400",
                icon: "text-white",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
