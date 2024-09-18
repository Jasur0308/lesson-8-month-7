import React from 'react';
import { useGetProductsQuery } from '../redux/api';
import { Link } from 'react-router-dom';

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading)
    return (
      <p className='text-center mt-[300px] font-bold text-blue-800 text-[26px]'>
        Loading...
      </p>
    );
  if (error) return <p>Error fetching products</p>;

  return (
    <div className='w-full m-auto bg-gray-100 p-[30px] rounded-md shadow-md'>
      <div className='w-full flex flex-col-4 gap-4 m-auto'>
        <div className='w-full flex flex-wrap gap-6 justify-center'>
          {products.map((product) => (
            <div
              key={product.id}
              className='w-[250px] bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className='w-full h-[150px] object-cover'
              />
              <div className='p-4'>
                <h2 className='text-lg font-semibold mb-2 text-gray-800'>
                  {product.title}
                </h2>
                <p className='text-gray-600 mb-4'>${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className='text-blue-500 hover:text-blue-600 transition'
                >
                  View Details
                </Link>
                <Link
                  to={`/products/update/${product.id}`}
                  className='ml-4 text-green-500 hover:text-green-600 transition'
                >
                  Update Product
                </Link>
              </div>
            </div>
          )).slice(0, 30)}
        </div>
      </div>
    </div>
  );
};

export default Products;