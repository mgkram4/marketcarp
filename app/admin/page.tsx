'use client';

import Link from 'next/link';
import { useState } from 'react';

// Dashboard card component
const DashboardCard = ({
  title,
  value,
  icon,
  bgColor,
  textColor,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div className={`rounded-lg shadow-sm p-6 ${bgColor}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${textColor} opacity-80`}>{title}</p>
          <h3 className={`text-2xl font-bold ${textColor} mt-1`}>{value}</h3>
        </div>
        <div className={`text-2xl ${textColor}`}>{icon}</div>
      </div>
    </div>
  );
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Navigation tabs
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'orders', label: 'Orders' },
    { id: 'customers', label: 'Customers' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'content', label: 'Content' },
  ];

  return (
    <div className="bg-marketcarp-beige min-h-screen">
      <div className="container-custom py-8">
        {/* Admin Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-marketcarp-brown">Admin Dashboard</h1>
          <div className="flex items-center space-x-3">
            <button className="btn-secondary">
              <span className="mr-2">+</span>
              Add Product
            </button>
            <div className="w-10 h-10 bg-marketcarp-orange rounded-full flex items-center justify-center text-white">
              A
            </div>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="mb-8 border-b border-gray-300">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? 'border-marketcarp-orange text-marketcarp-brown'
                    : 'border-transparent text-marketcarp-brown/70 hover:text-marketcarp-brown hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <DashboardCard
                title="Total Sales"
                value="$12,426.00"
                icon={<span>💰</span>}
                bgColor="bg-white"
                textColor="text-marketcarp-brown"
              />
              <DashboardCard
                title="Orders"
                value="42"
                icon={<span>📦</span>}
                bgColor="bg-marketcarp-blue/20"
                textColor="text-marketcarp-brown"
              />
              <DashboardCard
                title="Customers"
                value="128"
                icon={<span>👥</span>}
                bgColor="bg-marketcarp-orange/20"
                textColor="text-marketcarp-brown"
              />
              <DashboardCard
                title="Products"
                value="96"
                icon={<span>🃏</span>}
                bgColor="bg-marketcarp-brown/10"
                textColor="text-marketcarp-brown"
              />
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-marketcarp-brown">Recent Orders</h2>
                <Link href="/admin/orders" className="text-sm text-marketcarp-orange hover:underline">
                  View All
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: 'ORD-1234', customer: 'John Doe', date: '2023-04-01', amount: '$1,299.99', status: 'Shipped' },
                      { id: 'ORD-1233', customer: 'Jane Smith', date: '2023-03-30', amount: '$349.99', status: 'Processing' },
                      { id: 'ORD-1232', customer: 'Bob Johnson', date: '2023-03-28', amount: '$899.99', status: 'Delivered' },
                      { id: 'ORD-1231', customer: 'Alice Williams', date: '2023-03-27', amount: '$699.99', status: 'Pending' },
                    ].map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-marketcarp-brown">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {order.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-gray-100 text-gray-800'}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inventory Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-marketcarp-brown">Inventory Overview</h2>
                <Link href="/admin/inventory" className="text-sm text-marketcarp-orange hover:underline">
                  Manage Inventory
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">By Product Type</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-marketcarp-brown">Graded Cards</span>
                        <span className="text-marketcarp-brown">48 items</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-marketcarp-orange h-2.5 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-marketcarp-brown">Raw Cards</span>
                        <span className="text-marketcarp-brown">12 items</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-marketcarp-blue h-2.5 rounded-full" style={{ width: '12.5%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-marketcarp-brown">Sealed Products</span>
                        <span className="text-marketcarp-brown">36 items</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-marketcarp-brown h-2.5 rounded-full" style={{ width: '37.5%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Low Stock Alert (&lt; 5 items)</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-marketcarp-brown text-sm">Base Set Charizard PSA 9</span>
                      <span className="text-red-600 text-sm font-semibold">1 left</span>
                    </li>
                    <li className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-marketcarp-brown text-sm">Base Set Booster Box</span>
                      <span className="text-red-600 text-sm font-semibold">2 left</span>
                    </li>
                    <li className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-marketcarp-brown text-sm">Neo Genesis Lugia PSA 7</span>
                      <span className="text-yellow-600 text-sm font-semibold">3 left</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'dashboard' && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <h2 className="text-xl font-semibold text-marketcarp-brown mb-2">
              {tabs.find(tab => tab.id === activeTab)?.label} Section
            </h2>
            <p className="text-marketcarp-brown/70">
              This section is under development. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 