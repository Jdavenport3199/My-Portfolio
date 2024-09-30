import type { Metadata } from "next";
import { inter, sf_pro, switzer } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Justin Davenport",
    template: "%s — Justin Davenport",
  },
  description:
    "DEVELOPER & DESIGNER",
  openGraph: {
    images: "https://www.justindavenport.space/opengraph-image.png",
  },
  metadataBase: new URL("https://www.justindavenport.space/"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
