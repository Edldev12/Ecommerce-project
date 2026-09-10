import Header from "./component/Header";
import { CartProvider } from "./contaxt/CartProvider";
import products from "./data/products";
import "./App.css";
import ProductCard from "./component/ProductCard";

function App() {
  return (
    <CartProvider>
      <Header />
      <main className="products-container">
        <h1>our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product} />
          ))}
        </div>
      </main>
    </CartProvider>
  );
}

export default App;