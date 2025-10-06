'use client';

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Twitter, Github, MessageCircle, BookOpen, Mail } from "lucide-react";

/**
 * Minimal landing page inspired by jigsaw.build
 * — ultra–simple layout
 * — centered hero, sparse nav
 * — clean light theme
 * — optional waitlist modal
 */

const CONFIG = {
  projectName: "LeverAcc",
  tagline: "A risk-free leverage accelerator based on HyperLiquid.",
  heroSubcopy:
    "Seamlessly breaks through HyperCore's leverage limits. Trade with 200x leverage and earn secure yields.",
  links: {
    twitter: "https://x.com/leveracc_xyz",
    discord: "", // TBD
    github: "https://github.com/MetaStellar-Tech",
    gitbook: "https://leveracc.gitbook.io/leveracc-docs/",
    email: "vv@leveracc.xyz",
  },
  waitlist: {
    enabled: true,
    webhookUrl: "", // optional endpoint
  },
};

function WaveBackground() {
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      // Decrease phase so waves travel left -> right
      setT((p) => (p - 0.012) % (Math.PI * 2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const w = 1440;
  const h = 900;
  const points = 80;

  const makePath = (phase: number, amp: number, freq: number, base: number) => {
    const step = w / points;
    let d = `M 0 ${h} L 0 ${base}`;
    for (let i = 0; i <= points; i++) {
      const x = i * step;
      const px = (i / points) * Math.PI * 2 * freq;
      const y =
        base +
        Math.sin(px + phase) * amp +
        Math.sin(px * 0.5 + phase * 1.4) * amp * 0.4 +
        Math.sin(px * 2 + phase * 0.7) * amp * 0.15;
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    d += ` L ${w} ${h} Z`;
    return d;
  };

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="wave1" x1="0" y1="0" x2={w} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="wave2" x1="0" y1="0" x2={w} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="wave3" x1="0" y1="0" x2={w} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="blur20" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <path d={makePath(t * 1.0, 48, 1.2, 360)} fill="url(#wave1)" opacity="0.45" filter="url(#blur20)" />
      <path d={makePath(t * 0.8 + 1.2, 36, 1.6, 405)} fill="url(#wave2)" opacity="0.35" filter="url(#blur20)" />
      <path d={makePath(t * 1.4 + 2.4, 28, 2.3, 450)} fill="url(#wave3)" opacity="0.28" filter="url(#blur20)" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f172a] text-white">
      <WaveBackground />
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <header className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-6 xl:max-w-none xl:px-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="text-sm font-medium tracking-tight">{CONFIG.projectName}</span>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm text-white/70">
          {CONFIG.links.github && (
            <a className="hover:text-white transition" href={CONFIG.links.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {CONFIG.links.twitter && (
            <a className="hover:text-white transition" href={CONFIG.links.twitter} target="_blank" rel="noreferrer">X</a>
          )}
          {CONFIG.links.email && (
            <a className="hover:text-white transition" href={`mailto:${CONFIG.links.email}`} target="_blank" rel="noreferrer">Email</a>
          )}
          {CONFIG.links.discord && (
            <a
              className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium bg-black text-white hover:bg-neutral-800 ring-1 ring-white/15 transition"
              href={CONFIG.links.discord}
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-16 pb-28 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-semibold tracking-tight"
      >
        {CONFIG.projectName}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-5 text-lg text-white/70"
      >
        {CONFIG.tagline}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-3 text-base text-white/70"
      >
        {CONFIG.heroSubcopy}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex items-center justify-center gap-3"
      >
        {CONFIG.waitlist.enabled && <WaitlistButton size="lg" />}
        {CONFIG.links.gitbook && (
          <a
            href={CONFIG.links.gitbook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition"
          >
            <BookOpen className="w-4 h-4" /> GitBook
          </a>
        )}
      </motion.div>

      
    </main>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10 text-sm text-white/70 xl:max-w-none xl:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span>©MetaStellar Technology Ltd. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          {CONFIG.links.gitbook && (
            <a className="hover:text-white transition" href={CONFIG.links.gitbook} target="_blank" rel="noreferrer">Docs</a>
          )}
          {CONFIG.links.github && (
            <a className="hover:text-white transition" href={CONFIG.links.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
        </div>
      </div>
    </footer>
  );
}

function LogoMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="laG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="8" fill="black" stroke="url(#laG)" strokeWidth="2" />
      {/* L shape */}
      <path d="M9 23V9h4v10h10v4H9z" fill="white" />
      {/* A hint (chevron) */}
      <path d="M17 9l4 8h-3l-1-2h-4l1.4-2.8L17 9z" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

function WaitlistButton({ size = "md" }: { size?: "md" | "lg" }) {
  const [open, setOpen] = useState(false);
  const pad = size === "lg" ? "px-5 py-2.5" : "px-4 py-2";
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 rounded-md ${pad} text-sm font-medium bg-black text-white hover:bg-neutral-800 transition`}
      >
        Join waitlist
      </button>
      {open && <WaitlistModal onClose={() => setOpen(false)} />}
    </>
  );
}

function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const valid = useMemo(() => /.+@.+\..+/.test(email), [email]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setStatus("loading");

    const payload = { name, email, source: "landing" };

    try {
      if (CONFIG.waitlist.webhookUrl) {
        const res = await fetch(CONFIG.waitlist.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        await new Promise((r) => setTimeout(r, 500));
        try {
          const raw = JSON.parse(localStorage.getItem("waitlist") || "[]");
          const next = [...raw, { ...payload, ts: Date.now() }];
          localStorage.setItem("waitlist", JSON.stringify(next));
        } catch {}
      }
      setStatus("success");
      setMessage("Thanks! We'll be in touch soon.");
      setName("");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-[999] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md rounded-xl border border-white/10 bg-white p-6 shadow-sm"
      >
        <h4 className="text-lg font-semibold">Join the waitlist</h4>
        <p className="text-sm text-white/70 mt-1">Get early updates and beta invites.</p>
        <form onSubmit={submit} className="mt-5 space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-md border border-neutral-300 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-200"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            type="email"
            className="w-full rounded-md border border-neutral-300 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-200"
          />
          <button
            type="submit"
            disabled={!valid || status === "loading"}
            className="w-full rounded-md bg-black text-white py-2.5 font-medium disabled:opacity-60"
          >
            {status === "loading" ? "Submitting…" : "Get Early Access"}
          </button>
        </form>
        {status !== "idle" && (
          <p className={`mt-3 text-sm ${status === "success" ? "text-emerald-600" : status === "error" ? "text-rose-600" : "text-neutral-700"}`}>
            {message}
          </p>
        )}
        <button onClick={onClose} className="absolute top-3 right-3 text-neutral-500 hover:text-white">✕</button>
      </motion.div>
    </div>
  );
}
