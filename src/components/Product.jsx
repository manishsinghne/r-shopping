import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className='bg-gray-100 border rounded-lg shadow-md p-4 m-2'>
      <img src={product.image} alt={product.title} className='w-full h-44 object-cover' />
      <h2 className='mt-4'>{product.title}</h2>
      <h3>${product.price}</h3>
      <button 
        className='bg-indigo-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600' 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
