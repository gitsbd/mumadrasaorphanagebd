import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FaviconHandler from "@/components/FaviconHandler";

// Get basePath for production
const basePath = process.env.NODE_ENV === 'production' ? '/mumadrasaorphanagebd' : '';

export const metadata: Metadata = {
  title: "Madinatul Uloom Madrasa & Orphanage | Islamic Education in Bangladesh",
  description: "A non-profit Islamic educational institution providing free education to orphans and underprivileged children in Nakla, Sherpur, Mymensingh, Bangladesh.",
  keywords: "Islamic education, Madrasa, Orphanage, Bangladesh, Quran memorization, Hifz, Noorani program, Sherpur, Mymensingh",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/logo.png`, type: 'image/png' },
    ],
    shortcut: `${basePath}/logo.png`,
    apple: `${basePath}/logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen flex flex-col">
        <FaviconHandler />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

