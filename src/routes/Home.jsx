import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='font-sans bg-gray-100'>
      <section className='flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-center p-8'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to Our Shop</h1>
          <p className='text-xl md:text-2xl mb-6'>Discover the best products just for you.</p>
          <Link to='/products' className='bg-white text-pink-500 hover:bg-pink-100 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300'>
            Shop Now
          </Link>
        </div>
      </section>

      <section className='py-16 px-4 bg-gray-200'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <h2 className='text-2xl font-semibold mb-4'>High Quality</h2>
            <p className='text-gray-700'>We offer products of the highest quality to ensure your satisfaction.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <h2 className='text-2xl font-semibold mb-4'>Affordable Prices</h2>
            <p className='text-gray-700'>Enjoy great value with our competitive pricing and special offers.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <h2 className='text-2xl font-semibold mb-4'>Fast Shipping</h2>
            <p className='text-gray-700'>Receive your orders quickly with our efficient shipping options.</p>
          </div>
        </div>
      </section>

      <footer className='bg-gray-800 text-white text-center py-4'>
        <p className='text-sm'>© 2024 Our Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;