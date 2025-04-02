import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white mt-auto  mx-auto px-4">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MarketCarp</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive platform for buying, grading, and selling Pokémon cards.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop/graded-cards" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Graded Cards
                </Link>
              </li>
              <li>
                <Link href="/shop/sealed-products" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Sealed Products
                </Link>
              </li>
              <li>
                <Link href="/shop/rare-finds" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Rare Finds
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">SaaS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/market-analysis" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Market Analysis
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MarketCarp. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}