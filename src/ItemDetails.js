import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './actions';

const ItemDetails = () => {
  const { id } = useParams();
  const { name, description, img_url, price } = useSelector((st) => st.products[id]); // we can use our id to dynamicly list every product according to its id
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));

  return (
    <div className='ItemDetails'>
      <h2>{name.toUpperCase()} Details!</h2>
      <img src={img_url} alt='item img' />
      <p>
        {name}, ${price} | <small>{description}</small>
      </p>
      <button onClick={add}>Add to cart</button>
    </div>
  );
};

export default ItemDetails;
