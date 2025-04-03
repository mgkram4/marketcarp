import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cardType = searchParams.get('cardType');
    const condition = searchParams.get('condition');
    const set = searchParams.get('set');
    const priceRange = searchParams.get('priceRange');
    const sortBy = searchParams.get('sortBy');
    const searchQuery = searchParams.get('searchQuery');

    // Fetch all products with their prices
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price'],
    });

    let filteredProducts = products.data.map(product => {
      const price = (product.default_price as Stripe.Price)?.unit_amount || 0;
      return {
        id: product.id,
        name: product.name,
        description: product.description || '',
        image: product.images[0] || '',
        price: price / 100, // Convert cents to dollars
        cardType: product.metadata.cardType || '',
        condition: product.metadata.condition || '',
        set: product.metadata.set || '',
      };
    });

    // Apply filters
    if (cardType) {
      filteredProducts = filteredProducts.filter(
        product => product.cardType === cardType
      );
    }

    if (condition) {
      filteredProducts = filteredProducts.filter(
        product => product.condition === condition
      );
    }

    if (set) {
      filteredProducts = filteredProducts.filter(
        product => product.set === set
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(
        product => product.price >= min && product.price <= max
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }
    }

    // Get unique values for filter options
    const filterOptions = {
      cardTypes: Array.from(new Set(products.data.map(p => p.metadata.cardType || ''))),
      conditions: Array.from(new Set(products.data.map(p => p.metadata.condition || ''))),
      sets: Array.from(new Set(products.data.map(p => p.metadata.set || ''))),
    };

    return NextResponse.json({
      products: filteredProducts,
      filterOptions,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    );
  }
} 