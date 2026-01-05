import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const harmonyOS = localFont({
  src: [
    {
      path: "../font/HarmonyOS_Sans_SC_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/HarmonyOS_Sans_SC_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-harmonyos",
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
      <body className={`${harmonyOS.variable} antialiased`}>
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
