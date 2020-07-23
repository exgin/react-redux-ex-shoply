import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import { Link } from 'react-router-dom';
import './Item.css';

// every item will have a link to their specific details | wrap a link around the item div
const Item = ({ id, name, img, price }) => {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));

  return (
    <div className='Item'>
      <Link to={`/products/${id}`}> {name} </Link>${price}
      <img src={img} alt='' />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Item;
