import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-6 z-50 flex justify-center px-4 w-full pointer-events-none">
      <nav className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-full px-5 py-2.5 flex items-center justify-between gap-8 pointer-events-auto min-w-[320px] max-w-2xl transition-all">
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
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-not-allowed opacity-80">
            Launch App
          </button>
        </div>

        <div className="md:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
