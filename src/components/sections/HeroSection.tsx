"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {/* Background geometric pattern with brand colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Speech bubble inspired pattern from logo */}
        <svg
          className="absolute top-0 right-0 w-2/3 h-full opacity-[0.06]"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Speech bubble shape inspired by logo */}
          <path d="M100,100 L500,100 L500,500 L400,500 L350,600 L300,500 L100,500 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M150,150 L450,150 L450,450 L375,450 L325,530 L275,450 L150,450 Z" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
          <circle cx="400" cy="200" r="80" stroke="var(--color-accent)" strokeWidth="1" />
          <line x1="150" y1="250" x2="400" y2="250" stroke="white" strokeWidth="1" />
          <line x1="150" y1="320" x2="350" y2="320" stroke="white" strokeWidth="1" opacity="0.6" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-[0.05]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,400 200,0 400,400" stroke="white" strokeWidth="1" />
          <polygon points="50,400 200,50 350,400" stroke="var(--color-accent)" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-dark)]/80 pointer-events-none" />

      {/* Accent line */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-full bg-[var(--color-accent)]"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          className="text-[var(--color-accent-light)] text-sm tracking-[0.4em] uppercase mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Seoul · Euljiro · Sinchon
        </motion.p>

        <motion.h1
          className="text-white font-black leading-none tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="block text-[12vw] lg:text-[10rem]">담장</span>
          <span className="block text-[6vw] lg:text-[5rem] text-white/25 tracking-[0.2em] mt-2">
            CLIMBING
          </span>
        </motion.h1>

        <motion.p
          className="text-white/70 text-lg lg:text-xl mt-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          당신의 클라이밍 스토리를 쌓아보세요
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Link
            href="/programs"
            className="px-8 py-4 bg-[var(--color-accent)] text-white font-semibold tracking-wide hover:bg-[var(--color-accent-dark)] transition-colors duration-200 rounded-sm"
          >
            체험 예약
          </Link>
          <Link
            href="/locations"
            className="px-8 py-4 border border-white/40 text-white font-semibold tracking-wide hover:border-white hover:bg-white/10 transition-all duration-200 rounded-sm"
          >
            지점 안내
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
