"use client";

import { Zap, ShieldCheck } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Engineered for Capital Efficiency.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Atomic Liquidity Engine ensures seamless zero-collateral
            borrowing, while the Algorithmic Circuit Breaker safeguards fund
            security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Atomic Liquidity Injection */}
          <div className="group rounded-3xl border border-white/10 bg-[#0A0B10] p-8 hover:border-blue-500/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400">
              <Zap className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Atomic Liquidity Injection
            </h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Liquidity is injected within the same block as execution.
              Flash-loan mechanics applied to perpetual futures, ensuring zero
              collateral drag.
            </p>

            {/* Visual: Injection Speed */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-muted-foreground uppercase">
                  Injection Speed
                </span>
                <span className="text-blue-400 font-mono">&lt;50ms</span>
              </div>
              <div className="flex gap-1 h-2">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full ${
                      i < 16 ? "bg-blue-500" : "bg-blue-900/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Algorithmic Circuit Breaker */}
          <div className="group rounded-3xl border border-white/10 bg-[#0A0B10] p-8 hover:border-blue-500/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Algorithmic Circuit Breaker
            </h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Auto-deleveraging protocols trigger instantly upon volatility
              spikes. 100% LP capital protection guarantees via smart contract
              enforcement.
            </p>

            {/* Visual: Risk Monitor */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between text-xs mb-3">
                <span className="text-muted-foreground uppercase">
                  Risk Monitor
                </span>
                <span className="text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />{" "}
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-blue-500 text-white text-[10px] font-bold py-1.5 rounded text-center">
                  SAFE
                </div>
                <div className="bg-white/10 text-muted-foreground text-[10px] font-bold py-1.5 rounded text-center">
                  WARN
                </div>
                <div className="bg-white/10 text-muted-foreground text-[10px] font-bold py-1.5 rounded text-center">
                  CRIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
