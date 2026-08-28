"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CarbonTexture } from "./CarbonTexture";

// 內容依 Volkswagen Golf R（Mk8）公開資料改寫，供個人練習展示用。
const specs = [
  { term: "車色", line: "Lapiz 光刻藍 / 深黑珍珠，車內碳黑飾板貫穿中控與門板" },
  { term: "空力", line: "R 專屬前保桿、車頂擾流翼、後保桿分流器，高速下壓更穩" },
  { term: "輪圈", line: "19 吋 Estoril 鍛造鋁圈，消光黑，藍色卡鉗" },
  { term: "座艙", line: "R 鍵跑車方向盤、Nappa 真皮桶型座椅、30 色氛圍燈" },
];

export function DesignSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  // 文字欄以相反方向做輕微反視差，兩欄之間拉開層次。
  const textY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section ref={ref} id="design" className="relative border-b border-white/10 bg-[#0b0b0c]">
      <CarbonTexture variant="soft" className="opacity-50" />
      <div className="relative mx-auto grid max-w-[1400px] gap-px bg-white/10 lg:grid-cols-2">
        <motion.div
          style={reduce ? undefined : { y: textY }}
          className="bg-[#0b0b0c] px-6 py-24 will-change-transform lg:px-12 lg:py-32"
        >
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-100 sm:text-5xl">
              碳黑，藏著四驅的底氣
            </h2>
            <p className="mt-6 max-w-[42ch] leading-8 text-neutral-400">
              低調的外觀底下，是一整套為抓地力服務的硬體。看不見的地方，也沒有妥協。
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
        </motion.div>

        <div className="relative min-h-[60vh] overflow-hidden bg-[#0b0b0c] lg:min-h-[120vh]">
          <CarbonTexture variant="weave" className="opacity-40" />
          <motion.img
            aria-hidden
            src="/images/design.jpg"
            alt=""
            style={reduce ? undefined : { y: imgY }}
            className="absolute inset-0 h-[112%] w-full object-cover opacity-90 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0c] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
