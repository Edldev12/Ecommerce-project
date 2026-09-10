import { useState } from "react";
import { useCart } from "../hook/useCart";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { cartQuantity } = useCart();
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };
  return (
    <header>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <img src="/images/logo-white.png" alt="Logo" />
          </Link>
        </div>

        <div className="middle-section">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />

          <button>
            <img
              src="/images/search-icon.png"
              alt="Search"
              className="search-icon"
            />
          </button>
        </div>

        <div className="right-section">
          <Link to="/orders" className="header-link">
            Orders
          </Link>

          <Link to="/cart" className="header-link">
            <div className="cart-wrapper">
              <img
                src="/images/cart-icon.png"
                alt="Cart"
                className="cart-icon"
              />

              <span
                className={`cart-quantity ${cartQuantity >= 10 ? "quantity-large" : ""
                  }`}
              >
                {cartQuantity}
              </span>

              <div className="cart-text">Cart</div>
            </div>
          </Link>
          <Link to="/contact" className="header-link">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;