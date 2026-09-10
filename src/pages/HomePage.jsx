import products from "../data/products";
import ProductCard from "../component/ProductCard";

function HomePage() {
  return (
    <main className="products-container">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;