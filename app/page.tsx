'use client';

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import background from "./static/background.png";
import mobileBackground from "./static/mobile_background.png";
import logoIcon from "./static/icon.png";
import mobileHippo from "./static/mobile_hippo.png";

const CONFIG = {
  projectName: "LeverAcc",
  tagline: "A risk-free leverage accelerator based on HyperLiquid.",
  heroSubcopy:
    "Seamlessly breaks through HyperCore's leverage limits. Trade with 200x leverage and earn secure yields.",
  links: {
    twitter: "https://x.com/leveracc_xyz",
    discord: "",
    github: "https://github.com/MetaStellar-Tech",
    gitbook: "https://leveracc.gitbook.io/leveracc-docs/",
    email: "vv@leveracc.xyz",
  },
  waitlist: {
    enabled: true,
    webhookUrl: "",
  },
};

type HeroBackgroundStyle = React.CSSProperties & {
  "--hero-bg-mobile": string;
  "--hero-bg-desktop": string;
};

export default function App() {
  const heroBackgroundStyle: HeroBackgroundStyle = {
    "--hero-bg-mobile": `url(${mobileBackground.src})`,
    "--hero-bg-desktop": `url(${background.src})`,
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070116] text-white antialiased">
      <div
        className="hero-background pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
        style={heroBackgroundStyle}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-[#060021]/18 to-[#100430]/45" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <header className="px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={28} />
          <span className="text-lg font-semibold tracking-tight text-white/90">LeverAcc</span>
        </div>
        <nav className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-white/70 md:gap-6 md:text-[11px] md:tracking-[0.34em]">
          {CONFIG.links.github && (
            <a className="transition hover:text-white" href={CONFIG.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {CONFIG.links.twitter && (
            <a className="transition hover:text-white" href={CONFIG.links.twitter} target="_blank" rel="noreferrer">
              X
            </a>
          )}
          {CONFIG.links.email && (
            <a
              className="transition hover:text-white"
              href={`mailto:${CONFIG.links.email}`}
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="mx-auto flex w-full max-w-[1400px] grow flex-col items-center justify-center px-4 pb-20 pt-14 sm:px-8 lg:px-12 md:items-start">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl space-y-6 text-center md:max-w-2xl md:text-left"
      >
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          <span className="mr-2 text-white">Lever</span>
          <span className="bg-gradient-to-r from-[#2ef7ff] via-[#29efc4] to-[#68ff9d] bg-clip-text text-transparent">
            Acc
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-white/85 md:text-xl"
        >
          {CONFIG.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base text-white/70 md:text-lg"
        >
          {CONFIG.heroSubcopy}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-5 md:justify-start"
        >
          {CONFIG.waitlist.enabled && <WaitlistButton size="lg" />}
          {CONFIG.links.gitbook && (
            <a
              href={CONFIG.links.gitbook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:border-white/60 hover:text-white"
            >
              GitBook <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-14 flex w-full justify-center md:hidden"
      >
        <Image
          src={mobileHippo}
          alt="LeverAcc mascot"
          width={640}
          height={640}
          sizes="(max-width: 767px) 80vw"
          className="pointer-events-none h-auto w-full max-w-[320px] select-none drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        />
      </motion.div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={22} />
          <span>©MetaStellar Technology Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function LogoMark({ size = 24 }: { size?: number }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#3ef4ff] via-[#436fff] to-[#854cff] p-[3px] shadow-[0_0_30px_rgba(62,244,255,0.2)]">
      <Image
        src={logoIcon}
        alt="LeverAcc logo"
        width={size}
        height={size}
        className="h-auto w-auto rounded-full bg-[#070116]"
        style={{ width: size - 6, height: size - 6 }}
      />
    </span>
  );
}

function WaitlistButton({ size = "md" }: { size?: "md" | "lg" }) {
  const [open, setOpen] = useState(false);
  const pad = size === "lg" ? "px-7 py-3" : "px-5 py-2.5";
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 rounded-full ${pad} text-sm font-semibold tracking-tight text-white shadow-[0_10px_30px_rgba(160,50,255,0.35)] transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 bg-[radial-gradient(circle_at_10%_20%,#b44dff_0%,#7c3aed_45%,#ff5fb0_100%)]`}
      >
        JoinWaitlist
      </button>
      {open && <WaitlistModal onClose={() => setOpen(false)} />}
    </>
  );
}

function WaitlistModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[999] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#12062c]/95 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
      >
        <h4 className="text-lg font-semibold text-white">Join the waitlist</h4>
        <p className="mt-2 text-sm text-white/70">
          Join our Telegram community to access the LeverAcc bot and be the first to know about launch updates.
        </p>
        <div className="mt-6 space-y-4">
          <a
            href="https://t.me/leveracc_fans"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7f45ff] via-[#c04bff] to-[#ff5fb0] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            onClick={onClose}
          >
            Open Telegram Group
          </a>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
            <div className="relative h-[170px] w-[170px] overflow-hidden rounded-2xl bg-white/5">
              <Image
                src="/static/tg_group_qrcode.jpg"
                alt="LeverAcc Telegram group QR code"
                fill
                sizes="170px"
                className="object-cover"
                style={{ transform: "scale(1.55)", transformOrigin: "50% 38%" }}
              />
            </div>
            <span className="text-xs text-white/60">Scan to join the LeverAcc Telegram group instantly</span>
          </div>
          <p className="text-xs text-white/55">
            After you join the group, follow the pinned instructions to try the Telegram bot and secure your spot.
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70 transition hover:bg-white/20 hover:text-white"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
