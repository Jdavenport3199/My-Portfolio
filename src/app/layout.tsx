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
        <body className={`${switzer.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
