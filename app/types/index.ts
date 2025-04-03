export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  cardType: string;
  condition: string;
  set: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  id: string;
  total: number;
  items: CartItem[];
  customer: {
    name: string;
    email: string;
  };
  shipping: {
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
  };
  status: string;
  createdAt: string;
}

export interface FilterState {
  priceRange: string;
  cardType: string;
  condition: string;
  set: string;
  sortBy: string;
  searchQuery: string;
} 