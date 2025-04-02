'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for dashboard stats
const dashboardStats = {
  collectionValue: 24850,
  collectionCards: 127,
  recentSales: 8,
  priceTrends: {
    monthly: '+12.4%',
    yearly: '+34.2%'
  },
  watchlist: 12,
  alerts: 3
};

// Mock data for recent market activity
const recentActivity = [
  {
    id: 1,
    type: 'sale',
    card: 'Charizard',
    set: 'Base Set',
    grade: 'PSA 9',
    price: 1550,
    date: '2023-12-15',
    change: '+5.2%'
  },
  {
    id: 2,
    type: 'alert',
    card: 'Blastoise',
    set: 'Base Set',
    grade: 'BGS 8.5',
    price: 895,
    date: '2023-12-14',
    change: '+3.8%'
  },
  {
    id: 3,
    type: 'opportunity',
    card: 'Lugia',
    set: 'Neo Genesis',
    grade: 'CGC 9',
    price: 1200,
    date: '2023-12-12',
    change: '-8.5%'
  },
  {
    id: 4,
    type: 'sale',
    card: 'Venusaur',
    set: 'Base Set',
    grade: 'PSA 8',
    price: 650,
    date: '2023-12-11',
    change: '+2.1%'
  },
];

// Mock data for collection highlights
const collectionHighlights = [
  {
    id: 1,
    name: 'Charizard',
    set: 'Base Set',
    grade: 'PSA 10',
    value: 15000,
    image: 'https://i.imgur.com/7DJYKao.jpg',
    change: '+12.5%'
  },
  {
    id: 2,
    name: 'Lugia',
    set: 'Neo Genesis',
    grade: 'BGS 9.5',
    value: 3500,
    image: 'https://i.imgur.com/vWSNDnK.jpg',
    change: '+8.2%'
  },
  {
    id: 3,
    name: 'Blastoise',
    set: 'Base Set',
    grade: 'PSA 9',
    value: 1200,
    image: 'https://i.imgur.com/tYFFpSj.jpg',
    change: '+3.7%'
  },
];

export default function Dashboard() {
  const [cardValueFilter, setCardValueFilter] = useState('all-time');
  
  return (
    <div className="bg-marketcarp-beige min-h-screen">
      <div className="container-custom py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-marketcarp-brown">Dashboard</h1>
          <p className="text-marketcarp-brown/70 mt-2">
            Welcome back! Here's an overview of your collection and market insights.
          </p>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-marketcarp-brown mb-4">Collection Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-marketcarp-brown/70">Total Value</p>
                  <p className="text-2xl font-bold text-marketcarp-brown">${dashboardStats.collectionValue.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-marketcarp-brown/70">Total Cards</p>
                  <p className="text-2xl font-bold text-marketcarp-brown">{dashboardStats.collectionCards}</p>
                </div>
                <div>
                  <p className="text-sm text-marketcarp-brown/70">Monthly Change</p>
                  <p className="text-lg font-semibold text-green-600">{dashboardStats.priceTrends.monthly}</p>
                </div>
                <div>
                  <p className="text-sm text-marketcarp-brown/70">Yearly Change</p>
                  <p className="text-lg font-semibold text-green-600">{dashboardStats.priceTrends.yearly}</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/saas/collection" className="btn-primary w-full text-center">
                  View Collection
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-marketcarp-brown mb-4">Market Activity</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-marketcarp-brown/70">Recent Sales</p>
                  <p className="text-2xl font-bold text-marketcarp-brown">{dashboardStats.recentSales}</p>
                </div>
                <div>
                  <p className="text-sm text-marketcarp-brown/70">Watchlist</p>
                  <p className="text-2xl font-bold text-marketcarp-brown">{dashboardStats.watchlist}</p>
                </div>
                <div>
                  <p className="text-sm text-marketcarp-brown/70">New Opportunities</p>
                  <p className="text-lg font-semibold text-marketcarp-orange">5 found</p>
                </div>
                <div>
                  <p className="text-sm text-marketcarp-brown/70">Active Alerts</p>
                  <p className="text-lg font-semibold text-red-500">{dashboardStats.alerts} alerts</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/saas/market-analysis" className="btn-primary w-full text-center">
                  View Market Analysis
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 h-full flex flex-col">
              <h2 className="text-lg font-semibold text-marketcarp-brown mb-4">Quick Actions</h2>
              <div className="flex-1 grid grid-cols-1 gap-3">
                <Link href="/saas/collection/add" className="btn-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add Card to Collection
                </Link>
                <Link href="/saas/market-analysis/opportunities" className="btn-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  Find Investment Opportunities
                </Link>
                <Link href="/saas/alerts/create" className="btn-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                  Set Price Alert
                </Link>
                <Link href="/saas/grading" className="btn-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                  </svg>
                  Grading Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Collection Highlights */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-marketcarp-brown">Collection Highlights</h2>
            <div className="flex items-center space-x-2">
              <select 
                className="text-sm border border-gray-300 rounded-md p-2"
                value={cardValueFilter}
                onChange={(e) => setCardValueFilter(e.target.value)}
              >
                <option value="all-time">All Time</option>
                <option value="yearly">This Year</option>
                <option value="monthly">This Month</option>
                <option value="weekly">This Week</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {collectionHighlights.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-2 right-2 bg-marketcarp-orange text-white text-xs font-bold px-2 py-1 rounded">
                    {card.grade}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-marketcarp-brown">{card.name}</h3>
                  <p className="text-marketcarp-brown/70 text-sm">{card.set}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold text-marketcarp-brown">${card.value.toLocaleString()}</span>
                    <span className="text-sm font-medium text-green-600">{card.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Link href="/saas/collection" className="text-marketcarp-orange hover:text-marketcarp-orange/80 text-sm font-medium">
              View All Collection Items →
            </Link>
          </div>
        </div>
        
        {/* Recent Market Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-marketcarp-brown mb-4">Recent Market Activity</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Set</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span 
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            activity.type === 'sale' 
                              ? 'bg-blue-100 text-blue-800' 
                              : activity.type === 'alert' 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {activity.type === 'sale' 
                            ? 'Sale' 
                            : activity.type === 'alert' 
                              ? 'Alert' 
                              : 'Opportunity'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-marketcarp-brown">
                        {activity.card}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.set}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-marketcarp-brown font-medium">
                        ${activity.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={activity.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                          {activity.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Link href="/saas/market-analysis" className="text-marketcarp-orange hover:text-marketcarp-orange/80 text-sm font-medium">
              View All Market Activity →
            </Link>
          </div>
        </div>
        
        {/* Pro Tip Section */}
        <div className="bg-marketcarp-orange/10 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-marketcarp-orange rounded-full p-3 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-marketcarp-brown">Pro Tip: Grading Submissions</h3>
              <p className="text-marketcarp-brown/80 mt-1">
                PSA has reduced their turnaround times for regular service to 30 days. Consider submitting your high-value raw cards for grading to potentially increase their value by 30-50%.
              </p>
            </div>
            <div className="md:ml-auto">
              <Link href="/saas/grading" className="btn-primary">
                Try Grading Assistant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 