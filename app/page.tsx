import type { Metadata } from "next";
import { Grain } from "./_components/Grain";
import { SiteHeader } from "./_components/SiteHeader";
import { SiteFooter } from "./_components/SiteFooter";
import { Hero } from "./_components/Hero";
import { StatStrip } from "./_components/StatStrip";
import { PerformancePan } from "./_components/PerformancePan";
import { DesignSection } from "./_components/DesignSection";

export const metadata: Metadata = {
  title: "極致跑旅 — 性能運動汽車",
  description:
    "ATERON GT-S：雙渦輪 V8、四輪主動扭力分配。",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0b] font-sans text-neutral-400">
      <Grain />

      <SiteHeader />

      <main id="top">
        <Hero />
        <StatStrip />
        <PerformancePan />
        <DesignSection />

        {/* 預約：整段靠左，不置中，與導覽列 / 主視覺共用同一組 CTA 文案 */}
        <section id="reserve" className="relative overflow-hidden border-b border-white/10">
          <img
            aria-hidden
            src="/images/reserve.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.16] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/85 to-[#0a0a0b]/40" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-32 md:py-44">
            <h2 className="max-w-[15ch] text-4xl font-medium leading-tight tracking-tight text-neutral-100 md:text-6xl">
              把它開出去，你就懂了
            </h2>
            <p className="mt-6 max-w-[44ch] leading-8 text-neutral-400">
              留下聯絡方式，專屬顧問會安排一段完整的封閉道路體驗行程。
            </p>
            <a
              href="mailto:reserve@ateron.example"
              className="mt-12 inline-flex h-12 items-center justify-center bg-neutral-100 px-10 text-sm font-medium tracking-[0.12em] text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
            >
              預約試駕
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
