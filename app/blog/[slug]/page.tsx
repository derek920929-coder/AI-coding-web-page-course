import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../_components/SiteHeader";
import { SiteFooter } from "../../_components/SiteFooter";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — ATERON 專欄`, description: post.dek };
}

function formatDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${y}.${m}.${day}`;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="relative min-h-screen bg-[#0a0a0b] font-sans text-neutral-400">
      <SiteHeader />

      <main className="mx-auto max-w-[720px] px-6 pb-32 pt-20">
        <Link
          href="/blog"
          className="text-[12px] tracking-[0.2em] text-neutral-500 transition-colors hover:text-accent"
        >
          返回專欄
        </Link>

        <p className="mt-12 font-mono text-xs tracking-[0.08em] text-neutral-600">
          {formatDate(post.date)} / {post.tag} / {post.readingTime}
        </p>
        <h1 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-neutral-50 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-400">{post.dek}</p>

        <img
          src={post.cover}
          alt={post.coverAlt}
          className="mt-12 aspect-[16/10] w-full border border-white/10 object-cover grayscale"
        />

        <article className="mt-14 space-y-7">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="pt-6 text-xl font-medium tracking-tight text-neutral-100"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="border-l border-accent/60 pl-5 text-lg leading-8 text-neutral-300"
                >
                  {block.text}
                </blockquote>
              );
            }
            return (
              <p key={i} className="leading-8 text-neutral-300">
                {block.text}
              </p>
            );
          })}
        </article>

        <div className="mt-20 border-t border-white/10 pt-10">
          <Link
            href="/blog"
            className="text-[12px] tracking-[0.2em] text-neutral-500 transition-colors hover:text-accent"
          >
            返回專欄
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
