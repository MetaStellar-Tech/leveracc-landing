import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  "https://leveracc.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LeverAcc: 5x Leverage Trading on Hyperliquid | Low Rates",
  description:
    "Trade perpetuals with 5x leverage on Hyperliquid. Low rates, pre-funded architecture, and fast execution to boost capital efficiency for active traders.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    title: "LeverAcc: 5x Leverage Trading on Hyperliquid",
    description:
      "Trade perpetuals with 5x leverage on Hyperliquid with low rates and fast execution powered by LeverAcc's pre-funded architecture.",
    url: "/",
    siteName: "LeverAcc",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "LeverAcc - Risk-free leverage accelerator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeverAcc: 5x Leverage Trading on Hyperliquid",
    description:
      "Trade perpetuals with 5x leverage on Hyperliquid at low rates with pre-funded architecture and fast execution.",
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
