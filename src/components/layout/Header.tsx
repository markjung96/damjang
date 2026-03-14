"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation, locations } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const kakaoUrl = locations[0].kakao;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-2 group">
              <span
                className={`text-2xl lg:text-3xl font-black tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[var(--color-primary)]" : "text-white"
                }`}
              >
                담장
              </span>
              <span
                className={`text-xs lg:text-sm font-semibold tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? "text-[var(--color-muted)]" : "text-white/70"
                }`}
              >
                CLIMBING
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)] ${
                    scrolled ? "text-[var(--color-text)]" : "text-white/90"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors duration-200"
              >
                예약하기
              </a>

              {/* Hamburger */}
              <button
                type="button"
                aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md transition-colors ${
                  scrolled
                    ? "text-[var(--color-primary)]"
                    : "text-white"
                }`}
              >
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Slide-in Panel */}
      <div
        role="dialog"
        aria-label="모바일 메뉴"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-[var(--color-primary)]">담장</span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-muted)]">
              CLIMBING
            </span>
          </div>
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-warm-100)] hover:text-[var(--color-primary)] transition-colors duration-150"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Panel Footer CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-[var(--color-border)]">
          <a
            href={kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors duration-200"
          >
            카카오톡으로 예약하기
          </a>
        </div>
      </div>
    </>
  );
}
