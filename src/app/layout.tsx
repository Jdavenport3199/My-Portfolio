import type { Metadata } from "next";
import { inter_tight } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Web Developer | Product Designer",
    template: "%s | Web Developer | Product Designer",
  },
  description:
    "I'm Justin, a Web Developer and Product Designer located in Charlotte, NC.",
  keywords: ["Justin", "Davenport", "Web", "Developer", "Product", "Designer"],
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
        <body className={`${inter_tight.className} antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
