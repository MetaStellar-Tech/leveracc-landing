import React from "react";

const SectionHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 text-center max-w-7xl mx-auto flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
        <span className="block">Trade Perps with 5x Buying Power.</span>
        <span className="block text-gray-600">Low rates, high impact.</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-10 leading-relaxed">
        LeverAcc is a liquidity and efficiency layer built specifically for
        high-performance traders.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <button
          className="text-white px-8 py-4 rounded-xl font-medium text-lg transition-all w-full sm:w-auto hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-not-allowed opacity-80"
          style={{ backgroundColor: "#005AA7" }}
        >
          Launch App →
        </button>
        <a
          href="https://leveracc.gitbook.io/leveracc-docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-all w-full sm:w-auto inline-block"
        >
          Read Documentation
        </a>
      </div>
    </section>
  );
};

export default SectionHero;
