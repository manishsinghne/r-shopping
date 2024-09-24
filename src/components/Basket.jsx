import React from 'react';

const Basket = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-5">
      <h1 className='text-center text-2xl font-bold m-5'>Your Shopping Basket</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <h2 className="text-xl mb-4">Your basket is currently empty</h2>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
            Shop Now
          </button>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b-2 py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <h3 className="text-sm text-gray-600">Price: ${item.price}</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button 
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>
                <h3 className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</h3>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <h2 className="text-xl font-semibold">Total: ${totalAmount}</h2>
            {/* <button
              className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
              onClick={clearCart}
            >
              Clear Cart
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
