import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import Cart from './Cart';

const ItemList = () => {
  const products = useSelector((st) => st.products);
  console.log(products);

  // iterate over key/value pairs
  const allProducts = Object.keys(products).map((prodId) => <Item key={prodId} id={prodId} name={products[prodId].name} img={products[prodId].img_url} price={products[prodId].price} />);
  return (
    <div className='Products'>
      <div>
        <h1>Welcome to Shoply!</h1>
        <small>Here are some of our items:</small>
      </div>
      <hr />
      <Cart />
      {allProducts}
    </div>
  );
};

export default ItemList;
