"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-6 z-50 flex flex-col items-center px-4 w-full pointer-events-none gap-2">
      <nav className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-full px-5 py-2.5 flex items-center justify-between gap-8 pointer-events-auto min-w-[320px] max-w-2xl w-full transition-all relative z-50">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-black">
          <Image
            src="/icon.png"
            alt="LeverAcc Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          LEVERACC
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a
            href="https://leveracc.gitbook.io/leveracc-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Docs
          </a>
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          <a
            href="https://x.com/leveracc_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Twitter
          </a>
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          <a
            href="https://github.com/MetaStellar-Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100"
          >
            Github
          </a>
          <div className="relative group">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-not-allowed opacity-80">
              Launch App
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
              TBD
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-1/2 w-full max-w-2xl px-4 md:hidden pointer-events-auto"
          >
            <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-2xl p-4 flex flex-col gap-2">
              <a
                href="https://leveracc.gitbook.io/leveracc-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <a
                href="https://x.com/leveracc_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Twitter
              </a>
              <a
                href="https://github.com/MetaStellar-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
              </a>
              <div className="h-px bg-gray-200 my-1"></div>
              <div className="relative group w-full">
                <button className="w-full bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium text-center cursor-not-allowed opacity-80">
                  Launch App
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                  TBD
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
