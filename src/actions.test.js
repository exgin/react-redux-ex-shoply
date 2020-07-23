import { addToCart, removeFromCart } from './actions';

// getting a not a function error | when importing a non used function, it runs passed
it('should return the type & specific id', () => {
  expect(addToCart('32')).toEqual({ type: 'ADD_TO_CART', id: '32' });
});
