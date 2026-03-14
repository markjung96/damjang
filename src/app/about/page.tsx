"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";

export default function AboutPage() {
  const values = [
    {
      ko: "도전",
      en: "Challenge",
      description:
        "벽 앞에 서는 순간, 우리는 자신의 한계와 마주합니다. 담장은 그 도전의 공간입니다. 처음 잡는 홀드부터 어려운 루트 완등까지, 매 순간이 성취입니다.",
    },
    {
      ko: "커뮤니티",
      en: "Community",
      description:
        "클라이밍은 혼자이면서도 함께하는 스포츠입니다. 담장에서 만난 사람들은 서로의 도전을 응원하고, 베타를 나누며 함께 성장합니다.",
    },
    {
      ko: "성장",
      en: "Growth",
      description:
        "어제의 나보다 오늘의 내가 조금 더 높이 오를 수 있다면 그것으로 충분합니다. 담장은 모든 클라이머의 성장 여정을 함께합니다.",
    },
  ];

  return (
    <main>
      <PageHeader title="소개" subtitle="ABOUT DAMJANG" />

      {/* Brand Story */}
      <section className="py-24 px-4 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <blockquote className="text-3xl lg:text-5xl font-black leading-tight text-[var(--color-primary)] tracking-tight">
              "벽을 오르는 것은<br />
              <span className="text-[var(--color-accent)]">자신을 오르는 것</span>입니다."
            </blockquote>
            <p className="mt-8 text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
              담장 클라이밍은 2019년 을지로에서 시작되었습니다. 오래된 골목의 감성과 현대적인
              클라이밍 문화가 만나는 공간으로, 처음 홀드를 잡는 순간부터 어려운 문제를 완등하는
              순간까지 모든 클라이머의 이야기를 담고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-[var(--color-accent)] pl-8"
          >
            <p className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] leading-relaxed">
              담장은 단순한 클라이밍 짐이 아닙니다.
            </p>
            <p className="mt-4 text-base text-[var(--color-muted)] leading-relaxed">
              이곳은 도시 속에서 자연의 감각을 느끼고, 낯선 이들과 같은 목표를 향해 땀 흘리며,
              어제보다 나은 오늘의 자신을 발견하는 공간입니다. 을지로와 신촌, 두 지점 모두
              담장만의 철학을 고스란히 담고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-primary)]">
              우리의 가치
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[var(--color-background)] rounded-2xl p-8 border border-[var(--color-border)]"
              >
                <p className="text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] mb-3">
                  {value.en.toUpperCase()}
                </p>
                <h3 className="text-2xl font-black text-[var(--color-primary)] mb-4">
                  {value.ko}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
