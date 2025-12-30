"use client";

import { motion } from "framer-motion";

export function LeverageGeometry() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Geometry of Leverage.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how LeverAcc transforms your position size while maintaining the
            same initial capital requirement.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0A0B10] overflow-hidden">
          {/* Header of the card */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 text-xs md:text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⚡</span>
              <span>BTC/USDC PERP</span>
            </div>
            <div className="text-blue-400">20x LEVERAGE</div>
            <div>OWN FUNDS: $1,000</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Visual Chart Area */}
            <div className="relative h-[300px] md:h-[400px] flex items-end justify-around pb-8 border-b md:border-b-0 border-white/5">
              {/* Background Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-[1px] bg-dashed border-t border-white/10 border-dashed"
                  />
                ))}
              </div>

              {/* Bar 1: Perp DEX */}
              <div className="flex flex-col items-center gap-4 group w-1/3">
                <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  $20,000
                </span>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "20%" }}
                  className="w-full bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-lg relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
                </motion.div>
                <span className="text-xs text-muted-foreground text-center">
                  Trade on Perp DEX
                </span>
              </div>

              {/* Bar 2: LeverAcc */}
              <div className="flex flex-col items-center gap-4 group w-1/3">
                <span className="text-white font-bold text-lg">$100,000</span>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  className="w-full bg-gradient-to-t from-blue-900 to-blue-500 rounded-t-lg relative shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-blue-300/50" />
                </motion.div>
                <span className="text-xs text-white text-center font-medium">
                  Trade on LeverAcc
                </span>
              </div>
            </div>

            {/* Explanation Area */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-600" />
                  Trade on Perp DEX
                </h3>
                <div className="pl-4 border-l border-white/10 space-y-1">
                  <p className="text-xs text-muted-foreground uppercase">
                    Formula
                  </p>
                  <p className="text-white font-mono">
                    $1k × 20x ={" "}
                    <span className="text-white font-bold">$20k</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Trade on LeverAcc
                </h3>
                <div className="pl-4 border-l border-blue-500/30 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">
                      The Pre-Fund Effect
                    </p>
                    <p className="text-sm text-gray-400">
                      Your $1k collateral is boosted by{" "}
                      <span className="text-blue-400">
                        54x liquidity injection
                      </span>{" "}
                      before execution.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">
                      Formula
                    </p>
                    <p className="text-white font-mono">
                      (<span className="text-blue-400">$1k + $4k</span>) × 20x ={" "}
                      <span className="text-white font-bold">$100k</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-muted-foreground">Efficiency Gain</span>
                <span className="text-3xl font-bold text-blue-500">5.0x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
