"use client";

import React from "react";
import {
  Smartphone,
  Coins,
  Layers,
  ArrowUpRight,
  Zap,
  Monitor,
  Bot,
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
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Win-Win for Network Contributors.
        </h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          LeverAcc not only empowers traders but also provides LPs with enhanced
          yield channels.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Traders Card - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} // Slide in from left
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="bg-[#0c111d] rounded-[32px] p-8 md:p-12 border border-gray-800 flex flex-col relative overflow-hidden group h-full hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-700"></div>

          {/* Card Header */}
          <div className="relative z-10 mb-8 min-h-[140px] flex flex-col justify-start">
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              Active Participants
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Traders</h3>
            <p className="text-gray-400">
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
              className="bg-[#161b26] rounded-2xl p-6 border border-gray-800 transition-transform hover:-translate-y-1 duration-300 flex-1 flex flex-col justify-center hover:border-blue-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    Scale Your Strategy
                    <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                      5x
                    </span>
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Unlock 5x Buying Power via Pre-Funding. Execute larger
                    positions without locking collateral.
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
              className="bg-[#161b26] rounded-2xl p-6 border border-gray-800 transition-transform hover:-translate-y-1 duration-300 flex-1 flex flex-col justify-center hover:border-purple-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    Trade Anywhere
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Support trading via Web/Mobile App/Telegram Bot, with future
                    API access for professional/institutional traders.
                  </p>
                  <div className="flex gap-2">
                    <div className="bg-gray-800 p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors">
                      <Monitor size={14} />
                    </div>
                    <div className="bg-gray-800 p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors">
                      <Smartphone size={14} />
                    </div>
                    <div className="bg-gray-800 p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors">
                      <Bot size={14} />
                    </div>
                  </div>
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
          className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col relative overflow-hidden group h-full hover:shadow-2xl hover:shadow-gray-300/50 transition-shadow duration-500"
        >
          {/* Background decoration */}
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-green-500/20 transition-all duration-700"></div>

          {/* Card Header */}
          <div className="relative z-10 mb-8 min-h-[140px] flex flex-col justify-start">
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              Passive Growth
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Liquidity Providers
            </h3>
            <p className="text-gray-500">
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
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-transform hover:-translate-y-1 duration-300 group/item flex-1 flex flex-col justify-center hover:border-green-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0 group-hover/item:scale-110 transition-transform">
                  <Coins size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">
                    Passive Yield Generation
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Deposit funds into vaults to provide liquidity for
                    high-performance traders and enjoy a substantial APY.
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
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-transform hover:-translate-y-1 duration-300 group/item flex-1 flex flex-col justify-center hover:border-orange-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover/item:scale-110 transition-transform">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2 flex items-center gap-2">
                    Advanced Strategy Options
                    <ArrowUpRight size={16} className="text-gray-400" />
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
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
