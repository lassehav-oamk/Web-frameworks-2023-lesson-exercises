import React from "react";
import "./ShoppingCartItem.css";

export default function ShoppingCartItem({
  productName,
  quantity,
  totalPrice,
}) {
  return (
    <div className="shoppingCartItem">
      <div>{productName}</div>
      <div>{quantity} x</div>
      <div>{totalPrice} €</div>
    </div>
  );
}
