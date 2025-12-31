"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SectionFAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is LeverAcc a Perp DEX?",
      a: "No, LeverAcc is a liquidity and capital efficiency layer built on top of Perp DEXs, designed to maximize users' capital efficiency. Simply put, LeverAcc acts as middleware that can plug into any Perp DEX.",
    },
    {
      q: "Which Perp DEX has LeverAcc integrated currently?",
      a: "As the first step, LeverAcc will prioritize integrating Hyperliquid, more integrations are coming soon.",
    },
    {
      q: "Where can I use LeverAcc for trading?",
      a: "Currently, you can trade using our TG Bot or Web App. All trades happen on Hyperliquid, ensuring they are public, transparent, and verifiable on-chain.",
    },
    {
      q: "Do I need collateral assets to borrow funds from LeverAcc? What is the borrowing interest rate?",
      a: "Borrowing from the LeverAcc Vault does not require any collateral. The borrowable fund is matched solely based on your own funds (up to 4x, but an initial borrowing limit will be in place to ensure system stability).",
    },
    {
      q: "Does LeverAcc charge trading fees?",
      a: "Yes, LeverAcc currently charges an additional 0.015% fee on every transaction.",
    },
    {
      q: "Does LeverAcc have a points program?",
      a: "Yes, the LAP (LeverAcc Points) program will launch simultaneously with the Public Beta. Users can accumulate LAP through activities such as depositing, borrowing, trading, and inviting others. We encourage all genuine network contributions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-[#EDEEEC]">
          A few more questions?
        </h2>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {faqs.map((faq, i) => (
          <div key={i} className="py-6">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between text-left group"
            >
              <span className="text-base md:text-lg font-medium text-gray-900 dark:text-[#EDEEEC] group-hover:text-black dark:group-hover:text-gray-200">
                {faq.q}
              </span>
              <ChevronDown
                className={`text-gray-400 dark:text-[#3F4FA6] transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm md:text-base text-gray-600 dark:text-[#838389] leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 text-sm md:text-base text-gray-500 dark:text-[#838389]">
        Still have questions?{" "}
        <a
          href="https://t.me/leveracc_fans"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-[#EDEEEC] font-semibold hover:underline"
        >
          Join the community
        </a>
      </div>
    </section>
  );
};

export default SectionFAQ;
