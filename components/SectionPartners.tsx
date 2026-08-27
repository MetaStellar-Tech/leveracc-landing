import React from "react";
import {
  ArrowUpRight,
  Bot,
  BookOpen,
  Check,
  Copy,
  Code2,
  Megaphone,
  MonitorCheck,
  MessagesSquare,
  ShieldCheck,
  Sigma,
  Users,
  X,
} from "lucide-react";
import Reveal from "./Reveal";

const DOCS_URL = "https://leveracc.gitbook.io/leveracc-docs/";
const COMMUNITY_URL = "https://t.me/leveracc_fans";

const partnerTypes = [
  {
    icon: Bot,
    name: "AI Trading",
    line: "Agents that profit still can't scale their users' capital. Now they can.",
  },
  {
    icon: Copy,
    name: "Copy Trading",
    line: "Followers copy the strategy — and multiply their buying power with it.",
  },
  {
    icon: Sigma,
    name: "Quant Teams",
    line: "Proven strategies meet up to 4x extra capital, without new fundraising.",
  },
  {
    icon: MonitorCheck,
    name: "Trading Studios",
    line: "Launch a funded trading product without building a lending desk.",
  },
  {
    icon: MessagesSquare,
    name: "Telegram Bots",
    line: "Turn a bot into a full trading account with a managed credit line.",
  },
  {
    icon: Megaphone,
    name: "KOLs & Communities",
    line: "Offer your community real financial capability, not just signals.",
  },
];

const benefits = [
  "Bigger capital base",
  "Higher AUM",
  "More trading volume",
  "More fee revenue",
  "Stronger user retention",
];

const integrationSteps = [
  {
    step: "01",
    title: "Apply & credit review",
    desc: "Tell us about your product. The credit engine sets borrowing limits for your users — no collateral models for you to build.",
  },
  {
    step: "02",
    title: "Integrate the SDK",
    desc: "Accounts, lending, risk control and settlement behind a single API surface. Your UI stays yours.",
  },
  {
    step: "03",
    title: "Go live on Hyperliquid",
    desc: "Your users trade with up to 5x buying power. You keep the relationship, the volume and the fees.",
  },
];

const weProvide = [
  "Account infrastructure",
  "Capital & lending vaults",
  "Credit risk engine",
  "Settlement",
  "SDK / API access",
];

const weNeverDo = [
  "AI strategy",
  "Copy strategy",
  "Trading signals",
  "Alpha research",
  "Investment advice",
];

const SectionPartners: React.FC = () => {
  return (
    <section id="partners" className="scroll-mt-24 w-full">
      {/* Header */}
      <Reveal className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          For Partners
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-6">
          Give your product a capital engine.
        </h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-[#9B9BA3] max-w-3xl mx-auto leading-relaxed">
          The best strategies on Hyperliquid hit the same ceiling: user capital.
          LeverAcc removes it — so you can scale AUM, volume and retention
          without becoming a lender.
        </p>
      </Reveal>

      {/* Partner types */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {partnerTypes.map(({ icon: Icon, name, line }, idx) => (
          <Reveal key={name} delay={idx * 70}>
            <div className="h-full rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0c111d] p-6 md:p-7 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors duration-300">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 mb-5">
                <Icon size={20} />
              </div>
              <h3 className="text-gray-900 dark:text-[#EDEEEC] font-bold text-base md:text-lg mb-2">
                {name}
              </h3>
              <p className="text-gray-500 dark:text-[#9B9BA3] text-xs md:text-sm leading-relaxed">
                {line}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Benefits strip */}
      <Reveal delay={100} className="mt-8">
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0A0B10] px-6 py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {benefits.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              <Check size={14} className="text-green-500 dark:text-green-400" />
              {b}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Integration flow */}
      <div id="developers" className="scroll-mt-24 mt-24">
        <Reveal className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-4">
            Live in three steps.
          </h3>
          <p className="text-sm md:text-base text-gray-500 dark:text-[#9B9BA3] max-w-2xl mx-auto">
            One integration unlocks shared liquidity, credit management and
            settlement for every user in your app.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {integrationSteps.map(({ step, title, desc }, idx) => (
            <Reveal key={step} delay={idx * 90}>
              <div className="relative h-full rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0c111d] p-6 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-black flex items-center justify-center">
                    {step}
                  </span>
                  <h4 className="text-gray-900 dark:text-[#EDEEEC] font-bold text-base md:text-lg">
                    {title}
                  </h4>
                </div>
                <p className="text-gray-500 dark:text-[#9B9BA3] text-xs md:text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm md:text-base hover:opacity-90 hover:-translate-y-0.5 transition-all"
          >
            <BookOpen size={16} />
            Read the SDK Docs
            <ArrowUpRight size={15} />
          </a>
          <a
            href="https://github.com/MetaStellar-Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-[#D3DAFE] font-bold text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
          >
            <Code2 size={16} />
            View on Github
          </a>
        </Reveal>
      </div>

      {/* Boundary declaration */}
      <Reveal className="mt-24">
        <div className="max-w-4xl mx-auto rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0A0B10] p-6 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200/70 dark:bg-blue-500/10 border border-gray-300 dark:border-blue-500/20 text-gray-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={13} />
              Our boundary
            </div>
            <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium max-w-2xl mx-auto">
              One rule keeps the ecosystem healthy:{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                partners own the strategy, LeverAcc provides the capital.
              </span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 md:p-6">
              <div className="text-green-600 dark:text-green-400 font-bold text-sm uppercase tracking-wider mb-4">
                What we provide
              </div>
              <ul className="space-y-2.5">
                {weProvide.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <Check size={15} className="text-green-500 dark:text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-500/15 bg-red-500/5 p-5 md:p-6">
              <div className="text-red-600 dark:text-red-400 font-bold text-sm uppercase tracking-wider mb-4">
                What we never do
              </div>
              <ul className="space-y-2.5">
                {weNeverDo.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <X size={15} className="text-red-500 dark:text-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-xs md:text-sm text-gray-500 dark:text-[#9B9BA3]">
            We never compete with the ecosystem we serve.
          </p>
        </div>
      </Reveal>

      {/* Partner CTA */}
      <Reveal delay={100} className="mt-12 text-center">
        <a
          href={COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          <Users size={17} />
          Become a Partner — Talk to the Team
          <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
};

export default SectionPartners;
