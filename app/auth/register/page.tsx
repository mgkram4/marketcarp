'use client';

import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      // Here you would typically make an API call to register the user
      // For now, we'll simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // After successful registration, sign in the user
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Registration successful but login failed. Please try logging in.');
      } else {
        router.push('/dashboard');
        router.refresh();
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
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

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#8B4513]">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#8B4513]/70">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-[#FF6B35] hover:text-[#FF6B35]/80">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div
          className="bg-white/90 backdrop-blur-sm py-8 px-4 shadow-lg sm:rounded-lg sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#8B4513]">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border border-[#FF6B35]/20 bg-white/90 py-2 px-3 text-[#8B4513] placeholder-[#8B4513]/50 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#8B4513]">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border border-[#FF6B35]/20 bg-white/90 py-2 px-3 text-[#8B4513] placeholder-[#8B4513]/50 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#8B4513]">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border border-[#FF6B35]/20 bg-white/90 py-2 px-3 text-[#8B4513] placeholder-[#8B4513]/50 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#8B4513]">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border border-[#FF6B35]/20 bg-white/90 py-2 px-3 text-[#8B4513] placeholder-[#8B4513]/50 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-[#FF6B35]/20 text-[#FF6B35] focus:ring-[#FF6B35]"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-[#8B4513]">
                I agree to the{' '}
                <Link href="/terms" className="font-medium text-[#FF6B35] hover:text-[#FF6B35]/80">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="font-medium text-[#FF6B35] hover:text-[#FF6B35]/80">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {error && (
              <motion.div
                className="text-red-500 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-[#FF6B35] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#FF6B35]/90 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 