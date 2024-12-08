import React from 'react';
import { Tag, Star } from 'lucide-react';
import { FEATURED_ITEMS } from '../../utils/mockData';

export function FeaturedListings() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Items</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700">View all</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURED_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                </div>
                
                <div className="mt-2 flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-gray-400" />
                  <span className="text-2xl font-bold text-gray-900">₹{item.price}</span>
                </div>
                
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.condition}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}