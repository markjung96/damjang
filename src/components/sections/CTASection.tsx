"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { locations } from "@/data/site";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const kakaoLink = locations[0].kakao;
  const naverLink = locations[0].naver;
  const phone = locations[0].phone;

  return (
    <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.03]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="400" cy="250" r="300" stroke="white" strokeWidth="1" />
          <circle cx="400" cy="250" r="200" stroke="#FF6B35" strokeWidth="1" />
          <circle cx="400" cy="250" r="100" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Left accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-[#FF6B35]/30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#FF6B35] text-xs tracking-[0.4em] uppercase font-medium mb-6">
            Get Started
          </p>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            지금<br />시작하세요
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-4">
            처음 방문하시는 분도 걱정 마세요.
          </p>
          <p className="text-white/50 leading-relaxed mb-12">
            원데이 체험 프로그램을 통해 클라이밍의 재미를 먼저 경험해보세요. 전문 강사가
            기초부터 차근차근 안내해 드립니다. 장비는 모두 대여 가능하며, 운동화만
            가져오셔도 충분합니다.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={kakaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FEE500] text-[#1A1A1A] font-semibold tracking-wide hover:bg-[#F0D700] transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.636 1.574 4.942 3.938 6.312L5 20l3.965-2.073C9.917 18.28 10.944 18.5 12 18.5c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
              </svg>
              카카오 채널 문의
            </a>
            <a
              href={naverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#03C75A] text-white font-semibold tracking-wide hover:bg-[#02b351] transition-colors duration-200"
            >
              네이버 예약
            </a>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold tracking-wide hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {phone}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
