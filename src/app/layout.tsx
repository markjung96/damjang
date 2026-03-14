import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "담장 클라이밍 | DAMJANG CLIMBING",
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: "담장 클라이밍 | DAMJANG CLIMBING",
    description: siteConfig.description,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
