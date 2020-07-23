import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './actions';

const Cart = () => {
  const { cart, products, cartTotal } = useSelector((st) => st);
  const dispatch = useDispatch();
  console.log(cart);

  let itemInCartId;
  for (let id in cart) {
    itemInCartId = id;
  }

  const remove = () => dispatch(removeFromCart(itemInCartId));

  let cartItems = Object.keys(cart).map((cartId) => (
    <div key={cartId}>
      {products[cartId].name} {cart[cartId]}
      <button onClick={remove}>X</button>
    </div>
  ));

  //   display the items in the cart & the number of occuring to that item
  return (
    <div className='Cart'>
      <span>
        {cartItems}Total: ${cartTotal}
      </span>
    </div>
  );
};

export default Cart;
