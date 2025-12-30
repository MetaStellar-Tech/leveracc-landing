"use client";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-12 text-center z-10">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-black border border-white/10 z-0" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to Break Boundaries?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Maximize your capital efficiency and start trading with amplified
              power today.
            </p>

            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-gray-200 h-14 px-8 text-lg font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1"
            >
              Access the Public Beta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
