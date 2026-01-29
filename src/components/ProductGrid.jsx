import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid({ products, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">Our Fresh Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
