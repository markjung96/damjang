import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로그램",
  description: "담장 클라이밍 프로그램 안내. 원데이 체험, 초급/중급/상급 정기반, 트레이닝 프로그램을 만나보세요.",
  openGraph: {
    title: "프로그램 | 담장 클라이밍",
    description: "원데이 체험부터 상급 클리닉까지, 담장 클라이밍 프로그램.",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
