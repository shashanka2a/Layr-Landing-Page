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
  title: "Layr.plus - Logo Design, Pitch Deck & Website Builder Tools",
  description: "Create stunning logos, professional pitch decks, and build powerful websites with Layr.plus. All-in-one platform featuring Logora logo maker, Deckr pitch deck creator, and Buidl website app builder.",
  keywords: ["logo design", "logo maker", "pitch deck", "pitch deck creator", "website builder", "app builder", "logo generator", "presentation maker", "web design tools", "brand identity", "startup tools", "business tools", "design platform"],
  authors: [{ name: "Layr.plus Team" }],
  creator: "Layr.plus",
  publisher: "Layr.plus",
  metadataBase: new URL("https://layr.plus"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Layr.plus - Logo Design, Pitch Deck & Website Builder Tools",
    description: "Create stunning logos with Logora, build professional pitch decks with Deckr, and develop powerful websites with Buidl. Complete design and development platform for modern builders.",
    url: "https://layr.plus",
    siteName: "Layr.plus",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Layr.plus - Logo Design, Pitch Deck & Website Builder Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layr.plus - Logo Design, Pitch Deck & Website Builder Tools",
    description: "Create logos, pitch decks, and websites all in one platform. Professional design tools for logos, presentations, and web development.",
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
