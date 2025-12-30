import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';

const SectionDashboard: React.FC = () => {
  return (
    <section>
      {/* Header - Typography matches SectionBuilder */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Engineered for Capital Efficiency.
        </h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          The Atomic Liquidity Engine ensures seamless zero-collateral borrowing, while the Algorithmic Circuit Breaker safeguards fund security.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Card: Atomic Liquidity Engine - Light Theme */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden flex flex-col justify-between group h-full">
          
          <div>
            <div className="w-14 h-14 mb-8 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
               <Zap className="text-[#0099ff]" size={28} strokeWidth={2} fill="currentColor" fillOpacity={0.2} />
            </div>

            <h3 className="text-2xl text-gray-900 font-bold mb-4 tracking-tight">Atomic Liquidity Engine</h3>
            <p className="text-gray-500 leading-relaxed text-lg mb-12">
              Liquidity is injected within the same block as execution. Flash-loan mechanics applied to perpetual futures, ensuring zero collateral drag.
            </p>
          </div>

          {/* Footer Metric - Clean Light Style */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-auto">
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-3 text-gray-400">
              <span>Injection Speed</span>
              <span className="text-[#0099ff]">&lt; 0.04ms</span>
            </div>
            {/* Minimalist Progress Bar */}
            <div className="flex gap-1 h-2">
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-full ${i < 20 ? 'bg-[#0099ff]' : 'bg-gray-200'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Algorithmic Circuit Breaker - Dark Theme (Matches SectionBuilder Card) */}
        <div className="bg-[#0c111d] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
           
           <div>
             <div className="w-14 h-14 mb-8 bg-gray-800/50 rounded-2xl flex items-center justify-center border border-gray-700/50">
               <ShieldCheck className="text-white" size={28} strokeWidth={2} />
            </div>

            <h3 className="text-2xl text-white font-bold mb-4 tracking-tight">Algorithmic Circuit Breaker</h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-12">
              Auto-deleveraging protocols trigger instantly upon volatility spikes. 100% LP capital protection guarantees via smart contract enforcement.
            </p>
           </div>

            {/* Footer Metric - Dark Minimalist Style */}
            <div className="bg-[#161b26] rounded-2xl p-6 border border-gray-800 mt-auto">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-4 text-gray-500">
                <span>Risk Monitor</span>
                <span className="text-emerald-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  LIVE
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center py-2.5 text-xs font-bold tracking-widest rounded-lg transition-colors">
                  SAFE
                </div>
                <div className="bg-gray-800/50 border border-gray-700/30 text-gray-600 text-center py-2.5 text-xs font-bold tracking-widest rounded-lg">
                  WARN
                </div>
                <div className="bg-gray-800/50 border border-gray-700/30 text-gray-600 text-center py-2.5 text-xs font-bold tracking-widest rounded-lg">
                  CRIT
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDashboard;