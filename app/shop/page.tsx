'use client';

import Image from 'next/image';
import Link from 'next/link';

// Placeholder product data - in a real app this would come from a database
const products = [
  {
    id: 1,
    name: 'Charizard',
    cardSet: 'Base Set',
    cardNumber: '4/102',
    grader: 'PSA',
    grade: '9',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1611931960487-4932667079f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pokemonName: 'Charizard',
    category: 'GRADED_CARD',
  },
  {
    id: 2,
    name: 'Blastoise',
    cardSet: 'Base Set',
    cardNumber: '2/102',
    grader: 'BGS',
    grade: '8.5',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1647893977174-d1a0d4bd93e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pokemonName: 'Blastoise',
    category: 'GRADED_CARD',
  },
  {
    id: 3,
    name: 'Venusaur',
    cardSet: 'Base Set',
    cardNumber: '15/102',
    grader: 'CGC',
    grade: '8',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1647893977169-40183c5f064e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pokemonName: 'Venusaur',
    category: 'GRADED_CARD',
  },

];

export default function Shop() {
  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-6">
            Shop Pokémon Cards
          </h1>
          <p className="text-[#8B4513]/80 max-w-3xl">
            Browse our collection of professionally graded Pokémon cards and rare sealed products.
            Each item has been authenticated and verified to ensure you receive exactly what you're
            looking for.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-auto">
              <label htmlFor="category" className="block text-sm font-medium text-[#8B4513] mb-1">
                Category
              </label>
              <select
                id="category"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B35] focus:ring-[#FF6B35] sm:text-sm"
              >
                <option value="">All Categories</option>
                <option value="GRADED_CARD">Graded Cards</option>
                <option value="RAW_CARD">Raw Cards</option>
                <option value="SEALED_BOOSTER">Sealed Boosters</option>
                <option value="SEALED_BOX">Sealed Boxes</option>
                <option value="SEALED_COLLECTION">Collections</option>
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="grader" className="block text-sm font-medium text-[#8B4513] mb-1">
                Grading Company
              </label>
              <select
                id="grader"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B35] focus:ring-[#FF6B35] sm:text-sm"
              >
                <option value="">All Graders</option>
                <option value="PSA">PSA</option>
                <option value="BGS">BGS</option>
                <option value="CGC">CGC</option>
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="set" className="block text-sm font-medium text-[#8B4513] mb-1">
                Card Set
              </label>
              <select
                id="set"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B35] focus:ring-[#FF6B35] sm:text-sm"
              >
                <option value="">All Sets</option>
                <option value="Base Set">Base Set</option>
                <option value="Jungle">Jungle</option>
                <option value="Fossil">Fossil</option>
                <option value="Team Rocket">Team Rocket</option>
                <option value="Neo Genesis">Neo Genesis</option>
                <option value="Celebrations">Celebrations</option>
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="sort" className="block text-sm font-medium text-[#8B4513] mb-1">
                Sort By
              </label>
              <select
                id="sort"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6B35] focus:ring-[#FF6B35] sm:text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-60 w-full overflow-hidden bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.category === 'GRADED_CARD' && (
                  <div className="absolute top-2 right-2 bg-[#FF6B35] text-white text-xs font-bold px-2 py-1 rounded">
                    {product.grader} {product.grade}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-[#8B4513] font-semibold text-lg truncate">
                  {product.name}
                </h3>
                <p className="text-[#8B4513]/70 text-sm">
                  {product.cardSet}
                  {product.cardNumber && ` • ${product.cardNumber}`}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#8B4513] font-bold">
                    ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <Link
                    href={`/shop/product/${product.id}`}
                    className="text-sm bg-[#4A90E2] text-white font-medium px-3 py-1 rounded-md hover:bg-[#4A90E2]/80 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
                <button className="w-full mt-3 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF6B35]/90 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 