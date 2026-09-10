import './ProductCard.css';
function ProductCard({ product }) {
  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      {/* Product Information */}
      <div className="product-info">

        <h3>{product.title}</h3>

        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="reviews">37</span>
        </div>

        <p className="product-price">
          ${product.price}
        </p>

        {/* Quantity */}
        <select className="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        {/* Add to Cart */}
        <button className="add-to-cart">
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;