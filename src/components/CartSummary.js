import React from "react";
import "../styles/CartSummary.css";
import { useNavigate } from "react-router-dom";

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}

function CartSummary({ items }) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 59;
  const total = subtotal + shipping;
  const navigate = useNavigate();

  return (
    <div className="cart-summary">
      <p>Subtotal: {formatINR(subtotal)}</p>
      <p>Shipping: {shipping === 0 ? "Free" : formatINR(shipping)}</p>
      <p>Total: {formatINR(total)}</p>
      <button className="checkout-btn" onClick={() => navigate("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;
