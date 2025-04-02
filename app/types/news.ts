export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

export interface NewsResponse {
  items: NewsItem[];
  total: number;
  page: number;
  totalPages: number;
  limit: number;
} 