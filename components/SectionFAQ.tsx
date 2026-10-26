"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { partnerFaqs, traderFaqs, type FaqItem } from "@/lib/faq";

const FaqList: React.FC<{ id: string; faqs: FaqItem[] }> = ({ id, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const answerId = `${id}-answer-${i}`;

        return (
          <div key={i} className="py-6">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between text-left group"
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="text-base md:text-lg font-medium text-gray-900 dark:text-[#EDEEEC] group-hover:text-black dark:group-hover:text-gray-200">
                {faq.q}
              </span>
              <ChevronDown
                className={`text-gray-400 dark:text-[#0099FF] transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Answers stay in the DOM (collapsed) so the server-rendered HTML carries them. */}
            <div
              id={answerId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-base text-gray-600 dark:text-[#9B9BA3] leading-relaxed pr-8">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SectionFAQ: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-[#EDEEEC]">
          A Few More Questions?
        </h2>
      </div>

      <div className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
        For traders
      </div>
      <FaqList id="faq-traders" faqs={traderFaqs} />

      <div className="mt-14 mb-4 text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
        For partners & developers
      </div>
      <FaqList id="faq-partners" faqs={partnerFaqs} />

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
