import {
  ADDED,
  DECREMENTQUANTITY,
  INCREMENTQUANTITY,
  RESETQUANTITY,
} from "./actionTypes";

const maxId = (state) =>
  state.reduce((max, currentProduct) => Math.max(max, currentProduct.id), -1);

const added = (state, action) => {
  const { name, category, imgUrl, price, quantity } = action.payload;
  return [
    ...state,
    {
      id: maxId(state) + 1,
      name,
      category,
      imgUrl,
      price,
      quantity,
    },
  ];
};

const decrementQuantity = (state, action) => {
  return state.map((product) => {
    if (product.id === action.payload) {
      return {
        ...product,
        quantity: product.quantity - 1,
      };
    } else {
      return product;
    }
  });
};

const incrementQuantity = (state, action) => {
  return state.map((product) => {
    if (product.id === action.payload) {
      return {
        ...product,
        quantity: product.quantity + 1,
      };
    } else {
      return product;
    }
  });
};

const resetQuantity = (state, action) => {
  return state.map((product) => {
    if (product.id === action.payload.id) {
      return {
        ...product,
        quantity: product.quantity + action.payload.totalOrder,
      };
    } else {
      return product;
    }
  });
};

const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADDED:
      return added(state, action);

    case DECREMENTQUANTITY:
      return decrementQuantity(state, action);

    case INCREMENTQUANTITY:
      return incrementQuantity(state, action);

    case RESETQUANTITY:
      return resetQuantity(state, action);

    default:
      return state;
  }
};

export default productReducer;
