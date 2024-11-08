import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnalyticsProvider } from "@/providers/analytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "hmziqrs",
  description: "Busy building and accelerating",
  manifest: "./manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="./icons/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="./icons/favicon.svg" />
        <link rel="shortcut icon" href="./icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./icons/apple-touch-icon.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-zinc-900 dark:text-white`}
      >
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
