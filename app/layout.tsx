import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layr.plus - Modern Layered Solutions Platform",
  description: "Discover innovative layered services and solutions with Layr.plus. A modern platform built for scalable, efficient, and user-focused digital experiences.",
  keywords: ["layered solutions", "platform", "services", "modern", "scalable", "digital", "technology"],
  authors: [{ name: "Layr.plus Team" }],
  creator: "Layr.plus",
  publisher: "Layr.plus",
  metadataBase: new URL("https://layr.plus"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Layr.plus - Modern Layered Solutions Platform",
    description: "Discover innovative layered services and solutions with Layr.plus. A modern platform built for scalable, efficient, and user-focused digital experiences.",
    url: "https://layr.plus",
    siteName: "Layr.plus",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Layr.plus - Modern Layered Solutions Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layr.plus - Modern Layered Solutions Platform",
    description: "Discover innovative layered services and solutions with Layr.plus. A modern platform built for scalable, efficient, and user-focused digital experiences.",
    images: ["/og-image.jpg"],
    creator: "@layrplus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
