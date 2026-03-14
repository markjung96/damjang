"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { programs } from "@/data/site";

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group border border-[#E5E5E5] bg-[#FAFAFA] p-8 hover:border-[#FF6B35] hover:bg-white transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
    >
      <div className="text-3xl mb-4">{program.icon}</div>
      <p className="text-[#FF6B35] text-xs tracking-[0.2em] uppercase font-medium mb-2">
        {program.subtitle}
      </p>
      <h3 className="text-xl font-black text-[#1A1A1A] mb-3">{program.title}</h3>
      <p className="text-[#666] text-sm leading-relaxed mb-4 line-clamp-3">
        {program.description}
      </p>
      <p className="text-xs text-[#999] mb-4">{program.duration}</p>
    </motion.div>
  );
}

export default function ProgramsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[#FF6B35] text-xs tracking-[0.4em] uppercase font-medium mb-4">
              Programs
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight">
              당신의 레벨에<br />맞는 프로그램
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 self-start lg:self-auto"
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
          ref={ctaRef}
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/programs"
            className="inline-block px-8 py-4 bg-[#1A1A1A] text-white font-semibold tracking-wide hover:bg-[#FF6B35] transition-colors duration-200"
          >
            프로그램 자세히 보기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
