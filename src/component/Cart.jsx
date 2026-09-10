import { useNavigate } from "react-router-dom";
import { useCart } from "../hook/useCart";
import "./Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();
  const navigate = useNavigate();
  return (
    <div className="cart-page">

      <div className="cart-products">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart-item-info">
                  <h3>{item.title}</h3>

                  <p>${item.price}</p>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                  <div className="cart-item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="quantity-button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Tax (15%)</span>
          <span>${(cartTotal * 0.15).toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>$5.00</span>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-total">
          <span>Total</span>
          <strong>
            ${(cartTotal + cartTotal * 0.15 + 5).toFixed(2)}
          </strong>
        </div>

        <button className="checkout-button"
          onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;