import type { Metadata } from "next";
import { ScrollHeader } from "@/components/ScrollHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "HDGR — Architecture & Development",
  description: "Architecture portfolio — Julian Hendigery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono">
        <ScrollHeader />
        {children}
      </body>
    </html>
  );
}
