import React from "react";
import { useSelector } from "react-redux";

const CartBill = () => {
  const cartProducts = useSelector((state) => state.cart);
  const totalBill = cartProducts.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  return (
    <div className="billDetailsCard">
      <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <p>
            BDT <span className="lws-subtotal">{totalBill}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>
            BDT <span className="lws-discount">0</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>VAT</p>
          <p>
            BDT <span className="vat">0</span>
          </p>
        </div>
        <div className="flex items-center justify-between pb-4">
          <p className="font-bold">TOTAL</p>
          <p className="font-bold">
            BDT <span className="lws-total">{totalBill}</span>
          </p>
        </div>
        <button className="placeOrderbtn">place order</button>
      </div>
    </div>
  );
};

export default CartBill;
