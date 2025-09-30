import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/BottomNav.css";

// SVG icons for Home, You, Cart, More, Menu
const icons = {
  home: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <path d="M4 12L14 4L24 12V24H4V12Z" stroke="#999" strokeWidth="2" strokeLinejoin="round"/>
      <rect x="11" y="16" width="6" height="8" rx="1" fill="#999"/>
    </svg>
  ),
  you: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <circle cx="14" cy="10" r="5" stroke="#999" strokeWidth="2"/>
      <path d="M5 22C5 17.58 22 17.58 23 22" stroke="#999" strokeWidth="2"/>
    </svg>
  ),
  cart: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <path d="M6 6H21L23 18H8L6 6Z" stroke="#999" strokeWidth="2" />
      <circle cx="10" cy="23" r="2" fill="#999"/>
      <circle cx="20" cy="23" r="2" fill="#999"/>
    </svg>
  ),
  more: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <circle cx="7" cy="14" r="2" fill="#999"/>
      <circle cx="14" cy="14" r="2" fill="#999"/>
      <circle cx="21" cy="14" r="2" fill="#999"/>
    </svg>
  ),
  menu: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <rect x="5" y="8" width="18" height="2" rx="1" fill="#999"/>
      <rect x="5" y="14" width="18" height="2" rx="1" fill="#999"/>
      <rect x="5" y="20" width="12" height="2" rx="1" fill="#999"/>
    </svg>
  )
};

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}>
        {icons.home}
        <span>Home</span>
      </NavLink>
      <NavLink to="/you" className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}>
        {icons.you}
        <span>You</span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}>
        {icons.cart}
        <span>Cart</span>
      </NavLink>
      <NavLink to="/more" className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}>
        {icons.more}
        <span>More</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
