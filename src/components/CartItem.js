import React, { useContext } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(item.id)}
        className="ri-delete-bin-line"
      ></i>
      <img src={item.urls.small} width="130px" alt="unsplash_image" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
