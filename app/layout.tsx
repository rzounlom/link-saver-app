import "./globals.scss";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Link Saver",
  description: "A sleek app to save, tag, and organize your links.",
  openGraph: {
    title: "Link Saver",
    description: "A sleek bookmarking dashboard built with Next.js.",
    url: "https://your-vercel-deploy.vercel.app",
    siteName: "Link Saver",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <Toaster richColors position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
