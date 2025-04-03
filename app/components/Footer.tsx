'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white mt-auto mx-auto px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -top-4 left-12 w-12 h-12 opacity-30"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/images/sticker3.png"
          alt="Decorative Fish"
          width={48}
          height={48}
        />
      </motion.div>

      <motion.div 
        className="absolute top-1/4 right-8 w-10 h-10 opacity-30"
        animate={{
          y: [0, -6, 0],
          x: [0, 6, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/images/sticker6.png"
          alt="Decorative Fish"
          width={40}
          height={40}
        />
      </motion.div>

      <div className="container-custom py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-white via-[#FF6B35] to-white bg-clip-text text-transparent">
                MarketCarp
              </span>
            </h3>
            <p className="text-gray-300 mb-4">
              A comprehensive platform for buying, grading, and selling Pokémon cards.
            </p>
          </motion.div>
          
          {[
            {
              title: 'Shop',
              links: [
                { href: '/shop/graded-cards', text: 'Graded Cards' },
                { href: '/shop/sealed-products', text: 'Sealed Products' },
                { href: '/shop/rare-finds', text: 'Rare Finds' }
              ]
            },
            {
              title: 'SaaS',
              links: [
                { href: '/pricing', text: 'Pricing' },
                { href: '/features', text: 'Features' },
                { href: '/market-analysis', text: 'Market Analysis' }
              ]
            },
            {
              title: 'Company',
              links: [
                { href: '/about', text: 'About Us' },
                { href: '/contact', text: 'Contact' },
                { href: '/blog', text: 'Blog' }
              ]
            }
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (sectionIndex + 1) }}
            >
              <h4 className="text-lg font-medium mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * (linkIndex + 1) }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-[#FF6B35] transition-colors relative group"
                    >
                      {link.text}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"
                        whileHover={{ width: '100%' }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MarketCarp. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {[
              { href: '/privacy', text: 'Privacy Policy' },
              { href: '/terms', text: 'Terms of Service' }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-400 hover:text-[#FF6B35] transition-colors relative group"
              >
                {link.text}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}