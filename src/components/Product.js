import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity } from "../redux/product/actions";
import { addToCart } from "./../redux/cart/actions";

const Product = ({ productInfo, productId }) => {
  const dispatch = useDispatch();
  const { name, category, imgUrl, price, quantity } = productInfo;

  const handleAddToCart = (productId, productDetails) => {
    const { name, category, imgUrl, price } = productDetails;
    dispatch(addToCart(productId, name, category, imgUrl, price));
    dispatch(decrementQuantity(productId));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={`${imgUrl}`} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => handleAddToCart(productId, productInfo)}
          disabled={quantity === 0}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
