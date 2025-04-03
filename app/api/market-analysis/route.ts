import { NextResponse } from 'next/server';

// Types
export interface MarketTrend {
  date: string;
  psa10: number;
  psa9: number;
  bgsBk95: number;
}

export interface RecentSale {
  id: number;
  name: string;
  cardSet: string;
  cardNumber: string;
  grader: string;
  grade: string;
  price: number;
  image: string;
  pokemonName: string;
  category: string;
  date: string;
  platform: string;
}

export interface MarketOpportunity {
  id: number;
  name: string;
  set: string;
  grade: string;
  currentPrice: number;
  avgPrice: number;
  priceDiff: number;
  diffPercent: number;
  link: string;
}

export interface PopulationData {
  id: number;
  name: string;
  cardNumber: string;
  cardSet: string;
  grades: {
    [key: string]: number;
  };
  totalGraded: number;
}

// GET /api/market-analysis/trends
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');

  switch (endpoint) {
    case 'trends':
      return getTrends();
    case 'recent-sales':
      return getRecentSales();
    case 'opportunities':
      return getOpportunities();
    case 'population':
      return getPopulationData();
    default:
      return NextResponse.json({ error: 'Invalid endpoint' }, { status: 400 });
  }
}

async function getTrends() {
  // TODO: Replace with actual API call to price data provider
  const mockTrendData: MarketTrend[] = [
    { date: 'Jan', psa10: 1250, psa9: 840, bgsBk95: 1300 },
    { date: 'Feb', psa10: 1300, psa9: 860, bgsBk95: 1350 },
    { date: 'Mar', psa10: 1280, psa9: 850, bgsBk95: 1320 },
    { date: 'Apr', psa10: 1350, psa9: 900, bgsBk95: 1400 },
    { date: 'May', psa10: 1400, psa9: 920, bgsBk95: 1450 },
    { date: 'Jun', psa10: 1380, psa9: 910, bgsBk95: 1430 },
    { date: 'Jul', psa10: 1420, psa9: 950, bgsBk95: 1480 },
    { date: 'Aug', psa10: 1500, psa9: 980, bgsBk95: 1550 },
    { date: 'Sep', psa10: 1550, psa9: 1000, bgsBk95: 1600 },
    { date: 'Oct', psa10: 1600, psa9: 1050, bgsBk95: 1650 },
    { date: 'Nov', psa10: 1650, psa9: 1100, bgsBk95: 1700 },
    { date: 'Dec', psa10: 1700, psa9: 1150, bgsBk95: 1750 },
  ];

  return NextResponse.json({ data: mockTrendData });
}

async function getRecentSales() {
  // TODO: Replace with actual API call to sales data provider (eBay, TCGPlayer, etc.)
  const mockSalesData: RecentSale[] = [
    {
      id: 1,
      name: 'Charizard',
      cardSet: 'Base Set',
      cardNumber: '4/102',
      grader: 'PSA',
      grade: '9',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1611931960487-4932667079f1',
      pokemonName: 'Charizard',
      category: 'GRADED_CARD',
      date: '2024-03-15',
      platform: 'eBay'
    },
    {
      id: 2,
      name: 'Blastoise',
      cardSet: 'Base Set',
      cardNumber: '2/102',
      grader: 'BGS',
      grade: '8.5',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1647893977174-d1a0d4bd93e4',
      pokemonName: 'Blastoise',
      category: 'GRADED_CARD',
      date: '2024-03-14',
      platform: 'TCGPlayer'
    },
    {
      id: 3,
      name: 'Venusaur',
      cardSet: 'Base Set',
      cardNumber: '15/102',
      grader: 'CGC',
      grade: '8',
      price: 699.99,
      image: 'https://images.unsplash.com/photo-1647893977169-40183c5f064e',
      pokemonName: 'Venusaur',
      category: 'GRADED_CARD',
      date: '2024-03-13',
      platform: 'eBay'
    }
  ];

  return NextResponse.json({ data: mockSalesData });
}

async function getOpportunities() {
  // TODO: Replace with actual API call to market analysis provider
  const mockOpportunities: MarketOpportunity[] = [
    {
      id: 1,
      name: 'Charizard',
      set: 'Base Set',
      grade: 'PSA 8',
      currentPrice: 750,
      avgPrice: 950,
      priceDiff: 200,
      diffPercent: 21,
      link: 'https://ebay.com'
    },
    {
      id: 2,
      name: 'Mewtwo',
      set: 'Base Set',
      grade: 'CGC 9',
      currentPrice: 325,
      avgPrice: 400,
      priceDiff: 75,
      diffPercent: 19,
      link: 'https://tcgplayer.com'
    },
    {
      id: 3,
      name: 'Lugia',
      set: 'Neo Genesis',
      grade: 'BGS 8',
      currentPrice: 780,
      avgPrice: 1000,
      priceDiff: 220,
      diffPercent: 22,
      link: 'https://ebay.com'
    }
  ];

  return NextResponse.json({ data: mockOpportunities });
}

async function getPopulationData() {
  // TODO: Replace with actual API call to grading companies (PSA, BGS, CGC)
  const mockPopulationData: PopulationData[] = [
    {
      id: 1,
      name: 'Charizard',
      cardNumber: '4/102',
      cardSet: 'Base Set',
      grades: {
        'PSA 10': 121,
        'PSA 9': 1542,
        'PSA 8': 3782,
        'PSA 7': 2567
      },
      totalGraded: 9876
    },
    {
      id: 2,
      name: 'Blastoise',
      cardNumber: '2/102',
      cardSet: 'Base Set',
      grades: {
        'PSA 10': 97,
        'PSA 9': 1221,
        'PSA 8': 2983,
        'PSA 7': 1892
      },
      totalGraded: 7432
    },
    {
      id: 3,
      name: 'Venusaur',
      cardNumber: '15/102',
      cardSet: 'Base Set',
      grades: {
        'PSA 10': 103,
        'PSA 9': 1098,
        'PSA 8': 2652,
        'PSA 7': 1763
      },
      totalGraded: 6891
    }
  ];

  return NextResponse.json({ data: mockPopulationData });
} 