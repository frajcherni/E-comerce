import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ image, title, description, price, rating }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Function to generate star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} className={`h-5 w-5 fill-current ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1l2.6 6.8L18 7l-5 4.2 1.8 6L10 14.2 5.2 17l1.8-6L2 7l5.4.8L10 1z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
      <img className="w-full h-48 object-cover object-center" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-900 font-bold text-xl">${price}</span>
          <div className="flex">{renderStars(rating)}</div>
        </div>
        <button className="mt-4 bg-white border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
