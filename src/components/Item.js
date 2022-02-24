import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);

  const addItemToCart = () => {
    // inCart === false
    setCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : "  "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItemToCart} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove from cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
