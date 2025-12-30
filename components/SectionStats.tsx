"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const num = parseFloat(numStr.replace(/,/g, ""));
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const controls = animate(0, num, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${value.toFixed(
            decimals
          )}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className={`${className} ${highlight ? "text-green-600" : "text-black"}`}
    >
      {value}
    </span>
  );
};

const SectionStats: React.FC = () => {
  const metrics = [
    { label: "Total Volume", value: "$4.2B+" },
    { label: "Vault Liquidity", value: "$850M" },
    { label: "Positions Secured", value: "24.5K" },
    { label: "LPs APY", value: "24.8%", highlight: true },
  ];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="text-gray-500 font-medium text-sm md:text-base mb-3 group-hover:text-gray-800 transition-colors tracking-wide">
              {metric.label}
            </span>
            <AnimatedCounter
              value={metric.value}
              className="text-3xl md:text-5xl font-bold tracking-tight inline-block"
              highlight={metric.highlight}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionStats;
