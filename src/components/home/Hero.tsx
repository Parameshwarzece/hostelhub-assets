import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Find What You Need in the Hostel
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your go-to platform for all student essentials. Buy, sell, rent, or request items within your hostel community.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Post Your Ad
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
              <Search className="h-5 w-5 mr-2" />
              Browse Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}