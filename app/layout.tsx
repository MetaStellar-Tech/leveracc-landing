import type { Metadata } from "next";
import "@fontsource/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeverAcc",
  description: "A risk-free leverage accelerator based on HyperLiquid",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
