import React, { useState } from "react";
import "../styles/Profile.css";

// Sample order data
const sampleOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-09-15",
    status: "Delivered",
    total: 45999,
    items: [
      { name: "Lenovo IdeaPad Slim 3 Laptop", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop", quantity: 1, price: 45999 }
    ]
  },
  {
    id: "ORD-2024-002", 
    date: "2024-09-12",
    status: "Shipped",
    total: 15798,
    items: [
      { name: "Samsung Galaxy M14 5G", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop", quantity: 1, price: 12999 },
      { name: "Puma Running Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop", quantity: 1, price: 2499 }
    ]
  },
  {
    id: "ORD-2024-003",
    date: "2024-09-10", 
    status: "Processing",
    total: 8999,
    items: [
      { name: "Sony WH-CH720N Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop", quantity: 1, price: 8999 }
    ]
  }
];

function formatINR(price) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);
}

function Profile() {
  const [activeTab, setActiveTab] = useState("orders");
  const [feedbackForm, setFeedbackForm] = useState({ orderId: "", rating: 5, comment: "" });

  const getStatusColor = (status) => {
    switch(status) {
      case "Delivered": return "#4caf50";
      case "Shipped": return "#ff9800"; 
      case "Processing": return "#2196f3";
      case "Cancelled": return "#f44336";
      default: return "#666";
    }
  };

  const cancelOrder = (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      alert(`Order ${orderId} has been cancelled successfully!`);
    }
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    alert(`Feedback submitted for order ${feedbackForm.orderId}!`);
    setFeedbackForm({ orderId: "", rating: 5, comment: "" });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="user-info">
          <div className="avatar">👤</div>
          <div className="user-details">
            <h2>Karthik</h2>
            <p>karthik2125@gmail.com</p>
            <p>Member since September 2024</p>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          My Orders
        </button>
        <button 
          className={`tab ${activeTab === "feedback" ? "active" : ""}`}
          onClick={() => setActiveTab("feedback")}
        >
          Feedback
        </button>
        <button 
          className={`tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          Account Settings
        </button>
      </div>

      <div className="profile-content">
        {activeTab === "orders" && (
          <div className="orders-section">
            <h3>Your Orders</h3>
            {sampleOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <span className="order-id">Order #{order.id}</span>
                    <span className="order-date">Ordered on {order.date}</span>
                  </div>
                  <div className="order-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                    <span className="order-total">{formatINR(order.total)}</span>
                  </div>
                </div>
                
                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">Qty: {item.quantity} × {formatINR(item.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-actions">
                  {order.status === "Processing" && (
                    <button 
                      className="cancel-btn"
                      onClick={() => cancelOrder(order.id)}
                    >
                      Cancel Order
                    </button>
                  )}
                  <button className="track-btn">Track Order</button>
                  <button className="reorder-btn">Buy Again</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "feedback" && (
          <div className="feedback-section">
            <h3>Submit Feedback</h3>
            <form onSubmit={submitFeedback} className="feedback-form">
              <div className="form-group">
                <label>Select Order</label>
                <select 
                  value={feedbackForm.orderId}
                  onChange={(e) => setFeedbackForm({...feedbackForm, orderId: e.target.value})}
                  required
                >
                  <option value="">Select an order</option>
                  {sampleOrders.map(order => (
                    <option key={order.id} value={order.id}>{order.id}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Rating</label>
                <div className="rating-input">
                  {[5,4,3,2,1].map(rating => (
                    <label key={rating} className="rating-option">
                      <input 
                        type="radio" 
                        name="rating" 
                        value={rating}
                        checked={feedbackForm.rating === rating}
                        onChange={(e) => setFeedbackForm({...feedbackForm, rating: parseInt(e.target.value)})}
                      />
                      <span>★</span> {rating}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label>Comments</label>
                <textarea
                  value={feedbackForm.comment}
                  onChange={(e) => setFeedbackForm({...feedbackForm, comment: e.target.value})}
                  rows="4"
                  placeholder="Share your experience..."
                />
              </div>
              
              <button type="submit" className="submit-feedback-btn">Submit Feedback</button>
            </form>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="settings-section">
            <h3>Account Settings</h3>
            <div className="settings-options">
              <div className="setting-item">
                <h4>Personal Information</h4>
                <p>Update your name, email, and phone number</p>
                <button className="setting-btn">Edit Profile</button>
              </div>
              
              <div className="setting-item">
                <h4>Delivery Addresses</h4>
                <p>Manage your saved delivery addresses</p>
                <button className="setting-btn">Manage Addresses</button>
              </div>
              
              <div className="setting-item">
                <h4>Payment Methods</h4>
                <p>Add or remove payment methods</p>
                <button className="setting-btn">Manage Payments</button>
              </div>
              
              <div className="setting-item">
                <h4>Notifications</h4>
                <p>Control email and SMS notifications</p>
                <button className="setting-btn">Notification Settings</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
