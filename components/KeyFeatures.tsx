"use client";

import { Scale, Layout, Globe, Zap } from "lucide-react";

export function KeyFeatures() {
  const features = [
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Increased Capital Efficiency",
      description:
        "Amplify your trading positions with up to 5x leverage on your collateral.",
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Unified Interface",
      description:
        "Manage positions across multiple DEXs from a single, intuitive dashboard.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Cross-Margin & Isolated",
      description:
        "Flexible margin modes to suit your risk management strategy.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Flash Loans for Margin",
      description:
        "Instant liquidity injection to secure your positions without collateral drag.",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to trade with confidence and power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
