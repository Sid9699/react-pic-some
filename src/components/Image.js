import React, { useState, useContext } from "react";
import "../App.css";
import { Context } from "../Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart, addToFav, removeFromFav } = useContext(
    Context
  );

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => {
            toggleFavorite(img.id)
            removeFromFav(img.id)
          }}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => {
            toggleFavorite(img.id)
            addToFav(img)
          }}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  function cartIcon() {
    if (cartItems.some((item) => item.id === img.id)) {
      return (
        <i
          onClick={() => removeFromCart(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.urls.small} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
