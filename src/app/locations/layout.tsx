import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "지점 안내",
  description: "담장 클라이밍 을지로점, 신촌점 위치 안내. 주소, 영업시간, 연락처, 오시는 길 정보를 확인하세요.",
  openGraph: {
    title: "지점 안내 | 담장 클라이밍",
    description: "담장 클라이밍 을지로점, 신촌점 위치 및 영업시간 안내.",
  },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
