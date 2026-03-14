"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { programs, locations } from "@/data/site";

export default function ProgramsPage() {
  const kakaoUrl = locations[0].kakao;

  return (
    <main>
      <PageHeader title="프로그램" subtitle="PROGRAMS" />

      <section className="py-24 px-4 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto space-y-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 lg:p-10"
            >
              <div className="flex items-start gap-6">
                <span
                  className="text-4xl lg:text-5xl shrink-0"
                  role="img"
                  aria-label={program.title}
                >
                  {program.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h2 className="text-xl lg:text-2xl font-black text-[var(--color-primary)]">
                      {program.title}
                    </h2>
                    <span className="text-sm text-[var(--color-muted)] font-medium">
                      {program.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] text-[var(--color-accent)] mb-2">
                        DURATION
                      </p>
                      <p className="text-sm font-semibold text-[var(--color-primary)]">
                        {program.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] text-[var(--color-accent)] mb-2">
                        INCLUDES
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {program.includes.map((item) => (
                          <li
                            key={item}
                            className="px-3 py-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-xs font-medium text-[var(--color-text)]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-[var(--color-primary)] rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl font-black text-white mb-3">
            프로그램 예약 및 문의
          </h3>
          <p className="text-sm text-white/70 mb-8">
            카카오톡 채널로 편하게 문의해주세요. 빠르게 답변드립니다.
          </p>
          <a
            href={kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FEE500] text-[var(--color-text)] font-bold rounded-full text-sm hover:bg-[#F5DC00] transition-colors"
          >
            카카오톡으로 예약하기
          </a>
        </motion.div>
      </section>
    </main>
  );
}
