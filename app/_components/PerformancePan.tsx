"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Panel = {
  value: string;
  unit: string;
  meta: string;
  body: string;
};

const panels: Panel[] = [
  {
    value: "640",
    unit: "hp",
    meta: "動力 · 4.0L 雙渦輪 V8",
    body: "乾式油底殼讓引擎躺得更低，重心跟著沉。7,200 轉紅線前，出力線性到你以為後面還有。",
  },
  {
    value: "3.1",
    unit: "秒",
    meta: "傳動 · 濕式八速雙離合",
    body: "換檔在 40 毫秒內完成。升檔沒有斷點，降檔補油自己來，右腳只管踩。",
  },
  {
    value: "48:52",
    unit: "配重",
    meta: "底盤 · 主動式扭力分配",
    body: "後軸電子差速器每秒修正上百次，出彎時把動力送到咬得住地的那一輪。",
  },
  {
    value: "410",
    unit: "mm",
    meta: "制動 · 碳陶瓷碟盤，六活塞卡鉗",
    body: "連續重踩不衰減，簧下再輕 21 公斤。停得住，才敢開得快。",
  },
];

function PanelCard({ panel }: { panel: Panel }) {
  return (
    <article className="flex h-[100dvh] w-[82vw] shrink-0 flex-col justify-center border-r border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent px-8 md:w-[58vw] md:px-16">
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
        <motion.div style={{ x }} className="flex will-change-transform">
          {panels.map((p) => (
            <PanelCard key={p.meta} panel={p} />
          ))}
          <div className="h-[100dvh] w-[18vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
