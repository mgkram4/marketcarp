'use client';

import { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface MarketTrend {
  month: string;
  psa10: number;
  psa9: number;
  bgsBk95: number;
}

interface RecentSale {
  id: number;
  name: string;
  cardSet: string;
  cardNumber: string;
  grader: string;
  grade: string;
  price: number;
}

export default function MarketAnalysis() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSet, setSelectedSet] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [trendData] = useState<MarketTrend[]>([
    { month: 'Jan', psa10: 1200, psa9: 800, bgsBk95: 1000 },
    { month: 'Feb', psa10: 1300, psa9: 850, bgsBk95: 1100 },
    { month: 'Mar', psa10: 1250, psa9: 820, bgsBk95: 1050 },
    { month: 'Apr', psa10: 1400, psa9: 900, bgsBk95: 1200 },
  ]);

  const [salesData, setSalesData] = useState<RecentSale[]>([
    {
      id: 1,
      name: 'Charizard',
      cardSet: 'Base Set',
      cardNumber: '4/102',
      grader: 'PSA',
      grade: '9',
      price: 1299.99,
    },
    {
      id: 2,
      name: 'Blastoise',
      cardSet: 'Base Set',
      cardNumber: '2/102',
      grader: 'BGS',
      grade: '8.5',
      price: 899.99,
    },
  ]);

  const handleSearch = () => {
    // Filter sales data based on search criteria
    const filteredSales = salesData.filter(sale => {
      const matchesQuery = searchQuery === '' || 
        sale.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSet = selectedSet === '' || 
        sale.cardSet === selectedSet;
      const matchesGrade = selectedGrade === '' || 
        sale.grade === selectedGrade;
      return matchesQuery && matchesSet && matchesGrade;
    });
    setSalesData(filteredSales);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#8B4513]">Market Analysis</h1>
      
      {/* Search Section */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cards..."
            className="flex-1 p-2 border rounded"
          />
          <select
            value={selectedSet}
            onChange={(e) => setSelectedSet(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Sets</option>
            <option value="Base Set">Base Set</option>
            <option value="Jungle">Jungle</option>
            <option value="Fossil">Fossil</option>
          </select>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Grades</option>
            <option value="10">PSA 10</option>
            <option value="9">PSA 9</option>
            <option value="8">PSA 8</option>
          </select>
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-[#FF6B35] text-white rounded hover:bg-[#FF6B35]/90"
          >
            Search
          </button>
        </div>
      </div>

      {/* Market Trends Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#8B4513]">Market Trends</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="psa10" stroke="#FF6B35" name="PSA 10" />
              <Line type="monotone" dataKey="psa9" stroke="#004E89" name="PSA 9" />
              <Line type="monotone" dataKey="bgsBk95" stroke="#4CAF50" name="BGS 9.5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Sales Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#8B4513]">Recent Sales</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Card</th>
                <th className="text-left py-2">Set</th>
                <th className="text-left py-2">Number</th>
                <th className="text-left py-2">Grade</th>
                <th className="text-right py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale) => (
                <tr key={sale.id} className="border-b hover:bg-gray-50">
                  <td className="py-2">{sale.name}</td>
                  <td className="py-2">{sale.cardSet}</td>
                  <td className="py-2">{sale.cardNumber}</td>
                  <td className="py-2">{sale.grader} {sale.grade}</td>
                  <td className="py-2 text-right">${sale.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 