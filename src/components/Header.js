import React from "react";
import "../styles/Header.css";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">ShopWave</span>
        <span className="deliver-to">Deliver to <strong>Coimbatore 641107</strong></span>
      </div>
      <div className="header-center">
        <input type="text" className="search-bar" placeholder="Search ShopWave" />
      </div>
      <div className="header-right">
        <div className="account-info">
          <div>Hello, sign in</div>
          <div>Account & Lists & Orders</div>
        </div>
        <div className="cart-status">
          Cart <span className="cart-count">{cartCount || 0}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
