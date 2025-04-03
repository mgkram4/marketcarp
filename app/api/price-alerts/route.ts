import { NextResponse } from 'next/server';

interface PriceAlert {
  id: string;
  cardName: string;
  price: number;
  isEnabled: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Mock database for price alerts
let priceAlerts: PriceAlert[] = [];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const userAlerts = priceAlerts.filter(alert => alert.userId === userId);
  return NextResponse.json(userAlerts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, cardName, price } = body;

  if (!userId || !cardName || price === undefined) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const newAlert: PriceAlert = {
    id: Math.random().toString(36).substr(2, 9),
    cardName,
    price,
    isEnabled: true,
    userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  priceAlerts.push(newAlert);
  return NextResponse.json(newAlert, { status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, userId, ...updates } = body;

  if (!id || !userId) {
    return NextResponse.json({ error: 'ID and User ID are required' }, { status: 400 });
  }

  const alertIndex = priceAlerts.findIndex(alert => alert.id === id && alert.userId === userId);
  if (alertIndex === -1) {
    return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
  }

  priceAlerts[alertIndex] = {
    ...priceAlerts[alertIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(priceAlerts[alertIndex]);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const userId = searchParams.get('userId');

  if (!id || !userId) {
    return NextResponse.json({ error: 'ID and User ID are required' }, { status: 400 });
  }

  const alertIndex = priceAlerts.findIndex(alert => alert.id === id && alert.userId === userId);
  if (alertIndex === -1) {
    return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
  }

  priceAlerts = priceAlerts.filter(alert => alert.id !== id);
  return NextResponse.json({ success: true });
} 