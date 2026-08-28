"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const ITEMS = [
  "GOLF R",
  "EA888 · 2.0 TSI",
  "333 PS",
  "420 N·m",
  "4MOTION",
  "7-SPEED DSG",
  "TORQUE VECTORING",
  "0–100 4.7s",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((it) => (
        <span key={it} className="flex items-center">
          <span className="px-6 font-mono text-[12px] tracking-[0.24em] text-neutral-500">
            {it}
          </span>
          <span className="text-accent/70">/</span>
        </span>
      ))}
    </div>
  );
}

// 水平資訊條：頁面往下捲時整條往左位移，與捲動方向相反製造速度感。
// reduced-motion 時完全靜止。
export function Ticker() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-28%"]);

  return (
    <div
      ref={ref}
      className="carbon-weave-soft relative overflow-hidden border-y border-white/10 py-4"
    >
      <motion.div
        style={reduce ? undefined : { x }}
        className="flex w-max will-change-transform"
      >
        <Row />
        <Row />
        <Row />
      </motion.div>
    </div>
  );
}
