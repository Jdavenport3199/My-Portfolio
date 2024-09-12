import {} from "next/font/google";
import localFont from "next/font/local";

export const switzer = localFont({
  src: "./Switzer-Variable.ttf",
  variable: "--font-switzer",
});

export const pangaia = localFont({
  src: [
    {
      path: "./PPPangaia-Light.woff2",
      style: "normal",
    },
  ],
});

export const neue_montreal = localFont({
  src: [
    {
      path: "./PPNeueMontreal-Bold.woff2",
      style: "normal",
    },
  ],
});
