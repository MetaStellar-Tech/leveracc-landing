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
import SectionFAQ from "@/components/SectionFAQ";
import { partnerFaqs, traderFaqs } from "@/lib/faq";
import { DOCS_URL, SITE_URL } from "@/lib/site";

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

const faqEntities = [...traderFaqs, ...partnerFaqs].map(({ q, a }) => ({
  "@type": "Question",
  name: q,
  acceptedAnswer: {
    "@type": "Answer",
    text: a,
  },
}));

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "LeverAcc",
  url: SITE_URL,
  logo: `${SITE_URL}/576x576-transparent-bg-transparent-fill.png`,
  description:
    "LeverAcc is the Capital Layer of Hyperliquid: shared capital infrastructure providing accounts, lending, credit risk management and settlement for trading apps and 5x buying power for perpetual traders.",
  foundingDate: "2024",
  sameAs: [
    "https://x.com/leveracc_xyz",
    DOCS_URL,
    "https://github.com/MetaStellar-Tech",
    "https://t.me/leveracc_fans",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqEntities,
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
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
    "Shared capital infrastructure for trading apps on Hyperliquid: AI trading, copy trading, quant teams and bots get 5x buying power with low rates and fast execution.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "LeverAcc",
  url: `${SITE_URL}/`,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  name: "LeverAcc: The Capital Layer of Hyperliquid | 5x Leverage Trading",
  url: `${SITE_URL}/`,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
  },
  mainEntity: {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
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

          {/* FAQ renders on the server: its answers back the FAQPage JSON-LD above. */}
          <SectionFAQ />
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
