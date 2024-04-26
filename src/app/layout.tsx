import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Justin Davenport — DESIGNER & DEVELOPER",
    template: "%s | Justin Davenport",
  },
  description: "I'm Justin, a Software Developer located in Charlotte, NC.",
  keywords: ["Justin", "Davenport", "Designer", "Developer"],
  metadataBase: new URL("https://www.justindavenport.space/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
