import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SM Mehedi Hasan - Personal Portfolio",
  description: "Portfolio of SM Mehedi Hasan, a distinguished technology entrepreneur, strategic leader, and community mentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-dark text-white bg-grid-pattern relative">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-[0.03] pointer-events-none z-0"></div>
        {children}
      </body>
    </html>
  );
}
