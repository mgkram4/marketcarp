import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, image, grade, cardType, condition, set, description, stock } = body;

    // Create a price for the product
    const priceData = await stripe.prices.create({
      unit_amount: Math.round(price * 100), // Convert to cents
      currency: 'usd',
      product_data: {
        name,
        images: [image],
        description,
        metadata: {
          grade,
          cardType,
          condition,
          set,
          stock: stock.toString(),
        },
      },
    });

    return NextResponse.json({ 
      success: true, 
      productId: priceData.product,
      priceId: priceData.id 
    });
  } catch (error) {
    console.error('Error adding product to Stripe:', error);
    return NextResponse.json(
      { error: 'Error adding product' },
      { status: 500 }
    );
  }
} 