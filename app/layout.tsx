import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  "https://leveracc.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "LeverAcc - 5x Leverage Trading on Hyperliquid | Capital Efficiency Layer",
  description:
    "LeverAcc is the Liquidity and Capital Efficiency Layer built on Hyperliquid. Trade perpetuals with 5x buying power at low interest rates. Earn passive yield as a liquidity provider.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    title:
      "LeverAcc - 5x Leverage Trading on Hyperliquid | Capital Efficiency Layer",
    description:
      "LeverAcc is the Liquidity and Capital Efficiency Layer built on Hyperliquid. Trade perpetuals with 5x buying power at low interest rates. Earn passive yield as a liquidity provider.",
    url: "/",
    siteName: "LeverAcc",
    images: [
      {
        url: "/og.png",
        // width: 576,
        // height: 576,
        alt: "LeverAcc - Risk-free leverage accelerator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LeverAcc - 5x Leverage Trading on Hyperliquid | Capital Efficiency Layer",
    description:
      "LeverAcc is the Liquidity and Capital Efficiency Layer built on Hyperliquid. Trade perpetuals with 5x buying power at low interest rates. Earn passive yield as a liquidity provider.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
