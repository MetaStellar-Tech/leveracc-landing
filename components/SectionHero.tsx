"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ClientErrorBoundary from "./ClientErrorBoundary";

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
        {showQuantumFlow ? (
          <ClientErrorBoundary fallback={null}>
            <QuantumFlow />
          </ClientErrorBoundary>
        ) : null}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 text-[11px] md:text-xs font-bold uppercase tracking-wider mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Capital Infrastructure on Hyperliquid
        </div>

        <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-[#EDEEEC] mb-8 leading-[1.1]">
          <span className="block">The Capital Layer of Hyperliquid.</span>
          <span className="block bg-gradient-to-r from-[#0099ff] to-cyan-400 bg-clip-text text-transparent pb-2">
            5x power for every trading app.
          </span>
        </h1>

        <p className="relative z-10 text-base md:text-lg text-gray-600 dark:text-[#A1A1AA] max-w-3xl mb-12 leading-relaxed">
          LeverAcc is shared capital infrastructure — account, lending, credit
          risk and settlement — powering AI trading, copy trading, quant teams
          and bots. Same capital, 5x buying power.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            className="group w-full sm:w-auto flex items-center justify-center gap-2 font-bold text-base md:text-lg text-white bg-[#0099ff] px-7 py-3 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            onClick={() => {
              window.open("https://app.leveracc.xyz/", "_blank");
            }}
          >
            Launch App
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <a
            href="#partners"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-[#2E2E45] text-gray-800 dark:text-[#D3DAFE] px-7 py-3 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Partner with us
          </a>
        </div>

        <Link
          href="https://leveracc.gitbook.io/leveracc-docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-[#838389] hover:text-gray-900 dark:hover:text-[#EDEEEC] transition-colors"
        >
          Building an app? Read the SDK documentation
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default SectionHero;
