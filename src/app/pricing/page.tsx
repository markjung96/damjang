"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { pricing } from "@/data/site";

const usageRules = [
  "실내화 착용 필수 (미착용 시 암벽화 대여 가능)",
  "초크 사용 시 초크백 필수 착용",
  "음식물 반입 금지 (음료는 뚜껑 있는 용기만 허용)",
  "사진·영상 촬영 시 타인 노출에 주의",
  "문제 점거 금지 — 한 문제에 1인 도전 원칙",
  "안전을 위해 혼자 하강 금지, 반드시 주변에 알릴 것",
  "미성년자는 보호자 동반 또는 동의서 필요",
];

export default function PricingPage() {
  return (
    <main>
      <PageHeader title="이용 안내" subtitle="PRICING" />

      <section className="py-24 px-4 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Notice Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-2xl px-7 py-5 flex gap-4 items-start"
          >
            <span className="text-[var(--color-accent)] text-xl mt-0.5">💡</span>
            <p className="text-sm font-medium text-[var(--color-text)] leading-relaxed">
              <span className="font-bold text-[var(--color-accent)]">첫 방문 시 원데이 클래스를 추천합니다.</span>
              {" "}기본 안전 교육과 장비 대여가 포함되어 있어 처음 클라이밍을 시작하는 분들께 최적입니다.
            </p>
          </motion.div>

          {/* Daily Pass */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-black text-[var(--color-primary)] mb-8"
            >
              일일 이용
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pricing.daily.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col gap-3"
                >
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">{item.name}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
                  <p className="text-3xl font-black text-[var(--color-accent)] mt-auto pt-3">
                    {item.price}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Membership */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-black text-[var(--color-primary)] mb-8"
            >
              정기권
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pricing.membership.map((item, i) => {
                const isBest = item.name === "6개월";
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative bg-[var(--color-surface)] rounded-2xl p-7 flex flex-col gap-3 ${
                      isBest
                        ? "border-2 border-[var(--color-accent)] shadow-lg"
                        : "border border-[var(--color-border)]"
                    }`}
                  >
                    {isBest && (
                      <span className="absolute -top-3 left-6 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                        BEST VALUE
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-[var(--color-primary)]">{item.name}</h3>
                    <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
                    <p className={`text-3xl font-black mt-auto pt-3 ${isBest ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}`}>
                      {item.price}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Rental */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-black text-[var(--color-primary)] mb-8"
            >
              장비 대여
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
            >
              {pricing.rental.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-7 py-5 ${
                    i < pricing.rental.length - 1 ? "border-b border-[var(--color-border)]" : ""
                  }`}
                >
                  <span className="text-base font-medium text-[var(--color-text)]">{item.name}</span>
                  <span className="text-lg font-black text-[var(--color-accent)]">{item.price}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Usage Rules */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-black text-[var(--color-primary)] mb-8"
            >
              이용 규칙
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden divide-y divide-[var(--color-border)]"
            >
              {usageRules.map((rule) => (
                <li key={rule} className="flex items-start gap-4 px-7 py-4">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span className="text-sm text-[var(--color-text)] leading-relaxed">{rule}</span>
                </li>
              ))}
            </motion.ul>
          </div>

        </div>
      </section>
    </main>
  );
}
