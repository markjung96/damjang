"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="200" r="300" stroke="white" strokeWidth="1" />
          <circle cx="400" cy="200" r="200" stroke="white" strokeWidth="1" />
          <circle cx="400" cy="200" r="100" stroke="white" strokeWidth="1" />
          <line x1="100" y1="0" x2="600" y2="800" stroke="white" strokeWidth="1" />
          <line x1="0" y1="200" x2="600" y2="400" stroke="white" strokeWidth="1" />
          <rect x="300" y="400" width="200" height="200" stroke="#FF6B35" strokeWidth="1" transform="rotate(45 400 500)" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-[0.04]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,400 200,0 400,400" stroke="white" strokeWidth="1" />
          <polygon points="50,400 200,50 350,400" stroke="#FF6B35" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]/80 pointer-events-none" />

      {/* Accent line */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full bg-[#FF6B35]"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          className="text-[#FF6B35] text-sm tracking-[0.4em] uppercase mb-4 font-medium"
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
          <span className="block text-[6vw] lg:text-[5rem] text-white/20 tracking-[0.2em] mt-2">
            CLIMBING
          </span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg lg:text-xl mt-8 tracking-wide"
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
            className="px-8 py-4 bg-[#FF6B35] text-white font-semibold tracking-wide hover:bg-[#E55A2B] transition-colors duration-200"
          >
            체험 예약
          </Link>
          <Link
            href="/locations"
            className="px-8 py-4 border border-white/40 text-white font-semibold tracking-wide hover:border-white hover:bg-white/5 transition-all duration-200"
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
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
