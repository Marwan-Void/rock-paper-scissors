import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RPS Void - Game Arena - Marwan Void",
  description: "A Simple Rock, Paper, Scissors Game Made BY Marwan Void Using Next.js - Game Arena Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
