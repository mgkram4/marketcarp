import { NewsItem } from '@/app/types/news';
import { PokemonCard, PokemonTCGResponse } from '@/app/types/pokemon-tcg';
import { NextResponse } from 'next/server';

const POKEMON_TCG_API_KEY = process.env.POKEMON_TCG_API_KEY;
const POKEMON_TCG_API_URL = 'https://api.pokemontcg.io/v2';

async function fetchPokemonNews(): Promise<NewsItem[]> {
  try {
    // Check if API key is available
    if (!POKEMON_TCG_API_KEY) {
      console.warn('Pokemon TCG API key is not set, falling back to static news');
      return getFallbackNews();
    }

    // Fetch latest cards to create news items
    const response = await fetch(`${POKEMON_TCG_API_URL}/cards?q=supertype:pokemon&orderBy=-dateAdded&pageSize=10`, {
      headers: {
        'X-Api-Key': POKEMON_TCG_API_KEY,
      },
      // Add timeout to prevent hanging requests
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`Pokemon TCG API response error: ${response.status} ${response.statusText}`);
      return getFallbackNews();
    }

    const data: PokemonTCGResponse = await response.json();
    
    // Check if we have valid data
    if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
      console.warn('Pokemon TCG API returned empty or invalid data');
      return getFallbackNews();
    }
    
    // Transform card data into news items
    return data.data.map((card: PokemonCard, index: number) => ({
      id: index + 1,
      title: `New ${card.name} Card Released!`,
      excerpt: `A new ${card.name} card has been added to the Pokemon Trading Card Game. This ${card.rarity || 'special'} card is part of the ${card.set.name} set.`,
      content: `The Pokemon Trading Card Game has released a new ${card.name} card! This ${card.rarity || 'special'} card is part of the ${card.set.name} set. The card features ${card.images?.small ? 'a beautiful illustration' : 'unique artwork'} and is sure to be a valuable addition to any collection.`,
      date: new Date(card.set.releaseDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      category: "New Releases",
      image: card.images?.small || '/images/news/placeholder.jpg',
      author: "Pokemon TCG Team",
      readTime: "2 min read"
    }));
  } catch (error) {
    console.error('Error fetching Pokemon news:', error);
    return getFallbackNews();
  }
}

// Separate function for fallback news to avoid duplication
function getFallbackNews(): NewsItem[] {
  return [
    {
      id: 1,
      title: "Pokemon Card Market Shows Strong Growth in Q1 2024",
      excerpt: "Recent market analysis reveals significant growth in the Pokemon card market, with particular strength in vintage cards and sealed products.",
      content: "The Pokemon card market has experienced remarkable growth in the first quarter of 2024, with vintage cards and sealed products leading the charge. Market analysts attribute this growth to increased collector interest and the continued popularity of Pokemon as a franchise.",
      date: "April 2, 2024",
      category: "Market Analysis",
      image: "/images/news/market-growth.jpg",
      author: "John Smith",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "New PSA Grading Standards Announced",
      excerpt: "Professional Sports Authenticator (PSA) has announced new grading standards for Pokemon cards, affecting the market valuation of certain cards.",
      content: "PSA has unveiled new grading standards that will impact how Pokemon cards are evaluated. The changes focus on surface quality assessment and centering criteria, which may affect the grading of many popular cards.",
      date: "April 1, 2024",
      category: "Grading",
      image: "/images/news/psa-standards.jpg",
      author: "Sarah Johnson",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Upcoming Pokemon TCG Expansion Revealed",
      excerpt: "The Pokemon Company has announced details for the next major TCG expansion, featuring new mechanics and card types.",
      content: "The Pokemon Company International has revealed the next exciting expansion for the Pokemon Trading Card Game. The set will introduce innovative gameplay mechanics and stunning new artwork from renowned Pokemon illustrators.",
      date: "March 29, 2024",
      category: "New Releases",
      image: "/images/news/new-expansion.jpg",
      author: "Pokemon TCG Team",
      readTime: "3 min read"
    }
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  try {
    const newsItems = await fetchPokemonNews();

    // Filter by category if provided
    const filteredItems = category
      ? newsItems.filter(item => item.category.toLowerCase() === category.toLowerCase())
      : newsItems;

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    return NextResponse.json({
      items: paginatedItems,
      total: filteredItems.length,
      page,
      totalPages: Math.ceil(filteredItems.length / limit),
      limit
    });
  } catch (error) {
    console.error('Error processing news request:', error);
    return NextResponse.json(
      { error: "Failed to retrieve news items", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: Omit<NewsItem, 'id'> = await request.json();
    
    // Basic validation
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Title and content are required fields" },
        { status: 400 }
      );
    }
    
    // Here you would typically validate the data and save it to a database
    // For now, we'll just return a success response with a mock ID
    return NextResponse.json({
      message: "News item created successfully",
      id: Date.now(), // Mock ID generation
      status: 201
    }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating news item:', error);
    return NextResponse.json(
      { error: "Failed to create news item", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}