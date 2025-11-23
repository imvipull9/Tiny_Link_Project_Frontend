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

🏗 PROJECT ARCHITECTURE
```text
LinkPro
│
├── Frontend (React + MUI)
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── utils
│   └── public / src
│
├── Backend (Node + Express)
│   ├── routes
│   ├── controllers
│   ├── database
│   └── server.js
│
└── PostgreSQL (Neon)
```
<br>

<br>
⚙️ ENVIRONMENT VARIABLES (Frontend)

Create a .env file:

REACT_APP_API_URL=https://tasklink-project1.onrender.com

<br><br>
🧪 LOCAL SETUP — FRONTEND <br><br>
1️⃣ Clone the repo <br>
git clone https://github.com/imvipull9/Tiny_Link_Project_Frontend  <br>
cd Tiny_Link_Project_Frontend

2️⃣ Install dependencies 
npm install

3️⃣ Setup local environment
REACT_APP_API_URL=http://localhost:5000

4️⃣ Start development server
npm start

<br><br>
📡 API ENDPOINTS USED
✔ Get all links
GET /api/links

✔ Create a short link
POST /api/links


Body:
{
  "original_url": "https://example.com",
  "short_id": "customCode"
}

✔ Delete a link
DELETE /api/links/:short_id

✔ Redirect short link
GET /:short_id

<br><br>
💡 WHY I BUILT THIS PROJECT
```text

This project demonstrates practical experience in:

Full-stack development

REST API architecture

Cloud deployment (Vercel + Render)

Scalable backend development

PostgreSQL database design

Real-time analytics

Modern UI/UX engineering

It reflects complete, production-grade ownership of:
Frontend + Backend + Database + Hosting.

```

<br><br>
🙌 AUTHOR

Vipul Saini
Full-Stack Developer

📧 Email: sainivipul1827@gmail.com

🌐 Portfolio: https://vipulportfolio-website-99.vercel.app
