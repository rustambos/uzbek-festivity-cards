import { useMemo } from "react";

type P = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  kind: "star" | "confetti";
  tone: number;
};

const TONES = ["bg-uz-blue", "bg-uz-green", "bg-gold", "bg-festive-white"];

export function Particles({ count = 34 }: { count?: number }) {
  const items = useMemo<P[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 37) % 100,
        size: 4 + ((i * 13) % 8),
        delay: (i * 1.37) % 18,
        duration: 16 + ((i * 7) % 16),
        drift: ((i * 23) % 60) - 30,
        kind: i % 3 === 0 ? "star" : "confetti",
        tone: i % 4,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 animate-float-down"
          style={{
            left: `${p.left}%`,
            animationDelay: `-${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        >
          {p.kind === "star" ? (
            <span
              className="block bg-gold opacity-70 star-shape"
              style={{ width: p.size + 4, height: p.size + 4 }}
            />
          ) : (
            <span
              className={`block rounded-[1px] opacity-60 ${TONES[p.tone]}`}
              style={{ width: p.size, height: p.size * 0.5 }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
