# 🛒 Ecommerce Website

A modern and responsive Ecommerce website built with **React.js** and **Vite**.
The application allows users to browse products, search for products, manage their cart, checkout, and view or reorder previous orders.
 ``` this is educational project ```
## 🚀 Features

* 🏠 Home page with product listing
* 🔍 Product search
* 📦 Product cards with images, prices, and ratings
* 🔢 Select product quantity before adding to cart
* 🛒 Add products to cart
* ➕ Increase cart quantity
* ➖ Decrease cart quantity
* ❌ Remove products from cart
* 💰 Automatic subtotal, tax, delivery, and total calculation
* 💳 Checkout form
* 📱 Ethiopian phone number validation
* 📋 Order history
* 🔄 Reorder previous orders
* 🗑️ Remove orders
* 📞 Contact page
* 📱 Responsive design

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* React Router
* React Context API
* Local Storage

## 📁 Project Structure

```text
src/
├── component/
│   ├── Cart.jsx
│   ├── Cart.css
│   ├── Checkout.jsx
│   ├── Checkout.css
│   ├── Header.jsx
│   ├── Header.css
│   ├── ProductCard.jsx
│   └── ProductCard.css
│
├── contaxt/
│   ├── CartContext.jsx
│   └── CartProvider.jsx
│
├── data/
│   └── products.js/
│
├── hook/
│   └── useCart.js
│
├── pages/
│   ├── HomePage.jsx
│   ├── HomePage.css
│   ├── CheckoutPage.jsx
│   ├── OrdersPage.jsx
│   ├── OrdersPage.css
│   ├── ContactPage.css
│   └── ContactPage.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## 🛒 Cart System

The cart is managed using the **React Context API**.

Users can:

* Add products
* Choose quantity
* Increase quantity
* Decrease quantity
* Remove products
* View cart total

The cart also calculates:

```text
Subtotal
Tax (15%)
Delivery
----------------
Total
```

## 📋 Orders

After checkout, the order is saved in **Local Storage**.

Users can:

* View previous orders
* See order details
* Reorder products
* Remove an order

## 🔍 Search

Users can search products by their product name.

Example:

```text
Search: toaster
```

The product list automatically displays matching products.

## 📞 Contact

The Contact page provides:

* Contact information
* Name input
* Email input
* Message form

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Edldev12/Ecommerce.git
```

### 2. Open the project

```bash
cd Ecommerce
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run locally using Vite.

## 📦 Build for Production

```bash
npm run build
```
## 🚀 Future Features

The following features are planned for future development:

* ❤️ **Favorites / Wishlist**

  * Add products to favorites
  * Remove products from favorites
  * View favorite products
  * Save favorites using Local Storage

* 🔎 **Product Details**

  * View detailed product information
  * Product images, description, price, and availability

* 🏷️ **Categories & Filtering**

  * Filter products by category
  * Sort products by price and rating

* 👤 **User Authentication**

  * User registration and login
  * User profile
  * Secure authentication

* 🛠️ **Admin Dashboard**

  * Add products
  * Edit products
  * Delete products
  * Enable or disable products
  * Manage customer orders

* 📊 **Order Management**

  * Update order status
  * Track orders
  * View detailed order information

* 💳 **Payment Integration**

  * Add online payment support
  * Payment confirmation

* 🌙 **Dark Mode**

  * Light and dark themes
  * Save theme preference

* 📱 **Improved Mobile Experience**

  * Better responsive design
  * Mobile-friendly navigation

## 🎯 Project Goal

The goal of this project is to practice building a complete Ecommerce application using React, including:

* Components
* Props
* State
* Event handling
* Context API
* React Router
* Form handling
* Local Storage
* Reusable components
* Responsive CSS

## 👨‍💻 Author

**Edlawit Tsegaye**

Software Engineering Student | Full Stack Developer
