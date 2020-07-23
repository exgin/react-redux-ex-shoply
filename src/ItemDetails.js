import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ItemDetails = () => {
  const { id } = useParams();
  const { name, description, img_url, price } = useSelector((st) => st.products[id]); // we can use our id to dynamicly list every product according to its id

  return (
    <div className='ItemDetails'>
      <h2>{name.toUpperCase()} Details!</h2>
      <img src={img_url} alt='item img' />
      <p>
        Price per {name}, ${price}
        <small>{description}</small>
      </p>
    </div>
  );
};

export default ItemDetails;
