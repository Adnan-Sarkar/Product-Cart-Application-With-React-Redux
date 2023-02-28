import {
  ADDTOCART,
  PLUSPRODUCT,
  MINUSPRODUCT,
  DELETEFROMCART,
} from "./actionTypes";

export const addToCart = (productId, name, category, imgUrl, price) => {
  return {
    type: ADDTOCART,
    payload: {
      productId,
      name,
      category,
      imgUrl,
      price,
    },
  };
};

export const plusProduct = (productID) => {
  return {
    type: PLUSPRODUCT,
    payload: productID,
  };
};

export const minusProduct = (productID) => {
  return {
    type: MINUSPRODUCT,
    payload: productID,
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: DELETEFROMCART,
    payload: productId,
  };
};
