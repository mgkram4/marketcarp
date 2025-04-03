'use client';

import { useState } from 'react';
import { FiBell, FiEdit2, FiTrash2 } from 'react-icons/fi';
import PriceAlertModal, { PriceAlert } from './PriceAlertModal';

export default function PriceAlerts() {
  const [alerts, setAlerts] = useState<PriceAlert[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAlert, setEditingAlert] = useState<PriceAlert | undefined>();

  const handleSaveAlert = (alert: PriceAlert) => {
    if (editingAlert) {
      setAlerts(alerts.map(a => a.id === editingAlert.id ? alert : a));
    } else {
      setAlerts([...alerts, alert]);
    }
    setEditingAlert(undefined);
  };

  const handleDeleteAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleEditAlert = (alert: PriceAlert) => {
    setEditingAlert(alert);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#8B4513] flex items-center gap-2">
          <FiBell className="w-5 h-5" />
          Price Alerts
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF6B35]/90 flex items-center gap-2"
        >
          <FiBell className="w-4 h-4" />
          New Alert
        </button>
      </div>

      {alerts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No price alerts set. Create one to get started!
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map(alert => (
            <div
              key={alert.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{alert.cardName}</h3>
                  <p className="text-sm text-gray-500">
                    Alert when price reaches ${alert.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditAlert(alert)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteAlert(alert.id)}
                    className="p-2 text-gray-400 hover:text-red-600 rounded-full"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <PriceAlertModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAlert(undefined);
        }}
        onSave={handleSaveAlert}
        initialAlert={editingAlert}
      />
    </div>
  );
} 