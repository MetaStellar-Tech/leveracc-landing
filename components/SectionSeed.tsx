import React from "react";
import { ArrowUpRight, BookOpen, MessageCircle, Sparkles, Users, Zap } from "lucide-react";
import Reveal from "./Reveal";

const DOCS_URL = "https://leveracc.gitbook.io/leveracc-docs/";
const COMMUNITY_URL = "https://t.me/leveracc_fans";

const tracks = [
  {
    icon: Zap,
    name: "Seed Users",
    desc: "Trade with early access to 5x buying power. Apply with your Hyperliquid experience and help us polish the product with direct feedback.",
    requirement: "Hyperliquid experience · willingness to share feedback",
  },
  {
    icon: Users,
    name: "Seed Partners",
    desc: "Be among the first apps built on LeverAcc. Work directly with the team and shape the standard integration template for your category.",
    requirement: "Live product or proven strategy · trading on Hyperliquid",
  },
  {
    icon: Sparkles,
    name: "Seed KOLs",
    desc: "Run the real borrowing flow end to end — funded by the program — and share your honest experience with your audience.",
    requirement: "Crypto audience · authentic reviews only",
  },
];

const SectionSeed: React.FC = () => {
  return (
    <section id="seed" className="scroll-mt-24 w-full">
      {/* Header */}
      <Reveal className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
          Seed Program
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-6">
          Help us build the first capital layer.
        </h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-[#9B9BA3] max-w-3xl mx-auto leading-relaxed">
          We&apos;re onboarding a small first cohort of users, partners and
          creators. Real usage, real feedback — no paid endorsements.
        </p>
      </Reveal>

      {/* Tracks */}
      <div className="grid md:grid-cols-3 gap-5">
        {tracks.map(({ icon: Icon, name, desc, requirement }, idx) => (
          <Reveal key={name} delay={idx * 80}>
            <div className="h-full rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0c111d] p-6 md:p-7 flex flex-col">
              <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 dark:text-purple-400 mb-5">
                <Icon size={20} />
              </div>
              <h3 className="text-gray-900 dark:text-[#EDEEEC] font-bold text-base md:text-lg mb-2">
                {name}
              </h3>
              <p className="text-gray-500 dark:text-[#9B9BA3] text-xs md:text-sm leading-relaxed mb-5">
                {desc}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 text-[11px] md:text-xs text-gray-400 dark:text-gray-500">
                {requirement}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 text-white font-bold text-sm md:text-base hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          <MessageCircle size={16} />
          Apply on Telegram
          <ArrowUpRight size={15} />
        </a>
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-[#D3DAFE] font-bold text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
        >
          <BookOpen size={16} />
          Read the Docs First
        </a>
      </Reveal>
    </section>
  );
};

export default SectionSeed;
