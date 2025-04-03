'use client';

import { useCart } from '@/app/context/CartContext';
import { OrderDetails } from '@/app/types';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const { clearCart } = useCart();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!sessionId) return;

      try {
        const response = await fetch(`/api/order/${sessionId}`);
        const data = await response.json();
        setOrderDetails(data);
        clearCart(); // Clear the cart after successful order
      } catch (error) {
        console.error('Error fetching order details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [sessionId, clearCart]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-[#8B4513] mb-4">Something Went Wrong</h1>
            <p className="text-[#8B4513]/70">We couldn&apos;t find your order details. Please contact support if this persists.</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#8B4513] mb-2">Thank You for Your Order!</h1>
            <p className="text-[#8B4513]/70">
              We&apos;ll send you an email with your order details shortly.
            </p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold text-[#8B4513] mb-4">Order Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-[#8B4513] mb-2">Order Information</h3>
                <div className="space-y-2 text-[#8B4513]/70">
                  <p>Order ID: {orderDetails.id}</p>
                  <p>Date: {orderDetails.createdAt}</p>
                  <p>Status: {orderDetails.status}</p>
                  <p className="font-semibold">Total: ${orderDetails.total.toFixed(2)}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-[#8B4513] mb-2">Shipping Information</h3>
                <div className="space-y-2 text-[#8B4513]/70">
                  <p>{orderDetails.shipping.address.line1}</p>
                  {orderDetails.shipping.address.line2 && (
                    <p>{orderDetails.shipping.address.line2}</p>
                  )}
                  <p>
                    {orderDetails.shipping.address.city}, {orderDetails.shipping.address.state} {orderDetails.shipping.address.postal_code}
                  </p>
                  <p>{orderDetails.shipping.address.country}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-[#8B4513] mb-4">Order Items</h3>
              <div className="space-y-4">
                {orderDetails.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 py-4 border-b last:border-b-0"
                  >
                    <div className="relative w-20 h-20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#8B4513]">{item.name}</h4>
                      <p className="text-[#8B4513]/70">Quantity: {item.quantity}</p>
                      <p className="text-[#8B4513]/70">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#8B4513]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 