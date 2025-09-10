import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Dylan Abbett - Software Engineer | React, Next.js, TypeScript Developer",
  description: "Portfolio of Dylan Abbett, a focused and devoted software developer with experience across web, mobile, and backend technologies. Specializing in React, Next.js, TypeScript, Swift, MongoDB, Supabase, WordPress, and Shopify development.",
  keywords: [
    "Dylan Abbett",
    "Software Engineer",
    "React Developer",
    "Next.js Developer", 
    "TypeScript Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "iOS Developer",
    "Swift Developer",
    "MongoDB Developer",
    "Supabase Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Web Development",
    "Mobile Development",
    "AI Integration",
    "Portfolio"
  ],
  authors: [{ name: "Dylan Abbett" }],
  creator: "Dylan Abbett",
  publisher: "Dylan Abbett",
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
    locale: "en_US",
    url: "https://dylanabbett.com",
    title: "Dylan Abbett - Software Engineer | React, Next.js, TypeScript Developer",
    description: "Portfolio of Dylan Abbett, a focused and devoted software developer with experience across web, mobile, and backend technologies.",
    siteName: "Dylan Abbett Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Abbett - Software Engineer",
    description: "Portfolio of Dylan Abbett, a focused and devoted software developer with experience across web, mobile, and backend technologies.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
