import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용 안내",
  description: "담장 클라이밍 이용요금, 멤버십, 장비 대여 안내. 일일 이용 20,000원, 원데이 클래스 30,000원부터.",
  openGraph: {
    title: "이용 안내 | 담장 클라이밍",
    description: "담장 클라이밍 이용요금 및 멤버십 안내.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
