"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionTitleProps {
  label: string;
  title: string | ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <p className="text-[var(--color-primary)] text-xs tracking-[0.4em] uppercase font-medium mb-4">
        {label}
      </p>
      <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text)] leading-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
