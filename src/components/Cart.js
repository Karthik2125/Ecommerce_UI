import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCartState } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const { cartItems } = useCartState();

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p style={{ padding: 40, fontSize: 18 }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        )}
      </div>
      <CartSummary items={cartItems} />
    </div>
  );
}

export default Cart;
