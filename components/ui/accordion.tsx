"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Simple context to manage state
const AccordionContext = React.createContext<{
  activeItem: string | null;
  toggleItem: (value: string) => void;
} | null>(null);

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "single" | "multiple"; // we only support single for now in this custom impl
    collapsible?: boolean;
    defaultValue?: string;
  }
>(
  (
    { className, children, type = "single", collapsible = false, ...props },
    ref
  ) => {
    const [activeItem, setActiveItem] = React.useState<string | null>(null);

    const toggleItem = (value: string) => {
      setActiveItem((prev) =>
        prev === value ? (collapsible ? null : prev) : value
      );
    };

    return (
      <AccordionContext.Provider value={{ activeItem, toggleItem }}>
        <div ref={ref} className={cn("grid gap-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  // Pass the value to children via context or cloneElement?
  // Easier to use a wrapper context or just attach value to children
  // But standard Radix uses value on Item.
  // We can't easily access the value in Trigger/Content without Context if we don't pass it down.
  // We can use a context for the Item too.

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div ref={ref} className={cn("border-b", className)} {...props} />
    </AccordionItemContext.Provider>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionItemContext = React.createContext<{ value: string } | null>(
  null
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { activeItem, toggleItem } = React.useContext(AccordionContext)!;
  const { value } = React.useContext(AccordionItemContext)!;
  const isOpen = activeItem === value;

  return (
    <div className="flex">
      <button
        ref={ref}
        onClick={() => toggleItem(value)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    </div>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { activeItem } = React.useContext(AccordionContext)!;
  const { value } = React.useContext(AccordionItemContext)!;
  const isOpen = activeItem === value;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div ref={ref} className={cn("pb-4 pt-0", className)} {...props}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
