// Cart.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './Redux/Cartslice';

const Cart = React.memo(({ cartItems, totalQuantity, totalPrice }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} x {item.quantity} - ${item.total}
            </p>
            <button onClick={() => handleRemoveCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Cart is empty.</p>
      )}
      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
});

export default Cart;
