'use client';

import { useState } from 'react';
import { FiX } from 'react-icons/fi';

export interface PriceAlert {
  id: string;
  cardName: string;
  price: number;
  isEnabled: boolean;
}

interface PriceAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (alert: PriceAlert) => void;
  initialAlert?: PriceAlert;
}

export default function PriceAlertModal({ isOpen, onClose, onSave, initialAlert }: PriceAlertModalProps) {
  const [cardName, setCardName] = useState(initialAlert?.cardName || '');
  const [price, setPrice] = useState(initialAlert?.price || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: initialAlert?.id || Math.random().toString(36).substr(2, 9),
      cardName,
      price,
      isEnabled: true,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-[#8B4513]">
            {initialAlert ? 'Edit Price Alert' : 'New Price Alert'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#8B4513] mb-2">
              Card Name
            </label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              placeholder="e.g., Base Set Charizard"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#8B4513] mb-2">
              Alert Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF6B35]/90"
            >
              {initialAlert ? 'Update Alert' : 'Create Alert'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 