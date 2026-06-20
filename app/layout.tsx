import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { content } from "@/content";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

// Clean retro monospace used sitewide (body + headings via the shared vars).
const spaceMono = Space_Mono({
  variable: "--font-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Same family drives the heading/mono tokens for a consistent look.
const spaceMonoDisplay = Space_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: content.site.metaTitle,
  description: content.site.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={content.site.htmlLang}
      className={`${spaceMono.variable} ${spaceMonoDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
