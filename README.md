# FarmVede - Fresh Vegetables & Fruits E-commerce Store

A modern, responsive e-commerce web application for buying fresh vegetables and fruits online. Built with React and Vite for a fast and seamless shopping experience.

## Features

- 🛒 **Shopping Cart**: Add products to cart with quantity management
- 💾 **Persistent Cart**: Cart data is saved in browser local storage
- 🍎 **Product Catalog**: Browse a wide selection of fresh vegetables and fruits
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and intuitive user interface with smooth animations
- ✨ **Real-time Updates**: Instant cart updates and total price calculation

## Products Available

- Fresh Vegetables: Tomatoes, Carrots, Broccoli, Bell Peppers, Lettuce, Cucumbers
- Fresh Fruits: Apples, Bananas, Strawberries, Watermelon, Oranges, Grapes

## Technologies Used

- **React 18**: Modern UI library for building interactive interfaces
- **Vite**: Next-generation frontend build tool for fast development
- **CSS3**: Custom styling with modern features and animations
- **Local Storage API**: For persistent shopping cart data

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/addy176/farmvede.git
cd farmvede
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production-ready build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Usage

1. **Browse Products**: Scroll through the product catalog on the home page
2. **Add to Cart**: Click the "Add to Cart" button on any product
3. **View Cart**: Click the cart icon in the header to view your cart
4. **Manage Quantities**: Use the + and - buttons to adjust product quantities
5. **Remove Items**: Click the trash icon to remove items from cart
6. **Checkout**: Click "Proceed to Checkout" to complete your purchase

## Project Structure

```
farmvede/
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx    # Header with navigation and cart button
│   │   ├── ProductGrid.jsx   # Product listing grid
│   │   ├── ProductCard.jsx   # Individual product card
│   │   ├── Cart.jsx          # Shopping cart panel
│   │   └── Footer.jsx        # Footer component
│   ├── data/
│   │   └── products.js   # Product data
│   ├── styles/
│   │   └── main.css      # Global styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies

```

## Features in Detail

### Shopping Cart Management
- Add products with a single click
- Automatically groups same products and increases quantity
- Persists cart data across browser sessions using localStorage
- Real-time total price calculation

### Product Information
Each product includes:
- Product image (emoji icon)
- Name and category
- Description
- Price per unit (lb/head/each)
- Add to cart button
- Stock status

### Responsive Design
- Mobile-first approach
- Flexible grid layout for products
- Sliding cart panel for better mobile experience
- Touch-friendly buttons and controls

## Future Enhancements

- User authentication and profiles
- Order history and tracking
- Payment gateway integration
- Product search and filtering
- Product reviews and ratings
- Backend API integration
- Admin dashboard for product management

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please contact:
- Email: info@farmvede.com
- GitHub: [addy176](https://github.com/addy176)

---

**Happy Shopping!** 🌱🛒
