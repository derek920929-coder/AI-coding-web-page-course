import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../_components/SiteHeader";
import { SiteFooter } from "../_components/SiteFooter";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "專欄 — ATERON",
  description: "關於動力、底盤與傳動的技術短文。",
};

function formatDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${y}.${m}.${day}`;
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="relative min-h-screen bg-[#0a0a0b] font-sans text-neutral-400">
      <SiteHeader />

      <main className="mx-auto max-w-[1400px] px-6 pb-32 pt-24">
        <p className="text-[11px] font-medium tracking-[0.42em] text-neutral-500">
          JOURNAL
        </p>
        <h1 className="mt-5 text-4xl font-medium tracking-tight text-neutral-50 sm:text-6xl">
          專欄
        </h1>
        <p className="mt-6 max-w-[46ch] leading-8 text-neutral-400">
          關於動力、底盤與傳動的技術短文。沒有行銷話術，只講工程上真正發生了什麼。
        </p>

        <ul className="mt-20 divide-y divide-white/10 border-y border-white/10">
          {sorted.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-6 py-10 md:grid-cols-[300px_1fr] md:gap-12"
              >
                <div className="overflow-hidden border border-white/10">
                  <img
                    src={post.cover}
                    alt={post.coverAlt}
                    className="aspect-[16/10] w-full object-cover grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <p className="font-mono text-xs tracking-[0.08em] text-neutral-600">
                    {formatDate(post.date)}
                    <span className="mx-2 text-neutral-700">·</span>
                    {post.tag}
                    <span className="mx-2 text-neutral-700">·</span>
                    {post.readingTime}
                  </p>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight text-neutral-100 transition-colors group-hover:text-white sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 max-w-[62ch] leading-8 text-neutral-400">
                    {post.dek}
                  </p>
                  <span className="mt-5 inline-block text-[12px] tracking-[0.2em] text-neutral-500 transition-colors group-hover:text-accent">
                    閱讀
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
