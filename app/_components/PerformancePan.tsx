"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CarbonTexture } from "./CarbonTexture";

type Panel = {
  value: string;
  unit: string;
  meta: string;
  body: string;
};

// 內容依 Volkswagen Golf R（Mk8）公開資料改寫，供個人練習展示用。
const panels: Panel[] = [
  {
    value: "333",
    unit: "PS",
    meta: "動力 · 2.0 TSI 渦輪 · EA888 evo4",
    body: "四缸兩公升，雙渦流渦輪。420 N·m 從 2,100 轉一路拉到 5,350 轉都在檯面上，中段補油不用等。",
  },
  {
    value: "4.7",
    unit: "秒",
    meta: "傳動 · 七速 DSG 雙離合",
    body: "兩組離合器交替接檔，升檔幾乎沒有動力中斷。起步彈射模式一鍵備妥，0-100 只要 4.7 秒。",
  },
  {
    value: "100",
    unit: "%",
    meta: "四驅 · R-Performance 扭力導引",
    body: "後軸差速器用兩顆多片離合器獨立控制左右輪，出彎可把後軸可用扭力全部送到外側單輪，車頭跟著鑽進去。",
  },
  {
    value: "357",
    unit: "mm",
    meta: "制動 · 前軸雙片式碟盤",
    body: "前輪 357 公厘二片式碟盤，盤體與帽座分開鎖固，散熱快、簧下也輕。連續下山踏板腳感不軟。",
  },
];

function PanelCard({ panel }: { panel: Panel }) {
  return (
    <article className="flex h-[100dvh] w-[86vw] shrink-0 flex-col justify-center border-r border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent px-8 sm:w-[82vw] md:w-[58vw] md:px-16">
      <p className="font-mono text-7xl tabular-nums text-neutral-50 md:text-[8.5rem] md:leading-none">
        {panel.value}
        <span className="ml-3 text-2xl text-neutral-500 md:text-3xl">{panel.unit}</span>
      </p>
      <p className="mt-6 text-sm tracking-[0.2em] text-neutral-500">{panel.meta}</p>
      <p className="mt-6 max-w-[40ch] leading-8 text-neutral-400">{panel.body}</p>
    </article>
  );
}

export function PerformancePan() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);
  // 碳紋背景以較慢速度反向漂移，讓面板橫移時多一層深度。
  const weaveX = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);

  if (reduce) {
    return (
      <section id="performance" className="border-b border-white/10">
        <div className="mx-auto max-w-[1400px] divide-y divide-white/10">
          {panels.map((p) => (
            <article key={p.meta} className="px-6 py-16">
              <p className="font-mono text-6xl tabular-nums text-neutral-50">
                {p.value}
                <span className="ml-3 text-2xl text-neutral-500">{p.unit}</span>
              </p>
              <p className="mt-5 text-sm tracking-[0.2em] text-neutral-500">{p.meta}</p>
              <p className="mt-5 max-w-[46ch] leading-8 text-neutral-400">{p.body}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="performance" ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden border-y border-white/10">
        <motion.div
          style={{ x: weaveX }}
          className="pointer-events-none absolute inset-0 w-[140%] will-change-transform"
        >
          <CarbonTexture variant="soft" className="opacity-60" />
        </motion.div>

        <motion.div style={{ x }} className="relative flex will-change-transform">
          {panels.map((p) => (
            <PanelCard key={p.meta} panel={p} />
          ))}
          <div className="h-[100dvh] w-[18vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
