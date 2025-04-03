'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';

interface GradingService {
  name: string;
  basePrice: number;
  turnaroundTime: string;
  maxValue: number;
}

const gradingServices: GradingService[] = [
  { name: 'PSA Regular', basePrice: 50, turnaroundTime: '30 days', maxValue: 499 },
  { name: 'PSA Express', basePrice: 150, turnaroundTime: '10 days', maxValue: 999 },
  { name: 'PSA Super Express', basePrice: 300, turnaroundTime: '2 days', maxValue: 4999 },
  { name: 'BGS Regular', basePrice: 35, turnaroundTime: '30 days', maxValue: 499 },
  { name: 'BGS Express', basePrice: 125, turnaroundTime: '5 days', maxValue: 999 },
  { name: 'CGC Regular', basePrice: 25, turnaroundTime: '30 days', maxValue: 499 },
  { name: 'CGC Express', basePrice: 75, turnaroundTime: '5 days', maxValue: 999 },
];

interface ROICalculatorProps {
  isPro?: boolean;
}

export default function ROICalculator({ isPro = false }: ROICalculatorProps) {
  const [rawCardValue, setRawCardValue] = useState<number>(100);
  const [selectedService, setSelectedService] = useState<GradingService>(gradingServices[0]);
  const [potentialGrades, setPotentialGrades] = useState<{ [key: string]: number }>({
    'PSA 10': 1500,
    'PSA 9': 500,
    'PSA 8': 200,
    'PSA 7': 100,
  });
  const [gradeChances, setGradeChances] = useState<{ [key: string]: number }>({
    'PSA 10': 10,
    'PSA 9': 30,
    'PSA 8': 40,
    'PSA 7': 20,
  });

  const calculateExpectedValue = () => {
    let expectedValue = 0;
    Object.entries(potentialGrades).forEach(([grade, value]) => {
      expectedValue += (value * (gradeChances[grade] / 100));
    });
    return expectedValue;
  };

  const calculateROI = () => {
    const totalCost = rawCardValue + selectedService.basePrice;
    const expectedValue = calculateExpectedValue();
    return ((expectedValue - totalCost) / totalCost) * 100;
  };

  const expectedValue = calculateExpectedValue();
  const roi = calculateROI();
  const totalCost = rawCardValue + selectedService.basePrice;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[#8B4513] mb-6">Raw to Graded ROI Calculator</h2>
      
      {!isPro ? (
        <div className="text-center py-8">
          <FiInfo className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-[#8B4513] mb-2">Pro Feature</h3>
          <p className="text-[#8B4513]/70 mb-4">
            Unlock our advanced ROI calculator to make informed grading decisions.
          </p>
          <a 
            href="/pricing" 
            className="inline-block bg-[#FF6B35] text-white px-6 py-2 rounded-md hover:bg-[#FF6B35]/90 transition-colors"
          >
            Upgrade to Pro
          </a>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#8B4513] mb-2">
                Raw Card Value
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B4513]/70">$</span>
                <input
                  type="number"
                  value={rawCardValue}
                  onChange={(e) => setRawCardValue(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#8B4513] mb-2">
                Grading Service
              </label>
              <select
                value={selectedService.name}
                onChange={(e) => setSelectedService(gradingServices.find(s => s.name === e.target.value) || gradingServices[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              >
                {gradingServices.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} - ${service.basePrice} ({service.turnaroundTime})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#8B4513] mb-4">Grade Probabilities & Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(gradeChances).map(([grade, chance]) => (
                <div key={grade} className="bg-[#FF6B35]/5 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-[#8B4513]">{grade}</span>
                    <div className="flex gap-4">
                      <div>
                        <label className="block text-xs text-[#8B4513]/70">Chance</label>
                        <input
                          type="number"
                          value={chance}
                          onChange={(e) => setGradeChances({ ...gradeChances, [grade]: Number(e.target.value) })}
                          className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                        />
                        <span className="text-xs text-[#8B4513]/70 ml-1">%</span>
                      </div>
                      <div>
                        <label className="block text-xs text-[#8B4513]/70">Value</label>
                        <div className="relative">
                          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs text-[#8B4513]/70">$</span>
                          <input
                            type="number"
                            value={potentialGrades[grade]}
                            onChange={(e) => setPotentialGrades({ ...potentialGrades, [grade]: Number(e.target.value) })}
                            className="w-24 pl-6 pr-2 py-1 border border-gray-300 rounded-md text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-[#FF6B35]/10 rounded-full h-2">
                    <motion.div
                      className="bg-[#FF6B35] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${chance}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FF6B35]/10 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-[#8B4513] mb-2">Total Cost</h4>
              <p className="text-2xl font-bold text-[#8B4513]">${totalCost.toFixed(2)}</p>
              <p className="text-xs text-[#8B4513]/70">Card + Grading Fee</p>
            </div>
            
            <div className="bg-[#4A90E2]/10 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-[#8B4513] mb-2">Expected Value</h4>
              <p className="text-2xl font-bold text-[#8B4513]">${expectedValue.toFixed(2)}</p>
              <p className="text-xs text-[#8B4513]/70">Based on probabilities</p>
            </div>
            
            <div className={`p-4 rounded-lg ${roi >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
              <h4 className="text-sm font-medium text-[#8B4513] mb-2">Expected ROI</h4>
              <p className={`text-2xl font-bold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {roi.toFixed(1)}%
              </p>
              <p className="text-xs text-[#8B4513]/70">Return on Investment</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#FF6B35]/5 rounded-lg">
            <h4 className="text-sm font-medium text-[#8B4513] mb-2">Pro Tips</h4>
            <ul className="text-sm text-[#8B4513]/70 space-y-2">
              <li>• Consider the card's condition and centering when estimating grade chances</li>
              <li>• Research recent sales data for accurate market values</li>
              <li>• Factor in shipping and insurance costs for total investment</li>
              <li>• Higher grades typically have longer turnaround times</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
} 