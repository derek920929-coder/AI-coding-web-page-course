import Link from "next/link";

// 全站共用導覽列。錨點連結一律用根路徑（/#...），從 /blog 也能正確跳回首頁對應區塊。
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-white/10 bg-[#0a0b0c]/95 backdrop-blur">
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
        <Link
          href="/"
          className="text-[13px] font-semibold tracking-[0.4em] text-neutral-100"
        >
          GOLF&nbsp;R
        </Link>
        <div className="hidden gap-10 text-[12px] tracking-[0.2em] text-neutral-500 md:flex">
          <Link href="/#performance" className="transition-colors hover:text-neutral-200">
            性能
          </Link>
          <Link href="/#design" className="transition-colors hover:text-neutral-200">
            設計
          </Link>
          <Link href="/blog" className="transition-colors hover:text-neutral-200">
            專欄
          </Link>
        </div>
        <Link
          href="/#reserve"
          className="inline-flex h-9 items-center border border-white/15 px-4 text-[12px] tracking-[0.2em] text-neutral-200 transition-colors hover:border-accent hover:text-white"
        >
          預約試駕
        </Link>
      </nav>
    </header>
  );
}
