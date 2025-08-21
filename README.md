# 🚀 Quick Grab - Food Ordering Platform

[![Live Site](https://img.shields.io/badge/Live_Site-Quick_Grab-8A2BE2)](https://quick-grab-frontend.vercel.app/)

A modern, full-stack service booking application built with React. Quick Grab seamlessly connects users with local service providers, offering an intuitive experience from discovery to secure payment.

![Quick Grab Mockup](https://via.placeholder.com/800x400/8A2BE2/FFFFFF?text=Quick+Grab+App+Preview) 
*Replace with an actual screenshot or GIF of your application*

---

## ✨ Features

### 🎯 For Customers
- **Browse & Discover**: Explore services by category with beautiful UI and smooth animations.
- **Smart Search & Filter**: Find the right service provider instantly with real-time search and advanced filters (price, rating, availability).
- **Interactive Booking**: Select dates, times, and specific service details in an intuitive flow.
- **Secure Payments**: Integrated Stripe checkout supporting cards and other payment methods.
- **Review System**: Rate and review completed services to help the community.

### 🔧 For Service Providers
- **Service Management**: Create, update, and manage your listed services with ease.
- **Booking Dashboard**: View, confirm, and manage incoming appointments in a dedicated dashboard.
- **Performance Analytics**: Track earnings, popularity, and customer feedback.

### 🌐 For Everyone
- **Authentication**: Secure login/signup via Firebase Auth with social providers (Google, Facebook).
- **Real-time Updates**: Get instant notifications for new bookings, messages, and status changes.
- **Responsive Design**: A flawless experience on desktop, tablet, and mobile devices.
- **Favorites & History**: Save favorite providers and view your booking history.

---

## 🛠️ Tech Stack & Architecture

**Frontend Framework:** React 18 + Vite
- **Build Tool:** Vite (for blazing fast development and builds)
- **Routing:** React Router DOM
- **State Management:** React Query (TanStack Query) for server state, Context API for UI state
- **Forms:** React Hook Form with custom validation

**Styling & UI:**
- **CSS Framework:** TailwindCSS
- **UI Component Library:** DaisyUI
- **Icons:** React Icons
- **Animations:** Framer Motion / AutoAnimate

**Backend & Services:**
- **Authentication & Database:** Firebase (Auth, Firestore)
- **Payments:** Stripe (Elements, React Stripe.js)
- **Image Storage:** Firebase Storage
- **API Communication:** Axios

**Utilities & Libraries:**
- **Charts:** Recharts
- **Notifications:** React Hot Toast
- **Parallax Effects:** React Parallax
- **Carousels:** Swiper.js
- **SEO:** React Helmet Async

---

## 📦 Project Structure

```bash
src/
├── components/          # Reusable UI components (Button, Card, Modal)
│   ├── ui/
│   ├── forms/
│   └── layout/
├── pages/              # Top-level page components (Home, Dashboard, Services)
├── hooks/              # Custom React hooks (useAuth, useServices)
├── context/            # React Context providers (AuthContext, BookingContext)
├── services/           # API interaction logic (firebase.js, stripe.js)
├── utils/              # Helper functions (formatters, validators)
├── assets/             # Images, icons, and other static files
└── styles/             # Global and module-specific CSS files
```
---
## ⚡ Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/quick-grab-frontend.git

# Navigate into the project folder
cd quick-grab-frontend

# Install dependencies
npm install

# Run locally
npm run dev



