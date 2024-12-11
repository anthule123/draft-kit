import { EB_Garamond, Lora, Merriweather, Inter } from "next/font/google";

export const garamond = EB_Garamond({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const lora = Lora({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const merriweather = Merriweather({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
