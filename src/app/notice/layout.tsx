import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공지사항",
  description: "담장 클라이밍 공지사항. 세팅 안내, 이벤트, 영업시간 변경 등 최신 소식을 확인하세요.",
  openGraph: {
    title: "공지사항 | 담장 클라이밍",
    description: "담장 클라이밍 최신 공지사항.",
  },
};

export default function NoticeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
