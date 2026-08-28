import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-10 text-[11px] tracking-[0.2em] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold text-neutral-400">
          ATERON
        </Link>
        <span>© 2026 ATERON MOTORS，範例網站，虛構品牌</span>
      </div>
    </footer>
  );
}
