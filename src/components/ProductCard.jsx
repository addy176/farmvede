import React from 'react'

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <div className="product-price">
            ${product.price.toFixed(2)}
            <span className="product-unit">/{product.unit}</span>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
