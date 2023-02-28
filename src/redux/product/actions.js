import {
  ADDED,
  DECREMENTQUANTITY,
  INCREMENTQUANTITY,
  RESETQUANTITY,
} from "./actionTypes";

export const added = ({ name, category, imgUrl, price, quantity }) => {
  return {
    type: ADDED,
    payload: {
      name,
      category,
      imgUrl,
      price,
      quantity,
    },
  };
};

export const incrementQuantity = (productId) => {
  return {
    type: INCREMENTQUANTITY,
    payload: productId,
  };
};

export const decrementQuantity = (productId) => {
  return {
    type: DECREMENTQUANTITY,
    payload: productId,
  };
};

export const resetQuantity = (productId, totalOrder) => {
  return {
    type: RESETQUANTITY,
    payload: {
      id: productId,
      totalOrder,
    },
  };
};
