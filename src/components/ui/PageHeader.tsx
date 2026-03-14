"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-[var(--color-primary)] pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.06]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path d="M20,20 L180,20 L180,150 L130,150 L100,180 L70,150 L20,150 Z" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
      
      {/* Left accent line */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-[var(--color-accent)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm font-semibold tracking-[0.3em] text-[var(--color-accent-light)]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
