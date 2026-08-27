import React from "react";
import {
  ArrowDown,
  Bot,
  Code2,
  Coins,
  Copy,
  ArrowLeftRight,
  Building2,
  Monitor,
  MessageCircle,
  ShieldCheck,
  Sigma,
  User,
} from "lucide-react";
import Reveal from "./Reveal";

const tradingApps = [
  { icon: Bot, label: "AI Trading" },
  { icon: Copy, label: "Copy Trading" },
  { icon: Sigma, label: "Quant Teams" },
  { icon: Building2, label: "Trading Studios" },
  { icon: MessageCircle, label: "Telegram Bots" },
  { icon: Monitor, label: "Official UI" },
];

const capabilities = [
  { icon: User, label: "Unified Account" },
  { icon: Coins, label: "Lending Vault" },
  { icon: ShieldCheck, label: "Credit Risk Engine" },
  { icon: ArrowLeftRight, label: "Settlement" },
  { icon: Code2, label: "SDK / API" },
];

const SectionEcosystem: React.FC = () => {
  return (
    <section id="product" className="scroll-mt-24 w-full">
      {/* Header */}
      <Reveal className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          The Product
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-6">
          One capital layer. Every trading app.
        </h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-[#9B9BA3] max-w-3xl mx-auto leading-relaxed">
          Trading apps shouldn&apos;t have to build lending desks. LeverAcc
          provides the financial rails — your app provides the experience.
        </p>
      </Reveal>

      {/* Architecture diagram */}
      <Reveal delay={100} className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-[#0A0B10]/60 p-6 md:p-10 overflow-hidden">
          {/* Grid backdrop */}
          <div
            className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(120, 120, 140, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(120, 120, 140, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-0">
            {/* Layer 1: Trading applications */}
            <div className="w-full max-w-3xl">
              <div className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Trading Applications
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tradingApps.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white dark:bg-[#161b26] border border-gray-200 dark:border-gray-700/70 text-gray-700 dark:text-gray-300 text-xs md:text-sm font-medium justify-center sm:justify-start"
                  >
                    <Icon size={16} className="text-gray-500 dark:text-gray-400 shrink-0" />
                    <span className="whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector: strategy down, users up */}
            <div className="relative h-14 w-full max-w-3xl flex items-center justify-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />
              <div className="absolute left-[30%] top-0 bottom-0 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />
              <div className="absolute right-[30%] top-0 bottom-0 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />
              <div className="relative z-10 flex items-center gap-2 bg-white dark:bg-[#0A0B10] px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-[11px] font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                <ArrowDown size={12} className="text-blue-500 dark:text-blue-400" />
                strategies flow down
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <span className="text-gray-500 dark:text-gray-400 rotate-180 inline-flex">
                  <ArrowDown size={12} className="text-green-500 dark:text-green-400" />
                </span>
                users stay in your app
              </div>
            </div>

            {/* Layer 2: LeverAcc capital layer */}
            <div className="w-full max-w-3xl relative">
              <div className="absolute -inset-1 rounded-3xl bg-blue-500/20 blur-xl opacity-60 pointer-events-none" />
              <div className="relative rounded-3xl border border-blue-500/40 dark:border-blue-500/30 bg-white dark:bg-[#0c111d] p-6 md:p-8">
                <div className="text-center mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-1">
                    LeverAcc
                  </div>
                  <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    The Capital Layer
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {capabilities.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-xs md:text-sm font-semibold"
                    >
                      <Icon size={14} />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connector: credit-managed capital */}
            <div className="relative h-14 w-full max-w-3xl flex items-center justify-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />
              <div className="relative z-10 flex items-center gap-2 bg-white dark:bg-[#0A0B10] px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-[11px] font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                <ArrowDown size={12} className="text-blue-500 dark:text-blue-400" />
                credit-managed capital
              </div>
            </div>

            {/* Layer 3: Hyperliquid */}
            <div className="w-full max-w-3xl">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-gray-50 dark:bg-[#0c111d]/80 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex items-center justify-center font-black text-sm">
                    H
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      Hyperliquid
                    </div>
                    <div className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400">
                      Execution layer
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span className="px-2.5 py-1 rounded-full bg-white dark:bg-[#161b26] border border-gray-200 dark:border-gray-700/70">
                    Order books
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white dark:bg-[#161b26] border border-gray-200 dark:border-gray-700/70">
                    Perp markets
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white dark:bg-[#161b26] border border-gray-200 dark:border-gray-700/70">
                    Execution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Three-party summary */}
      <Reveal delay={150} className="max-w-5xl mx-auto px-4 mt-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: "Partners own the strategy",
              desc: "AI, copy, quant or social — the product and its signals stay yours.",
            },
            {
              title: "LeverAcc manages the credit",
              desc: "Accounts, borrowing, limits and settlement run on shared rails.",
            },
            {
              title: "Hyperliquid executes the trade",
              desc: "Public, transparent, on-chain — on the deepest perp books.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0c111d] p-5 text-center sm:text-left"
            >
              <div className="font-bold text-gray-900 dark:text-[#EDEEEC] text-sm md:text-base mb-1.5">
                {title}
              </div>
              <p className="text-gray-500 dark:text-[#9B9BA3] text-xs md:text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default SectionEcosystem;
