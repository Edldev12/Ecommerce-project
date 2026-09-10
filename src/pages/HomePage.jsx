import products from "../data/products";
import ProductCard from "../component/ProductCard";

function HomePage({ searchQuery }) {

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <main className="products-container">

      <h1>Our Products</h1>

      <div className="product-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}

      </div>

    </main>
  );
}

export default HomePage;