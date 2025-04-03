'use client';

import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/dashboard'); // Redirect to dashboard on success
        router.refresh();
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-16 h-16"
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
          alt="Decorative Fish"
          width={64}
          height={64}
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 right-10 w-14 h-14"
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
          alt="Decorative Fish"
          width={56}
          height={56}
        />
      </motion.div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#8B4513]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#8B4513]/70">
            Or{' '}
            <Link href="/auth/register" className="font-medium text-[#FF6B35] hover:text-[#FF6B35]/80">
              create a new account
            </Link>
          </p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border border-[#FF6B35]/20 bg-white/90 py-2 px-3 text-[#8B4513] placeholder-[#8B4513]/50 focus:border-[#FF6B35] focus:outline-none focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#FF6B35]/20 text-[#FF6B35] focus:ring-[#FF6B35]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#8B4513]">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/auth/forgot-password" className="font-medium text-[#FF6B35] hover:text-[#FF6B35]/80">
                  Forgot your password?
                </Link>
              </div>
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
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 