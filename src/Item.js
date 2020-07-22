import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import './Item.css';

// every item will have a link to their specific details
const Item = ({ id, name, img }) => {
  const dispatch = useDispatch();

  const add = () => dispatch(addToCart(id));

  return (
    <div className='Item'>
      <h3>{name} </h3>
      <img src={img} />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Item;
