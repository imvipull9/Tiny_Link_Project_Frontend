<!-- -------------------------------------------------------------------- -->
<!-- LINKPRO README — Professionally Designed, ATS-Friendly, GitHub Perfect -->
<!-- -------------------------------------------------------------------- -->

<h1 align="center">🚀 <strong>LINKPRO</strong>  
<br>  
<sub><strong>Scalable URL Management System with Real-Time Analytics</strong></sub>
</h1>

<p align="center">
A cloud-ready platform to shorten URLs, generate QR codes, and track live analytics — built using <strong>React, Node.js, Express, and PostgreSQL</strong>.
</p>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/React-v18-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Node.js-v18-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Express.js-Framework-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/PostgreSQL-NeonDB-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Deployed-Vercel_&_Render-black?style=for-the-badge">
</p>

---

<br>

# 🌐 **LIVE DEMO**

### 👉 Frontend  
**https://linkpro-nine.vercel.app**

### 👉 Backend API  
**https://tasklink-project1.onrender.com**

### 👉 Repositories  
- **Frontend Repo:** https://github.com/imvipull9/Tiny_Link_Project_Frontend 
- **Backend Repo:** https://github.com/imvipull9/Tiny_Link_Project 

---

<br>

# ✨ **FEATURES**
╔══════════════════════════════════════════════════════════════╗
║ ⚡ MODERN, CLEAN & POWERFUL LINK MANAGEMENT SYSTEM ║
╚══════════════════════════════════════════════════════════════╝

### 🔗 **URL Shortening**
- Auto-generated or custom short IDs  
- Secure redirect logic  
- Backend validation  

### 📊 **Real-Time Analytics**
- Total clicks  
- Latest created link  
- Top-performing short links  
- Dashboard auto updates  

### 🎨 **Modern UI (Material UI)**
- Smooth animations  
- Fully responsive  
- Clean card-based layout  

### 🌓 **Dark / Light Theme**
- Persistent theme storage  
- Professional color palette  

### 📸 **QR Code Generator**
- Instant QR rendering  
- Scan-ready format  

### 🗑 **Link Management Tools**
- Delete links  
- Copy short URLs  
- View original URL  

---

<br>

# 🧩 **TECH STACK**

### 🎨 **Frontend**
- React.js (CRA)  
- React Router  
- Axios  
- Material UI (MUI)  
- Recharts  
- qrcode.react  

### ⚙️ **Backend**
- Node.js  
- Express.js  
- PostgreSQL (Neon)  
- CORS, validation, routing  

### ☁️ **Deployment**
- **Frontend → Vercel**  
- **Backend → Render**  
- **Database → Neon PostgreSQL**  

---

<br>
🧪 LOCAL SETUP — FRONTEND
1️⃣ Clone the Repository
git clone https://github.com/imvipull9/Tiny_Link_Project_Frontend
cd Tiny_Link_Project_Frontend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file:

REACT_APP_API_URL=http://localhost:5000

4️⃣ Run the Project
npm start

<br>

📡 API ENDPOINTS USED
✔ Get all links
GET /api/links

✔ Create a short link
POST /api/links


Body Example

{
  "original_url": "https://example.com",
  "short_id": "customCode"
}

✔ Delete a link
DELETE /api/links/:short_id

✔ Redirect short link
GET /:short_id

<br>

💡 WHY I BUILT THIS PROJECT

This project demonstrates strong capabilities in:

Full-stack engineering

REST API architecture

Cloud deployment (Render + Vercel)

Scalable backend systems

Modern UI/UX with React & MUI

Real-time analytics and data handling

Production-ready project structuring

It reflects complete ownership over frontend, backend, database, and cloud hosting — showcasing professional and job-ready development skills.

<br>
<br>
🙌 AUTHOR

Vipul Saini
Full-Stack Developer

📧 Email: sainivipul1827@gmail.com

🌐 Portfolio: https://vipulportfolio-website-99.vercel.app
