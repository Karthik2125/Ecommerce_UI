import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import More from "./components/More";
import Menu from "./components/Menu";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import { useCartState } from "./context/CartContext";

function AppContent() {
  const { cartItems } = useCartState();

  return (
    <div style={{ paddingBottom: "60px" }}>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/you" element={<Profile />} />
        <Route path="/more" element={<More />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
