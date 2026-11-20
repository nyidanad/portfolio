import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Chakra_Petch({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});
 
export const metadata: Metadata = {
  title: "Nyíri Dániel • Portfolio",
  description: "Made by Nyíri Dániel",
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
