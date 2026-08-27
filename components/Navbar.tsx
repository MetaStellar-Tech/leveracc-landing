"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

        <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/576x576-transparent-bg-transparent-fill.png"
                alt="LeverAcc Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-leveracc text-base md:text-lg text-black dark:text-white">
                LeverAcc
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-base font-medium text-gray-600 dark:text-gray-200">
              <Link
                href="/#partners"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Partners
              </Link>
              <a
                href="https://leveracc.gitbook.io/leveracc-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Docs
              </a>
              <Link
                href="/blog"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Blog
              </Link>
              <a
                href="https://x.com/leveracc_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                X
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

            <ThemeToggle />

            <div className="flex items-center gap-3">
              <Link
                href="/#partners"
                className="hidden lg:inline-flex text-base border border-gray-300 dark:border-gray-700 px-5 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Partner with us
              </Link>
              <div className="relative group">
                <button
                  className="text-base border border-gray-300 dark:border-gray-700 px-5 py-1 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200 transition-colors whitespace-nowrap"
                  onClick={() => {
                    window.open("https://app.leveracc.xyz/", "_blank");
                  }}
                >
                  Launch App
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1 rounded-full transition-colors focus:outline-none ${
                isScrolled
                  ? "hover:bg-gray-200 dark:hover:bg-gray-800"
                  : "hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              }`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              {isMenuOpen
                ? <X className="w-6 h-6 text-gray-900 dark:text-gray-300" />
                : <Menu className="w-6 h-6 text-gray-900 dark:text-gray-300" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg md:hidden transition-all duration-200 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          <Link
            href="/#partners"
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Partners
          </Link>
          <a
            href="https://leveracc.gitbook.io/leveracc-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Docs
          </a>
          <Link
            href="/blog"
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="https://x.com/leveracc_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </a>
          <a
            href="https://github.com/MetaStellar-Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
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
          <div className="flex flex-col gap-2">
            <button
              className="w-full border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-center"
              onClick={() => {
                setIsMenuOpen(false);
                document.querySelector("#partners")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Partner with us
            </button>
            <button
              className="w-full bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200 transition-colors font-medium text-center"
              onClick={() => {
                window.open("https://app.leveracc.xyz/", "_blank");
              }}
            >
              Launch App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
