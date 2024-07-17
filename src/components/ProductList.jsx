import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

// Ensure your images are placed in the public folder: public/images/

export const products = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/img2.jpg`,
    title: 'Phone',
    description: 'Latest smartphone with cutting-edge technology.',
    price: 599.99,
    rating: 4,
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/im.jpeg`,
    title: 'Earbuds',
    description: 'High-quality sound and noise-canceling earbuds.',
    price: 149.99,
    rating: 3,
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/imgg.jpg`,
    title: 'Watch',
    description: 'Smartwatch with multiple health-tracking features.',
    price: 299.99,
    rating: 4,
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/img3.jpg`,
    title: 'Laptop',
    description: 'Enhance your productivity with our sleek and powerful laptops.',
    price: 1200.99,
    rating: 5,
  }
];

const ProductList = () => {
  return (
    <div className="container mt-24 mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Explore Our Categories</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">Discover high-quality tech gadgets designed to enhance your lifestyle.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
