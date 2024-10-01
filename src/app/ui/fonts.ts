import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
});

export const monument_extended = localFont({
  src: [
    {
      path: "./PPMonumentExtended-Light.woff2",
      style: "normal",
    },
  ],
});
