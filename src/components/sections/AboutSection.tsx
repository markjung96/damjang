"use client";

import { motion } from "framer-motion";
import { Mountain, Users, TrendingUp } from "lucide-react";

const features = [
  {
    keyword: "도전",
    keywordEn: "Challenge",
    description:
      "쉬운 문제부터 최고 난이도까지, 자신만의 속도로 벽을 오르세요. 매 순간이 새로운 도전입니다.",
    icon: <Mountain className="w-8 h-8 text-[var(--color-primary)]" />,
  },
  {
    keyword: "커뮤니티",
    keywordEn: "Community",
    description:
      "같은 열정을 가진 클라이머들과 함께 성장하세요. 담장은 클라이밍을 넘어 삶을 나누는 공간입니다.",
    icon: <Users className="w-8 h-8 text-[var(--color-primary)]" />,
  },
  {
    keyword: "성장",
    keywordEn: "Growth",
    description:
      "체계적인 프로그램과 전문 코치의 지도 아래 실력이 눈에 띄게 성장하는 경험을 하게 됩니다.",
    icon: <TrendingUp className="w-8 h-8 text-[var(--color-primary)]" />,
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  return (
    <motion.div
      className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] transition-all duration-300 group rounded-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-black text-[var(--color-text)] mb-1">{feature.keyword}</h3>
      <p className="text-xs text-[var(--color-primary)] tracking-[0.2em] uppercase mb-4">
        {feature.keywordEn}
      </p>
      <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{feature.description}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-32 bg-[var(--color-warm-50)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[var(--color-primary)] text-xs tracking-[0.4em] uppercase font-medium mb-4">
            About
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text)] leading-tight mb-6">
            ABOUT<br />DAMJANG
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            담장은 을지로의 오래된 골목길에서 시작된 클라이밍 짐입니다. 산업적인 공간에
            따뜻한 커뮤니티를 담아, 처음 오는 분부터 오랜 클라이머까지 모두가 자신만의
            이야기를 쌓아가는 곳입니다.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            벽을 오른다는 것은 단순한 운동이 아닙니다. 스스로의 한계를 마주하고, 다시
            도전하고, 결국 해내는 과정 — 그것이 담장이 추구하는 클라이밍 문화입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.keyword} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
