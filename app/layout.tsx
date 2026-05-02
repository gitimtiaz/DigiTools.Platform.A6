import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imtiaz.dev | Frontend-Focused Web Developer",
  description:
    "Portfolio of Imtiaz Ahamed — Frontend-Focused Web Developer specializing in Next.js and React. Building modern, scalable web applications with clean UI design.",
  keywords: ["Next.js", "React", "Frontend Developer", "Web Developer", "Imtiaz Ahamed"],
  authors: [{ name: "Imtiaz Ahamed" }],
  openGraph: {
    title: "Imtiaz.dev | Frontend-Focused Web Developer",
    description:
      "Portfolio of Imtiaz Ahamed — Frontend-Focused Web Developer specializing in Next.js and React.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-on-background font-body-md selection:bg-primary/30 antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
