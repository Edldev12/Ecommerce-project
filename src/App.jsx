import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import Cart from "./component/Cart";
import OrdersPage from "./pages/OrdersPage";
import { CartProvider } from "./contaxt/CartProvider";

import "./App.css";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <CartProvider>

      <Header onSearch={setSearchQuery} />

      <Routes>
        <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;