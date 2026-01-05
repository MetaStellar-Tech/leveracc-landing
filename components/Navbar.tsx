"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={`relative px-4 md:px-8 py-4 flex items-center justify-between gap-8 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        {/* Geometric Pattern Background - Only visible when scrolled */}
        {isScrolled && (
          <div
            className="absolute inset-0 opacity-20 dark:opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Left Section: Logo */}
          <div className="flex items-center gap-6">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <Image
                src="/576x576-transparent-bg-transparent-fill.png"
                alt="LeverAcc Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-title tracking-tight text-base md:text-lg text-black dark:text-white">
                LeverAcc
              </span>
            </div>
          </div>

          {/* Right Section: Navigation Links, Theme Toggle and Launch APP Button */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <div className="flex items-center gap-6 text-base font-medium text-gray-600 dark:text-gray-200">
              <a
                href="https://leveracc.gitbook.io/leveracc-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Docs
              </a>
              <a
                href="https://x.com/leveracc_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://github.com/MetaStellar-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Github
              </a>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Launch APP Button */}
            <div
              className="relative group"
              onClick={() => {
                window.open("https://t.me/LeverAccTestBot", "_blank");
              }}
            >
              <button className="text-base border border-gray-300 bg-[#0099ff] dark:border-gray-700  font-bold text-white px-5 py-1 rounded-full hover:opacity-90 transition-colors whitespace-nowrap">
                Launch App
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1 rounded-full transition-colors focus:outline-none ${
                isScrolled
                  ? "hover:bg-gray-200 dark:hover:bg-gray-800"
                  : "hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen
                ? <X className="w-6 h-6 text-gray-900 dark:text-gray-300" />
                : <Menu className="w-6 h-6 text-gray-900 dark:text-gray-300" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <a
                href="https://leveracc.gitbook.io/leveracc-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <a
                href="https://x.com/leveracc_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Twitter
              </a>
              <a
                href="https://github.com/MetaStellar-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
              </a>
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-2"></div>
              <div className="flex items-center justify-between p-3">
                <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-2"></div>
              <div className="relative group">
                <button
                  className="w-full bg-[#0099ff] text-white px-4 py-3 rounded-lg hover:opacity-90 transition-colors font-medium text-center"
                  onClick={() => {
                    window.open("https://t.me/LeverAccTestBot", "_blank");
                  }}
                >
                  Launch App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
