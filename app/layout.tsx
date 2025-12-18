import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Madinatul Uloom Madrasa & Orphanage | Islamic Education in Bangladesh",
  description: "A non-profit Islamic educational institution providing free education to orphans and underprivileged children in Nakla, Sherpur, Mymensingh, Bangladesh.",
  keywords: "Islamic education, Madrasa, Orphanage, Bangladesh, Quran memorization, Hifz, Noorani course, Sherpur, Mymensingh",
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
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

