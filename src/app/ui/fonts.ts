import { Inter, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

export const switzer = localFont({
  src: "./Switzer-Variable.ttf",
  variable: "--font-switzer",
});

export const inter = Inter({
  subsets: ["latin"],
});

export const inter_tight = Inter_Tight({
  subsets: ["latin"],
});

export const sf_pro = localFont({
  src: [
    {
      path: "./SF-Pro.ttf",
      style: "normal",
    },
  ],
});
