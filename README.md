# Foodie. - Dynamic Food Ordering Website (MERN Stack)

This repository hosts the source code for Foodie, a dynamic food ordering platform built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It offers an intuitive, fast, and secure online food ordering experience for users, along with an admin panel for managing products and orders.

---

## 🌐 Live Demo

- **Frontend (User Panel)**: https://foodie-p667.onrender.com/
- **Admin Panel**: https://foodie-admin-arrr.onrender.com

---

## ✨ Features

### 👥 User Panel
- JWT Authentication
- Login/Signup/Logout
- Add to Cart & Place Orders
- Stripe Payment Integration
- View Order History

### 🛠️ Admin Panel
- Secure Login
- Manage Products
- Manage Orders
- Role-Based Access

### 🔐 Backend/API
- RESTful APIs
- Bcrypt Password Hashing
- Role-Based Identification
- Authenticated Endpoints

---

JWT_SECRET=YOUR_SECRET_TEXT
SALT=YOUR_SALT_VALUE
MONGO_URL=YOUR_DATABASE_URL
STRIPE_SECRET_KEY=YOUR_KEY


# Start backend
cd backend
nodemon server.js

# Start frontend
cd ../frontend
npm start

# Start admin panel
cd ../admin
npm start

