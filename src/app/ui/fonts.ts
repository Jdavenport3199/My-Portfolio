import {} from "next/font/google";
import localFont from "next/font/local";

export const switzer = localFont({
  src: "./Switzer-Variable.ttf",
  variable: "--font-switzer",
});

export const object_sans = localFont({
  src: [
    {
      path: "./PPObjectSans-Bold.woff2",
      style: "normal",
    },
  ],
});
