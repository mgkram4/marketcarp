import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "MarketCarp - Pokémon Card SaaS Platform",
  description: "A comprehensive platform for buying, grading, and selling Pokémon cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="bg-[#F5F5DC]">
        <Navbar />
        <main className=" ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
