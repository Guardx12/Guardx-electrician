import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArcLine Electrical",
  description: "Showroom demo electrician site: industrial, modern layout with clear proof, compliance and service coverage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
