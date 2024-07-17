import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList, { products } from './components/ProductList'; // Import products array

import TestimonialsList from './components/TestimonialsList';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail'; // Assuming ProductDetail component is defined
import './App.css';
import ContactSection14 from './components/ContactSection14';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <ProductList />
            <TestimonialsList />
            <ContactSection14 />
          </>} />
          <Route path="/products/:productId" element={<ProductDetail products={products} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
