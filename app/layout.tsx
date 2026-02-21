import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redline Electrical",
  description: "Showroom demo electrician site: red & grey premium brand with a unique sidebar layout, proof, compliance and service coverage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
