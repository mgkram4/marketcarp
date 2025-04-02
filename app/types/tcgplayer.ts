export interface TCGPlayerToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  userName: string;
  '.issued': string;
  '.expires': string;
}

export interface TCGPlayerCategory {
  CategoryId: number;
  Name: string;
}

export interface TCGPlayerResponse<T> {
  Success: boolean;
  Errors: string[];
  Results: T[];
}

export interface TCGPlayerProduct {
  productId: number;
  name: string;
  cleanName: string;
  imageUrl: string;
  categoryId: number;
  groupId: number;
  url: string;
  modifiedOn: string;
  imageCount: number;
  presaleInfo: {
    isPresale: boolean;
    releasedOn: string;
    note: string;
  };
  extendedData: {
    description: string;
    condition: string;
    isFirstEdition: boolean;
    isLimited: boolean;
    isPromo: boolean;
    isReprint: boolean;
    rarity: string;
    number: string;
    set: string;
    setName: string;
  };
  marketPrices: {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    suggestedPrice: number;
  };
} 