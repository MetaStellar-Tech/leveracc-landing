"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionHero from "@/components/SectionHero";
import SectionStats from "@/components/SectionStats";
import Footer from "@/components/Footer";
import DeferredSection from "@/components/DeferredSection";
import SectionEcosystem from "@/components/SectionEcosystem";
import SectionPartners from "@/components/SectionPartners";
import SectionRisk from "@/components/SectionRisk";
import SectionRoadmap from "@/components/SectionRoadmap";
import SectionSeed from "@/components/SectionSeed";

const SectionBuilder = dynamic(() => import("@/components/SectionBuilder"), {
  ssr: false,
  loading: () => null,
});

const SectionDashboard = dynamic(() => import("@/components/SectionDashboard"), {
  ssr: false,
  loading: () => null,
});

const SectionSteps = dynamic(() => import("@/components/SectionSteps"), {
  ssr: false,
  loading: () => null,
});

const SectionComparison = dynamic(() => import("@/components/SectionComparison"), {
  ssr: false,
  loading: () => null,
});

const SectionFAQ = dynamic(() => import("@/components/SectionFAQ"), {
  ssr: false,
  loading: () => null,
});

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
  {
    "@type": "Question",
    name: "How does my product integrate with LeverAcc?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Apply through our partner channel. After a credit review, you integrate accounts, lending, credit risk and settlement through a single SDK/API surface — your UI and strategy stay fully yours. Full guides live in the documentation.",
    },
  },
  {
    "@type": "Question",
    name: "What does LeverAcc handle — and what does it leave to partners?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We provide the capital layer: accounts, borrowing, credit risk and settlement. Partners keep full ownership of strategy, signals and user experience. We never compete with the apps we serve — no strategies, no signals, no investment advice.",
    },
  },
  {
    "@type": "Question",
    name: "How is LP capital protected?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Borrowing is uncollateralized but credit-managed: limits are set per account by the credit engine, a dynamic circuit breaker modulates risk in real time, and a trader can only ever lose their own principal — never LP funds.",
    },
  },
  {
    "@type": "Question",
    name: "Which products can build on LeverAcc?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Anything that trades on Hyperliquid: AI trading agents, copy-trading platforms, quant strategies, trading studios and Telegram bots. If your users have strategies, LeverAcc gives them the capital to scale them.",
    },
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://leveracc.xyz/#organization",
  name: "LeverAcc",
  url: "https://leveracc.xyz",
  logo: "https://leveracc.xyz/576x576-transparent-bg-transparent-fill.png",
  description:
    "LeverAcc is the Capital Layer of Hyperliquid — shared capital infrastructure providing accounts, lending, credit risk management and settlement for trading apps and 5x buying power for perpetual traders.",
  foundingDate: "2024",
  sameAs: [
    "https://x.com/leveracc_xyz",
    "https://leveracc.gitbook.io/leveracc-docs/",
    "https://github.com/MetaStellar-Tech",
    "https://t.me/leveracc_fans",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://leveracc.xyz/#faq",
  mainEntity: faqEntities,
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://leveracc.xyz/#app",
  name: "LeverAcc Trading Platform",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  url: "https://app.leveracc.xyz/",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Shared capital infrastructure for trading apps on Hyperliquid — AI trading, copy trading, quant teams and bots get 5x buying power with low rates and fast execution.",
  provider: {
    "@type": "Organization",
    "@id": "https://leveracc.xyz/#organization",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://leveracc.xyz/#product",
  name: "LeverAcc",
  description:
    "The Capital Layer of Hyperliquid: shared account, lending, credit risk and settlement infrastructure giving traders and trading apps 5x buying power.",
  brand: {
    "@type": "Brand",
    name: "LeverAcc",
  },
  category: "DeFi Trading Platform",
  url: "https://leveracc.xyz/",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://app.leveracc.xyz/",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://leveracc.xyz/#website",
  name: "LeverAcc",
  url: "https://leveracc.xyz/",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    "@id": "https://leveracc.xyz/#organization",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leveracc.xyz/#webpage",
  name: "LeverAcc: The Capital Layer of Hyperliquid | 5x Leverage Trading",
  url: "https://leveracc.xyz/",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://leveracc.xyz/#website",
  },
  about: {
    "@type": "Organization",
    "@id": "https://leveracc.xyz/#organization",
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    "@id": "https://leveracc.xyz/#app",
  },
};

const blogResources = [
  {
    href: "/blog/introducing-leveracc-the-next-evolution-of-perpetual-trading",
    title: "Introducing LeverAcc: The Next Evolution of Perpetual Trading",
    description: "How LeverAcc works, core mechanics, and why capital efficiency matters for perp traders.",
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #FFFDE4, #005AA7)",
          opacity: 0.3,
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none dark:opacity-100 opacity-0 transition-opacity duration-300"
        style={{ background: "black" }}
      />

      <Navbar />

      <main className="relative z-10 flex flex-col gap-10 pb-24">
        <SectionHero />
        <SectionStats />

        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full space-y-32 mt-20">
          {/* 锚点区块直接渲染保证导航可用，内容进入首屏 HTML 利于 SEO；重组件保持懒加载 */}
          <SectionEcosystem />

          <DeferredSection placeholderClassName="min-h-[720px]">
            <SectionSteps />
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[680px]">
            <SectionBuilder />
          </DeferredSection>

          <DeferredSection placeholderClassName="min-h-[560px]">
            <SectionDashboard />
          </DeferredSection>

          <SectionPartners />

          <SectionRisk />

          <DeferredSection placeholderClassName="min-h-[620px]">
            <SectionComparison />
          </DeferredSection>

          <SectionRoadmap />

          <SectionSeed />

          <DeferredSection placeholderClassName="min-h-[860px]">
            <SectionFAQ />
          </DeferredSection>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default function Home() {
  return <App />;
}
