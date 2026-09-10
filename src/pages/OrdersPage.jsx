import "./OrdersPage.css";
function OrdersPage() {
  return (
    <main className="orders-page">
      <h1>My Orders</h1>

      <div className="orders-empty">
        <p>You have no orders yet.</p>
      </div>
    </main>
  );
}

export default OrdersPage;