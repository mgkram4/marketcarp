import { MarketOpportunity, MarketTrend, PopulationData, RecentSale } from '../api/market-analysis/route';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.pokellector.com/v1';

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

async function fetchWithError(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new APIError(response.status, `API Error: ${response.statusText}`);
  }

  return response.json();
}

export interface SearchParams {
  query?: string;
  set?: string;
  grade?: string;
  page?: number;
  limit?: number;
}

export const marketAPI = {
  async getTrends(): Promise<MarketTrend[]> {
    return fetchWithError(`${API_BASE_URL}/market/trends`);
  },

  async getRecentSales(params?: SearchParams): Promise<RecentSale[]> {
    const searchParams = new URLSearchParams();
    if (params?.query) searchParams.append('query', params.query);
    if (params?.set) searchParams.append('set', params.set);
    if (params?.grade) searchParams.append('grade', params.grade);
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    return fetchWithError(`${API_BASE_URL}/market/sales?${searchParams.toString()}`);
  },

  async getOpportunities(params?: SearchParams): Promise<MarketOpportunity[]> {
    const searchParams = new URLSearchParams();
    if (params?.query) searchParams.append('query', params.query);
    if (params?.set) searchParams.append('set', params.set);
    if (params?.grade) searchParams.append('grade', params.grade);
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    return fetchWithError(`${API_BASE_URL}/market/opportunities?${searchParams.toString()}`);
  },

  async getPopulationData(params?: SearchParams): Promise<PopulationData[]> {
    const searchParams = new URLSearchParams();
    if (params?.query) searchParams.append('query', params.query);
    if (params?.set) searchParams.append('set', params.set);
    if (params?.grade) searchParams.append('grade', params.grade);

    return fetchWithError(`${API_BASE_URL}/market/population?${searchParams.toString()}`);
  },
}; 