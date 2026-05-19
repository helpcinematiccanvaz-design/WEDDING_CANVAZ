/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components that are not immediately visible
const Gallery = lazy(() => import('./components/Gallery'));
const Categories = lazy(() => import('./components/Categories'));
const PhotoGallery = lazy(() => import('./components/PhotoGallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="h-20 flex items-center justify-center bg-[#120707]">
    <div className="w-6 h-6 border-2 border-rosegold border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Weddings");

  return (
    <div className="min-h-screen selection:bg-rosegold selection:text-maroon">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Gallery />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Categories onCategorySelect={(cat) => setActiveCategory(cat)} />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <PhotoGallery activeCategory={activeCategory} onCategoryChange={(cat) => setActiveCategory(cat)} />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40 bg-black" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
