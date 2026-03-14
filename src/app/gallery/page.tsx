"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { locations } from "@/data/site";

const placeholders = [
  { label: "볼더링 벽면", sub: "을지로점" },
  { label: "핑거보드 존", sub: "을지로점" },
  { label: "V3 문제", sub: "을지로점" },
  { label: "루프 섹션", sub: "을지로점" },
  { label: "커뮤니티 존", sub: "을지로점" },
  { label: "레스트 존", sub: "을지로점" },
  { label: "슬랩 벽면", sub: "신촌점" },
  { label: "V5 문제", sub: "신촌점" },
  { label: "오버행 섹션", sub: "신촌점" },
  { label: "훈련 공간", sub: "신촌점" },
  { label: "초크 스테이션", sub: "신촌점" },
  { label: "외관 전경", sub: "신촌점" },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHeader title="갤러리" subtitle="GALLERY" />

      <section className="py-24 px-4 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto">

          {/* Instagram Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
          >
            <p className="text-sm text-[var(--color-muted)]">
              더 많은 사진은 인스타그램에서 확인하세요
            </p>
            <div className="flex gap-3">
              {locations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  {loc.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {placeholders.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                className="aspect-square bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl flex flex-col items-center justify-center gap-2 group hover:border-[var(--color-accent)] transition-colors cursor-pointer"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[var(--color-border)] group-hover:text-[var(--color-accent)] transition-colors"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="text-xs font-semibold text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-[var(--color-border)] group-hover:text-[var(--color-muted)] transition-colors">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
