// 靜態 Server Component：主視覺不做進場動畫，確保任何情況下標題與 CTA 都直接可見。
// 頁面的動態感集中在下方「性能」的水平釘住捲動與「設計」的視差。
export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* 氛圍底層：Unsplash 實車照，壓暗後作為主視覺背景 */}
      <img
        aria-hidden
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.34]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_0%,transparent,#0a0a0b_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0b] to-transparent" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pb-16 pt-28">
        <div className="mb-7 h-px w-full max-w-[220px] origin-left bg-gradient-to-r from-accent/80 to-transparent" />

        <p className="text-[11px] font-medium tracking-[0.42em] text-neutral-500">
          PERFORMANCE GRAND TOURER
        </p>

        <h1 className="mt-5 text-6xl font-medium leading-[0.95] tracking-tight text-neutral-50 sm:text-8xl">
          ATERON GT-SR
        </h1>

        <p className="mt-7 max-w-[44ch] text-lg leading-8 text-neutral-400">
          雙渦輪 V8，四輪主動扭力分配。
        </p>

        <div className="mt-11 flex flex-col gap-3 sm:flex-row">
          <a
            href="#reserve"
            className="inline-flex h-12 items-center justify-center bg-neutral-100 px-9 text-sm font-medium tracking-[0.12em] text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
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
      </div>
    </section>
  );
}
