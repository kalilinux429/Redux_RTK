import React, { useCallback, useMemo, Suspense, lazy } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCart } from './Redux/Cartslice';

// Lazy load the Cart component
const Cart = lazy(() => import('./Cart'));

const Product = React.memo(() => {
  const dispatch = useDispatch();

  // Use selector to only select necessary parts of the cart state
  const { item, totalQuantity, totalPrice } = useSelector(
    (state) => ({
      item: state.cart.item,
      totalQuantity: state.cart.totalQuantity,
      totalPrice: state.cart.totalPrice, ///rathe than selecting whole cat we can selec required cart items
    }),
    shallowEqual // To prevent unnecessary re-renders when values don't change
  );

  const products = useMemo(() => [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
  ], []);

  const handleCart = useCallback(
    (product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleCart(item)}>Add to Cart</button>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}

      {/* Suspense is used to display a fallback UI while the Cart component is loading */}
      <Suspense fallback={<div>Loading Cart...</div>}>
        <Cart cartItems={item} totalQuantity={totalQuantity} totalPrice={totalPrice} />
      </Suspense>
    </div>
  );
});

export default Product;
