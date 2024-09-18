import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ title: '', price: '', description: '', images: [] });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product', error));
  }, [id]);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]); // Store the selected image file
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = product.images[0];

      if (selectedImage) {
        const formData = new FormData();
        formData.append('file', selectedImage);

        const imageResponse = await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        imageUrl = imageResponse.data.location;
      }

      const updatedProduct = {
        title: product.title,
        price: product.price,
        description: product.description,
        images: [imageUrl],
      };

      await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, updatedProduct);
      navigate(`/products/${id}`);
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  return (
    <div className='w-full max-w-lg m-auto bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Update Product</h2>
      <form onSubmit={handleUpdate}>
        <label className='block mb-2'>
          Title:
          <input
            type='text'
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className='w-full p-2 border rounded-md'
          />
        </label>
        <label className='block mb-2'>
          Price:
          <input
            type='number'
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className='w-full p-2 border rounded-md'
          />
        </label>
        <label className='block mb-2'>
          Description:
          <textarea
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            className='w-full p-2 border rounded-md'
          />
        </label>
        <label className='block mb-2'>
          Upload New Image (optional):
          <input
            type='file'
            onChange={handleImageChange}
            className='w-full p-2 border rounded-md'
          />
        </label>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;