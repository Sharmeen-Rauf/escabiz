import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EscaBiz - Lead Development & Virtual Staff Augmentation",
  description: "EscaBiz provides B2B lead development services and virtual staff augmentation solutions",
  icons: {
    icon: '/navbar logo (1).png',
    shortcut: '/navbar logo (1).png',
    apple: '/navbar logo (1).png',
  },
  openGraph: {
    title: "EscaBiz - Lead Development & Virtual Staff Augmentation",
    description: "EscaBiz provides B2B lead development services and virtual staff augmentation solutions",
    url: "https://escabiz.com",
    siteName: "EscaBiz",
    images: [
      {
        url: '/navbar logo (1).png',
        width: 1200,
        height: 630,
        alt: 'EscaBiz Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EscaBiz - Lead Development & Virtual Staff Augmentation",
    description: "EscaBiz provides B2B lead development services and virtual staff augmentation solutions",
    images: ['/navbar logo (1).png'],
  },
  metadataBase: new URL('https://escabiz.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
