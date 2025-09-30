import React from "react";
import "../styles/CartItem.css";
import { useCartDispatch } from "../context/CartContext";

function CartItem({ product }) {
  const dispatch = useCartDispatch();

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value, 10);
    if (qty > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: product.id, quantity: qty } });
    }
  };

  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: product.id } });
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="item-details">
        <h4>{product.title}</h4>
        <p>{product.details}</p>
        <div className="quantity-selector">
          <label>Qty: </label>
          <input
            type="number"
            min="1"
            value={product.quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button className="remove-item" onClick={removeItem}>
          Remove
        </button>
      </div>
      <div className="item-price">₹{(product.price * product.quantity).toLocaleString("en-IN")}</div>
    </div>
  );
}

export default CartItem;
