"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { notices } from "@/data/site";

export default function NoticePage() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const sorted = [...notices].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  function toggle(id: number) {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  }

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  }

  return (
    <main>
      <PageHeader title="공지사항" subtitle="NOTICE" />

      <section className="py-24 px-4 bg-[var(--color-background)]">
        <div className="max-w-3xl mx-auto">
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden divide-y divide-[var(--color-border)]"
          >
            {sorted.map((notice) => {
              const isOpen = openIds.includes(notice.id);
              return (
                <li key={notice.id}>
                  <button
                    type="button"
                    onClick={() => toggle(notice.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[var(--color-background)] transition-colors"
                  >
                    <span className="text-xs text-[var(--color-muted)] w-24 shrink-0 font-mono">
                      {formatDate(notice.date)}
                    </span>
                    <div className="flex-1 min-w-0 flex items-center gap-3">
                      {notice.important && (
                        <span className="shrink-0 px-2 py-0.5 bg-[var(--color-accent)] text-white text-[10px] font-bold rounded tracking-wide">
                          중요
                        </span>
                      )}
                      <span className="text-sm font-semibold text-[var(--color-primary)] truncate">
                        {notice.title}
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={`shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M3 6l5 5 5-5" />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 pl-[7.5rem]">
                          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                            {notice.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </section>
    </main>
  );
}
