export function Stats() {
  const stats = [
    { label: "Total Volume", value: "$4.2B+" },
    { label: "Vault Liquidity", value: "$850M" },
    { label: "Positions Secured", value: "24.5K" },
    { label: "LPs APY", value: "24.8%", className: "text-blue-400" },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden relative group">
          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 md:p-8 flex flex-col items-center justify-center text-center"
            >
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                {stat.label}
              </span>
              <span
                className={`text-2xl md:text-3xl font-bold ${
                  stat.className || "text-white"
                }`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
