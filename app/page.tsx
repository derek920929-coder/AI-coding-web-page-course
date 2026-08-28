import type { Metadata } from "next";
import { Grain } from "./_components/Grain";
import { CarbonTexture } from "./_components/CarbonTexture";
import { SiteHeader } from "./_components/SiteHeader";
import { SiteFooter } from "./_components/SiteFooter";
import { Hero } from "./_components/Hero";
import { Ticker } from "./_components/Ticker";
import { StatStrip } from "./_components/StatStrip";
import { PerformancePan } from "./_components/PerformancePan";
import { DesignSection } from "./_components/DesignSection";
import { ReserveSection } from "./_components/ReserveSection";

export const metadata: Metadata = {
  title: "Golf R — 四驅鋼砲",
  description:
    "Volkswagen Golf R：2.0 TSI 渦輪、333 PS、4MOTION 全時四驅、七速 DSG。碳黑主題的個人練習網頁。",
};

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans text-neutral-400">
      <CarbonTexture variant="soft" fixed className="-z-10" />
      <Grain />

      <SiteHeader />

      <main id="top">
        <Hero />
        <Ticker />
        <StatStrip />
        <PerformancePan />
        <DesignSection />
        <ReserveSection />
      </main>

      <SiteFooter />
    </div>
  );
}
