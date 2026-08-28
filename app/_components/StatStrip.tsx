// 靜態規格條：直接顯示最終數字，避免在動畫未觸發時卡在 0。
type Stat = { label: string; value: string };

// 數據取自 Volkswagen Golf R（Mk8）公開規格，供個人練習展示用。
const stats: Stat[] = [
  { label: "0-100 km/h", value: "4.7 秒" },
  { label: "最高極速", value: "250 km/h" },
  { label: "最大馬力", value: "333 PS" },
  { label: "峰值扭力", value: "420 N·m" },
];

export function StatStrip() {
  return (
    <section className="border-y border-white/10">
      <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0b0c0e] px-6 py-10 md:py-12">
            <dt className="text-[11px] tracking-[0.16em] text-neutral-500">{s.label}</dt>
            <dd className="mt-4 font-mono text-4xl tabular-nums text-neutral-100 md:text-5xl">
              {s.value.split(" ")[0]}
              <span className="ml-1 text-base text-neutral-500">
                {s.value.split(" ")[1]}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
