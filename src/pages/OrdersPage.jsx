import { useState } from "react";
import { useCart } from "../hook/useCart";
import { useNavigate } from "react-router-dom";
import "./OrdersPage.css";

function OrdersPage() {
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });
  const navigate = useNavigate();
  const { reorder } = useCart();
  const removeOrder = (orderId) => {
    const updatedOrders = orders.filter(
      (order) => order.id !== orderId
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  };
  return (
    <main className="orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <div className="orders-empty">
          <p>You have no orders yet.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>

              <div className="order-header">
                <div>
                  <h2>Order #{order.id}</h2>
                  <p>{order.date}</p>
                </div>

                <span className="order-status">
                  {order.status}
                </span>
              </div>

              <div className="order-customer">
                <p>
                  <strong>Name:</strong> {order.customer.name}
                </p>

                <p>
                  <strong>Phone:</strong> {order.customer.phone}
                </p>

                <p>
                  <strong>Address:</strong> {order.customer.address}
                </p>
              </div>

              <div className="order-items">
                <h3>Items</h3>

                {order.items.map((item) => (
                  <div
                    className="order-item"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div>
                      <h4>{item.title}</h4>

                      <p>
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-total">
                <span>Total</span>
                <strong>
                  ${order.total.toFixed(2)}
                </strong>
              </div>
              <div className="order-actions">
                <button
                  className="reorder-button"
                  onClick={() => {
                    reorder(order.items);
                    navigate("/cart");
                  }}
                >
                  Reorder
                </button>
                <button
                  className="remove-order-button"
                  onClick={() => removeOrder(order.id)}
                >
                  Remove Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default OrdersPage;