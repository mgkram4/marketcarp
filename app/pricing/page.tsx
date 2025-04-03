'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheck, FiStar } from 'react-icons/fi';

// Check mark component for feature list
const CheckMark = () => (
  <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
);

// Feature item component
const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2 text-[#8B4513]/70">
    <CheckMark />
    <span>{text}</span>
  </li>
);

// Price tier component
const PriceTier = ({ 
  name, 
  price, 
  features, 
  isPopular, 
  ctaText, 
  ctaLink, 
  stickerSrc,
  delay 
}: { 
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  stickerSrc: string;
  delay: number;
}) => (
  <motion.div 
    className="bg-white rounded-lg shadow-sm overflow-hidden relative p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3, delay }}
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
        src={stickerSrc}
        alt="Happy Fish"
        width={48}
        height={48}
      />
    </motion.div>
    {isPopular && (
      <div className="absolute -top-1 right-6 bg-[#FF6B35] text-white text-xs font-bold py-1 px-3 rounded">
        POPULAR
      </div>
    )}
    <div className="flex items-center gap-2 mb-4">
      <FiStar className="w-5 h-5 text-[#FF6B35]" />
      <h3 className="text-xl font-semibold text-[#8B4513]">{name}</h3>
    </div>
    <p className="text-3xl font-bold text-[#8B4513] mb-6">
      {price}<span className="text-sm font-normal">/month</span>
    </p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </ul>
    <Link 
      href={ctaLink}
      className="block w-full text-center py-2 px-4 rounded-md bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-colors"
    >
      {ctaText}
    </Link>
  </motion.div>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] relative overflow-hidden">
      {/* Decorative Lake Background */}
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

            {/* Water Sparkles */}
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
          </div>

          {/* Enhanced Lake Effect */}
          <div className="absolute inset-0 top-20 -bottom-32 bg-gradient-to-b from-[#4A90E2]/30 to-[#4A90E2]/10 rounded-full transform scale-y-50 blur-lg mix-blend-overlay"></div>
        </div>
      </motion.div>

      {/* Animated Fish Stickers */}
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

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-[#8B4513] mb-4">
            Choose Your Plan
          </h1>
          <p className="text-[#8B4513]/70 max-w-2xl mx-auto">
            Select the perfect plan for your Pokémon card business needs.
            From casual collectors to professional dealers, we have you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PriceTier
            name="Free"
            price="$0"
            features={[
              "Basic market trends",
              "Limited searches",
              "News access",
              "Community forum",
              "Basic card database"
            ]}
            ctaText="Get Started"
            ctaLink="/auth/register"
            stickerSrc="/images/sticker7.png"
            delay={0}
          />

          <PriceTier
            name="Basic"
            price="$19.99"
            features={[
              "Enhanced market analysis",
              "Daily alerts",
              "ROI calculator",
              "Advanced search filters",
              "Price history tracking"
            ]}
            ctaText="Subscribe"
            ctaLink="/pricing/basic"
            stickerSrc="/images/error2.png"
            delay={0.1}
          />

          <PriceTier
            name="Pro"
            price="$49.99"
            isPopular
            features={[
              "Advanced opportunity finder",
              "Real-time scanning",
              "Unlimited alerts",
              "Market predictions",
              "API access"
            ]}
            ctaText="Subscribe"
            ctaLink="/pricing/pro"
            stickerSrc="/images/error1.png"
            delay={0.2}
          />

          <PriceTier
            name="Enterprise"
            price="$99.99"
            features={[
              "Full API access",
              "White-label options",
              "Data exports",
              "Custom integrations",
              "Priority support"
            ]}
            ctaText="Contact Sales"
            ctaLink="/pricing/enterprise"
            stickerSrc="/images/error2.png"
            delay={0.3}
          />
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#8B4513]/70">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="mt-2 text-[#8B4513]/70">
            Need help choosing?{' '}
            <Link href="/contact" className="font-medium text-[#FF6B35] hover:text-[#FF6B35]/80">
              Contact our sales team
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
} 