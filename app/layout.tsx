import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  "https://leveracc.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LeverAcc: The Capital Layer of Hyperliquid | 5x Leverage Trading",
  description:
    "LeverAcc is the Capital Layer of Hyperliquid — shared account, lending, credit risk and settlement infrastructure giving trading apps and perpetual traders 5x buying power at 0.1% daily interest.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    title: "LeverAcc: The Capital Layer of Hyperliquid",
    description:
      "Shared capital infrastructure for every trading app on Hyperliquid — 5x buying power for traders, partners and LPs, powered by pre-funded vaults and a credit risk engine.",
    url: "/",
    siteName: "LeverAcc",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "LeverAcc — The Capital Layer of Hyperliquid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeverAcc: The Capital Layer of Hyperliquid",
    description:
      "Shared capital infrastructure for trading apps on Hyperliquid — 5x buying power at 0.1% daily interest.",
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
