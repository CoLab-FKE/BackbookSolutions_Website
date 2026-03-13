import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "2BS Backbook Solutions",
  description: "Site oficial da Backbook Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans")}>
      <body>{children}</body>
    </html>
  );
}
