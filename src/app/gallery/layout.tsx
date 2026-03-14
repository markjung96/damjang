import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "갤러리",
  description: "담장 클라이밍 갤러리. 을지로점, 신촌점의 시설과 클라이밍 사진을 확인하세요.",
  openGraph: {
    title: "갤러리 | 담장 클라이밍",
    description: "담장 클라이밍 시설 및 활동 사진.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
