import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Trade Perps With{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            5x Buying Power
          </span>
          .
          <br />
          Low interest, high impact.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          LeverAcc is a liquidity and efficiency layer built specifically for
          perpetual traders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 text-base shadow-lg shadow-blue-900/20"
          >
            Launch App
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/10 hover:bg-white/5 h-12 text-base px-8"
          >
            <BookOpen className="mr-2 w-4 h-4" />
            Read Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
