import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redline Electrical Co.",
  description: "Certified electricians for domestic and commercial work across Sussex. Fast response, clean installs, and workmanship guaranteed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
