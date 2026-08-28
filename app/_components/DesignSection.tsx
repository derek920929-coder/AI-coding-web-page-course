"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const specs = [
  { term: "車漆", line: "低反光霧黑陽極塗裝，日光下不反白" },
  { term: "空力", line: "從車頭進氣到尾部擴散器，每道折線都在導流" },
  { term: "輪圈", line: "20 吋鍛造，霧鈦灰，單顆再輕 1.8 公斤" },
  { term: "座艙", line: "磨砂金屬、Alcantara、實體旋鈕，不靠螢幕" },
];

export function DesignSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} id="design" className="border-b border-white/10 bg-[#0b0b0c]">
      <div className="mx-auto grid max-w-[1400px] gap-px bg-white/10 lg:grid-cols-2">
        <div className="bg-[#0b0b0c] px-6 py-24 lg:px-12 lg:py-32">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-100 sm:text-5xl">
              霧面黑，沉得住氣
            </h2>
            <p className="mt-6 max-w-[42ch] leading-8 text-neutral-400">
              全車沒有一片鈑金純粹是裝飾。看不見的地方，我們也沒有停手。
            </p>

            <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2">
              {specs.map((s) => (
                <div key={s.term} className="bg-[#0b0b0c] p-6">
                  <p className="text-sm tracking-[0.2em] text-neutral-300">{s.term}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-500">{s.line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[60vh] overflow-hidden bg-[#0b0b0c] lg:min-h-[120vh]">
          <motion.img
            aria-hidden
            src="/images/design.jpg"
            alt=""
            style={reduce ? undefined : { y }}
            className="absolute inset-0 h-[112%] w-full object-cover opacity-90 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0c] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
