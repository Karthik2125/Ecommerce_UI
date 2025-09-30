import React, { useState } from "react";
import "../styles/Checkout.css";
import { useCartState } from "../context/CartContext";

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}

function Checkout() {
  const { cartItems } = useCartState();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 59;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully! Total: ${formatINR(total)}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-checkout">
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart before checkout.</p>
          <button onClick={() => window.history.back()} className="back-btn">
            Go Back to Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-form">
          <h2>Checkout</h2>
          
          {/* Delivery Address */}
          <div className="section">
            <h3>1. Delivery Address</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House no, Building, Street, Area"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Coimbatore"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Tamil Nadu"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="641107"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Method */}
          <div className="section">
            <h3>2. Payment Method</h3>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>💳 Credit/Debit Card</span>
              </label>
              
              <label className="payment-option">
                <input
                  type="radio"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>📱 UPI (GPay, PhonePe, Paytm)</span>
              </label>
              
              <label className="payment-option">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>💰 Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="order-summary-sidebar">
          <div className="order-summary">
            <h3>Order Summary</h3>
            
            <div className="items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">Qty: {item.quantity}</span>
                  </div>
                  <span className="item-price">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="summary-totals">
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "FREE" : formatINR(shipping)}</span>
              </div>
              <div className="summary-line">
                <span>Tax (GST):</span>
                <span>{formatINR(tax)}</span>
              </div>
              <div className="summary-line total">
                <span>Total:</span>
                <span>{formatINR(total)}</span>
              </div>
            </div>
            
            <button className="place-order-btn" onClick={handleSubmit}>
              Place Order - {formatINR(total)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
