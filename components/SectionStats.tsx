"use client";

import React, { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({
  value,
  className,
  highlight,
}: {
  value: string;
  className?: string;
  highlight?: boolean;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const duration = 1800;
    const startTime = performance.now();

    const animateFrame = (time: number) => {
      if (!ref.current) return;

      const elapsed = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const current = target * eased;

      ref.current.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;

      if (elapsed < 1) {
        requestAnimationFrame(animateFrame);
      }
    };

    const rafId = requestAnimationFrame(animateFrame);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className={`${className} ${
        highlight
          ? "text-green-600 dark:text-green-400"
          : "text-black dark:text-white"
      }`}
    >
      {value}
    </span>
  );
};

const SectionStats: React.FC = () => {
  const metrics = [
    { label: "Max Buying Power", value: "5x" },
    { label: "Daily Interest Rate", value: "0.1%" },
    { label: "High Execution Speed", value: "< 50ms" },
    { label: "Target LPs APY", value: "~10%-15%", highlight: true },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            style={{ transitionDelay: `${idx * 90}ms` }}
            className={`bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-gray-500 dark:text-gray-400 font-medium text-[10px] md:text-sm mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors tracking-wide h-[2rem] md:min-h-0 leading-[2] md:leading-normal">
              {metric.label}
            </span>
            <AnimatedCounter
              value={metric.value}
              className="text-xl md:text-4xl font-bold tracking-tight inline-block"
              highlight={metric.highlight}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionStats;
