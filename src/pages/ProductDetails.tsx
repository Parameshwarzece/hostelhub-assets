import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Eye, MapPin, Phone, Tag, User } from 'lucide-react';
import { FEATURED_ITEMS } from '../utils/mockData';

export function ProductDetails() {
  const { id } = useParams();
  const product = FEATURED_ITEMS.find(item => item.id === id);

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
            <Tag className="h-32 w-32 text-gray-400" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="mt-2 text-3xl font-bold text-blue-600">₹{product.price}</p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {product.createdAt}
              </span>
              <span className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {product.views} views
              </span>
            </div>

            <div className="border-t border-b py-4">
              <h2 className="font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-semibold text-gray-900">Seller Information</h2>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  {product.seller.name}
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {product.seller.contact}
                </p>
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  Room {product.seller.roomNumber}
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Contact Seller
              </button>
              <button className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 