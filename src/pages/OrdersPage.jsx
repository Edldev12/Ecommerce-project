import { useState } from "react";
import "./OrdersPage.css";

function OrdersPage() {
  const [orders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });
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

            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default OrdersPage;