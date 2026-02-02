"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is LeverAcc a Perp DEX?",
      answer:
        "No, LeverAcc is not a DEX itself. It is a liquidity and efficiency layer that sits on top of existing Perpetual DEXs.",
    },
    {
      question: "Which Perp DEX has LeverAcc integrated currently?",
      answer: "Currently, LeverAcc has integrated with Hyperliquid.",
    },
    {
      question: "Where can I use LeverAcc for trading?",
      answer:
        "You can access LeverAcc through our unified interface. Simply launch the app to get started.",
    },
    {
      question:
        "Do I need collateral assets to borrow funds from LeverAcc? What is the borrowing interest rate?",
      answer:
        "Yes, you need initial margin. Interest rates are dynamic based on utilization and market conditions.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            A few more questions?
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about LeverAcc.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-lg px-4 bg-[#0A0B10]"
            >
              <AccordionTrigger className="text-white hover:text-blue-400 transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Join the community
          </a>
        </div>
      </div>
    </section>
  );
}
