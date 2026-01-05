import React from "react";

export function GlowBackground() {
  return (
    <div className="w-full h-20 rounded-[100%] flex items-center justify-center px-10 bg-[radial-gradient(ellipse_120%_60%_at_center,rgba(0,153,255,0.85)_0%,rgba(0,153,255,0.65)_0%,rgba(0,153,255,0.3)_0%,rgba(0,153,255,0.02)_55%,rgba(0,153,255,0.01)_75%,transparent_100%)]">
      <div className="w-full h-2 rounded-[100%] bg-[radial-gradient(ellipse_120%_60%_at_center,rgba(0,153,255,0.85)_0%,rgba(0,153,255,0.65)_0%,rgba(0,153,255,0.3)_0%,rgba(0,153,255,0.02)_55%,rgba(0,153,255,0.01)_75%,transparent_100%)]">
      </div>
    </div>
  );
}

export default function EnergyOval() {
  return <GlowBackground />;
}
