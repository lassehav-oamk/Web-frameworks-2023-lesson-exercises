import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart({ items }) {
  //console.log(items);

  //item => <ShoppingCartItem />
  /*
  function(item) { 
    return <ShoppingCartItem />
  }
  */

  return (
    <div style={{ width: "60%" }}>
      ShoppingCart
      {items.map((item) => {
        console.log(item.name);
        return (
          <ShoppingCartItem
            productName={item.name}
            quantity={item.quantityInCart}
            totalPrice={item.totalPrice}
          />
        );
      })}
    </div>
  );
}
