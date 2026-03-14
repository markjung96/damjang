"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const placeholders = [
  { label: "을지로점 메인 월" },
  { label: "볼더링 존" },
  { label: "커뮤니티 공간" },
  { label: "신촌점 전경" },
  { label: "세팅 현장" },
  { label: "클라이밍 클래스" },
];

export default function GalleryPreviewSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32 bg-[var(--color-warm-50)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[var(--color-primary)] text-xs tracking-[0.4em] uppercase font-medium mb-4">
              Gallery
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text)] leading-tight">
              담장의 공간
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 self-start sm:self-auto"
          >
            갤러리 전체 보기
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8 H13 M9 4 L13 8 L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {placeholders.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative aspect-[4/3] bg-[var(--color-primary-dark)] overflow-hidden cursor-pointer rounded-sm"
              initial={{ opacity: 0 }}
              animate={gridInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              {/* Subtle texture pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, var(--color-primary) 0px, var(--color-primary) 1px, transparent 1px, transparent 8px)",
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/30 transition-colors duration-300" />

              {/* Label overlay */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs tracking-wide font-medium">
                  {item.label}
                </span>
              </div>

              {/* Photo icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-10 h-10 text-white" viewBox="0 0 40 40" fill="none">
                  <rect x="4" y="10" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="20" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 10 L16 6 H24 L26 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            href="/gallery"
            className="inline-block px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold tracking-wide hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 rounded-sm"
          >
            갤러리
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
