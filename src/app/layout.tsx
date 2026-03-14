import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

const GA_ID = "G-V1MMQPLPPM";

export const metadata: Metadata = {
  title: {
    default: "담장 클라이밍 | DAMJANG CLIMBING",
    template: "%s | 담장 클라이밍",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  metadataBase: new URL("https://담장.com"),
  openGraph: {
    title: "담장 클라이밍 | DAMJANG CLIMBING",
    description: siteConfig.description,
    url: "https://담장.com",
    siteName: "담장 클라이밍",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "담장 클라이밍 - DAM JANG CLIMBING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "담장 클라이밍 | DAMJANG CLIMBING",
    description: siteConfig.description,
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://담장.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
