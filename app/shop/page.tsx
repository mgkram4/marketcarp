'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface FilterOptions {
  cardTypes: string[];
  conditions: string[];
  sets: string[];
}

interface FilterState {
  priceRange: string;
  cardType: string;
  condition: string;
  set: string;
  sortBy: string;
  searchQuery: string;
}

const initialFilterState: FilterState = {
  priceRange: '',
  cardType: '',
  condition: '',
  set: '',
  sortBy: '',
  searchQuery: '',
};

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 - $100', value: '50-100' },
  { label: '$100 - $200', value: '100-200' },
  { label: '$200 - $500', value: '200-500' },
  { label: 'Over $500', value: '500-10000' },
];

const sortOptions = [
  { label: 'Default', value: '' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name: A to Z', value: 'name-asc' },
  { label: 'Name: Z to A', value: 'name-desc' },
];

function FilterPanel({
  filters,
  filterOptions,
  onChange,
}: {
  filters: FilterState;
  filterOptions: FilterOptions;
  onChange: (filters: FilterState) => void;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#8B4513] mb-2">
          Search
        </label>
        <input
          type="text"
          value={filters.searchQuery}
          onChange={(e) =>
            onChange({ ...filters, searchQuery: e.target.value })
          }
          placeholder="Search cards..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#8B4513] mb-2">
          Price Range
        </label>
        <select
          value={filters.priceRange}
          onChange={(e) =>
            onChange({ ...filters, priceRange: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#8B4513] mb-2">
          Card Type
        </label>
        <select
          value={filters.cardType}
          onChange={(e) =>
            onChange({ ...filters, cardType: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
        >
          <option value="">All Types</option>
          {filterOptions.cardTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#8B4513] mb-2">
          Condition
        </label>
        <select
          value={filters.condition}
          onChange={(e) =>
            onChange({ ...filters, condition: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
        >
          <option value="">All Conditions</option>
          {filterOptions.conditions.map((condition) => (
            <option key={condition} value={condition}>
              {condition}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#8B4513] mb-2">
          Set
        </label>
        <select
          value={filters.set}
          onChange={(e) => onChange({ ...filters, set: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
        >
          <option value="">All Sets</option>
          {filterOptions.sets.map((set) => (
            <option key={set} value={set}>
              {set}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#8B4513] mb-2">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#8B4513] mb-1">
          {product.name}
        </h3>
        <p className="text-[#8B4513]/70 text-sm mb-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#FF6B35] font-bold">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-[#8B4513]/70 text-sm">
            {product.condition}
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#FF6B35] text-white py-2 px-4 rounded-md hover:bg-[#FF6B35]/90 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    cardTypes: [],
    conditions: [],
    sets: [],
  });
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [loading, setLoading] = useState(true);
  const { items } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) queryParams.append(key, value);
        });

        const response = await fetch(`/api/products?${queryParams}`);
        const data = await response.json();
        setProducts(data.products);
        setFilterOptions(data.filterOptions);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#F5F5DC] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-3xl font-bold text-[#8B4513]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Shop
          </motion.h1>
          <Link 
            href="/cart"
            className="relative bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <FiShoppingCart className="w-6 h-6 text-[#8B4513]" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <FilterPanel
              filters={filters}
              filterOptions={filterOptions}
              onChange={setFilters}
            />
          </div>

          <div className="md:col-span-3">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35]"></div>
              </div>
            ) : (
              <AnimatePresence>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 