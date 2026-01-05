"use client";

import React from "react";
import { Bitcoin, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const SectionBuilder: React.FC = () => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-6">
          The Geometry of Leverage.
        </h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-[#838389] max-w-3xl mx-auto leading-relaxed">
          See how LeverAcc transforms your position size while maintaining the
          same initial capital requirement.
        </p>
      </div>

      {/* Dark Card Container */}
      <div className="bg-[#0c111d] dark:bg-[#0c111d] rounded-3xl shadow-2xl overflow-hidden border border-gray-800 dark:border-gray-700 font-sans text-gray-300 dark:text-gray-300">
        {/* Top Header Bar - Lighter background to distinguish from content */}
        <div className="flex flex-col md:flex-row justify-between md:items-center px-6 py-4 border-b border-gray-700/50 dark:border-gray-600/50 text-xs tracking-wider font-medium gap-2 md:gap-0 bg-[#161b26] dark:bg-[#161b26]">
          <div className="flex items-center gap-2 text-gray-300">
            <Bitcoin size={14} className="text-orange-500" />
            <span>BTC/USDC PERP</span>
          </div>

          <div className="hidden md:block w-px h-4 bg-gray-700 dark:bg-gray-600">
          </div>

          <div className="text-blue-400 flex items-center justify-center font-semibold">
            20x LEVERAGE
          </div>

          <div className="hidden md:block w-px h-4 bg-gray-700 dark:bg-gray-600">
          </div>

          <div className="flex items-center gap-2 text-gray-300 justify-end">
            <Wallet size={14} className="text-gray-400" />
            <span>OWN FUNDS $1,000</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[550px]">
          {/* Left Panel: Chart */}
          <div className="flex-1 p-8 md:p-12 relative border-r border-gray-800/50 dark:border-gray-700/50 flex flex-col">
            <h2 className="text-2xl md:text-3xl text-white font-normal mb-2 tracking-tight">
              Notional Exposure
            </h2>
            <p className="text-sm md:text-base text-gray-500 mb-8 font-light">
              Comparing buying power output based on identical inputs.
            </p>

            {/* Chart Area */}
            <div className="flex-1 w-full md:w-[90%] mx-auto relative mt-12 min-h-[350px]">
              {/* Grid Lines Container */}
              <div className="absolute inset-0 bottom-14 z-0 pointer-events-none">
                {/* Y-Axis Grid Lines & Labels */}
                {[100, 75, 50, 25, 0].map((val, i) => (
                  <div
                    key={i}
                    className="flex items-center absolute w-full"
                    style={{ top: `${i * 25}%` }}
                  >
                    <span className="text-[10px] text-gray-600 dark:text-gray-500 w-8 text-right mr-4 font-mono translate-y-[1px] -mt-2">
                      {val === 0 ? "0" : `$${val}k`}
                    </span>
                    <div className="flex-1 border-t border-dashed border-gray-800/60 dark:border-gray-700/60">
                    </div>
                  </div>
                ))}
              </div>

              {/* Bars Container */}
              <div className="absolute inset-0 bottom-14 z-10 pl-12 flex justify-around items-end">
                {/* Bar 1: Trade on Perp DEX */}
                <div className="relative w-24 h-full flex items-end justify-center group">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="absolute bottom-[20%] mb-3 text-white font-medium text-lg transition-transform group-hover:-translate-y-1"
                  >
                    $20,000
                  </motion.span>
                  {/* Height is 20% relative to 100k max */}
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "20%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full bg-gradient-to-b from-gray-600 to-gray-800/40 rounded-t-sm relative group-hover:opacity-90 transition-opacity"
                  >
                  </motion.div>
                </div>

                {/* Bar 2: Trade on Perp DEX via LeverAcc */}
                <div className="relative w-24 h-full flex items-end justify-center group">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.4 }}
                    className="absolute bottom-[100%] mb-3 text-white font-medium text-lg transition-transform group-hover:-translate-y-1"
                  >
                    $100,000
                  </motion.span>
                  {/* Height is 100% relative to 100k max */}
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="w-full bg-[#0099ff] rounded-t-sm shadow-[0_0_40px_rgba(0,153,255,0.25)] relative"
                  >
                    {/* Gradient Overlay for depth */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent">
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* X-Axis Labels */}
              <div className="absolute bottom-0 left-0 right-0 pl-6 sm:pl-12 flex justify-around min-h-14 md:h-14 items-center pt-4">
                <span className="text-gray-500 text-xs md:text-sm font-medium min-w-[140px] text-center break-words whitespace-normal md:whitespace-nowrap">
                  Trade on Perp DEX
                </span>
                <span className="text-gray-400 text-xs md:text-sm font-medium min-w-[140px] text-center break-words whitespace-normal md:whitespace-nowrap">
                  Trade on Perp DEX via LeverAcc
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: Details */}
          <div className="lg:w-[420px] bg-[#0f1522] dark:bg-[#0f1522] p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 border-gray-800/50 dark:border-gray-700/50">
            {/* Standard DEX Info */}
            <div className="mb-10 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded bg-gray-600"></div>
                <h3 className="text-white text-base md:text-lg font-normal">
                  Trade on Perp DEX
                </h3>
              </div>
              <div className="pl-6 border-l border-gray-800 dark:border-gray-700 ml-1.5 py-1">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-medium">
                  Formula
                </div>
                <div className="text-lg md:text-xl text-gray-300 font-light">
                  <span className="text-gray-500">$1k</span> × 20x ={" "}
                  <span className="text-white font-medium">$20k</span>
                </div>
              </div>
            </div>

            {/* LeverAcc Info */}
            <div className="mb-12 relative">
              <div className="absolute -left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent opacity-0">
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded bg-[#0099ff] shadow-[0_0_10px_#0099ff]">
                </div>
                <h3 className="text-white text-base md:text-lg font-medium">
                  Trade on Perp DEX via LeverAcc
                </h3>
              </div>

              <div className="pl-6 border-l border-blue-900/30 dark:border-blue-800/30 ml-1.5 py-1">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-medium">
                  The Pre-Fund Effect
                </div>
                <p className="text-xs md:text-sm text-gray-400 mb-4 leading-relaxed">
                  Your $1k margin is boosted by{" "}
                  <span className="text-[#0099ff] font-medium">
                    $4k liquidity injection
                  </span>{" "}
                  before execution.
                </p>

                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-medium">
                  Formula
                </div>
                <div className="text-lg md:text-xl text-gray-300 font-light">
                  (<span className="text-[#0099ff] font-medium">$1k + $4k</span>
                  ) × 20x ={" "}
                  <span className="text-white font-medium">$100k</span>
                </div>
              </div>
            </div>

            {/* Footer Stat */}
            <div className="pt-6 border-t border-gray-800 dark:border-gray-700 flex justify-between items-center">
              <span className="text-gray-500 font-medium text-sm md:text-base">
                Efficiency Gain
              </span>
              <span className="text-2xl md:text-3xl font-bold text-[#0099ff]">
                5.0x
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBuilder;
