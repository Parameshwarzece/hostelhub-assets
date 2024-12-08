import { Laptop, Book, Armchair as Chair, Microwave, Shirt, Bike, BedDouble, Gift, HelpCircle } from 'lucide-react';
import { CATEGORIES } from '../../utils/constants';

const iconMap = {
  Laptop,
  Book,
  Chair,
  Microwave,
  Shirt,
  Bike,
  BedDouble,
  Gift,
  HelpCircle
};

export function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <div
                key={category.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="p-3 bg-blue-100 rounded-full">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{category.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{category.itemCount} items</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}