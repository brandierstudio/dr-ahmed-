import React, { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  decimals = 0,
  label,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(value);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const duration = 700;
            const startTime = performance.now();
            const startValue = Math.max(0, value * 0.25);

            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = startValue + (value - startValue) * eased;
              setDisplayValue(current);
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  const formatted =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  return (
    <div ref={containerRef} className="text-center">
      <div
        className="font-outfit font-light text-[40px] sm:text-[48px] leading-none tracking-[-0.02em] text-[#0B0B0C] tabular-nums"
        aria-label={`${value}${suffix} ${label}`}
      >
        {formatted}
        {suffix}
      </div>
      <div className="mt-2 text-[12px] text-[#6B7280]">{label}</div>
    </div>
  );
};
