import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, plusProduct } from "../redux/cart/actions";
import {
  decrementQuantity,
  incrementQuantity,
  resetQuantity,
} from "../redux/product/actions";
import { minusProduct } from "./../redux/cart/actions";

const CartItem = ({ itemInfo }) => {
  const currentProduct = useSelector(
    (state) =>
      state.products.filter((product) => product.id === itemInfo.productId)[0]
  );
  const dispatch = useDispatch();
  const { name, category, imgUrl, price, quantity, productId } = itemInfo;

  const handleIncrementProduct = (productId) => {
    dispatch(decrementQuantity(productId));
    dispatch(plusProduct(productId));
  };

  const handleDecrementProduct = (productId) => {
    dispatch(incrementQuantity(productId));
    dispatch(minusProduct(productId));
  };

  const handleDeleteProduct = (productId, quantity) => {
    dispatch(resetQuantity(productId, quantity));
    dispatch(deleteFromCart(productId));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={`${imgUrl}`} alt="product" />
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handleIncrementProduct(productId)}
            disabled={currentProduct.quantity === 0}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handleDecrementProduct(productId)}
            disabled={quantity === 0}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => handleDeleteProduct(productId, quantity)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
