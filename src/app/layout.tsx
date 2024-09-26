import type { Metadata } from "next";
import { sf_pro, switzer } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Justin Davenport — Developer & Designer.",
    template: "%s — Justin Davenport",
  },
  description:
    "Crafting digital experiences with clean code and intuitive design.",
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
        <body className={`${sf_pro.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
