'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-[#F5F5DC] border-b border-[#FF6B35]/20">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -top-1 left-8 w-12 h-12 z-10"
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
      
      </motion.div>

      <motion.div 
        className="absolute -top-1 right-12 w-10 h-10 z-10"
        animate={{
          y: [0, -4, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >

      </motion.div>

      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/sticker4.png"
                  alt="MarketCarp Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8B4513] via-[#FF6B35] to-[#8B4513] text-transparent bg-clip-text">
                MarketCarp
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/shop', text: 'Shop' },
              { href: '/market-analysis', text: 'Market Analysis' },
              { href: '/content', text: 'News & Content' },
              { href: '/pricing', text: 'Pricing' }
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="text-[#8B4513] hover:text-[#FF6B35] transition-colors relative group"
                >
                  {link.text}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="ml-4 flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/shop"
                className="relative p-2 text-[#8B4513] hover:text-[#FF6B35] transition-colors"
              >
                <FiShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link 
                href="/auth/login" 
                className="bg-white/90 backdrop-blur-sm border border-[#FF6B35] text-[#FF6B35] px-4 py-2 rounded-md hover:bg-[#FF6B35]/10 transition-colors"
              >
                Log In
              </Link>
              <Link 
                href="/auth/register" 
                className="bg-[#FF6B35] text-white px-4 py-2 rounded-md hover:bg-[#FF6B35]/90 transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#8B4513] focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        <motion.div 
          className="md:hidden mt-4 pb-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {[
              { href: '/shop', text: 'Shop' },
              { href: '/market-analysis', text: 'Market Analysis' },
              { href: '/content', text: 'News & Content' },
              { href: '/pricing', text: 'Pricing' }
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="text-[#8B4513] hover:text-[#FF6B35] transition-colors block"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <Link 
                href="/shop"
                className="relative p-2 text-[#8B4513] hover:text-[#FF6B35] transition-colors"
              >
                <FiShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link 
                href="/auth/login" 
                className="bg-white/90 backdrop-blur-sm border border-[#FF6B35] text-[#FF6B35] py-2 px-4 rounded-md text-center hover:bg-[#FF6B35]/10 transition-colors"
              >
                Log In
              </Link>
              <Link 
                href="/auth/register" 
                className="bg-[#FF6B35] text-white py-2 px-4 rounded-md text-center hover:bg-[#FF6B35]/90 transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}