import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  const products = useSelector((st) => st.products);

  // iterate over key/value pairs
  const allProducts = Object.keys(products).map((prodId) => <Item key={prodId} id={prodId} name={products[prodId].name} img={products[prodId].img_url} price={products[prodId].price} />);
  return (
    <div className='Products'>
      <small>Here are some of our items:</small>
      <hr />
      {allProducts}
    </div>
  );
};

export default ItemList;
