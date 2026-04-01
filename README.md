# DigiTools Platform

A digital tools marketplace built with React where users can browse premium tools, add them to a cart, and manage their purchases — all in a clean, responsive UI.

🔗 **Live Site:** [digitools-a6-imtiaz.netlify.app](https://digitools-a6-imtiaz.netlify.app/)
📁 **Repository:** [github.com/gitimtiaz/DigiTools.Platform.A6](https://github.com/gitimtiaz/DigiTools.Platform.A6)

---

## Features

- 🛍️ Browse 8 premium digital products with details and pricing
- 🛒 Add products to cart with a single click
- ❌ Remove individual items from the cart
- 💰 Live cart total calculation
- 🔄 Toggle between Products and Cart view
- 🔔 Toast notifications for add, remove, and checkout actions
- 📱 Fully responsive across all screen sizes

---

## 🎥 Demo Overview

### 🖥️ UI & Responsive Design
A seamless walkthrough of the full interface. This showcases the responsive Tailwind CSS layout, including the sticky Navbar, hero Banner, product grid, dynamic Pricing cards, and Footer.

![UI Overview](./src/screenshots/UI.overview.gif)

---

### 🛒 React State & Cart Logic
Demonstrates the core application logic: adding products to the cart, real-time badge updates, dynamic total calculation, removing items, and triggering toast notifications upon checkout.

![Cart Functionality](./src/screenshots/Cart.function.gif)

## Tech Stack

| Tech | Purpose |
|---|---|
| React.js | Component-based UI |
| Tailwind CSS | Utility-first styling |
| DaisyUI | Tailwind component library |
| JavaScript ES6+ | App logic |
| React Toastify | Toast notifications |
| Vite | Build tool |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/gitimtiaz/DigiTools.Platform.A6.git

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## Highlights

- **Clean component structure** — every section is a separate, reusable component with logic kept out of the UI
- **Scalable data handling** — all product data lives in `src/data/products.js`, ready to be swapped with an API call
- **Smooth UX** — toast notifications, button state changes, and hover effects make interactions feel polished

---

© 2026 DigiTools. Built by [Imtiaz](https://github.com/gitimtiaz)
