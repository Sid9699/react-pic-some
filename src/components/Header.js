import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import fire from "../config/fire";
import "../App.css";

function Header(props) {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <header>
      <a href='#' onClick={()=>fire.auth().signOut()} >Log Out</a>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
