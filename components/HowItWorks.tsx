"use client";

import { Wallet, LayoutDashboard, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Wallet className="w-6 h-6 text-blue-400" />,
      title: "Link Your Wallet & Deposit Margin",
      description:
        "Connect your wallet securely. Deposit USDC or other supported assets to the unified margin account.",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
      title: "Choose Your Perp DEX & Borrow Funds",
      description:
        "Select from integrated Perp DEXs. Borrow up to 5x your capital instantly with our flash-loan engine.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Trade with Amplified Buying Power",
      description:
        "Execute trades on your favorite DEXs with boosted specific buying power. Unified interface, amplified returns.",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with LeverAcc in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden md:block" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0B10] border border-white/10 flex items-center justify-center text-xs font-bold text-muted-foreground z-10 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                {index + 1}
              </div>

              <div className="pt-8 text-center space-y-4 px-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
