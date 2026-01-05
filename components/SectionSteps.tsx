"use client";

import React from "react";
import { Check, TrendingUp, Wallet, Zap } from "lucide-react";
import { motion } from "framer-motion";

const SectionSteps: React.FC = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-[#EDEEEC]">
          How does it work?
        </h2>
        <p className="text-gray-500 dark:text-[#838389] font-medium text-base md:text-lg">
          I know what you&apos;re thinking... Here&apos;s a simple step-by-step
          guide.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group"
        >
          <div className="bg-[#e8e8e8] dark:bg-gray-800 rounded-3xl h-64 mb-8 overflow-hidden relative flex items-center justify-center p-8">
            {/* Borrow Request Visual */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background decorative elements */}
              <div className="absolute w-40 h-40 bg-orange-200/50 rounded-full blur-2xl -top-4 -left-4">
              </div>

              {/* Main Card */}
              <div className="absolute w-56 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-5 flex flex-col z-10 rotate-[-2deg] transition-transform group-hover:rotate-0 duration-500 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                      <Wallet size={12} />
                    </div>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                      Vault Request
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 font-medium mb-1">
                      YOUR COLLATERAL
                    </div>
                    <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded-full">
                    </div>
                  </div>
                  <div className="relative">
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 font-medium mb-1">
                      REQUEST AMOUNT
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "8rem" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                        className="h-2 bg-orange-500 rounded-full"
                      >
                      </motion.div>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1 }}
                        className="bg-orange-100 text-orange-700 text-[8px] font-bold px-1.5 py-0.5 rounded"
                      >
                        4x
                      </motion.span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="w-full bg-black text-white text-[10px] py-2 rounded-lg text-center font-medium">
                      Apply for Loan
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-8 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold px-3 py-1.5 rounded-full rotate-[5deg] shadow-lg z-20">
                Uncollateralized
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-black dark:bg-[#0099FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
              01
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-[#EDEEEC]">
                Initiate a borrowing request
              </h3>
              <p className="text-gray-500 dark:text-[#838389] leading-relaxed text-xs md:text-sm">
                Before executing perps trades, apply for an uncollateralized
                loan from the vault (up to 4x of your own funds).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="group"
        >
          <div className="bg-[#f0f0f0] dark:bg-gray-800 rounded-3xl h-64 mb-8 p-6 flex flex-col justify-center gap-3 relative overflow-hidden">
            {/* Speed Lines Effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-[-20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent rotate-[-5deg]">
              </div>
              <div className="absolute bottom-10 left-[-20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent rotate-[-5deg]">
              </div>
            </div>

            {/* Transaction Item 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-3 shadow-sm flex items-center justify-between relative z-10 translate-x-2 opacity-60 scale-95 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <Zap size={14} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    Processing Request
                  </div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500">
                    Verifying vault liquidity...
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Item 2 (Active) */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md flex items-center justify-between relative z-20 border border-green-100 dark:border-green-900/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">
                    Funds Received
                  </div>
                  <div className="text-[10px] text-green-600 dark:text-green-400 font-medium">
                    Available Immediately
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-gray-900 dark:text-white">
                  + $4,000
                </div>
                <div className="text-[9px] text-gray-400 dark:text-gray-500">
                  0.04s
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-black dark:bg-[#0099FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
              02
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-[#EDEEEC]">
                Loan funds received
              </h3>
              <p className="text-gray-500 dark:text-[#838389] leading-relaxed text-xs md:text-sm">
                The system transfers funds to your account at lightning speed,
                making them available immediately - no waiting required.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="group"
        >
          <div className="bg-[#e8e8e8] dark:bg-gray-800 rounded-3xl h-64 mb-8 p-6 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Trading UI Abstract */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-5/6 p-4 relative z-10 border border-gray-200 dark:border-gray-700">
              {/* UI Header */}
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-bold">BTC-PERP</span>
                </div>
                <div className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                  <TrendingUp size={10} /> +2.4%
                </div>
              </div>

              {/* Buying Power */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 mb-3">
                <div className="flex justify-between text-[9px] text-gray-400 dark:text-gray-500 mb-1 uppercase font-bold tracking-wide">
                  <span>Buying Power</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    5x Mode
                  </span>
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  $5,000.00
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="bg-green-500 text-white text-[10px] py-1.5 rounded text-center font-bold"
                >
                  Long
                </motion.div>
                <div className="bg-red-50 text-red-400 text-[10px] py-1.5 rounded text-center font-bold">
                  Short
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-12 right-8 w-12 h-12 bg-blue-200/50 rounded-full blur-xl">
            </div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-green-200/50 rounded-full blur-xl">
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-black dark:bg-[#0099FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
              03
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-[#EDEEEC]">
                Trade perps as before
              </h3>
              <p className="text-gray-500 dark:text-[#838389] leading-relaxed text-xs md:text-sm">
                Place orders in a familiar UI/UX with enhanced buying power, and
                enjoying better profit expectations at the same risk level.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionSteps;
