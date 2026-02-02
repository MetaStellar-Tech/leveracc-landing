import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  "https://leveracc-website-git-v2-lever-acc.vercel.app"; //"https://leveracc.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LeverAcc",
  description: "A risk-free leverage accelerator based on HyperLiquid",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    title: "LeverAcc",
    description: "A risk-free leverage accelerator based on HyperLiquid",
    url: "/",
    siteName: "LeverAcc",
    images: [
      {
        url: "/twitterog.png",
        // width: 576,
        // height: 576,
        alt: "LeverAcc - Risk-free leverage accelerator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeverAcc",
    description: "A risk-free leverage accelerator based on HyperLiquid",
    images: ["/twitterog.png"],
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
