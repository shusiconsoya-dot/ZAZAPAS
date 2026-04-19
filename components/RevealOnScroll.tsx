"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade-in" | "fade-left" | "fade-right";

const variants: Record<Variant, { hidden: string; visible: string }> = {
  "fade-up":    { hidden: "opacity-0 translate-y-6",  visible: "opacity-100 translate-y-0" },
  "fade-in":    { hidden: "opacity-0",                visible: "opacity-100" },
  "fade-left":  { hidden: "opacity-0 -translate-x-6", visible: "opacity-100 translate-x-0" },
  "fade-right": { hidden: "opacity-0 translate-x-6",  visible: "opacity-100 translate-x-0" },
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  threshold?: number;
}

export function RevealOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  threshold = 0.12,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { hidden, visible: show } = variants[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out duration-700",
        visible ? show : hidden,
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
