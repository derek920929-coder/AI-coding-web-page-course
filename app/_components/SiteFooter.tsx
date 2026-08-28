import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0b0c]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-10 text-[11px] leading-6 tracking-[0.2em] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold text-neutral-400">
          GOLF&nbsp;R
        </Link>
        <span className="max-w-[52ch] sm:text-right">
          個人前端練習專案，非官方網站，與 Volkswagen AG 無任何關聯。車輛名稱與規格數據僅供學習展示。
        </span>
      </div>
    </footer>
  );
}
