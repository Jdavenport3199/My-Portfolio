import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "I'm Justin.",
    template: "%s | I'm Justin.",
  },
  description: "I'm Justin. Frontend Developer & UI/UX Designer.",
  keywords: [
    "Justin Davenport",
    "Frontend",
    "Developer",
    "UI",
    "UX",
    "Designer",
  ],
  openGraph: {
    images: "https://www.justindavenport.space/opengraph-image.png",
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
        <head>
          <script
            defer
            src="https://kit.fontawesome.com/5f2bb09986.js"
            crossOrigin="anonymous"
          ></script>
        </head>

        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
