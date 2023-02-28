import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="space-y-6">
      {cartItems.length > 0 ? (
        cartItems?.map((orderItem) => (
          <CartItem key={orderItem.productId} itemInfo={orderItem} />
        ))
      ) : (
        <h3>No Product Found. Please add to cart first!</h3>
      )}
    </div>
  );
};

export default CartItems;
