// 首页 FAQ 的唯一数据源：SectionFAQ 渲染可见内容，app/page.tsx 用同一份数据生成 FAQPage JSON-LD，
// 保证结构化数据与页面可见文本一致（Google 结构化数据指南要求）。
export type Faq = {
  q: string;
  a: string;
};

export const traderFaqs: Faq[] = [
  {
    q: "Is LeverAcc a Perp DEX?",
    a: "No. LeverAcc is the Capital Layer of Hyperliquid: shared capital infrastructure that provides accounts, lending, credit risk management and settlement. It does not run its own order book; every trade executes on Hyperliquid.",
  },
  {
    q: "Which Perp DEX does LeverAcc work with?",
    a: "Hyperliquid. LeverAcc is built for Hyperliquid, and all positions are opened and settled on Hyperliquid perpetual markets.",
  },
  {
    q: "Where can I use LeverAcc for trading?",
    a: "Through the LeverAcc Web App at app.leveracc.xyz, or through partner trading apps built on LeverAcc. All trades happen on Hyperliquid, so they are public, transparent and verifiable on-chain.",
  },
  {
    q: "How much can I borrow from LeverAcc? What is the borrowing interest rate?",
    a: "Your borrowable amount is matched solely based on your own funds, up to 4x (an initial borrowing limit applies to keep the system stable). Borrow from LeverAcc at a daily interest rate of ~0.005-0.15%.",
  },
];

export const partnerFaqs: Faq[] = [
  {
    q: "How does my product integrate with LeverAcc?",
    a: "Apply through our partner channel. After a credit review, you integrate accounts, lending, credit risk and settlement through a single SDK/API surface, and your UI and strategy stay fully yours. Full guides live in the documentation.",
  },
  {
    q: "What does LeverAcc handle, and what do partners keep?",
    a: "We provide the capital layer: accounts, borrowing, credit risk and settlement. Partners keep full ownership of strategy, signals and user experience. We never compete with the apps we serve and offer no strategies, signals or investment advice of our own.",
  },
  {
    q: "How is funder capital protected?",
    a: "Borrowing is credit-managed: limits are set per account by the credit engine, a dynamic circuit breaker modulates risk in real time, and a trader can only ever lose their own principal, never funders' capital.",
  },
  {
    q: "Which products can build on LeverAcc?",
    a: "Anything that trades on Hyperliquid: AI trading agents, copy-trading platforms, quant strategies, trading studios and Telegram bots. If your users have strategies, LeverAcc gives them the capital to scale them.",
  },
];

export const allFaqs: Faq[] = [...traderFaqs, ...partnerFaqs];
