// import { Navbar } from "@/components/Navbar";
// import { Hero } from "@/components/Hero";
// import { Stats } from "@/components/Stats";
// import { LeverageGeometry } from "@/components/LeverageGeometry";
// import { HowItWorks } from "@/components/HowItWorks";
// import { SupportedDEXs } from "@/components/SupportedDEXs";
// import { KeyFeatures } from "@/components/KeyFeatures";
// import { Features } from "@/components/Features";
// import { FAQ } from "@/components/FAQ";
// import { CTA } from "@/components/CTA";
// import { Footer } from "@/components/Footer";

"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SectionHero from "@/components/SectionHero";
import SectionStats from "@/components/SectionStats";
import SectionBuilder from "@/components/SectionBuilder";
import SectionDashboard from "@/components/SectionDashboard";
import SectionSteps from "@/components/SectionSteps";
import SectionComparison from "@/components/SectionComparison";
import SectionFAQ from "@/components/SectionFAQ";
import Footer from "@/components/Footer";

const faqEntities = [
  {
    "@type": "Question",
    name: "Is LeverAcc a Perp DEX ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No, LeverAcc is a liquidity and capital efficiency layer built on top of Perp DEXs, designed to maximize users' capital efficiency. Simply put, LeverAcc acts as middleware that can plug into any Perp DEX.",
    },
  },
  {
    "@type": "Question",
    name: "Which Perp DEX has LeverAcc integrated currently?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "As the first step, LeverAcc will prioritize integrating Hyperliquid, more integrations are coming soon.",
    },
  },
  {
    "@type": "Question",
    name: "Where can I use LeverAcc for trading?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Currently, you can trade using our TG Bot or Web App. All trades happen on Hyperliquid, ensuring they are public, transparent, and verifiable on-chain.",
    },
  },
  {
    "@type": "Question",
    name: "Do I need collateral assets to borrow funds from LeverAcc? What is the borrowing interest rate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Borrowing from the LeverAcc Vault does not require any collateral. The borrowable fund is matched solely based on your own funds (up to 4x, but an initial borrowing limit will be in place to ensure system stability). Borrow from LeverAcc at an interest rate of 0.1% daily.",
    },
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LeverAcc",
  url: "https://leveracc.xyz",
  description:
    "LeverAcc is the Liquidity and Capital Efficiency Layer built on Hyperliquid, enabling traders to access 5x buying power for perpetual trading with low interest rates.",
  sameAs: ["https://leveracc.gitbook.io", "https://twitter.com/leveracc"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntities,
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-gray-900 dark:text-gray-100 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Global Gradient Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #FFFDE4, #005AA7)",
          opacity: 0.3,
        }}
      />
      {/* Dark mode gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none dark:opacity-100 opacity-0 transition-opacity duration-300"
        style={{
          // background: "linear-gradient(to bottom, #0a0a0f, #1a1a2e)",
          background: "black",
        }}
      />

      {/* Navbar already has z-50, ensuring it stays on top */}
      <Navbar />

      {/* Main content needs relative z-10 to sit above the fixed background */}
      <main className="relative z-10 flex flex-col gap-10 pb-24">
        <SectionHero />
        <SectionStats />
        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full space-y-32 mt-20">
          <SectionBuilder />
          <SectionDashboard />
          <SectionSteps />
          <SectionComparison />
          <SectionFAQ />
        </div>
      </main>

      {/* Footer needs relative z-10 to sit above the fixed background */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    // <main className="min-h-screen bg-[#020305] text-foreground selection:bg-blue-500/30 overflow-x-hidden">
    //   <Navbar />
    //   <Hero />
    //   <Stats />
    //   <LeverageGeometry />
    //   <HowItWorks />
    //   <SupportedDEXs />
    //   <Features />
    //   <KeyFeatures />
    //   <FAQ />
    //   <CTA />
    //   <Footer />
    // </main>
    <App />
  );
}
