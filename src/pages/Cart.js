import React, { useContext, useState } from "react";
import "../App.css";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart(props) {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        {cartItems.length > 0 && (
          <button onClick={placeOrder}>{buttonText}</button>
        )}
      </div>
    </main>
  );
}

export default Cart;
