import {
  ADDTOCART,
  PLUSPRODUCT,
  MINUSPRODUCT,
  DELETEFROMCART,
} from "./actionTypes";

const addToCart = (state, action) => {
  const { productId } = action.payload;
  const isAvailable = state?.some(
    (orderItem) => orderItem.productId === productId
  );
  if (isAvailable) {
    return state.map((orderItem) => {
      if (orderItem.productId === productId) {
        return {
          ...orderItem,
          quantity: Number(orderItem.quantity) + 1,
        };
      } else {
        return orderItem;
      }
    });
  } else {
    return [
      ...state,
      {
        ...action.payload,
        quantity: 1,
      },
    ];
  }
};

const plusProduct = (state, action) => {
  return state.map((product) => {
    if (product.productId === action.payload) {
      return {
        ...product,
        quantity: Number(product.quantity) + 1,
      };
    } else {
      return product;
    }
  });
};

const minusProduct = (state, action) => {
  const updatedState = state.map((product) => {
    if (product.productId === action.payload) {
      return {
        ...product,
        quantity: Number(product.quantity) - 1,
      };
    } else {
      return product;
    }
  });
  return updatedState.filter((product) => product.quantity > 0);
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTOCART:
      return addToCart(state, action);

    case PLUSPRODUCT:
      return plusProduct(state, action);

    case MINUSPRODUCT:
      return minusProduct(state, action);

    case DELETEFROMCART:
      return state.filter((product) => product.productId !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
