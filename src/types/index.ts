export interface Category {
  id: string;
  name: string;
  icon: string;
  itemCount: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  condition: 'New' | 'Used' | 'Refurbished';
  category: string;
  description: string;
  seller: {
    name: string;
    contact: string;
    roomNumber: string;
  };
  isFeatured: boolean;
  createdAt: string;
  views: number;
}