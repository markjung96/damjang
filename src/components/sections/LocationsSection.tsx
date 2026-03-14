"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { locations } from "@/data/site";

function LocationCard({
  location,
  index,
}: {
  location: (typeof locations)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group border border-[#E5E5E5] bg-white p-10 hover:border-[#FF6B35] transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF6B35] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

      <div className="mb-6">
        <p className="text-[#FF6B35] text-xs tracking-[0.3em] uppercase font-medium mb-2">
          {location.nameEn}
        </p>
        <h3 className="text-3xl font-black text-[#1A1A1A]">{location.name}</h3>
      </div>

      <p className="text-[#666] text-sm leading-relaxed mb-6">{location.description}</p>

      <div className="space-y-3 mb-8">
        <div className="flex gap-4 text-sm">
          <span className="text-[#999] w-16 shrink-0">주소</span>
          <span className="text-[#333]">{location.address}</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-[#999] w-16 shrink-0">평일</span>
          <span className="text-[#333]">{location.hours.weekday}</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-[#999] w-16 shrink-0">토요일</span>
          <span className="text-[#333]">{location.hours.saturday}</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-[#999] w-16 shrink-0">일요일</span>
          <span className="text-[#333]">{location.hours.sunday}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {location.features.map((feature) => (
          <span
            key={feature}
            className="text-xs px-3 py-1 bg-[#F5F5F5] text-[#666] tracking-wide"
          >
            {feature}
          </span>
        ))}
      </div>

      <Link
        href={`/locations#${location.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] group-hover:text-[#FF6B35] transition-colors duration-200"
      >
        자세히 보기
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
        >
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
  );
}

export default function LocationsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#FF6B35] text-xs tracking-[0.4em] uppercase font-medium mb-4">
            Locations
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight">
            두 개의 공간,<br />하나의 담장
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
