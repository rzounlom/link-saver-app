import "./globals.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Saver",
  description: "App for saving links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
