"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 text-center max-w-7xl mx-auto flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]"
      >
        <span className="block">Trade Perps with 5x Buying Power.</span>
        <span className="block text-gray-600">Low rates, high impact.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-10 leading-relaxed"
      >
        LeverAcc is a liquidity and efficiency layer built specifically for
        high-performance traders.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <div className="relative group w-full sm:w-auto">
          <button
            className="text-white px-8 py-4 rounded-xl font-medium text-lg transition-all w-full hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-not-allowed opacity-80"
            style={{ backgroundColor: "#005AA7" }}
          >
            Launch App →
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            TBD
          </div>
        </div>
        <a
          href="https://leveracc.gitbook.io/leveracc-docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-all w-full sm:w-auto inline-block"
        >
          Read Documentation
        </a>
      </motion.div>
    </section>
  );
};

export default SectionHero;
