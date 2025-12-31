import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* CTA Card */}
      <div className="relative rounded-[40px] py-16 px-6 md:px-12 md:py-20 text-center overflow-hidden mb-12 isolate">
        {/* Layer 1: Base Background Color (Black) */}
        <div className="absolute inset-0 bg-black -z-20"></div>

        {/* Layer 2: Animated Aurora Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Top-Left: Purple/Indigo Glow */}
          <div
            className="absolute -top-[40%] -left-[20%] w-[100%] h-[100%] rounded-full opacity-50 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(0,0,0,0) 70%)",
              animation: "aurora-1 20s infinite ease-in-out",
              mixBlendMode: "screen",
            }}
          ></div>

          {/* Bottom-Right: Cyan/Teal Glow */}
          <div
            className="absolute -bottom-[40%] -right-[20%] w-[100%] h-[100%] rounded-full opacity-50 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(0,0,0,0) 70%)",
              animation: "aurora-2 25s infinite ease-in-out reverse",
              mixBlendMode: "screen",
            }}
          ></div>

          {/* Center: Emerald/Green Accent for that "Aurora" feel */}
          <div
            className="absolute top-[20%] left-[30%] w-[60%] h-[60%] rounded-full opacity-30 blur-[80px]"
            style={{
              background:
                "radial-gradient(circle, rgba(45,212,191,0.6) 0%, rgba(0,0,0,0) 70%)",
              animation: "aurora-3 30s infinite linear",
              mixBlendMode: "screen",
            }}
          ></div>

          {/* Noise Texture for Film Grain effect */}
          <div
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg text-white">
            Ready to Break Boundaries?
          </h2>
          <p className="text-xl text-blue-50/80 mb-10 max-w-3xl mx-auto drop-shadow-md font-light">
            Maximize your capital efficiency and start trading with amplified
            power today.
          </p>

          <div className="flex justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:-translate-y-1 active:scale-95 duration-300 cursor-not-allowed opacity-80">
              Access the Public Beta
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-2 font-bold text-lg text-black dark:text-white">
          <Image
            src="/icon.png"
            alt="LeverAcc Logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          LEVERACC
        </div>

        <div className="text-sm text-gray-400 dark:text-gray-500 text-center">
          © MetaStellar Technology Ltd. All Rights Reserved.
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://leveracc.gitbook.io/leveracc-docs/resources/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://leveracc.gitbook.io/leveracc-docs/resources/term-of-use"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>

          <div className="hidden md:block w-px h-4 bg-gray-300 dark:bg-gray-700 mx-2"></div>

          <div className="flex items-center gap-5">
            {/* X (Twitter) */}
            <a
              href="https://x.com/leveracc_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/leveracc_fans"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>
            {/* Github */}
            <a
              href="https://github.com/MetaStellar-Tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="Github"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
