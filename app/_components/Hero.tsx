"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CarbonTexture } from "./CarbonTexture";

// 主視覺：桌機捲動時做多層視差（背景圖 / 碳紋 / 文字三種速度）。
// prefers-reduced-motion 或 SSR 首屏一律顯示靜態版本，確保標題與 CTA 永遠可見。
function HeroContent() {
  return (
    <>
      <div className="mb-7 h-px w-full max-w-[220px] origin-left bg-gradient-to-r from-accent/80 to-transparent" />

      <p className="text-[11px] font-medium tracking-[0.42em] text-neutral-500">
        4MOTION 全時四驅鋼砲
      </p>

      <h1 className="mt-5 text-6xl font-medium leading-[0.95] tracking-tight text-neutral-50 sm:text-8xl">
        Golf R
      </h1>

      <p className="mt-7 max-w-[44ch] text-lg leading-8 text-neutral-400">
        2.0 TSI 渦輪，333 PS，七速 DSG。四驅掀背，日常能開，山路能拚。
      </p>

      <div className="mt-11 flex flex-col gap-3 sm:flex-row">
        <a
          href="#reserve"
          className="inline-flex h-12 items-center justify-center bg-neutral-100 px-9 text-sm font-medium tracking-[0.12em] text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b0c]"
        >
          預約試駕
        </a>
        <a
          href="#performance"
          className="inline-flex h-12 items-center justify-center border border-white/20 px-9 text-sm font-medium tracking-[0.12em] text-neutral-200 transition-colors hover:border-white/45 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          探索規格
        </a>
      </div>
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 三種速度：背景最慢並微放大，碳紋居中，文字往上並淡出。
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const weaveY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  if (reduce) {
    return (
      <section
        ref={ref}
        className="relative flex min-h-[100dvh] flex-col overflow-hidden"
      >
        <img
          aria-hidden
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.72]"
        />
        <CarbonTexture variant="soft" className="opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_0%,transparent,#0a0b0c_92%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0b0c] to-transparent" />
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pb-16 pt-28">
          <HeroContent />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
    >
      {/* 背景層：實拍圖，慢速下移 + 微放大 */}
      <motion.img
        aria-hidden
        src="/images/hero.jpg"
        alt=""
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-[0.72] will-change-transform"
      />

      {/* 中間層：碳紋以第三速度漂移，製造深度 */}
      <motion.div
        style={{ y: weaveY }}
        className="pointer-events-none absolute inset-0 h-[115%] will-change-transform"
      >
        <CarbonTexture variant="soft" className="opacity-40" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_0%,transparent,#0a0b0c_92%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0b0c] to-transparent" />

      {/* 前景層：文字往上並淡出 */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pb-16 pt-28 will-change-transform"
      >
        <HeroContent />
      </motion.div>
    </section>
  );
}
