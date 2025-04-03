"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiBarChart2, FiBook, FiShoppingCart, FiStar } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="bg-[#F5F5DC] mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="relative">
              {/* Header Container */}
              <div className="relative mb-24">
                {/* Logo and Brand */}
                {/* Main Header Content */}
                <div className="relative">
                  {/* Animated Fish */}
                  <motion.div 
                    className="absolute -top-8 -left-4 w-16 h-16"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/images/sticker1.png"
                      alt="Happy Fish"
                      width={64}
                      height={64}
                    />
                  </motion.div>

                  {/* Additional Stickers */}
                  <motion.div 
                    className="absolute -top-6 right-4 w-14 h-14"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/images/sticker4.png"
                      alt="Swimming Fish"
                      width={56}
                      height={56}
                    />
                  </motion.div>

                  <motion.div 
                    className="absolute top-12 -left-8 w-12 h-12"
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/images/sticker5.png"
                      alt="Playful Fish"
                      width={48}
                      height={48}
                    />
                  </motion.div>

                  <motion.div 
                    className="absolute top-8 right-0 w-12 h-12"
                    animate={{
                      x: [0, -5, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/images/sticker6.png"
                      alt="Happy Fish"
                      width={48}
                      height={48}
                    />
                  </motion.div>

                  {/* Header Text and Lake */}
                  <div className="relative text-center mb-16">
                    {/* Decorative Lake */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-0"
                      animate={{
                        scale: [1, 1.02, 1],
                        y: [0, -2, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="relative">
                        {/* Water Ripple Effects */}
                        <div className="absolute inset-x-0 top-20 -bottom-32">
                          {/* Lily Pads */}
                          <motion.div
                            className="absolute left-16 top-1/3 w-16 h-16"
                            animate={{
                              rotate: [0, 5, -5, 0],
                              y: [0, -2, 2, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="w-full h-full bg-[#8B4513]/20 rounded-full transform -skew-x-12 scale-y-50">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/10 to-transparent rounded-full"></div>
                            </div>
                          </motion.div>

                          <motion.div
                            className="absolute right-24 top-1/2 w-12 h-12"
                            animate={{
                              rotate: [0, -5, 5, 0],
                              y: [0, 2, -2, 0]
                            }}
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="w-full h-full bg-[#8B4513]/15 rounded-full transform -skew-x-12 scale-y-50">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/10 to-transparent rounded-full"></div>
                            </div>
                          </motion.div>

                          {/* Fish Shadows */}
                          <motion.div
                            className="absolute left-1/3 bottom-8 w-20 h-8 bg-[#8B4513]/10 rounded-full blur-sm"
                            animate={{
                              x: [-50, 50, -50],
                              opacity: [0.1, 0.15, 0.1],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />

                          <motion.div
                            className="absolute right-1/3 bottom-12 w-16 h-6 bg-[#8B4513]/10 rounded-full blur-sm"
                            animate={{
                              x: [30, -30, 30],
                              opacity: [0.1, 0.2, 0.1],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />

                          {/* Enhanced Water Sparkles */}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 3) * 20}%`
                              }}
                              animate={{
                                opacity: [0, 0.6, 0],
                                scale: [0.8, 1.2, 0.8]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                              }}
                            />
                          ))}

                          {/* Existing Ripple Effects */}
                          <motion.div
                            className="absolute inset-0 bg-[#4A90E2]/10 rounded-full transform scale-y-50"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </div>

                        {/* Floating Bubbles */}
                        <motion.div
                          className="absolute left-1/4 bottom-0 w-2 h-2 bg-[#4A90E2]/30 rounded-full"
                          animate={{
                            y: [0, -40, 0],
                            opacity: [0, 1, 0],
                            scale: [1, 1.2, 0.8]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute right-1/3 bottom-4 w-3 h-3 bg-[#4A90E2]/20 rounded-full"
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0, 0.8, 0],
                            scale: [0.8, 1.1, 0.9]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />

                        <div className="text-center space-y-2 relative z-20">
                          <motion.h1
                            className="text-6xl md:text-7xl font-bold mb-4 relative"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.span 
                              className="absolute -top-8 -left-8 w-16 h-16"
                              animate={{
                                rotate: [0, -10, 0],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Image
                                src="/images/sticker1.png"
                                alt="Decorative Fish"
                                width={64}
                                height={64}
                              />
                            </motion.span>
                            <span className="bg-gradient-to-r from-[#8B4513] via-[#FF6B35] to-[#8B4513] text-transparent bg-clip-text drop-shadow-lg relative">
                              MarketCarp
                            </span>
                          </motion.h1>

                          <div className="relative">
                            <motion.div
                              className="text-2xl md:text-3xl font-medium py-2 px-6 rounded-full inline-block mb-2 relative"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full"></div>
                              <span className="relative bg-gradient-to-r from-[#FF6B35] to-[#8B4513] text-transparent bg-clip-text font-semibold">
                                The Ultimate Platform
                              </span>
                            </motion.div>

                            <motion.div
                              className="text-xl md:text-2xl py-1 px-6 rounded-full inline-block mb-12 relative"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                            >
                              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-full"></div>
                              <span className="relative text-[#8B4513] font-medium">
                                for Pokémon Card Enthusiasts
                              </span>
                            </motion.div>
                          </div>

                          <motion.div
                            className="relative max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <div className="absolute inset-0 bg-[#4A90E2]/20 backdrop-blur-sm rounded-xl transform rotate-1"></div>
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl transform -rotate-1"></div>
                            <motion.p
                              className="text-lg text-[#8B4513] relative bg-white/60 backdrop-blur-sm py-4 px-8 rounded-xl leading-relaxed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.8 }}
                            >
                              Your one-stop destination for trading, analyzing, and maximizing your Pokémon card collection. 
                              Join our community of collectors and make informed decisions with real-time market data.
                            </motion.p>
                            
                            {/* Decorative Elements */}
                            <motion.div 
                              className="absolute -right-4 -bottom-4 w-12 h-12"
                              animate={{
                                y: [0, -5, 0],
                                rotate: [0, 10, 0]
                              }}
                              transition={{
                                duration: 3,
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
                              className="absolute -left-4 -top-4 w-12 h-12"
                              animate={{
                                y: [0, 5, 0],
                                rotate: [0, -10, 0]
                              }}
                              transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Image
                                src="/images/sticker4.png"
                                alt="Decorative Fish"
                                width={48}
                                height={48}
                              />
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Enhanced Lake Effect with Animated Ripples */}
                        <div className="absolute inset-0 top-20 -bottom-32">
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-b from-[#4A90E2]/30 to-[#4A90E2]/10 rounded-full transform scale-y-50 blur-lg mix-blend-overlay"
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.3, 0.4, 0.3]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 via-[#4A90E2]/30 to-[#4A90E2]/20 rounded-full transform scale-y-50"
                            animate={{
                              scale: [1, 1.03, 1],
                              opacity: [0.2, 0.3, 0.2]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Ripple Effects */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute left-1/2 top-1/2 w-full h-full rounded-full border border-[#4A90E2]/20"
                              initial={{ scale: 0, opacity: 0.5 }}
                              animate={{
                                scale: [1, 2],
                                opacity: [0.5, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 1.3,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Enhanced Sparkle Effects */}
                    <motion.div 
                      className="absolute top-0 left-1/4 w-4 h-4 z-30"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#FF6B35]/50 transform rotate-45"></div>
                    </motion.div>

                    <motion.div 
                      className="absolute top-8 right-1/3 w-3 h-3 z-30"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, -180]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1.5
                      }}
                    >
                      <div className="w-full h-full bg-[#8B4513] transform rotate-45"></div>
                    </motion.div>

                    {/* Additional Floating Stickers */}
                    <motion.div 
                      className="absolute bottom-0 left-1/4 w-12 h-12 z-30"
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src="/images/sticker3.png"
                        alt="Floating Fish"
                        width={48}
                        height={48}
                      />
                    </motion.div>

                    <motion.div 
                      className="absolute bottom-4 right-1/4 w-10 h-10 z-30"
                      animate={{
                        y: [0, -8, 0],
                        x: [0, -5, 0]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src="/images/sticker7.png"
                        alt="Swimming Fish"
                        width={40}
                        height={40}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="relative z-30 mt-72 ">
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link 
                    href="/shop" 
                    className="bg-[#FF6B35] text-white py-4 px-8 rounded-md text-center no-underline flex items-center justify-center gap-3 hover:bg-[#FF6B35]/90 transition-colors flex-1 shadow-md text-lg font-medium"
                  >
                    <FiShoppingCart className="w-6 h-6" />
                    Browse Our Shop
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="bg-white/90 backdrop-blur-sm border-2 border-[#FF6B35] text-[#FF6B35] py-4 px-8 rounded-md text-center no-underline hover:bg-[#FF6B35]/10 transition-colors flex items-center justify-center gap-3 flex-1 shadow-md text-lg font-medium"
                  >
                    <HiSparkles className="w-6 h-6" />
                    Explore SaaS Platform
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Market Analysis Preview Card */}
            <motion.div 
              className="relative h-[420px] mt-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[#FF6B35]/5 rounded-lg transform rotate-2"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#4A90E2]/5 rounded-lg transform -rotate-2"></div>
              <div className="relative h-full w-full flex items-center justify-center">
                <motion.div 
                  className="w-full p-12 bg-white rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute -top-4 -right-4 w-12 h-12"
                    animate={{
                      rotate: [0, 10, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/images/sticker2.png"
                      alt="Market Analysis Fish"
                      width={48}
                      height={48}
                    />
                  </motion.div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-[#8B4513] mb-12">Live Market Analysis</h3>
                    <div className="grid grid-cols-3 gap-12 w-full mb-12">
                      <div className="bg-[#F5F5DC] p-6 rounded-lg text-center">
                        <p className="text-sm text-[#8B4513]/70 mb-3">PSA 10 Trend</p>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <span className="text-[#FF6B35] text-lg">↗</span>
                          <p className="text-2xl font-bold text-[#FF6B35]">$1,400</p>
                        </div>
                        <p className="text-sm text-green-600">+8.3% MTD</p>
                      </div>
                      <div className="bg-[#F5F5DC] p-6 rounded-lg text-center">
                        <p className="text-sm text-[#8B4513]/70 mb-3">PSA 9 Trend</p>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <span className="text-[#FF6B35] text-lg">↗</span>
                          <p className="text-2xl font-bold text-[#FF6B35]">$900</p>
                        </div>
                        <p className="text-sm text-green-600">+5.9% MTD</p>
                      </div>
                      <div className="bg-[#F5F5DC] p-6 rounded-lg text-center">
                        <p className="text-sm text-[#8B4513]/70 mb-3">BGS 9.5 Trend</p>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <span className="text-[#FF6B35] text-lg">↗</span>
                          <p className="text-2xl font-bold text-[#FF6B35]">$1,200</p>
                        </div>
                        <p className="text-sm text-green-600">+9.1% MTD</p>
                      </div>
                    </div>
                    <Link 
                      href="/market-analysis"
                      className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] text-white py-3 px-8 rounded-md hover:bg-[#FF6B35]/90 transition-colors text-lg"
                    >
                      <FiBarChart2 className="w-5 h-5" />
                      View Full Analysis
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#8B4513] text-center mb-16">
              Everything You Need for Pokémon Card Business
            </h2>
            <motion.div 
              className="absolute -top-10 right-4 w-14 h-14"
              animate={{
                rotate: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/sticker3.png"
                alt="Swimming Fish"
                width={56}
                height={56}
              />
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="bg-[#F5F5DC] p-6 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FiShoppingCart className="w-6 h-6 text-[#FF6B35]" />
                <h3 className="text-xl font-semibold text-[#8B4513]">
                  E-commerce Store
                </h3>
              </div>
              <p className="text-[#8B4513]/70">
                Browse and purchase professionally graded Pokémon cards and rare sealed products 
                with authentication verification.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-[#F5F5DC] p-6 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FiBarChart2 className="w-6 h-6 text-[#FF6B35]" />
                <h3 className="text-xl font-semibold text-[#8B4513]">
                  Market Analysis Tools
                </h3>
              </div>
              <p className="text-[#8B4513]/70">
                Make data-driven decisions with our comprehensive market analysis tools, price 
                tracking, and opportunity finder.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-[#F5F5DC] p-6 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FiBook className="w-6 h-6 text-[#FF6B35]" />
                <h3 className="text-xl font-semibold text-[#8B4513]">
                  News & Content
                </h3>
              </div>
              <p className="text-[#8B4513]/70">
                Stay informed with the latest news, market trends, and expert analysis of the 
                Pokémon TCG collector market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Subscription Tiers */}
      <section className="py-16 bg-[#4A90E2]/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
              Subscription Plans
            </h2>
            <p className="text-[#8B4513]/70 max-w-2xl mx-auto">
              Choose the plan that best fits your Pokémon card business needs.
              From casual collectors to professional dealers, we have you covered.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Tier */}
            <motion.div 
              className="bg-white rounded-lg shadow-sm overflow-hidden relative p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/sticker7.png"
                  alt="Happy Fish"
                  width={48}
                  height={48}
                />
              </motion.div>
              <div className="flex items-center gap-2 mb-4">
                <FiStar className="w-5 h-5 text-[#FF6B35]" />
                <h3 className="text-xl font-semibold text-[#8B4513]">Free</h3>
              </div>
              <p className="text-3xl font-bold text-[#8B4513] mb-6">
                $0<span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Basic market trends</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Limited searches</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>News access</span>
                </li>
              </ul>
              <Link 
                href="/auth/register" 
                className="block w-full text-center py-2 px-4 rounded-md border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
            
            {/* Basic Tier */}
            <motion.div 
              className="bg-white rounded-lg shadow-sm overflow-hidden relative p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/error2.png"
                  alt="Shopping Cart"
                  width={48}
                  height={48}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Basic</h3>
              <p className="text-3xl font-bold text-[#8B4513] mb-6">
                $19.99<span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Enhanced market analysis</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Daily alerts</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>ROI calculator</span>
                </li>
              </ul>
              <Link 
                href="/pricing/basic" 
                className="block w-full text-center py-2 px-4 rounded-md bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-colors"
              >
                Subscribe
              </Link>
            </motion.div>
            
            {/* Pro Tier */}
            <motion.div 
              className="bg-white rounded-lg shadow-sm overflow-hidden relative p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/error1.png"
                  alt="Pro Fish"
                  width={48}
                  height={48}
                />
              </motion.div>
              <div className="absolute -top-1 right-6 bg-[#FF6B35] text-white text-xs font-bold py-1 px-3 rounded">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Pro</h3>
              <p className="text-3xl font-bold text-[#8B4513] mb-6">
                $49.99<span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Advanced opportunity finder</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Real-time scanning</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Unlimited alerts</span>
                </li>
              </ul>
              <Link 
                href="/pricing/pro" 
                className="block w-full text-center py-2 px-4 rounded-md bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-colors"
              >
                Subscribe
              </Link>
            </motion.div>
            
            {/* Enterprise Tier */}
            <motion.div 
              className="bg-white rounded-lg shadow-sm overflow-hidden relative p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/error2.png"
                  alt="Enterprise Fish"
                  width={48}
                  height={48}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-[#8B4513] mb-6">
                $99.99<span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Full API access</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>White-label options</span>
                </li>
                <li className="flex items-center gap-2 text-[#8B4513]/70">
                  <HiSparkles className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Data exports</span>
                </li>
              </ul>
              <Link 
                href="/pricing/enterprise" 
                className="block w-full text-center py-2 px-4 rounded-md bg-[#8B4513] text-white hover:bg-[#8B4513]/90 transition-colors"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#FF6B35]/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute -top-6 -left-6 w-14 h-14"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/sticker1.png"
                alt="Happy Fish"
                width={56}
                height={56}
              />
            </motion.div>
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-[#8B4513] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Take Your Pokémon Card Business to the Next Level?
              </motion.h2>
              <motion.p 
                className="text-[#8B4513]/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Join thousands of collectors and dealers who use MarketCarp to find opportunities,
                track their inventory, and make data-driven decisions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  href="/auth/register" 
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] text-white py-3 px-8 rounded-md hover:bg-[#FF6B35]/90 transition-colors"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  Get Started Free
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}