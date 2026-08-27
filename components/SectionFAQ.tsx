"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const traderFaqs = [
  {
    q: "Is LeverAcc a Perp DEX ?",
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
    a: "Borrowing from the LeverAcc Vault does not require any collateral. The borrowable fund is matched solely based on your own funds (up to 4x, but an initial borrowing limit will be in place to ensure system stability). Borrow from LeverAcc at an interest rate of 0.1% daily.",
  },
];

const partnerFaqs = [
  {
    q: "How does my product integrate with LeverAcc?",
    a: "Apply through our partner channel. After a credit review, you integrate accounts, lending, credit risk and settlement through a single SDK/API surface — your UI and strategy stay fully yours. Full guides live in the documentation.",
  },
  {
    q: "What does LeverAcc handle — and what does it leave to partners?",
    a: "We provide the capital layer: accounts, borrowing, credit risk and settlement. Partners keep full ownership of strategy, signals and user experience. We never compete with the apps we serve — no strategies, no signals, no investment advice.",
  },
  {
    q: "How is LP capital protected?",
    a: "Borrowing is uncollateralized but credit-managed: limits are set per account by the credit engine, a dynamic circuit breaker modulates risk in real time, and a trader can only ever lose their own principal — never LP funds.",
  },
  {
    q: "Which products can build on LeverAcc?",
    a: "Anything that trades on Hyperliquid: AI trading agents, copy-trading platforms, quant strategies, trading studios and Telegram bots. If your users have strategies, LeverAcc gives them the capital to scale them.",
  },
];

const FaqList: React.FC<{ faqs: typeof traderFaqs }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
              className={`text-gray-400 dark:text-[#0099FF] transition-transform duration-300 shrink-0 ${
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
                <p className="text-sm md:text-base text-gray-600 dark:text-[#9B9BA3] leading-relaxed pr-8">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const SectionFAQ: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-[#EDEEEC]">
          A few more questions?
        </h2>
      </div>

      <div className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
        For traders
      </div>
      <FaqList faqs={traderFaqs} />

      <div className="mt-14 mb-4 text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
        For partners & developers
      </div>
      <FaqList faqs={partnerFaqs} />

      <div className="text-center mt-14 text-sm md:text-base text-gray-500 dark:text-[#838389]">
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
