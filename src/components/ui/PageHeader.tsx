"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-[#1A1A1A] pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm font-semibold tracking-[0.3em] text-[var(--color-accent)]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
