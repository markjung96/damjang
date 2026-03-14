"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mountain, BookOpen, Dumbbell, Trophy, type LucideIcon } from "lucide-react";
import { programs } from "@/data/site";

const iconMap: Record<string, LucideIcon> = {
  mountain: Mountain,
  "book-open": BookOpen,
  dumbbell: Dumbbell,
  trophy: Trophy,
};

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[number];
  index: number;
}) {
  return (
    <motion.div
      className="group border border-[var(--color-border)] bg-[var(--color-warm-50)] p-8 hover:border-[var(--color-primary)] hover:bg-[var(--color-surface)] hover:shadow-[var(--shadow-md)] transition-all duration-300 rounded-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
    >
      <div className="mb-4">
        {(() => {
          const Icon = iconMap[program.icon];
          return Icon ? <Icon className="w-8 h-8 text-[var(--color-primary)]" /> : null;
        })()}
      </div>
      <p className="text-[var(--color-primary)] text-xs tracking-[0.2em] uppercase font-medium mb-2">
        {program.subtitle}
      </p>
      <h3 className="text-xl font-black text-[var(--color-text)] mb-3">{program.title}</h3>
      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
        {program.description}
      </p>
      <p className="text-xs text-[var(--color-muted)] mb-4">{program.duration}</p>
    </motion.div>
  );
}

export default function ProgramsSection() {
  return (
    <section className="py-32 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[var(--color-primary)] text-xs tracking-[0.4em] uppercase font-medium mb-4">
              Programs
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text)] leading-tight">
              당신의 레벨에<br />맞는 프로그램
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 self-start lg:self-auto"
          >
            전체 프로그램 보기
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/programs"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold tracking-wide hover:bg-[var(--color-accent)] transition-colors duration-200 rounded-sm"
          >
            프로그램 자세히 보기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
