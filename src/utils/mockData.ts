import type { Product } from '../types';

export const FEATURED_ITEMS: Product[] = [
  {
    id: '1',
    title: 'Dell Inspiron Laptop',
    price: 15000,
    condition: 'Used',
    category: 'Electronics',
    description: 'Dell Inspiron 15, 8GB RAM, 256GB SSD, good condition',
    seller: {
      name: 'John Doe',
      contact: '+91 9876543210',
      roomNumber: 'A-101'
    },
    isFeatured: true,
    createdAt: '2024-03-15',
    views: 150
  },
  {
    id: '2',
    title: 'Engineering Mathematics Textbook',
    price: 300,
    condition: 'Used',
    category: 'Books',
    description: 'Complete textbook with solved examples, perfect for first-year students',
    seller: {
      name: 'Jane Smith',
      contact: '+91 9876543211',
      roomNumber: 'B-205'
    },
    isFeatured: true,
    createdAt: '2024-03-14',
    views: 75
  },
  {
    id: '3',
    title: 'Study Table',
    price: 1200,
    condition: 'Used',
    category: 'Furniture',
    description: 'Wooden study table with drawer, 3x2 feet',
    seller: {
      name: 'Mike Johnson',
      contact: '+91 9876543212',
      roomNumber: 'C-103'
    },
    isFeatured: true,
    createdAt: '2024-03-13',
    views: 120
  },
  {
    id: '4',
    title: 'Scientific Calculator',
    price: 800,
    condition: 'New',
    category: 'Electronics',
    description: 'Casio FX-991EX, brand new with warranty',
    seller: {
      name: 'Sarah Wilson',
      contact: '+91 9876543213',
      roomNumber: 'D-401'
    },
    isFeatured: true,
    createdAt: '2024-03-12',
    views: 90
  }
];