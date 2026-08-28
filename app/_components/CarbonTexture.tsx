// 可重複使用的碳纖維織理裝飾層。
// 放在 position: relative 的容器內；pointer-events-none 且 aria-hidden，純視覺。
// variant:
//   "weave" — 一般碳紋（預設）
//   "soft"  — 大面積低對比版本
// fixed:   釘在視窗上（用於整頁底層），預設 false = 跟隨容器
type Props = {
  variant?: "weave" | "soft";
  fixed?: boolean;
  className?: string;
};

export function CarbonTexture({
  variant = "weave",
  fixed = false,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none inset-0 ${fixed ? "fixed" : "absolute"} ${
        variant === "soft" ? "carbon-weave-soft" : "carbon-weave"
      } ${className}`}
    />
  );
}
