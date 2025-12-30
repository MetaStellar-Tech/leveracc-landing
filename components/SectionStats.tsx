import React from 'react';

const SectionStats: React.FC = () => {
  const metrics = [
    { label: "Total Volume", value: "$4.2B+" },
    { label: "Vault Liquidity", value: "$850M" },
    { label: "Positions Secured", value: "24.5K" },
    { label: "LPs APY", value: "24.8%", highlight: true },
  ];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <span className="text-gray-500 font-medium text-sm md:text-base mb-2 group-hover:text-gray-600 transition-colors tracking-wide">{metric.label}</span>
            <span className={`text-3xl md:text-5xl font-bold tracking-tight ${metric.highlight ? 'text-green-600' : 'text-black'}`}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionStats;