import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import './Item.css';

// every item will have a link to their specific details
const Item = ({ id, name, img, price }) => {
  const dispatch = useDispatch();

  const add = () => dispatch(addToCart(id));

  return (
    <div className='Item'>
      {name} ${price}
      <img src={img} />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Item;
