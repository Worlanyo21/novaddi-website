"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  lines: string[];
  className?: string;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  lines,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll<HTMLElement>("[data-line]")
    );

    if (prefersReduced) {
      elements.forEach((el) => {
        el.classList.remove("reveal-initial");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.remove("reveal-initial");
            el.classList.add("animate-reveal-line");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.6, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn(className)}>
      {lines.map((line, idx) => (
        <p
          key={idx}
          data-line
          className={cn(
            "reveal-initial will-change-[filter,transform] text-slate-900",
            "leading-7"
          )}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default ScrollRevealText;
