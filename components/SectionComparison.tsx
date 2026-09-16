"use client";

import React from "react";
import {
  Bot,
  Code2,
  Coins,
  Layers,
  Monitor,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const SectionComparison: React.FC = () => {
  return (
    <section>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-6">
          Win-Win for Network Contributors.
        </h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-[#838389] max-w-3xl mx-auto leading-relaxed">
          Traders gain buying power, trading apps gain distribution, and LPs
          gain a new yield channel.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {/* Traders Card - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} // Slide in from left
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="bg-[#0c111d] dark:bg-[#0c111d] rounded-[32px] p-6 md:p-8 border border-gray-800 dark:border-gray-700 flex flex-col relative overflow-hidden group h-full hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-700">
          </div>

          {/* Card Header */}
          <div className="relative z-10 mb-8 min-h-[140px] flex flex-col justify-start">
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              Active Participants
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Traders
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Maximize capital efficiency with zero friction.
            </p>
          </div>

          {/* Items Container */}
          <div className="flex flex-col gap-6 relative z-10 flex-1">
            {/* Item 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#161b26] dark:bg-[#161b26] rounded-2xl p-5 border border-gray-800 dark:border-gray-700 transition-transform hover:-translate-y-1 duration-300 flex-1 flex flex-col justify-center hover:border-blue-500/30 dark:hover:border-blue-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-2 flex items-center gap-2">
                    Scale Your Strategy
                    <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                      5x
                    </span>
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    Unlock 5x Buying Power via Pre-Funding. Execute larger
                    positions with the same initial capital.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Item 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#161b26] rounded-2xl p-5 border border-gray-800 transition-transform hover:-translate-y-1 duration-300 flex-1 flex flex-col justify-center hover:border-purple-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-2">
                    Trade Anywhere
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3">
                    Support trading via Web App / Telegram Bot, with future API
                    access for professional/institutional traders.
                  </p>
                  <div className="flex gap-2">
                    <div className="bg-gray-800 dark:bg-gray-700 p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                      <Monitor size={14} />
                    </div>
                    <div className="bg-gray-800 dark:bg-gray-700 p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                      <Smartphone size={14} />
                    </div>
                    <div className="bg-gray-800 dark:bg-gray-700 p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                      <Bot size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trading Apps Card - Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="bg-white dark:bg-gray-900 rounded-[32px] p-6 md:p-8 border border-blue-200/70 dark:border-blue-500/20 shadow-xl shadow-blue-200/40 dark:shadow-blue-900/30 flex flex-col relative overflow-hidden group h-full hover:shadow-2xl hover:shadow-blue-300/50 dark:hover:shadow-blue-800/40 transition-shadow duration-500"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700">
          </div>

          {/* Card Header */}
          <div className="relative z-10 mb-8 min-h-[140px] flex flex-col justify-start">
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              Ecosystem Builders
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Trading Apps
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              Build your product on shared capital rails.
            </p>
          </div>

          {/* Items Container */}
          <div className="flex flex-col gap-6 relative z-10 flex-1">
            {/* Item 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-blue-50/60 dark:bg-gray-800 rounded-2xl p-5 border border-blue-100 dark:border-gray-700 transition-transform hover:-translate-y-1 duration-300 flex-1 flex flex-col justify-center hover:border-blue-300 dark:hover:border-blue-500/40"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base md:text-lg mb-2 flex items-center gap-2">
                    Offer 5x Buying Power
                    <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                      SDK
                    </span>
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    Embed up to 5x buying power through a single integration,
                    with accounts, lending and credit handled for you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Item 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-blue-50/60 dark:bg-gray-800 rounded-2xl p-5 border border-blue-100 dark:border-gray-700 transition-transform hover:-translate-y-1 duration-300 flex-1 flex flex-col justify-center hover:border-purple-300 dark:hover:border-purple-500/40"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-500 dark:text-purple-400 shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base md:text-lg mb-2">
                    Keep Your Users and Brand
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    Your UI, your community and your fees stay yours. LeverAcc
                    works as invisible infrastructure behind the scenes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* LPs Card - Light Theme */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} // Slide in from right
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-[32px] p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 flex flex-col relative overflow-hidden group h-full hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-gray-800/50 transition-shadow duration-500"
        >
          {/* Background decoration */}
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-green-500/20 transition-all duration-700">
          </div>

          {/* Card Header */}
          <div className="relative z-10 mb-8 min-h-[140px] flex flex-col justify-start">
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
              Passive Growth
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Liquidity Providers
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              Robust yields backed by protocol revenue.
            </p>
          </div>

          {/* Items Container */}
          <div className="flex flex-col gap-6 relative z-10 flex-1">
            {/* Item 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1 duration-300 group/item flex-1 flex flex-col justify-center hover:border-green-300 dark:hover:border-green-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 group-hover/item:scale-110 transition-transform">
                  <Coins size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base md:text-lg mb-2">
                    Passive Yield Generation
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    Deposit funds into vaults to provide liquidity for perpetual
                    traders and enjoy a substantial APY.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Item 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1 duration-300 group/item flex-1 flex flex-col justify-center hover:border-orange-300 dark:hover:border-orange-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 group-hover/item:scale-110 transition-transform">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base md:text-lg mb-2">
                    Advanced Strategy Options
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    Participate in advanced trading strategies developed by the
                    protocol to achieve higher returns.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionComparison;
