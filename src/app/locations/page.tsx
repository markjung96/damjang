"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { locations } from "@/data/site";

export default function LocationsPage() {
  return (
    <main>
      <PageHeader title="지점 안내" subtitle="LOCATIONS" />

      <section className="py-24 px-4 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto space-y-16">
          {locations.map((location, i) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] shadow-sm overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-[#1A1A1A] px-8 py-6 flex items-baseline gap-3">
                <h2 className="text-2xl lg:text-3xl font-black text-white">{location.name}</h2>
                <span className="text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)]">
                  {location.nameEn.toUpperCase()}
                </span>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Info */}
                <div className="space-y-8">
                  {/* Description */}
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {location.description}
                  </p>

                  {/* Contact */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] font-bold text-sm w-12 shrink-0 pt-0.5">
                        주소
                      </span>
                      <span className="text-sm text-[var(--color-text)]">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--color-accent)] font-bold text-sm w-12 shrink-0">
                        전화
                      </span>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-primary)] mb-3 tracking-wide">
                      영업시간
                    </h3>
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-[var(--color-border)]">
                        <tr>
                          <td className="py-2.5 text-[var(--color-muted)] w-24">평일</td>
                          <td className="py-2.5 font-medium text-[var(--color-text)]">
                            {location.hours.weekday}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-[var(--color-muted)]">토요일</td>
                          <td className="py-2.5 font-medium text-[var(--color-text)]">
                            {location.hours.saturday}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-[var(--color-muted)]">일요일</td>
                          <td className="py-2.5 font-medium text-[var(--color-text)]">
                            {location.hours.sunday}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-primary)] mb-3 tracking-wide">
                      특징
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {location.features.map((feature) => (
                        <li
                          key={feature}
                          className="px-3 py-1.5 bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-xs font-medium text-[var(--color-text)]"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={location.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      인스타그램
                    </a>
                    <a
                      href={location.kakao}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FEE500] text-sm font-medium text-[#3A1D1D] hover:bg-[#F5DC00] transition-colors"
                    >
                      카카오 채널
                    </a>
                    <a
                      href={location.naver}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#03C75A] text-sm font-medium text-white hover:bg-[#02b351] transition-colors"
                    >
                      네이버 예약
                    </a>
                  </div>
                </div>

                {/* Right: Map Placeholder */}
                <div>
                  <div className="w-full aspect-video bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl flex flex-col items-center justify-center gap-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[var(--color-muted)]"
                      aria-hidden="true"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <p className="text-sm font-medium text-[var(--color-muted)] text-center px-6">
                      {location.address}
                    </p>
                    <a
                      href={`https://map.naver.com/v5/search/${encodeURIComponent(location.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-xs font-semibold text-[var(--color-accent)] hover:underline"
                    >
                      네이버 지도에서 보기 →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
