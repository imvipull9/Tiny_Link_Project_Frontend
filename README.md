🌐 LINKPRO — Scalable URL Management System with Real-Time Analytics

LinkPro is a cloud-ready, full-stack URL management platform that allows users to create short links, generate QR codes, and monitor link performance through real-time analytics.
Featuring a modern dashboard, responsive UI, and dark/light themes, LinkPro delivers a seamless link-management experience powered by a Node.js backend and PostgreSQL database.

<br>
🚀 LIVE DEMO

🔗 https://linkpro-nine.vercel.app

<br>
🔌 BACKEND API (Render)

🟣 https://tasklink-project1.onrender.com

<br>
📦 REPOSITORIES
Frontend Repo:

https://github.com/imvipull9/LinkPro-Frontend

Backend Repo:

https://github.com/imvipull9/LinkPro-Backend

<br>
✨ FEATURES
🔗 URL Shortening

Auto-generated or custom short codes

Secure redirection logic

Error handling for invalid URLs

📊 Real-Time Analytics

Total clicks

Recent links

Top-performing links

Live refresh

📱 Modern Dashboard

Material UI components

Smooth animations

Fully responsive layout

🎨 Dark / Light Mode

Persistent theme switching

Accessible color design

📸 QR Code Generator

Generate QR for every short link

Easy share & scan support

🗑 Link Management

Delete links

Copy link to clipboard

View full target URL

<br>
🧩 TECH STACK
🎨 Frontend

React.js (CRA)

React Router

Material UI (MUI)

Axios

Recharts

qrcode.react

⚙️ Backend

Node.js

Express.js

PostgreSQL (Neon)

CORS, validation, routing

☁️ Deployment

Frontend: Vercel

Backend: Render

Database: Neon PostgreSQL

<br>
🏗 PROJECT ARCHITECTURE
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

<br>
⚙️ ENVIRONMENT VARIABLES (FRONTEND)

Create a .env file:

REACT_APP_API_URL=https://tasklink-project1.onrender.com

<br>
🧪 LOCAL SETUP — FRONTEND
1️⃣ Clone the repository
git clone https://github.com/imvipull9/LinkPro-Frontend
cd LinkPro-Frontend

2️⃣ Install dependencies
npm install

3️⃣ Create .env
REACT_APP_API_URL=http://localhost:5000

4️⃣ Run the project
npm start

<br>
📡 API ENDPOINTS USED
✔ Fetch all links
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

✔ Redirect a link
GET /:short_id

<br>
💡 WHY I BUILT THIS PROJECT

To develop a production-ready, scalable, cloud-deployed system demonstrating mastery in full-stack development, API design, database integration, modern UI/UX, and real-time analytics.

<br>
🙌 AUTHOR
Vipul Saini — Full-Stack Developer

📧 Email: sainivipul1827@gmail.com

🌐 Portfolio: https://vipulportfolio-website-99.vercel.app/
