# 🚀 LinkPro – Smart URL Shortener & Analytics Dashboard

LinkPro is a full-stack URL Shortening and Analytics platform built using **React**, **Node.js**, and **PostgreSQL (NeonDB)**.  
It allows users to generate short URLs, track clicks, view analytics, manage links, and generate QR codes — all inside a modern, responsive dashboard UI.

Frontend is deployed on **Vercel**, and backend on **Render**, with cloud PostgreSQL support and production-grade CORS setup.

---

## ⭐ Features

### 🔗 URL Shortening
- Shorten long/dynamic URLs instantly  
- Create **custom short IDs** (e.g., `/vipul2799`)  
- Automatic ID generator if none is provided  

### 📊 Analytics & Insights
- Track total clicks  
- View top-performing links  
- Get latest created links  
- Click-per-link analytics  
- Beautiful charts using **Recharts**  

### 🧾 Link Management Dashboard
- Modern UI built with **Material UI (MUI)**  
- Create URL  
- Delete URL  
- Copy short link  
- View click stats  
- Open short URL  

### 🧾 QR Code Support
- Instant QR code generation for all links  
- Downloadable QR code popup  

### ☁ Deployment & DevOps
- Frontend deployed to **Vercel**  
- Backend deployed to **Render**  
- PostgreSQL hosted on **NeonDB**  
- Environment variables for security  
- CORS restricted only to frontend origin  

---

## 🏗 Tech Stack

### **Frontend**
- React (CRA)
- Material UI (MUI)
- Axios
- Recharts
- qrcode.react

### **Backend**
- Node.js + Express.js
- PostgreSQL (NeonDB)
- pg (node-postgres)
- CORS
- dotenv

### **Deployment**
- Vercel (Frontend)
- Render (Backend)
- NeonDB (PostgreSQL Cloud)

---

## 📦 Project Architecture

