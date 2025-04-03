'use client';

import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from './context/CartContext';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <title>MarketCarp - Pokémon Card SaaS Platform</title>
        <meta 
          name="description" 
          content="A comprehensive platform for buying, grading, and selling Pokémon cards" 
        />
      </head>
      <body className="bg-[#F5F5DC]">
        <CartProvider>
          <Navbar />
          <main className=" ">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
