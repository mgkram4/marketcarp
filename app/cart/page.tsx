'use client';

import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (error) {
          console.error('Error:', error);
          alert('Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-[#8B4513] mb-4">Your Cart is Empty</h1>
            <p className="text-[#8B4513]/70 mb-8">Add some products to your cart to see them here.</p>
            <Link
              href="/shop"
              className="inline-block bg-[#FF6B35] text-white py-2 px-6 rounded-md hover:bg-[#FF6B35]/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-[#8B4513] mb-8"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 py-4 border-b last:border-b-0"
                >
                  <div className="relative w-24 h-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#8B4513]">{item.name}</h3>
                    <p className="text-[#8B4513]/70">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-[#8B4513]/70">Quantity:</label>
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#8B4513]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-[#8B4513] mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-[#8B4513]/70">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#8B4513]/70">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-[#8B4513]">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#FF6B35] text-white py-3 rounded-md hover:bg-[#FF6B35]/90 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 