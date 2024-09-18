import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className='text-center mt-[300px] font-bold text-blue-800 text-[26px]'>Loading...</p>;
  if (error) return <p className='text-center mt-[300px] font-bold text-red-600'>{error}</p>;

  if (!product) return <p>No product found</p>;

  return (
    <div className='w-full max-w-4xl m-auto bg-white p-8 rounded-md shadow-md'>
      <div className='flex flex-col md:flex-row'>
        <img
          src={product.images[0]}
          alt={product.title}
          className='w-full md:w-1/2 h-[300px] object-cover rounded-md mb-4 md:mb-0 md:mr-4'
        />
        <div className='md:w-1/2'>
          <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
          <p className='text-xl font-semibold text-gray-700 mb-4'>${product.price}</p>
          <p className='text-gray-600 mb-4'>{product.description}</p>
          <a
            href={product.images[0]} // Link to the full-size image
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:text-blue-600'
          >
            View Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;