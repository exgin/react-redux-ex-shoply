import React from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import './CartNav.css';

const CartNav = () => {
  return (
    <nav className='navbar navbar-light bg-info'>
      <Link to='/' className='navbar-brand'>
        <h1 className='display'>Shoply</h1>
      </Link>

      <Cart />
    </nav>
  );
};

export default CartNav;
