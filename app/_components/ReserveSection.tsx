"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CarbonTexture } from "./CarbonTexture";

// 預約區：整段靠左，背景圖做輕微 translateY 視差。
export function ReserveSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      id="reserve"
      className="relative overflow-hidden border-b border-white/10"
    >
      <CarbonTexture variant="weave" className="opacity-50" />
      <motion.img
        aria-hidden
        src="/images/reserve.jpg"
        alt=""
        style={reduce ? undefined : { y }}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-[0.16] grayscale will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0c] via-[#0a0b0c]/85 to-[#0a0b0c]/40" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-32 md:py-44">
        <h2 className="max-w-[15ch] text-4xl font-medium leading-tight tracking-tight text-neutral-100 md:text-6xl">
          把它開出去，你就懂了
        </h2>
        <p className="mt-6 max-w-[44ch] leading-8 text-neutral-400">
          留下聯絡方式，我們安排一段完整的道路體驗行程，四驅、彈射、扭力導引一次到位。
        </p>
        <a
          href="mailto:reserve@example.com"
          className="mt-12 inline-flex h-12 items-center justify-center bg-neutral-100 px-10 text-sm font-medium tracking-[0.12em] text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b0c]"
        >
          預約試駕
        </a>
      </div>
    </section>
  );
}
