import React from "react";
import ProductInput from "../components/ProductInput";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  return (
    <>
      <main className="py-16">
        <div className="productWrapper">
          <ProductList />
          <ProductInput />
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
