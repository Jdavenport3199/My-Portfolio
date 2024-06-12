import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

export const inter_tight = Inter_Tight({
  subsets: ["latin"],
});

export const switzer = localFont({
  src: "./Switzer-Variable.ttf",
  variable: "--font-switzer",
});
