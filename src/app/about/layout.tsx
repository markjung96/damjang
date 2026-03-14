import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
  description: "담장 클라이밍의 브랜드 스토리와 철학. 을지로의 감성을 담은 볼더링 짐에서 도전, 커뮤니티, 성장의 가치를 경험하세요.",
  openGraph: {
    title: "소개 | 담장 클라이밍",
    description: "담장 클라이밍의 브랜드 스토리와 철학. 을지로의 감성을 담은 볼더링 짐.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
