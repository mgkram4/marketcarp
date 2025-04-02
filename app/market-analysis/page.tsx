'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for market trends chart
const mockTrendData = [
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

// Chart component (simplified for demo)
const TrendChart = () => {
  const maxValue = Math.max(...mockTrendData.map(d => Math.max(d.psa10, d.psa9, d.bgsBk95)));
  const height = 300;
  
  return (
    <div className="relative h-[300px] w-full mt-6">
      <div className="absolute inset-0 flex items-end">
        {mockTrendData.map((data, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full relative">
            <div className="absolute bottom-0 w-full flex items-end justify-center space-x-1">
              <div 
                className="w-2 bg-[#FF6B35] rounded-t" 
                style={{ height: `${(data.psa10 / maxValue) * height}px` }}
                title={`PSA 10: $${data.psa10}`}
              ></div>
              <div 
                className="w-2 bg-[#4A90E2] rounded-t" 
                style={{ height: `${(data.psa9 / maxValue) * height}px` }}
                title={`PSA 9: $${data.psa9}`}
              ></div>
              <div 
                className="w-2 bg-[#8B4513] rounded-t" 
                style={{ height: `${(data.bgsBk95 / maxValue) * height}px` }}
                title={`BGS Black 9.5: $${data.bgsBk95}`}
              ></div>
            </div>
            <div className="absolute -bottom-6 text-xs text-[#8B4513]/70">
              {data.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Recent sales data
const recentSales = [
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

// Market opportunities data
const opportunities = [
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

export default function MarketAnalysis() {
  const [activeTab, setActiveTab] = useState('market-trends');
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#8B4513] mb-4">Market Analysis</h1>
          <p className="text-[#8B4513]/80 max-w-3xl">
            Detailed insights and analysis for Pokémon card market trends and opportunities.
          </p>
        </div>
        
        {/* Search and filter */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search cards, sets, or Pokémon..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
                <option value="">All Sets</option>
                <option value="Base Set">Base Set</option>
                <option value="Jungle">Jungle</option>
                <option value="Fossil">Fossil</option>
                <option value="Team Rocket">Team Rocket</option>
                <option value="Neo Genesis">Neo Genesis</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
                <option value="">All Grades</option>
                <option value="PSA 10">PSA 10</option>
                <option value="PSA 9">PSA 9</option>
                <option value="PSA 8">PSA 8</option>
                <option value="BGS 9.5">BGS 9.5</option>
                <option value="CGC 9">CGC 9</option>
              </select>
              <button className="bg-[#FF6B35] text-white px-4 py-2 rounded-md hover:bg-[#FF6B35]/90">
                Search
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-300">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab('market-trends')}
              className={`py-3 px-1 font-medium border-b-2 ${
                activeTab === 'market-trends' ? 'border-[#FF6B35] text-[#8B4513]' : 'border-transparent text-[#8B4513]/70'
              }`}
            >
              Market Trends
            </button>
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`py-3 px-1 font-medium border-b-2 ${
                activeTab === 'opportunities' ? 'border-[#FF6B35] text-[#8B4513]' : 'border-transparent text-[#8B4513]/70'
              }`}
            >
              Opportunities
            </button>
            <button
              onClick={() => setActiveTab('recent-sales')}
              className={`py-3 px-1 font-medium border-b-2 ${
                activeTab === 'recent-sales' ? 'border-[#FF6B35] text-[#8B4513]' : 'border-transparent text-[#8B4513]/70'
              }`}
            >
              Recent Sales
            </button>
            <button
              onClick={() => setActiveTab('population-report')}
              className={`py-3 px-1 font-medium border-b-2 ${
                activeTab === 'population-report' ? 'border-[#FF6B35] text-[#8B4513]' : 'border-transparent text-[#8B4513]/70'
              }`}
            >
              Population Report
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'market-trends' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#8B4513]">Base Set Charizard Price Trends</h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FF6B35] rounded-full mr-1"></div>
                  <span className="text-sm text-[#8B4513]">PSA 10</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#4A90E2] rounded-full mr-1"></div>
                  <span className="text-sm text-[#8B4513]">PSA 9</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#8B4513] rounded-full mr-1"></div>
                  <span className="text-sm text-[#8B4513]">BGS 9.5 Black</span>
                </div>
              </div>
            </div>
            
            <TrendChart />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FF6B35]/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#8B4513] mb-2">Current Value</h3>
                <p className="text-3xl font-bold text-[#8B4513]">$1,700</p>
                <p className="text-[#8B4513]/70 text-sm">PSA 10 Base Set Charizard</p>
              </div>
              <div className="bg-[#4A90E2]/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#8B4513] mb-2">YTD Change</h3>
                <p className="text-3xl font-bold text-green-600">+36%</p>
                <p className="text-[#8B4513]/70 text-sm">From $1,250 in January</p>
              </div>
              <div className="bg-[#8B4513]/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#8B4513] mb-2">Price Prediction</h3>
                <p className="text-3xl font-bold text-[#8B4513]">$1,850</p>
                <p className="text-[#8B4513]/70 text-sm">Q1 2024 Estimated</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-[#8B4513] mb-4">Market Insights</h3>
              <p className="text-[#8B4513]/80 mb-4">
                The Base Set Charizard has shown strong growth throughout 2023, with PSA 10 copies increasing by 36% in value.
                This trend is expected to continue into 2024 as collector demand for vintage WOTC era cards remains strong.
              </p>
              <p className="text-[#8B4513]/80">
                The price gap between PSA 9 and PSA 10 copies has widened from approximately $400 to $550 over the year,
                suggesting increased premium for gem mint condition. BGS Black Label 9.5s continue to command a premium over PSA 10s.
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'opportunities' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#8B4513]">Market Opportunities</h2>
              <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option value="price-diff">Price Difference</option>
                <option value="percent-diff">Percent Difference</option>
                <option value="newest">Newest Listings</option>
              </select>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Card
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Set
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg. Market Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Difference
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {opportunities.map((opportunity) => (
                    <tr key={opportunity.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#8B4513]">
                        {opportunity.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {opportunity.set}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {opportunity.grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                        ${opportunity.currentPrice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        ${opportunity.avgPrice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-green-600 font-medium">
                          ${opportunity.priceDiff} ({opportunity.diffPercent}% below)
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <a 
                          href={opportunity.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#FF6B35] hover:text-[#FF6B35]/80"
                        >
                          View Listing
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-[#8B4513] mb-4">Opportunity Finder</h3>
              <p className="text-[#8B4513]/80 mb-4">
                Our advanced algorithms continuously scan multiple marketplaces to find cards listed below their market value.
                Pro subscribers receive real-time alerts when high-value opportunities are detected.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/pricing" className="btn-primary">
                  Upgrade to Pro
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'recent-sales' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#8B4513]">Recent Sales</h2>
              <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option value="newest">Most Recent</option>
                <option value="highest">Highest Price</option>
                <option value="lowest">Lowest Price</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentSales.map((sale) => (
                <div key={sale.id} className="bg-[#FF6B35]/10 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-40 w-full">
                    <Image 
                      src={sale.image} 
                      alt={sale.name}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-[#FF6B35] text-white text-xs font-bold px-2 py-1 rounded">
                      {sale.grade}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#8B4513]">{sale.name}</h3>
                    <p className="text-[#8B4513]/70 text-sm">{sale.set} • {sale.number}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-lg font-bold text-[#8B4513]">${sale.price}</span>
                      <span className="text-xs text-[#8B4513]/70">{sale.date}</span>
                    </div>
                    <div className="mt-2 text-xs text-[#8B4513]/70 flex items-center">
                      <span className="mr-1">Sold on:</span>
                      <span className="font-medium">{sale.platform}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="px-4 py-2 border border-[#FF6B35] text-[#FF6B35] rounded-md hover:bg-[#FF6B35]/5">
                Load More Sales
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'population-report' && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#8B4513]">Population Report Analysis</h2>
              <div className="flex space-x-2">
                <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  <option value="PSA">PSA</option>
                  <option value="BGS">BGS</option>
                  <option value="CGC">CGC</option>
                </select>
                <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  <option value="Base Set">Base Set</option>
                  <option value="Jungle">Jungle</option>
                  <option value="Fossil">Fossil</option>
                </select>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-[#8B4513]/80 mb-4">
                Population reports show how many cards of each grade exist, helping you identify rarity and potential investment opportunities.
                Upgrade to Pro or Enterprise for full access to population data analysis tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#FF6B35]/10 p-4 rounded-lg">
                <h3 className="text-[#8B4513] font-semibold mb-3">Base Set Charizard #4</h3>
                <table className="min-w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 10</td>
                      <td className="py-2 text-right">121</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 9</td>
                      <td className="py-2 text-right">1,542</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 8</td>
                      <td className="py-2 text-right">3,782</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 7</td>
                      <td className="py-2 text-right">2,567</td>
                    </tr>
                    <tr>
                      <td className="py-2">Total Graded</td>
                      <td className="py-2 text-right font-bold">9,876</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#4A90E2]/10 p-4 rounded-lg">
                <h3 className="text-[#8B4513] font-semibold mb-3">Base Set Blastoise #2</h3>
                <table className="min-w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 10</td>
                      <td className="py-2 text-right">97</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 9</td>
                      <td className="py-2 text-right">1,221</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 8</td>
                      <td className="py-2 text-right">2,983</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 7</td>
                      <td className="py-2 text-right">1,892</td>
                    </tr>
                    <tr>
                      <td className="py-2">Total Graded</td>
                      <td className="py-2 text-right font-bold">7,432</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#8B4513]/10 p-4 rounded-lg">
                <h3 className="text-[#8B4513] font-semibold mb-3">Base Set Venusaur #15</h3>
                <table className="min-w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 10</td>
                      <td className="py-2 text-right">103</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 9</td>
                      <td className="py-2 text-right">1,098</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 8</td>
                      <td className="py-2 text-right">2,652</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">PSA 7</td>
                      <td className="py-2 text-right">1,763</td>
                    </tr>
                    <tr>
                      <td className="py-2">Total Graded</td>
                      <td className="py-2 text-right font-bold">6,891</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-[#FF6B35]/10 rounded-lg text-center">
              <h3 className="text-[#8B4513] font-semibold mb-2">Unlock Advanced Population Analysis</h3>
              <p className="text-[#8B4513]/80 mb-4">
                Get access to in-depth population reports, rarity indexes, and market value correlations with our Pro or Enterprise subscription.
              </p>
              <Link href="/pricing" className="btn-primary inline-block">
                Upgrade Your Subscription
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 