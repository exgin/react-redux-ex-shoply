import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import data from './data.json';

const INT_STATE = { products: data.products, cart: {}, cartTotal: 0 };

function calculateItemTotal(products, cart) {
  let sum = 0; // was getting NaN, setting sem to 0 fixes that

  // products : { 3: {...} }
  for (let id in products) {
    const quantity = cart[id] || 0; // the amount of id's within our cart{}
    sum += products[id].price * quantity;
  }

  return sum.toFixed(2);
}

function rootReducer(state = INT_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      // make a cart copy
      const cartCopy = { ...state.cart };

      // add based on the item's id, and if id is in the state, add 1 to it
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return { ...state, cart: cartCopy, cartTotal: calculateItemTotal(state.products, cartCopy) };
    }
    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cart };

      // remove one id, if no completely delete it
      cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id];
      }

      return { ...state, cart: cartCopy, cartTotal: calculateItemTotal(state.products, cartCopy) };
    }

    default:
      return state;
  }
}

export default rootReducer;
