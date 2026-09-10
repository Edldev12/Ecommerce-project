import { useState } from "react";
import "./Checkout.css";

function Checkout({ cart, total, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!/^09\d{8}$/.test(formData.phone)) {
      setMessage("Please enter a valid Ethiopian phone number.");
      return;
    }

    console.log("Order:", {
      customer: formData,
      items: cart,
      total: total,
    });

    setMessage("Order placed successfully!");

    setFormData({
      name: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout">

        <div className="checkout-header">
          <h2>Checkout</h2>

          <button
            className="close-checkout"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="09XXXXXXXX"
          />

          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="3"
          />

          <div className="checkout-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          {message && (
            <p className="checkout-message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="place-order"
          >
            Place Order
          </button>

        </form>
      </div>
    </div>
  );
}

export default Checkout;