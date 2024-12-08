import React from 'react';
import { Hero } from '../components/home/Hero';
import { Categories } from '../components/home/Categories';
import { FeaturedListings } from '../components/home/FeaturedListings';

export function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedListings />
    </main>
  );
} 