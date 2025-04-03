import { CartItem, OrderDetails } from '@/app/types';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

type StripeSessionWithShipping = Stripe.Checkout.Session & {
  shipping_details?: {
    address?: {
      line1?: string;
      line2?: string;
      city?: string;
      state?: string;
      postal_code?: string;
      country?: string;
    };
  };
};

export async function GET(
  request: Request,
  { params }: { params: { sessionId: string } }
) {
  try {
    const session = await stripe.checkout.sessions.retrieve(params.sessionId, {
      expand: ['shipping_details'],
    }) as StripeSessionWithShipping;

    const items = JSON.parse(session.metadata?.items || '[]') as CartItem[];

    const orderDetails: OrderDetails = {
      id: session.id,
      total: session.amount_total ? session.amount_total / 100 : 0,
      items,
      customer: {
        name: session.customer_details?.name || '',
        email: session.customer_details?.email || '',
      },
      shipping: {
        address: {
          line1: session.shipping_details?.address?.line1 || '',
          line2: session.shipping_details?.address?.line2 || '',
          city: session.shipping_details?.address?.city || '',
          state: session.shipping_details?.address?.state || '',
          postal_code: session.shipping_details?.address?.postal_code || '',
          country: session.shipping_details?.address?.country || '',
        },
      },
      status: session.payment_status,
      createdAt: new Date(session.created * 1000).toLocaleDateString(),
    };

    return NextResponse.json(orderDetails);
  } catch (error) {
    console.error('Error fetching order details:', error);
    return NextResponse.json(
      { error: 'Error fetching order details' },
      { status: 500 }
    );
  }
} 