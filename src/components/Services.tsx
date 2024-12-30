import React, { useState } from 'react';
import { Home, Hammer, Paintbrush, Building } from 'lucide-react'; // Import icons

export default function Services() {
  const [area, setArea] = useState(0);
  const [bhk, setBhk] = useState('2bhk');
  const [packageType, setPackageType] = useState('basic');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const calculateCost = () => {
    const costPerSqFt = packageType === 'basic' ? 3000 : packageType === 'premium' ? 4000 : 5000;
    setEstimatedCost(area * costPerSqFt);
  };

  return (
    <div className="py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border rounded-lg p-6 text-center">
            <Home className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Architecture & Design</h3>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <Hammer className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Build from Scratch</h3>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <Paintbrush className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Interior Designing</h3>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <Building className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Renovate and Beautify</h3>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Price Calculator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Area (in sq yards)</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">BHK Type</label>
              <select
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package</label>
              <select
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="ultra-luxury">Ultra-Luxury</option>
              </select>
            </div>
            <button
              onClick={calculateCost}
              className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
            >
              Calculate Cost
            </button>
            {estimatedCost > 0 && (
              <div className="mt-4 text-lg font-semibold">
                Estimated Cost: ₹{estimatedCost}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 