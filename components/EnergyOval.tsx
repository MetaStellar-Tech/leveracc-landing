import React from "react";

export function GlowBackground() {
  return (
    <div
      className="w-full h-20 rounded-[100%] flex items-center justify-center px-10"
      style={{
        background: `
          radial-gradient(
            ellipse 120% 60% at center,
            rgba(99, 102, 241, 0.85) 0%,
            rgba(99, 102, 241, 0.65) 0%,
            rgba(99, 102, 241, 0.3) 0%,
            rgba(99, 102, 241, 0.02) 55%,
            rgba(99, 102, 241, 0.01) 75%,
            transparent 100%
          )
        `,
      }}
    >
      <div
        className="w-full h-2 rounded-[100%]"
        style={{
          background: `
          radial-gradient(
            ellipse 120% 60% at center,
            rgba(99, 102, 241, 0.85) 0%,
            rgba(99, 102, 241, 0.65) 0%,
            rgba(99, 102, 241, 0.3) 0%,
            rgba(99, 102, 241, 0.02) 55%,
            rgba(99, 102, 241, 0.01) 75%,
            transparent 100%
          )
        `,
        }}
      >
      </div>
    </div>
  );
}

export default function EnergyOval() {
  return <GlowBackground />;
}
