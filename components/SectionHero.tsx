"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import QuantumFlow from "./QuantumFlow";

const SectionHero: React.FC = () => {
  return (
    <section className="relative pt-16 md:pt-32 pb-16 px-4  w-full">
      <div className="absolute inset-0 w-full h-full z-0">
        <QuantumFlow />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        {/* Background Image */}
        {
          /* <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-[10%] left-0 right-0 w-full h-[60%] md:h-[70%] pointer-events-none overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <Image
            src="/herobg.png"
            alt="Hero Background"
            fill
            className="object-cover object-center opacity-20 dark:opacity-50"
            priority
          />
        </motion.div>
      </motion.div> */
        }
        <motion.h1 className="relative z-10 text-4xl md:text-7xl font-bold tracking-tight text-black dark:text-[#EDEEEC] mb-8 leading-[1.1]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="block"
          >
            Trade Perps with 5x Buying Power.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="block"
          >
            Low rates, high impact.
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative z-10 text-base md:text-lg text-gray-500 dark:text-[#838389] max-w-3xl mb-12 leading-relaxed"
        >
          LeverAcc is a liquidity and efficiency layer built specifically for
          high-performance traders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.div
            className="relative group w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="pill-button flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Launch App
              <motion.span
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </motion.button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs font-medium rounded whitespace-nowrap pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-opacity">
              TBD
            </div>
          </motion.div>
          <motion.a
            href="https://leveracc.gitbook.io/leveracc-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-gray-300 dark:border-[#2E2E45] text-gray-800 dark:text-[#D3DAFE] px-8 py-2.5 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all w-full sm:w-auto inline-block"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Documentation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;
