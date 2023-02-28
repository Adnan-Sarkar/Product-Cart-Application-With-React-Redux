import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const state = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {state.length > 0 ? (
        state?.map((product) => (
          <Product
            key={product.id}
            productInfo={product}
            productId={product.id}
          />
        ))
      ) : (
        <h3>No Product Found. But You can add</h3>
      )}
    </div>
  );
};

export default ProductList;
