'use client';

import Image from 'next/image';
import { useState } from 'react';

// Grading company logos
const gradingCompanies = [
  { 
    id: 'psa', 
    name: 'PSA', 
    logo: 'https://i.imgur.com/h0XRZOa.png',
    selected: true,
    turnaround: {
      'value': '45-60 days',
      'economy': '30-45 days',
      'regular': '15-25 days',
      'express': '5-10 days',
    },
  },
  { 
    id: 'bgs', 
    name: 'BGS', 
    logo: 'https://i.imgur.com/7vVV7gP.png',
    selected: false,
    turnaround: {
      'value': '60-90 days',
      'economy': '30-45 days',
      'regular': '10-20 days',
      'express': '5-10 days',
    },
  },
  { 
    id: 'cgc', 
    name: 'CGC', 
    logo: 'https://i.imgur.com/HJuTSGN.png',
    selected: false,
    turnaround: {
      'value': '50-70 days',
      'economy': '25-40 days',
      'regular': '10-20 days',
      'express': '3-8 days',
    },
  },
];

// Card evaluation criteria
const cardCriteria = [
  { id: 'centering', name: 'Centering', description: 'Evaluate the card\'s centering - front and back borders should be evenly spaced.' },
  { id: 'corners', name: 'Corners', description: 'Check all four corners for whitening, bends, or fraying.' },
  { id: 'edges', name: 'Edges', description: 'Inspect edges for whitening, chips, or roughness.' },
  { id: 'surface', name: 'Surface', description: 'Look for scratches, print lines, whitening, or factory defects.' },
];

export default function GradingAssistant() {
  const [selectedCompany, setSelectedCompany] = useState('psa');
  const [selectedService, setSelectedService] = useState('regular');
  const [cardDetails, setCardDetails] = useState({
    name: '',
    set: '',
    number: '',
    year: '',
    rawValue: 0,
    expectedGrade: '9',
  });
  const [criteriaRatings, setCriteriaRatings] = useState({
    centering: 8,
    corners: 8,
    edges: 8,
    surface: 8,
  });
  
  // Calculate predicted grade based on criteria ratings
  const calculatePredictedGrade = () => {
    const average = (
      criteriaRatings.centering + 
      criteriaRatings.corners + 
      criteriaRatings.edges + 
      criteriaRatings.surface
    ) / 4;
    
    return average.toFixed(1);
  };
  
  // Calculate potential value based on raw value and expected grade
  const calculateGradedValue = () => {
    const gradeMultipliers: {[key: string]: number} = {
      '10': 5,
      '9.5': 3.5,
      '9': 2.5,
      '8.5': 1.8,
      '8': 1.4,
      '7': 1.1,
    };
    
    const multiplier = gradeMultipliers[cardDetails.expectedGrade] || 1;
    return cardDetails.rawValue * multiplier;
  };
  
  // Determine if grading is worth it based on cost vs. value gain
  const isGradingWorthIt = () => {
    const company = gradingCompanies.find(c => c.id === selectedCompany);
    const servicePrices: {[key: string]: number} = {
      value: company?.id === 'psa' ? 50 : company?.id === 'bgs' ? 35 : 30,
      economy: company?.id === 'psa' ? 100 : company?.id === 'bgs' ? 75 : 65,
      regular: company?.id === 'psa' ? 150 : company?.id === 'bgs' ? 150 : 100,
      express: company?.id === 'psa' ? 300 : company?.id === 'bgs' ? 250 : 250,
    };
    
    const serviceCost = servicePrices[selectedService] || 150;
    const gradedValue = calculateGradedValue();
    const valueIncrease = gradedValue - cardDetails.rawValue;
    
    if (valueIncrease > serviceCost * 3) return 'Highly Recommended';
    if (valueIncrease > serviceCost * 2) return 'Recommended';
    if (valueIncrease > serviceCost) return 'Worth Considering';
    return 'Not Recommended';
  };
  
  // Get the color class for recommendation
  const getRecommendationColor = () => {
    const recommendation = isGradingWorthIt();
    switch (recommendation) {
      case 'Highly Recommended': return 'text-green-600';
      case 'Recommended': return 'text-blue-600';
      case 'Worth Considering': return 'text-yellow-600';
      case 'Not Recommended': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };
  
  return (
    <div className="bg-marketcarp-beige min-h-screen">
      <div className="container-custom py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-marketcarp-brown">Grading Assistant</h1>
          <p className="text-marketcarp-brown/70 mt-2">
            Evaluate whether your Pokémon card is worth grading and get an estimated grade prediction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card Details Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-marketcarp-brown mb-4">Card Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="card-name" className="block text-sm font-medium text-marketcarp-brown mb-1">
                    Card Name
                  </label>
                  <input 
                    type="text" 
                    id="card-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marketcarp-orange"
                    placeholder="e.g. Charizard"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="card-set" className="block text-sm font-medium text-marketcarp-brown mb-1">
                    Set Name
                  </label>
                  <input 
                    type="text" 
                    id="card-set"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marketcarp-orange"
                    placeholder="e.g. Base Set"
                    value={cardDetails.set}
                    onChange={(e) => setCardDetails({...cardDetails, set: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-marketcarp-brown mb-1">
                    Card Number
                  </label>
                  <input 
                    type="text" 
                    id="card-number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marketcarp-orange"
                    placeholder="e.g. 4/102"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="card-year" className="block text-sm font-medium text-marketcarp-brown mb-1">
                    Year
                  </label>
                  <input 
                    type="text" 
                    id="card-year"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marketcarp-orange"
                    placeholder="e.g. 1999"
                    value={cardDetails.year}
                    onChange={(e) => setCardDetails({...cardDetails, year: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="raw-value" className="block text-sm font-medium text-marketcarp-brown mb-1">
                    Raw Card Value (Ungraded)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input 
                      type="number" 
                      id="raw-value"
                      className="w-full pl-7 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marketcarp-orange"
                      placeholder="0.00"
                      value={cardDetails.rawValue || ''}
                      onChange={(e) => setCardDetails({...cardDetails, rawValue: parseFloat(e.target.value) || 0})}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="expected-grade" className="block text-sm font-medium text-marketcarp-brown mb-1">
                    Expected Grade
                  </label>
                  <select 
                    id="expected-grade"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marketcarp-orange"
                    value={cardDetails.expectedGrade}
                    onChange={(e) => setCardDetails({...cardDetails, expectedGrade: e.target.value})}
                  >
                    <option value="10">10 (Gem Mint)</option>
                    <option value="9.5">9.5 (Gem Mint)</option>
                    <option value="9">9 (Mint)</option>
                    <option value="8.5">8.5 (Near Mint-Mint+)</option>
                    <option value="8">8 (Near Mint-Mint)</option>
                    <option value="7">7 (Near Mint)</option>
                    <option value="6">6 (Excellent-Near Mint)</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Card Condition Assessment */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-marketcarp-brown mb-4">Card Condition Assessment</h2>
              
              <div className="space-y-6">
                {cardCriteria.map((criteria) => (
                  <div key={criteria.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-marketcarp-brown">{criteria.name}</h3>
                        <p className="text-sm text-marketcarp-brown/70">{criteria.description}</p>
                      </div>
                      <div className="text-lg font-semibold text-marketcarp-orange">
                        {criteriaRatings[criteria.id as keyof typeof criteriaRatings]}/10
                      </div>
                    </div>
                    
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      step="0.5"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-marketcarp-orange"
                      value={criteriaRatings[criteria.id as keyof typeof criteriaRatings]}
                      onChange={(e) => setCriteriaRatings({
                        ...criteriaRatings, 
                        [criteria.id]: parseFloat(e.target.value)
                      })}
                    />
                    
                    <div className="flex justify-between text-xs text-marketcarp-brown/70 mt-1">
                      <span>Poor (1)</span>
                      <span>Average (5)</span>
                      <span>Perfect (10)</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-marketcarp-beige p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-marketcarp-brown">Predicted Grade</h3>
                    <p className="text-sm text-marketcarp-brown/70">Based on your assessment</p>
                  </div>
                  <div className="text-2xl font-bold text-marketcarp-orange">
                    {calculatePredictedGrade()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grading Service Selection & Results */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-marketcarp-brown mb-4">Grading Service</h2>
              
              <div className="space-y-4">
                {gradingCompanies.map((company) => (
                  <div 
                    key={company.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedCompany === company.id 
                        ? 'border-marketcarp-orange bg-marketcarp-orange/5' 
                        : 'border-gray-200 hover:border-marketcarp-orange/50'
                    }`}
                    onClick={() => setSelectedCompany(company.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 relative">
                        <Image 
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="font-medium text-marketcarp-brown">{company.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-marketcarp-brown mb-2">
                  Service Level
                </label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marketcarp-orange"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="value">Value (Lowest Cost)</option>
                  <option value="economy">Economy</option>
                  <option value="regular">Regular</option>
                  <option value="express">Express (Fastest)</option>
                </select>
                
                <div className="mt-2 text-sm text-marketcarp-brown/70">
                  Estimated turnaround: {
                    gradingCompanies.find(c => c.id === selectedCompany)?.turnaround[
                      selectedService as keyof typeof gradingCompanies[0]['turnaround']
                    ]
                  }
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-marketcarp-brown mb-4">Grading Analysis</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-sm text-marketcarp-brown/70">Raw Card Value</div>
                  <div className="text-lg font-semibold text-marketcarp-brown">
                    ${cardDetails.rawValue.toLocaleString()}
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-sm text-marketcarp-brown/70">Estimated Graded Value ({cardDetails.expectedGrade})</div>
                  <div className="text-lg font-semibold text-marketcarp-brown">
                    ${calculateGradedValue().toLocaleString()}
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-sm text-marketcarp-brown/70">Potential Value Increase</div>
                  <div className="text-lg font-semibold text-green-600">
                    ${(calculateGradedValue() - cardDetails.rawValue).toLocaleString()}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-marketcarp-brown/70">Recommendation</div>
                  <div className={`text-xl font-bold ${getRecommendationColor()}`}>
                    {isGradingWorthIt()}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="btn-primary w-full">
                  Generate Detailed Report
                </button>
              </div>
            </div>
            
            <div className="bg-marketcarp-orange/10 p-4 rounded-lg">
              <h3 className="font-medium text-marketcarp-brown mb-2">Pro Tips</h3>
              <ul className="space-y-2 text-sm text-marketcarp-brown/80">
                <li className="flex items-start">
                  <span className="text-marketcarp-orange mr-2">•</span>
                  Cards with high raw values benefit most from grading, especially if they're near mint condition.
                </li>
                <li className="flex items-start">
                  <span className="text-marketcarp-orange mr-2">•</span>
                  Consider market trends when making grading decisions - high-demand cards may justify express services.
                </li>
                <li className="flex items-start">
                  <span className="text-marketcarp-orange mr-2">•</span>
                  Batch submissions save on shipping and handling fees. Pro subscribers get bulk submission discounts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 