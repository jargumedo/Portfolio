import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juliano Argumedo — Full-Stack Developer",
  description:
    "Juliano Argumedo · Full Stack Developer SSR based in Mendoza, AR. React, Vue, Node and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-serif="on">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
