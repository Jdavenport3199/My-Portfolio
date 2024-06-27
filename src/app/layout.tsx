import type { Metadata } from "next";
import { inter, switzer } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "justin.",
    template: "%s | justin.",
  },
  description: "justin. web developer. product designer.",
  // keywords: ["Justin", "Davenport", "Web", "Developer", "Product", "Designer"],
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
        <body className={`${switzer.className} antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
