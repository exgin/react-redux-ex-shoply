import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import data from './data.json';

const INT_STATE = { products: data.products, cart: {} };

function rootReducer(state = INT_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // make a cart copy
      const cartCopy = { ...state.cart };
      // add based on the item's id, and if id is in the state, add 1 to it
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return { ...state, cart: cartCopy };

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter };

    default:
      return state;
  }
}

export default rootReducer;
