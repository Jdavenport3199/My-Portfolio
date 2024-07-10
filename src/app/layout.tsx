import type { Metadata } from "next";
import { switzer } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Justin Davenport | Portfolio",
    template: "%s | Justin Davenport",
  },
  description: "Web Developer and Product Designer",
  openGraph: {
    images: "/opengraph-image.png",
  },
  metadataBase: new URL("https://justindavenport.space/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`${switzer.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
