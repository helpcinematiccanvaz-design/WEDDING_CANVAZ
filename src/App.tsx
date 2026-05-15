/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Categories from './components/Categories';
import PhotoGallery from './components/PhotoGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Weddings");

  return (
    <div className="min-h-screen selection:bg-rosegold selection:text-maroon">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Categories onCategorySelect={(cat) => setActiveCategory(cat)} />
        <PhotoGallery activeCategory={activeCategory} onCategoryChange={(cat) => setActiveCategory(cat)} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
