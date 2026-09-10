import { Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";

import { CartProvider } from "./contaxt/CartProvider";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;