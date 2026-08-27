import React from "react";
import { Bot, Coins, ShieldCheck, User, Zap } from "lucide-react";
import Reveal from "./Reveal";

const responsibilities = [
  {
    icon: User,
    role: "Traders",
    desc: "Risk their own principal only. The maximum loss is the capital they put in — never LP funds.",
    accent: "text-blue-500 dark:text-blue-400",
    chip: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Bot,
    role: "Partners",
    desc: "Own the strategy and its performance. LeverAcc never touches signals, sizing or advice.",
    accent: "text-purple-500 dark:text-purple-400",
    chip: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: ShieldCheck,
    role: "LeverAcc",
    desc: "Underwrites credit, runs the dynamic circuit breaker, and keeps the vault whole.",
    accent: "text-green-500 dark:text-green-400",
    chip: "bg-green-500/10 border-green-500/20",
  },
];

const principles = [
  {
    title: "Credit risk, not trading risk",
    desc: "No borrowing, no intervention. The moment borrowing starts, the credit engine — not a trading desk — takes over.",
  },
  {
    title: "Adaptive circuit breaker",
    desc: "Stop-loss thresholds modulate in real time via β coefficients to protect 100% of LP capital.",
  },
  {
    title: "Uncollateralized, credit-managed",
    desc: "Borrow up to 4x against your own funds, with limits set per account by the risk engine.",
  },
];

const SectionRisk: React.FC = () => {
  return (
    <section id="risk" className="scroll-mt-24 w-full">
      {/* Header */}
      <Reveal className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
          Risk & Liquidity
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-6">
          LP capital safety comes first.
        </h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-[#9B9BA3] max-w-3xl mx-auto leading-relaxed">
          One principle above everything: LPs never take uncontrollable risk.
          LeverAcc manages credit risk — not trading risk.
        </p>
      </Reveal>

      {/* Three-party responsibility */}
      <div className="grid sm:grid-cols-3 gap-5">
        {responsibilities.map(({ icon: Icon, role, desc, accent, chip }, idx) => (
          <Reveal key={role} delay={idx * 80}>
            <div className="h-full rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0c111d] p-6 md:p-7">
              <div
                className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-5 ${chip} ${accent}`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-gray-900 dark:text-[#EDEEEC] font-bold text-base md:text-lg mb-2">
                {role}
              </h3>
              <p className="text-gray-500 dark:text-[#9B9BA3] text-xs md:text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Principles */}
      <Reveal delay={120} className="mt-8">
        <div className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0A0B10] divide-y divide-gray-200/70 dark:divide-gray-800">
          {principles.map(({ title, desc }) => (
            <div key={title} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 md:px-8 py-5">
              <div className="sm:w-64 shrink-0 flex items-center gap-2.5 font-bold text-gray-900 dark:text-[#EDEEEC] text-sm md:text-base">
                <Zap size={15} className="text-blue-500 dark:text-blue-400 shrink-0" />
                {title}
              </div>
              <p className="text-gray-500 dark:text-[#9B9BA3] text-xs md:text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* LP CTA */}
      <Reveal delay={150} className="mt-10 text-center">
        <p className="text-sm md:text-base text-gray-500 dark:text-[#9B9BA3] mb-5 inline-flex items-center gap-2 justify-center">
          <Coins size={16} className="text-green-500 dark:text-green-400" />
          Deposit into vaults and earn from real borrowing demand — target
          ~10%-15% APY.
        </p>
        <div>
          <a
            href="https://leveracc.gitbook.io/leveracc-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-[#D3DAFE] font-bold text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
          >
            <ShieldCheck size={16} />
            How LP Protection Works
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default SectionRisk;
