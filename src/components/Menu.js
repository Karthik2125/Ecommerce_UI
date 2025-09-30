import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";

const categories = [
  {
    id: 1,
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Headphones", "Cameras", "Smart Watches"],
    icon: "📱",
    color: "#ff6b35"
  },
  {
    id: 2,
    name: "Fashion",
    subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Bags", "Accessories"],
    icon: "👕",
    color: "#e91e63"
  },
  {
    id: 3,
    name: "Home & Kitchen",
    subcategories: ["Furniture", "Kitchen Appliances", "Home Decor", "Bedding", "Storage"],
    icon: "🏠",
    color: "#4caf50"
  },
  {
    id: 4,
    name: "Sports & Fitness",
    subcategories: ["Exercise Equipment", "Sports Gear", "Outdoor Recreation", "Yoga", "Running"],
    icon: "⚽",
    color: "#2196f3"
  },
  {
    id: 5,
    name: "Books & Media",
    subcategories: ["Fiction", "Non-Fiction", "Textbooks", "E-books", "Audiobooks"],
    icon: "📚",
    color: "#ff9800"
  },
  {
    id: 6,
    name: "Beauty & Health",
    subcategories: ["Skincare", "Makeup", "Hair Care", "Health Supplements", "Personal Care"],
    icon: "💄",
    color: "#9c27b0"
  },
  {
    id: 7,
    name: "Toys & Games",
    subcategories: ["Action Figures", "Board Games", "Educational Toys", "Outdoor Toys", "Video Games"],
    icon: "🎮",
    color: "#f44336"
  },
  {
    id: 8,
    name: "Automotive",
    subcategories: ["Car Accessories", "Bike Accessories", "Car Care", "Tools", "Electronics"],
    icon: "🚗",
    color: "#607d8b"
  }
];

const featuredDeals = [
  { name: "Up to 50% off Electronics", color: "#ff6b35" },
  { name: "Fashion Sale - 30% off", color: "#e91e63" },
  { name: "Home Essentials - 40% off", color: "#4caf50" },
  { name: "Sports Equipment - 25% off", color: "#2196f3" }
];

function Menu() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    // You can navigate to category-specific pages or filter products
    alert(`Browsing ${categoryName} - Feature coming soon!`);
  };

  return (
    <div className="menu-container">
      {/* Featured Deals Section */}
      <div className="deals-section">
        <h2>Today's Deals</h2>
        <div className="deals-grid">
          {featuredDeals.map((deal, index) => (
            <div key={index} className="deal-card" style={{ borderLeftColor: deal.color }}>
              <span className="deal-text">{deal.name}</span>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Shop by Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="category-header" style={{ backgroundColor: category.color }}>
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
              </div>
              <div className="category-content">
                <ul className="subcategories">
                  {category.subcategories.map((sub, index) => (
                    <li key={index} className="subcategory-item">{sub}</li>
                  ))}
                </ul>
                <button className="explore-btn">Explore All</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links-section">
        <h2>Quick Access</h2>
        <div className="quick-links">
          <button className="quick-link" onClick={() => navigate('/')}>
            🏠 Home
          </button>
          <button className="quick-link" onClick={() => navigate('/cart')}>
            🛒 My Cart
          </button>
          <button className="quick-link" onClick={() => navigate('/you')}>
            👤 My Orders
          </button>
          <button className="quick-link" onClick={() => navigate('/more')}>
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
