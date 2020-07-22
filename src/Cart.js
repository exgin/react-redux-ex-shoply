import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((st) => st.cart);
  console.log(cart);

  return <div className='Cart'>Cart:</div>;
};

export default Cart;
