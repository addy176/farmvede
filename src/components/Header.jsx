import React from 'react'

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">FarmVede</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#about" className="nav-link">About</a>
          </nav>
          <button className="cart-button" onClick={onCartClick}>
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
