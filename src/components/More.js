import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/More.css";

const helpTopics = [
  "Track Your Order",
  "Returns & Refunds", 
  "Payment Issues",
  "Account Settings",
  "Product Information",
  "Delivery Information"
];

const quickActions = [
  { name: "Customer Service", icon: "🎧", color: "#4caf50" },
  { name: "Return Items", icon: "📦", color: "#ff9800" },
  { name: "Your Wishlist", icon: "❤️", color: "#e91e63" },
  { name: "Gift Cards", icon: "🎁", color: "#9c27b0" }
];

function More() {
  const navigate = useNavigate();

  const handleNavigation = (action) => {
    switch(action) {
      case "Customer Service":
        alert("Customer Service - Feature coming soon!");
        break;
      case "Return Items":
        alert("Returns - Feature coming soon!");
        break;
      case "Your Wishlist":
        alert("Wishlist - Feature coming soon!");
        break;
      case "Gift Cards":
        alert("Gift Cards - Feature coming soon!");
        break;
      default:
        alert(`${action} - Feature coming soon!`);
    }
  };

  return (
    <div className="more-container">
      {/* Quick Actions */}
      <div className="quick-actions-section">
        <h2>Quick Actions</h2>
        <div className="quick-actions-grid">
          {quickActions.map((action, index) => (
            <div 
              key={index} 
              className="quick-action-card"
              onClick={() => handleNavigation(action.name)}
            >
              <div className="action-icon" style={{ backgroundColor: action.color }}>
                {action.icon}
              </div>
              <span className="action-name">{action.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Account & Services */}
      <div className="services-section">
        <h2>Account & Services</h2>
        <div className="services-list">
          <div className="service-item" onClick={() => navigate('/you')}>
            <div className="service-info">
              <h4>Your Account</h4>
              <p>Edit profile, addresses, and payment methods</p>
            </div>
            <span className="service-arrow">→</span>
          </div>
          
          <div className="service-item" onClick={() => handleNavigation("Prime Membership")}>
            <div className="service-info">
              <h4>Prime Membership</h4>
              <p>Join Prime for fast, free delivery</p>
            </div>
            <span className="service-arrow">→</span>
          </div>
          
          <div className="service-item" onClick={() => handleNavigation("Your Lists")}>
            <div className="service-info">
              <h4>Your Lists</h4>
              <p>View, modify, and share your lists</p>
            </div>
            <span className="service-arrow">→</span>
          </div>
          
          <div className="service-item" onClick={() => handleNavigation("ShopWave Pay")}>
            <div className="service-info">
              <h4>ShopWave Pay</h4>
              <p>Pay securely across the web</p>
            </div>
            <span className="service-arrow">→</span>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="help-section">
        <h2>Help & Customer Service</h2>
        <div className="help-topics">
          {helpTopics.map((topic, index) => (
            <div 
              key={index} 
              className="help-topic"
              onClick={() => handleNavigation(topic)}
            >
              <span className="help-icon">?</span>
              <span className="topic-name">{topic}</span>
            </div>
          ))}
        </div>
        
        <div className="contact-support">
          <h4>Still need help?</h4>
          <button className="contact-btn" onClick={() => handleNavigation("Contact Us")}>
            Contact Customer Service
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="settings-section">
        <h2>Settings</h2>
        <div className="settings-list">
          <div className="setting-option">
            <span>Country & Language</span>
            <select>
              <option>India - English</option>
              <option>India - Tamil</option>
              <option>India - Hindi</option>
            </select>
          </div>
          
          <div className="setting-option">
            <span>Currency</span>
            <select>
              <option>₹ INR - Indian Rupee</option>
              <option>$ USD - US Dollar</option>
            </select>
          </div>
          
          <div className="setting-option">
            <span>Notifications</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* App Info */}
      <div className="app-info-section">
        <div className="app-info">
          <p>ShopWave App Version 1.0.0</p>
          <p>© 2024 ShopWave. All rights reserved.</p>
        </div>
        
        <div className="legal-links">
          <span onClick={() => handleNavigation("Privacy Policy")}>Privacy Policy</span>
          <span onClick={() => handleNavigation("Terms of Service")}>Terms of Service</span>
          <span onClick={() => handleNavigation("About Us")}>About ShopWave</span>
        </div>
      </div>
    </div>
  );
}

export default More;
