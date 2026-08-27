import React from "react";
import { Flag, Network, Globe2 } from "lucide-react";
import Reveal from "./Reveal";

const phases = [
  {
    year: "2026",
    icon: Flag,
    phase: "Phase 1 — Product validation",
    points: [
      "Reference trading platform live",
      "First partner integrations",
      "First real credit-backed trades",
    ],
    active: true,
  },
  {
    year: "2027",
    icon: Network,
    phase: "Phase 2 — Network expansion",
    points: [
      "Partner network grows across app categories",
      "Capital Marketplace",
      "More perp venues supported",
    ],
    active: false,
  },
  {
    year: "2028+",
    icon: Globe2,
    phase: "Phase 3 — Default capital layer",
    points: [
      "The standard capital rails on Hyperliquid",
      "Serving the majority of trading apps",
      "Deepest LP + credit data network",
    ],
    active: false,
  },
];

const SectionRoadmap: React.FC = () => {
  return (
    <section id="roadmap" className="scroll-mt-24 w-full">
      {/* Header */}
      <Reveal className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          Roadmap
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-[#EDEEEC] mb-6">
          From product validation to the default capital layer.
        </h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-[#9B9BA3] max-w-3xl mx-auto leading-relaxed">
          Credibility comes from real business, not announcements. Partner
          integrations are published as they go live.
        </p>
      </Reveal>

      {/* Timeline */}
      <div className="relative grid md:grid-cols-3 gap-5">
        {/* Connector line (desktop) */}
        <div
          className="hidden md:block absolute top-[52px] left-[12%] right-[12%] border-t-2 border-dashed border-gray-200 dark:border-gray-800"
          aria-hidden
        />
        {phases.map(({ year, icon: Icon, phase, points, active }, idx) => (
          <Reveal key={year} delay={idx * 100} className="relative">
            <div
              className={`h-full rounded-3xl border p-6 md:p-7 relative z-10 ${
                active
                  ? "border-blue-500/40 bg-blue-500/5 dark:bg-blue-500/5"
                  : "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0c111d]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-2xl md:text-3xl font-black tracking-tight ${
                    active
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-400 dark:text-gray-600"
                  }`}
                >
                  {year}
                </span>
                <span
                  className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                    active
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-gray-100 dark:bg-[#161b26] border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500"
                  }`}
                >
                  <Icon size={17} />
                </span>
              </div>
              <div
                className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${
                  active ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-gray-600"
                }`}
              >
                {phase}
              </div>
              <ul className="space-y-2.5">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        active ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SectionRoadmap;
