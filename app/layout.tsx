import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/inter";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const harmonyOSBold = localFont({
  src: "../font/HarmonyOS_Sans_SC_Bold.ttf",
  variable: "--font-harmonyos-bold",
  display: "swap",
});

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
      <body className={`${harmonyOSBold.variable} antialiased`}>
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
