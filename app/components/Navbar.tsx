'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F5F5DC] border-b border-[#FF6B35]/20  mx-auto px-4 ">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#8B4513]">
              MarketCarp
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/shop" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
              Shop
            </Link>
            <Link href="/market-analysis" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
              Market Analysis
            </Link>
            <Link href="/content" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
              News & Content
            </Link>
            <Link href="/pricing" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
              Pricing
            </Link>
            <div className="ml-4 flex items-center space-x-3">
              <Link href="/auth/login" className="btn-secondary">
                Log In
              </Link>
              <Link href="/auth/register" className="btn-primary">
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#8B4513] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/shop" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Shop
              </Link>
              <Link href="/market-analysis" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Market Analysis
              </Link>
              <Link href="/content" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                News & Content
              </Link>
              <Link href="/pricing" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Pricing
              </Link>
              <div className="flex flex-col space-y-3 pt-2">
                <Link href="/auth/login" className="btn-secondary text-center">
                  Log In
                </Link>
                <Link href="/auth/register" className="btn-primary text-center">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}