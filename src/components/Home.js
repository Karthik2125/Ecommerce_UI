import React from "react";
import { useCartDispatch } from "../context/CartContext";
import "../styles/Home.css";

const products = [
  { 
    id: 1, 
    name: "Lenovo IdeaPad Slim 3 Laptop", 
    brand: "Lenovo",
    price: 45999, 
    originalPrice: 55999,
    rating: "4.2 (5,432)",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop", 
    details: "15.6 inch, 8GB RAM" 
  },
  { 
    id: 2, 
    name: "Samsung Galaxy M14 5G Smartphone", 
    brand: "Samsung",
    price: 12999, 
    originalPrice: 16999,
    rating: "4.1 (28,765)",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop", 
    details: "128GB, Black" 
  },
  { 
    id: 3, 
    name: "Puma Unisex Running Shoes", 
    brand: "Puma",
    price: 2499, 
    originalPrice: 4999,
    rating: "4.0 (16,543)",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop", 
    details: "Sports Shoes" 
  },
  { 
    id: 4, 
    name: "Sony WH-CH720N Noise Canceling Headphones", 
    brand: "Sony",
    price: 8999, 
    originalPrice: 12999,
    rating: "4.3 (11,234)",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop", 
    details: "Wireless Bluetooth" 
  }
];

function formatINR(price) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);
}

function Home() {
  const dispatch = useCartDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home-container">
      <div className="deals-banner">
        <h2>Great deals on top brands</h2>
        <p>Shop electronics, home essentials & more</p>
      </div>
      
      <div className="categories-section">
        <h3>Shop by Category</h3>
        <div className="categories">
          <div className="category">Electronics</div>
          <div className="category">Home & Kitchen</div>
          <div className="category">Fashion</div>
          <div className="category">Sports</div>
          <div className="category">Books</div>
          <div className="category">Beauty</div>
        </div>
      </div>

      <div className="products-section">
        <h3>Recommended for you</h3>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="product-brand">{product.brand}</div>
                <h4 className="product-name">{product.name}</h4>
                <div className="product-rating">★★★★☆ {product.rating}</div>
                <div className="product-price">
                  {formatINR(product.price)} 
                  <span className="original-price">{formatINR(product.originalPrice)}</span>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
