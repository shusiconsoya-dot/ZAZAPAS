"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const QUOTES = [
  {
    text: "No son solo zapatillas, son tu carta de presentación.",
    icon: "auto_awesome",
  },
  {
    text: "Diseñadas para que cada paso deje huella.",
    icon: "trending_up",
  },
  {
    text: "Para correr. Para destacar. Para llegar más lejos.",
    icon: "repeat",
  },
];

export function RhetoricalQuotes() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 px-8 bg-surface-container relative overflow-hidden">
      <div
        className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll variant="fade-up">
          <p className="font-headline tracking-[0.35em] uppercase text-primary/60 text-xs mb-16 flex items-center gap-4">
            <span className="w-10 h-px bg-primary/40" />
            Lenguaje que conecta
          </p>
        </RevealOnScroll>

        <div className="flex items-stretch gap-10 md:gap-16">
          {/* Left — big quotes */}
          <div className="flex-1 flex flex-col justify-center gap-10">
            {QUOTES.map((q, i) => (
              <RevealOnScroll key={i} variant="fade-left" delay={i * 120}>
                <p
                  className={`font-headline text-3xl md:text-5xl lg:text-6xl font-black leading-tight cursor-default transition-all duration-500 origin-left select-none ${
                    hoveredIdx === i
                      ? "blur-none scale-[1.02] text-on-surface"
                      : "blur text-on-surface"
                  }`}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  &ldquo;{q.text}&rdquo;
                </p>
              </RevealOnScroll>
            ))}
          </div>

          {/* Right — tall icon that changes on hover */}
          <div className="hidden lg:block flex-shrink-0 w-52 relative">
            {QUOTES.map((q, i) => (
              <div
                key={q.icon}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredIdx === i
                    ? "opacity-100 scale-100"
                    : hoveredIdx === null && i === 0
                    ? "opacity-15 scale-95"
                    : "opacity-0 scale-90"
                }`}
                aria-hidden="true"
              >
                <span
                  className={`material-symbols-outlined leading-none select-none transition-colors duration-500 ${
                    hoveredIdx === i ? "text-primary" : "text-primary/30"
                  }`}
                  style={{ fontSize: "210px" }}
                >
                  {q.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
