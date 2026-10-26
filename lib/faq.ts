// Single source for the visible FAQ section and the FAQPage JSON-LD,
// so the structured data always matches what is on the page.
export type FaqItem = {
  q: string;
  a: string;
};

export const traderFaqs: FaqItem[] = [
  {
    q: "Is LeverAcc a Perp DEX?",
    a: "No. LeverAcc is the capital layer on top of Hyperliquid: it provides accounts, credit, risk management and settlement, while every order is matched and executed on Hyperliquid itself.",
  },
  {
    q: "Which Perp DEX does LeverAcc support?",
    a: "Hyperliquid. LeverAcc's contracts are live on HyperEVM mainnet and orders execute on HyperCore, Hyperliquid's order book. Support for more perpetual venues is on the roadmap.",
  },
  {
    q: "Where can I use LeverAcc for trading?",
    a: "Through LeverAcc partner products such as AI trading tools, copy-trading apps, quant teams and Telegram bots, or in the reference app at app.leveracc.xyz. All trades happen on Hyperliquid, so they are public, transparent and verifiable on-chain.",
  },
  {
    q: "How much can I borrow from LeverAcc? What is the borrowing interest rate?",
    a: "Your borrowable amount is matched solely based on your own funds, up to 4x (an initial borrowing limit applies to keep the system stable). Borrow from LeverAcc at a daily interest rate of ~0.005-0.15%.",
  },
];

export const partnerFaqs: FaqItem[] = [
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
