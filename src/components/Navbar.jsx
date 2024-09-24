import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <h1 className='text-xl'>My Store</h1>
      <div>
        <Link to='/' className='mx-2'>Home</Link>
        <Link to='/basket' className='mx-2'>Basket</Link>
      </div>
    </nav>
  );
};

export default Navbar;
