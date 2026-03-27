"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

const QuantumFlow = dynamic(() => import("./QuantumFlow"), {
  ssr: false,
  loading: () => null,
});

const SectionHero: React.FC = () => {
  const [showQuantumFlow, setShowQuantumFlow] = useState(false);

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | null = null;
    let timeoutId: number | null = null;

    const loadBackground = () => setShowQuantumFlow(true);

    if (win.requestIdleCallback) {
      idleId = win.requestIdleCallback(loadBackground, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(loadBackground, 700);
    }

    return () => {
      if (idleId !== null && win.cancelIdleCallback) {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section className="relative pt-16 md:pt-32 pb-16 px-4 w-full">
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center -translate-y-30 sm:translate-y-0">
        {showQuantumFlow ? <QuantumFlow /> : null}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        <h1 className="relative z-10 text-4xl md:text-7xl font-bold tracking-tight text-black dark:text-[#EDEEEC] mb-8 leading-[1.1]">
          <span className="block">Trade Perps with 5x Buying Power.</span>
          <span className="block">Low interest, high impact.</span>
        </h1>

        <p className="relative z-10 text-base md:text-lg text-gray-500 dark:text-[#838389] max-w-3xl mb-12 leading-relaxed">
          LeverAcc is a liquidity and efficiency layer built specifically for
          perpetual traders.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="relative group w-full sm:w-auto transition-transform hover:scale-[1.03] active:scale-95">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-bold text-base md:text-lg border-0 border-[#0099ff] bg-[#0099ff] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-colors whitespace-nowrap"
              onClick={() => {
                window.open("https://app.leveracc.xyz/", "_blank");
              }}
            >
              Launch App
              <span className="inline-flex animate-bounce">
                <ArrowUpRight size={18} />
              </span>
            </button>
          </div>

          <a
            href="https://leveracc.gitbook.io/leveracc-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-gray-300 dark:border-[#2E2E45] text-gray-800 dark:text-[#D3DAFE] px-8 py-2.5 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all w-full sm:w-auto inline-block hover:-translate-y-0.5"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
