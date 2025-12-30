"use client";

import Image from "next/image";

export function SupportedDEXs() {
  return (
    <section className="py-20 px-4 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">
            Supported Perpetual DEXs
          </h2>
          <p className="text-muted-foreground">
            Seamlessly integrated with leading decentralized exchanges.
          </p>
        </div>

        <div className="flex items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
          {/* Placeholder for Hyperliquid Logo - Text for now as I don't have the SVG */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
              H
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              Hyperliquid
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
