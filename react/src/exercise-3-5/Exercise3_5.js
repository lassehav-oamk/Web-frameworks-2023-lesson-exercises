import React from "react";
import ShoppingCart from "./components/ShoppingCart";

export default function Exercise3_5() {
  const items = [
    {
      id: 1,
      name: "Taco Seasoning",
      quantityInCart: 3,
      totalPrice: 4.5,
    },
    {
      id: 2,
      name: "Pinto Beans",
      quantityInCart: 2,
      totalPrice: 2,
    },
    {
      id: 3,
      name: "Sour Cream",
      quantityInCart: 1,
      totalPrice: 3,
    },
    {
      id: 4,
      name: "Bread",
      quantityInCart: 5,
      totalPrice: 9.5,
    },
    {
      id: 5,
      name: "Butter",
      quantityInCart: 5,
      totalPrice: 7.5,
    },
    {
      id: 6,
      name: "Apples",
      quantityInCart: 7,
      totalPrice: 1.25,
    },
  ];

  return (
    <div className="App">
      <ShoppingCart items={items} />
    </div>
  );
}
